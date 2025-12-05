import './editor.scss';
import { __ } from '@wordpress/i18n';
import { 
  InspectorControls, 
  useBlockProps, 
  RichText
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Warning } from '@wordpress/components';

export default function Edit(props) {
  const { attributes, setAttributes, clientId } = props;
  const { text } = attributes;

  // Check if this block is inside a List block
  const parentBlockId = useSelect(
    (select) => {
      const { getBlockParents, getBlockName } = select('core/block-editor');
      const parents = getBlockParents(clientId);
      
      // Find the first parent that is an 'eara/list' block
      for (const parentId of parents) {
        if (getBlockName(parentId) === 'eara/list') {
          return parentId;
        }
      }
      
      return null;
    },
    [clientId]
  );

  const blockProps = useBlockProps({
    className: 'wp-block-eara-list-item',
  });

  const showWarning = parentBlockId === null;

  return (
    <>
      {showWarning && (
        <Warning>
          {__('List Item must be placed inside a List block', 'eara')}
        </Warning>
      )}
      
      <li {...blockProps}>
        <InspectorControls>
          <PanelBody title={__('List Item Settings', 'eara')} initialOpen={true}>
            <p>{__('Edit the item text in the editor below.', 'eara')}</p>
          </PanelBody>
        </InspectorControls>

        <RichText
          tagName="span"
          value={text}
          onChange={(value) => setAttributes({ text: value })}
          placeholder={__('Add list item text...', 'eara')}
          allowedFormats={['core/bold', 'core/italic', 'core/link']}
        />
      </li>
    </>
  );
}
