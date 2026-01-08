import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  useBlockProps,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  Button,
} from '@wordpress/components';
import { ColorPicker } from '@wordpress/components';

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { backgroundColor, image, orientation } = attributes;

  const blockProps = useBlockProps({
    className: `wp-block-eara-section-card orientation-${orientation}`,
    style: {
      backgroundColor: backgroundColor || '#f5f6fb',
    },
  });

  const orientationOptions = [
    { label: __('Image Left', 'eara'), value: 'left' },
    { label: __('Image Right', 'eara'), value: 'right' },
  ];

  const onSelectImage = (media) => {
    setAttributes({
      image: {
        url: media.url,
        id: media.id,
        alt: media.alt || '',
      },
    });
  };

  const removeImage = () => {
    setAttributes({
      image: {
        url: '',
        id: 0,
        alt: '',
      },
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Section Card Settings', 'eara')} initialOpen={true}>
          <SelectControl
            label={__('Orientation', 'eara')}
            value={orientation}
            options={orientationOptions}
            onChange={(value) => setAttributes({ orientation: value })}
            help={__('Position of the image', 'eara')}
          />

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
              {__('Background Color', 'eara')}
            </label>
            <ColorPicker
              color={backgroundColor}
              onChangeComplete={(color) => setAttributes({ backgroundColor: color.hex })}
            />
          </div>

          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={['image']}
              value={image.id}
              render={({ open }) => (
                <div style={{ marginBottom: '16px' }}>
                  <Button onClick={open} variant="secondary">
                    {image.url ? __('Replace Image', 'eara') : __('Select Image', 'eara')}
                  </Button>
                  {image.url && (
                    <Button onClick={removeImage} variant="tertiary" isDestructive>
                      {__('Remove Image', 'eara')}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="section-card-inner">
          <div className="section-card-media">
            {image.url ? (
              <img src={image.url} alt={image.alt} style={{ width: '100%', borderRadius: '12px' }} />
            ) : (
              <div className="section-card-placeholder">
                <p>{__('Select an image', 'eara')}</p>
              </div>
            )}
          </div>

          <div className="section-card-content">
            <InnerBlocks
              allowedBlocks={[
                'core/heading',
                'core/paragraph',
                'core/list',
                'core/image',
                'core/quote',
                'eara/button',
                'core/buttons',
                'core/button',
              ]}
              template={[
                ['core/heading', { level: 2, placeholder: __('Add a title...', 'eara') }],
                ['core/paragraph', { placeholder: __('Add your content here...', 'eara') }],
              ]}
              templateLock={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
