#!/usr/bin/env node
require('babel-register');

if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|\/node_modules\/|\/client\/|~$|\.json|\.scss$)/i
    })) {
    return;
  }
}

require('../api/api');
