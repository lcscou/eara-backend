const { RichText, InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl } = wp.components;

const { __ } = wp.i18n;

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { content, textColor, alignment, showBorder } = attributes;

    function onChangeContent(newContent) {
        setAttributes({ content: newContent });
    }

    function onChangeTextColor(newColor) {
        setAttributes({ textColor: newColor });
    }

    function onChangeAlignment(newAlignment) {
        setAttributes({ alignment: newAlignment });
    }

    function onChangeShowBorder(newValue) {
        setAttributes({ showBorder: newValue });
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Configurações do Bloco', 'eara')}>
                    <SelectControl
                        label={__('Alinhamento', 'eara')}
                        value={alignment}
                        options={[
                            { label: __('Esquerda', 'eara'), value: 'left' },
                            { label: __('Centro', 'eara'), value: 'center' },
                            { label: __('Direita', 'eara'), value: 'right' }
                        ]}
                        onChange={onChangeAlignment}
                    />
                    
                    <ToggleControl
                        label={__('Mostrar borda', 'eara')}
                        checked={showBorder}
                        onChange={onChangeShowBorder}
                    />

                    <div>
                        <p>{__('Cor do texto', 'eara')}</p>
                        <ColorPalette
                            value={textColor}
                            onChange={onChangeTextColor}
                        />
                    </div>
                </PanelBody>
            </InspectorControls>

            <div className={`meu-bloco-editor ${showBorder ? 'com-borda' : ''}`}
                 style={{ textAlign: alignment, color: textColor }}>
                <RichText
                    tagName="div"
                    className="meu-bloco-conteudo"
                    value={content}
                    onChange={onChangeContent}
                    placeholder={__('Digite seu texto aqui...', 'eara')}
                />
            </div>
        </>
    );
}