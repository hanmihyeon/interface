const darkTheme = require('@ant-design/dark-theme');

module.exports = {
    plugins: [
        {
            plugin: darkTheme,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: darkTheme,
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
