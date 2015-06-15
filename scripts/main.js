import WineView from './views/wineview';

import {WineCollection} from './models/winemodel';

(function(){
  'use strict';
  $(document).ready(function(){

    window.collection = new WineCollection();
    collection.fetch().then(function(){
      var wineView = new WineView({collection: collection});
      $('#app').html(wineView.el);
    });
  });
})();
