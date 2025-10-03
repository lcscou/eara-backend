const { RichText } = wp.blockEditor;

export default function Save(props) {
    const { attributes } = props;
    const { content, textColor, alignment, showBorder } = attributes;

    return (
        <div className={`meu-bloco ${showBorder ? 'com-borda' : ''}`}
             style={{ textAlign: alignment, color: textColor }}>
            <RichText.Content
                tagName="div"
                className="meu-bloco-conteudo"
                value={content}
            />
        </div>
    );
}