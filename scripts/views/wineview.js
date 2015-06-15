export default Backbone.View.extend({
  template: JST.wine,

  events: {
    'click .add-compare-button': 'compareWines'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  compareWines: function(e) {
    //
  },
});
