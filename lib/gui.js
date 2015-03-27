/*
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var topcube = require('topcube');

// default config
require('./config');

var api = {};
module.exports = api;

// start GUI once bedrock is started
bedrock.events.on('bedrock.started', function() {
  // set default URL
  if(bedrock.config.topcube.url === null) {
    try {
      // if bedrock-server is available, default URL to its baseUri
      require('bedrock-server');
      bedrock.config.topcube.url = bedrock.config.server.baseUri;
    } catch(e) {
      bedrock.config.topcube.url = 'http://localhost:8080';
    }
  }

  topcube({
    url: bedrock.config.topcube.url,
    name: bedrock.config.topcube.name,
    width: bedrock.config.topcube.width,
    height: bedrock.config.topcube.height
  });
});
