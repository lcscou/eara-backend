import Edit from "./edit";
import Save from "./save";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType("eara/quote", {
  edit: Edit,
  save: Save,
});
