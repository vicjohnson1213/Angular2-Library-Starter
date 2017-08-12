module.exports = () => {
    return {
        entry: {
            main: './src/index.ts'
        },
        output: {
            path: './test',
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /(?:\.html|\.less)$/,
                    loader: 'raw-loader'
                }
            ]
        },
        devtool: 'inline-source-map'
    };
};
