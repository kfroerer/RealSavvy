// Locomotive SiteBuilder core file. DO NOT MODIFY IT!!

import 'babel-polyfill';
import * as Client from 'locomotive-site-builder-rendering/lib/shared/client.js';
import definitions from './definitions';

export default {

  init: function() {
    window.SiteBuilder.theme = definitions;
    Client.render();
  }

}
