<?php

/**
 * Complements core/table attributes parsed from its saved HTML.
 *
 * WPGraphQL Blocks receives only comment-delimited attributes from
 * parse_blocks(). The table block stores its caption and cells in markup.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Returns the HTML contained within a DOM node.
 *
 * @param DOMNode $node Node whose child markup will be returned.
 * @return string
 */
function eara_table_block_inner_html(DOMNode $node)
{
    $html = '';

    foreach ($node->childNodes as $child) {
        $html .= $node->ownerDocument->saveHTML($child);
    }

    return $html;
}

/**
 * Maps a table section to the attribute format used by core/table.
 *
 * @param DOMXPath $xpath Parsed table markup.
 * @param string    $section Table section name.
 * @return array<int, array<string, array<int, array<string, string>>>>
 */
function eara_table_block_rows(DOMXPath $xpath, $section)
{
    $rows = [];
    $row_nodes = $xpath->query(sprintf('//table/%s/tr', $section));

    foreach ($row_nodes as $row_node) {
        $cells = [];
        $cell_nodes = $xpath->query('./th|./td', $row_node);

        foreach ($cell_nodes as $cell_node) {
            if (!$cell_node instanceof DOMElement) {
                continue;
            }

            $cell = [
                'content' => eara_table_block_inner_html($cell_node),
                'tag' => strtolower($cell_node->nodeName),
            ];

            foreach (
                [
                    'scope' => 'scope',
                    'data-align' => 'align',
                    'colspan' => 'colspan',
                    'rowspan' => 'rowspan',
                ] as $attribute => $key
            ) {
                if ($cell_node->hasAttribute($attribute)) {
                    $cell[$key] = $cell_node->getAttribute($attribute);
                }
            }

            $cells[] = $cell;
        }

        $rows[] = ['cells' => $cells];
    }

    return $rows;
}

add_filter('wp_graphql_blocks_process_attributes', function ($attributes, $data) {
    if (($data['blockName'] ?? '') !== 'core/table') {
        return $attributes;
    }

    $attributes = is_array($attributes) ? $attributes : [];
    $block_type = WP_Block_Type_Registry::get_instance()->get_registered('core/table');

    if ($block_type) {
        foreach ($block_type->get_attributes() as $name => $definition) {
            if (!array_key_exists($name, $attributes) && array_key_exists('default', $definition)) {
                $attributes[$name] = $definition['default'];
            }
        }
    }

    if (!class_exists('DOMDocument') || empty($data['innerHTML'])) {
        return $attributes;
    }

    $dom = new DOMDocument();
    libxml_use_internal_errors(true);
    $dom->loadHTML('<html><body>' . $data['innerHTML'] . '</body></html>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
    libxml_clear_errors();
    $xpath = new DOMXPath($dom);

    foreach (['head', 'body', 'foot'] as $section) {
        $attributes[$section] = eara_table_block_rows($xpath, $section === 'head' ? 'thead' : ($section === 'body' ? 'tbody' : 'tfoot'));
    }

    $caption_node = $xpath->query('//figcaption')->item(0);
    if ($caption_node) {
        $attributes['caption'] = eara_table_block_inner_html($caption_node);
    }

    return $attributes;
}, 10, 2);
