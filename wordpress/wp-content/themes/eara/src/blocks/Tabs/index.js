import Edit from "./edit";
import Save from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("eara/tabs", {
  edit: Edit,
  save: Save,
});
