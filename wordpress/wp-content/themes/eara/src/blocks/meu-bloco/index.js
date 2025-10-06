// blocks/meu-bloco/index.js


const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
// const { PanelBody, SelectControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;
import edit from "./edit";
import save from "./save";

registerBlockType("eara/meu-bloco", {
  title: __("Chart", "eara"),
  description: __("Um bloco personalizado de exemplo", "eara"),
  category: "eara",
  icon: "chart-pie",
  keywords: [__("personalizado", "eara"), __("exemplo", "eara")],
  attributes: {
    content: {
      type: "string",
      default: "Texto padrão do bloco",
    },
    textColor: {
      type: "string",
      default: "#000000",
    },
    alignment: {
      type: "string",
      default: "left",
    },
    showBorder: {
      type: "boolean",
      default: false,
    },
  },

  edit,
  save
});
