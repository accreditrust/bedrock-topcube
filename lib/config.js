/*
 * Bedrock TopCube Module Configuration
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var config = require('bedrock').config;
var path = require('path');

config.topcube = {};
// the name of the application
config.topcube.name = 'Bedrock';
// the width of the window on start up
config.topcube.width = 1024;
// the height of the window on start up
config.topcube.height = 768;
// the url of the window on start up; null to use the default:
// if `bedrock-server` is installed, its base URI is the default,
// if not, "http://localhost:8080" is the default
config.topcube.url = null;
