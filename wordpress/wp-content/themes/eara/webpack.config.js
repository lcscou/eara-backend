const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Get all block entry points
 * Scans src/blocks directory and creates entry points for each block
 */
function getBlockEntries() {
    const blocksDir = path.resolve(process.cwd(), 'src', 'blocks');
    const entries = {};

    if (!fs.existsSync(blocksDir)) {
        return entries;
    }

    // Get all block directories
    const blockDirs = fs.readdirSync(blocksDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    blockDirs.forEach((blockName) => {
        const blockDir = path.join(blocksDir, blockName);
        const indexJsPath = path.join(blockDir, 'index.js');
        
        // Add JavaScript entry if index.js exists
        if (fs.existsSync(indexJsPath)) {
            entries[`blocks/${blockName}/index`] = indexJsPath;
        }

        // Add frontend JavaScript entry if frontend.js exists
        const frontendJsPath = path.join(blockDir, 'frontend.js');
        if (fs.existsSync(frontendJsPath)) {
            entries[`blocks/${blockName}/frontend`] = frontendJsPath;
        }

        // Add editor style entry if it exists
        const editorScssPath = path.join(blockDir, 'editor.scss');
        if (fs.existsSync(editorScssPath)) {
            entries[`blocks/${blockName}/editor`] = editorScssPath;
        }

        // Add frontend style entry if it exists
        const stylesScssPath = path.join(blockDir, 'styles.scss');
        if (fs.existsSync(stylesScssPath)) {
            entries[`blocks/${blockName}/style`] = stylesScssPath;
        }
    });

    return entries;
}

/**
 * Get copy patterns for block.json files and static assets
 * Copies all block.json files and images from src to build directory
 */
function getBlockJsonCopyPatterns() {
    const blocksDir = path.resolve(process.cwd(), 'src', 'blocks');
    const patterns = [];

    if (!fs.existsSync(blocksDir)) {
        return patterns;
    }

    const blockDirs = fs.readdirSync(blocksDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    blockDirs.forEach((blockName) => {
        const blockJsonPath = path.join(blocksDir, blockName, 'block.json');
        
        if (fs.existsSync(blockJsonPath)) {
            patterns.push({
                from: blockJsonPath,
                to: path.resolve(process.cwd(), 'build', 'blocks', blockName, 'block.json'),
            });
        }

        // Copy image files (png, jpg, jpeg, gif, svg)
        const blockDir = path.join(blocksDir, blockName);
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
        
        if (fs.existsSync(blockDir)) {
            fs.readdirSync(blockDir).forEach((file) => {
                const ext = path.extname(file).toLowerCase();
                if (imageExtensions.includes(ext)) {
                    patterns.push({
                        from: path.join(blockDir, file),
                        to: path.resolve(process.cwd(), 'build', 'blocks', blockName, file),
                    });
                }
            });
        }
    });

    return patterns;
}

module.exports = {
    ...defaultConfig,
    entry: {
        // Main entries
        index: path.resolve(process.cwd(), 'src', 'index.js'),
        editor: path.resolve(process.cwd(), 'src', 'editor.css'),
        // Block entries
        ...getBlockEntries(),
    },
    plugins: [
        ...defaultConfig.plugins,
        new CopyWebpackPlugin({
            patterns: getBlockJsonCopyPatterns(),
        }),
    ],
};
