const { RichText, InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
const { __ } = wp.i18n;

import { Box, Button, MantineProvider } from "@mantine/core";
import { RingProgress, Text } from "@mantine/core";


export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { content, textColor, alignment, showBorder } = attributes;

  return (
    <MantineProvider>
      <InspectorControls>
        <PanelBody title={__("Configurações do Bloco", "eara")}>
          {/* Controls */}
        </PanelBody>
      </InspectorControls>

      <Box h={100} c="red" className="bg-red-800">Helo</Box>
    
    </MantineProvider>
  );
}
