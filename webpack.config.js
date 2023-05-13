const path = require('path');

module.exports = {
    entry: [
        './src/diagram/Diagram.js',
        './src/diagram/Graph.js',
        './src/diagram/SimpleRenderer.js',
        './src/nifi/NifiTemplate.js',
        './src/nifi/NifiRenderer.js',
        './src/nifi/NifiTemplateController.js',
        './src/ui/TabPane.js',
        './src/index.js',
    ],
    output: {
        publicPath: "",
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(xml)$/i,
                include: path.resolve(__dirname, 'public/examples'),
                use: 'file-loader',
            },
        ],
    },
};