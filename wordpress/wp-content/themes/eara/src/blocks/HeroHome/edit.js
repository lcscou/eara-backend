const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { PanelBody, Notice, ToggleControl, RangeControl, ColorPicker } = wp.components;
const { __ } = wp.i18n;
const { useEffect, useMemo, useState } = wp.element;

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { backgroundImage, innerContainer, overlayColor, overlayOpacity } = attributes;

  const blockProps = useBlockProps();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  // Fetch daily metadata from WPGraphQL (admin/editor)
  useEffect(() => {
    let alive = true;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const base = (window && window.wpApiSettings && typeof window.wpApiSettings.root === 'string')
          ? window.wpApiSettings.root.replace(/\/wp\-json\/?$/, '')
          : (window && window.location && window.location.origin ? window.location.origin : '');
        const endpoint = base ? base + '/graphql' : '/graphql';
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `query HeroHomeMeta { heroHomeOfTheDay { id slug title credits creditWebsite creditsMoreInfo featuredImageUrl } }`
          })
        });
        if (!res.ok) {
          throw new Error(`GraphQL request failed (${res.status})`);
        }
        let out;
        try {
          out = await res.json();
        } catch (e) {
          throw new Error('Invalid GraphQL JSON response');
        }
        if (!alive) return;
        if (out.errors) {
          throw new Error(out.errors?.[0]?.message || 'GraphQL error');
        }
        setMeta(out.data?.heroHomeOfTheDay || null);
      } catch (e) {
        setError(e?.message || 'Failed to load metadata');
      } finally {
        if (alive) setLoading(false);
      }
    }
    run();
    return () => { alive = false; };
  }, []);

  const previewBg = useMemo(() => {
    if (backgroundImage?.url) return backgroundImage.url;
    if (meta?.featuredImageUrl) return meta.featuredImageUrl;
    return '';
  }, [backgroundImage, meta]);



  const wrapperStyle = {
    backgroundImage: previewBg ? `url(${previewBg})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__('Configuração', 'eara')} initialOpen={true}>
          <ToggleControl
            label={__('Usar container interno', 'eara')}
            checked={innerContainer}
            onChange={(v) => setAttributes({ innerContainer: !!v })}
          />
        </PanelBody>
        <PanelBody title={__('Overlay', 'eara')} initialOpen={true}>
          <RangeControl
            label={__('Transparência do overlay', 'eara')}
            value={overlayOpacity}
            onChange={(v) => setAttributes({ overlayOpacity: v })}
            min={0}
            max={100}
            help={__('0 = transparente, 100 = opaco', 'eara')}
          />
          {overlayOpacity > 0 && (
            <div>
              <p>{__('Cor do overlay', 'eara')}</p>
              <ColorPicker
                color={overlayColor}
                onChangeComplete={(color) => setAttributes({ overlayColor: color.hex })}
              />
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Today's Featured Media Bank", 'eara')} initialOpen={false}>
          {loading && <Notice status="info" isDismissible={false}>{__('Carregando destaque do dia…', 'eara')}</Notice>}
          {error && <Notice status="error" isDismissible={false}>{error}</Notice>}
          {meta && (
            <div>
              <p><strong>{__('Título:', 'eara')}</strong> {meta.title}</p>
              <p><strong>{__('Slug:', 'eara')}</strong> {meta.slug}</p>
              {meta.credits && <p><strong>{__('Créditos:', 'eara')}</strong> {meta.credits}</p>}
              {meta.creditWebsite && <p><strong>{__('Créditos site:', 'eara')}</strong> {meta.creditWebsite}</p>}
              {meta.creditsMoreInfo && <p><strong>{__('Mais info:', 'eara')}</strong> {meta.creditsMoreInfo}</p>}
            </div>
          )}
        </PanelBody>
      </InspectorControls>

      <div className="eara-hero-home" style={wrapperStyle}>
        <div className="eara-hero-home__ratio">
          {overlayOpacity > 0 && (
            <div
              className="eara-hero-home__overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: overlayColor,
                opacity: overlayOpacity / 100,
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
          )}
          <div className={innerContainer ? 'eara-hero-home__container' : undefined} style={{ position: 'relative', zIndex: 2 }}>
            <InnerBlocks />
          </div>
        </div>
        
      </div>
    </div>
  );
}
 
