import './styles.scss';
import Edit from './edit';
import Save from './save';

const block = {
  edit: Edit,
  save: Save,
};

wp.blocks.registerBlockType('eara/latest-events', block);
