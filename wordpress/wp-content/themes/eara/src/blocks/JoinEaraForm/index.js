const { registerBlockType } = wp.blocks;
import block from "./block.json";
const { __ } = wp.i18n;
import edit from "./edit";
import save from "./save";
import '@mantine/core/styles.css';
import './editor.scss';

registerBlockType(block.name, {
  title: __(block.title, "eara"),
  description: __(block.description, "eara"),
  category: block.category,
  icon: block.icon,
  keywords: block.keywords,
  attributes: block.attributes,
  editorStyle: block.editorStyle,
  style: block.style,

  edit,
  save,
});
