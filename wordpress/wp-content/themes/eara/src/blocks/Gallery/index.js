import Edit from "./edit";
import Save from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("eara/gallery", {
  edit: Edit,
  save: Save,
});
