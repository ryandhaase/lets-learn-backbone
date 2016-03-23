var GarageView = Backbone.View.extend({
  tagName: 'table',
  template: _.template('<tr><td><%= make %></td></tr>'),

  initialize: function () {
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  events: {

  },

  render: function () {
    var node = this.$el.html('');

    var _this = this;
    this.collection.forEach(function (model) {
      node.append(_this.template(model.attributes));
    });

    $('body').append(node);
  },
});
