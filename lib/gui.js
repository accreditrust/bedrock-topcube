/*
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var TopCube = require('topcube');

var api = {};
module.exports = api;

// start GUI once bedrock is started
bedrock.events.on('bedrock.started', function() {
  TopCube({
    url: bedrock.config.server.baseUri,
    name: bedrock.config.brand.name,
    width: 1024,
    height: 768
  });
});
