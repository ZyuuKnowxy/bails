"use strict";
const { DEFAULT_CONNECTION_CONFIG } = require('../Defaults/index.js');
const { makeCommunitiesSocket } = require('./communities.js');
// export the last socket layer
const makeWASocket = (config) => {
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    return makeCommunitiesSocket(newConfig);
};
module.exports = makeWASocket;
module.exports.default = makeWASocket;
Object.defineProperty(module.exports, '__esModule', { value: true });