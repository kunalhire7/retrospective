const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme = require('./configuration/theme.json');

module.exports = function override(config, env) {
    // importing ant-design less
    config = injectBabelPlugin([ 'import', { libraryName: 'antd', style: true } ], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: theme,
    })(config, env);

    return config;
};
