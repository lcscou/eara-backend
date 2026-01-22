import { useEffect, useState } from "react";
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl, SelectControl, __experimentalDivider: Divider } = wp.components;
const { __ } = wp.i18n;

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { mediaId, mediaTitle, imageUrl, imageAlt, width, height, credits, creditWebsite, creditsMoreInfo } = attributes;

  const blockProps = useBlockProps({ className: "wp-block-eara-media-bank" });

  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGraphQLEndpoint = async () => {
    const endpoints = ["/graphql", "/wp/graphql"];
    for (const ep of endpoints) {
      try {
        const resp = await fetch(ep, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: '{ __typename }' })
        });
        if (resp.ok) return ep;
      } catch (e) {
        // continue
      }
    }
    return null;
  };

  useEffect(() => {
    let alive = true;
    const run = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/wp-json/wp/v2/media-bank?per_page=20&orderby=date&order=desc&search=${encodeURIComponent(search)}`);
        const data = await res.json();
        if (!alive) return;
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("MediaBank: error fetching posts", e);
        if (!alive) return;
        setItems([]);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    };
    run();
    return () => { alive = false; };
  }, [search]);

  const handleSelect = async (id) => {
    if (!id) return;
    const selected = items.find((p) => p.id === id);
    setAttributes({ mediaId: id, mediaTitle: selected?.title?.rendered || "" });

    // Try fetching details via WPGraphQL (preferred for ACF fields)
    try {
      const query = `query MediaBank($id: ID!) {\n        mediaBank(id: $id, idType: DATABASE_ID) {\n          title\n          cfMediaBank {\n            image {\n              node {\n                id\n                sourceUrl\n                guid\n                altText\n                caption\n                mediaDetails { width height }\n              }\n            }\n            credits\n            creditWebsite\n            creditsMoreInfo\n          }\n        }\n      }`;
      const endpoint = await getGraphQLEndpoint();
      let json = null;
      if (endpoint) {
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, variables: { id } })
        });
        json = await resp.json();
      }
      const cf = json?.data?.mediaBank?.cfMediaBank;
      const img = cf?.image?.node;
      if (cf) {
        const src = img?.sourceUrl || img?.guid || "";
        const alt = img?.altText || selected?.title?.rendered || "";
        setAttributes({
          imageUrl: src,
          imageAlt: alt,
          credits: cf?.credits || "",
          creditWebsite: cf?.creditWebsite || "",
          creditsMoreInfo: cf?.creditsMoreInfo || ""
        });
        return;
      }
    } catch (e) {
      console.warn("MediaBank: GraphQL not available, falling back to REST", e);
    }

    // Fallback to REST (requires ACF to REST API plugin)
    try {
      const res = await fetch(`/wp-json/wp/v2/media-bank/${id}`);
      const item = await res.json();
      const acf = item?.acf || {};
      const img = acf?.image || item?.image;
      setAttributes({
        imageUrl: img?.url || "",
        imageAlt: img?.alt || selected?.title?.rendered || "",
        credits: acf?.credits || "",
        creditWebsite: acf?.credit_website || "",
        creditsMoreInfo: acf?.credits_more_info || ""
      });
    } catch (e) {
      console.error("MediaBank: error fetching REST details", e);
    }
  };

  const imageStyle = {
    width: width === 'auto' ? 'auto' : width || 'auto',
    height: height === 'auto' ? 'auto' : height || 'auto',
    maxWidth: '100%',
    display: 'block'
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Media Selection", "eara")} initialOpen={true}>
          <TextControl
            label={__("Search Media Bank", "eara")}
            value={search}
            onChange={(v) => setSearch(v)}
            placeholder={__("Type to search…", "eara")}
            help={__("Search by title", "eara")}
          />
          <SelectControl
            label={loading ? __("Loading…", "eara") : __("Choose an item", "eara")}
            value={mediaId || 0}
            options={[{ label: __("— Select —", "eara"), value: 0 }, ...items.map((p) => ({ label: p?.title?.rendered || `#${p.id}`, value: p.id }))]}
            onChange={(val) => handleSelect(parseInt(val))}
          />
          <Divider />
        </PanelBody>

        <PanelBody title={__("Dimensions", "eara")} initialOpen={false}>
          <TextControl
            label={__("Width", "eara")}
            value={width}
            onChange={(v) => setAttributes({ width: v })}
            placeholder="auto"
            help={__("Use CSS units (e.g., 100%, 600px). 'auto' by default.", "eara")}
          />
          <TextControl
            label={__("Height", "eara")}
            value={height}
            onChange={(v) => setAttributes({ height: v })}
            placeholder="auto"
            help={__("Use CSS units (e.g., 400px). 'auto' keeps aspect ratio.", "eara")}
          />
        </PanelBody>
      </InspectorControls>

      <div className="eara-media-bank__preview">
        {imageUrl ? (
          <figure>
            <img src={imageUrl} alt={imageAlt || mediaTitle || ''} style={imageStyle} />
            {(credits || creditWebsite || creditsMoreInfo) && (
              <figcaption style={{ fontSize: '12px', color: '#666', marginTop: '6px' }}>
                {credits && <span>{credits}</span>}
                {creditWebsite && (
                  <span>
                    {credits ? ' • ' : ''}
                    <a href={creditWebsite} target="_blank" rel="noopener noreferrer">Website</a>
                  </span>
                )}
                {creditsMoreInfo && (
                  <span>
                    {(credits || creditWebsite) ? ' • ' : ''}
                    <a href={creditsMoreInfo} target="_blank" rel="noopener noreferrer">More Info</a>
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        ) : (
          <div style={{ padding: '12px', border: '1px dashed #ccc', borderRadius: '8px', color: '#777' }}>
            {__("Select an item from Media Bank to preview the image and credits.", "eara")}
          </div>
        )}
      </div>
    </div>
  );
}
