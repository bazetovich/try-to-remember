module.exports =  function(isProd) {
    return {
        entry: './scripts/app.js',
        output: {
            filename: 'app.js'
        },

        watch: !isProd,
        watchOptions: {
            aggregateTimeout: 100
        },

        devtool: isProd ? false : 'source-map',

        resolve: {
            modules: ['node_modules'],
            extensions: ['.js']
        },
        resolveLoader: {
            modules: ['node_modules'],
            moduleExtensions: [ '-loader' ],
            extensions: ['.js']
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            }]
        }
    };
};
