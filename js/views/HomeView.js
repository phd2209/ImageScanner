app.views.HomeView = Backbone.View.extend({
    initialize: function () {
        this.template = app.templateLoader.get('homeView');
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }
});
