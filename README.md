# bedrock-topcube

A [bedrock][] module that provides a native window for a bedrock Web
application. It uses [topcube][] to provide a GTK-based window with an
embedded WebKit browser to display the application UI.

Please see [topcube][] for installation instructions regarding any native
library dependencies.

## Quick Examples

```
npm install bedrock-topcube
```

Create a simple [bedrock][] Web application with a native application window:

```js
var bedrock = require('bedrock');

require('bedrock-server');
require('bedrock-topcube');
require('bedrock-express');

// default configuration
config.topcube.name = 'Bedrock';
config.topcube.width = 1024;
config.topcube.height = 768;

bedrock.events.on('bedrock-express.configure.routes', function(app) {
  app.get('/', function(req, res) {
    res.send('Hello World!');
  });
});

bedrock.start();
```

## Configuration

For more documentation on configuration, see [config.js](https://github.com/digitalbazaar/bedrock-topcube/blob/master/lib/config.js).

## Setup

1. Install

[bedrock]: https://github.com/digitalbazaar/bedrock
[topcube]: https://github.com/creationix/topcube
