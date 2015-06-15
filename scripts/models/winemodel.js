var Wine = Backbone.Model.extend({
  defaults: {
    title: '',
    year: '',
    region: '',
    variety: '',
    alcohol: '',
    price: ''
  }
});

var WineCollection = Backbone.Collection.extend({
  model: Wine,
  url: "products.json"
});

export default {Wine, WineCollection};
