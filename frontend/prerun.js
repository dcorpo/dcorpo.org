const fs = require('fs');

const originalCfg = './node_modules/react-scripts/config/webpack.config.js';

const newConfig = './webpack.config.js';

const callback = (err) => {
    if (err) throw err;
}

fs.copyFile(newConfig, originalCfg, callback);