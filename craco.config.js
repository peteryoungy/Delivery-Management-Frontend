const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            // '@primary-color': '#1DA57A',
                            // '@primary-color': '#7ed957',
                            '@primary-color': '#0aad0a',
                            '@layout-header-background': '#000000',
                            '@layout-body-background': '#ffffff',
                            '@border-width-base': '2px',
                            '@border-radius-base': '5px',
                            '@layout-header-height': '80px',
                            '@btn-font-weight': '600'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};