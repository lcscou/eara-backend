export default function Save({ attributes }) {
  const { text } = attributes;

  return (
    <li>
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </li>
  );
}
