import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import edit from "./edit";
import save from "./save";
import "./editor.scss";
import "./styles.scss";

registerBlockType(metadata.name, {
  edit,
  save,
});
