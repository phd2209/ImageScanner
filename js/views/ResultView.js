app.views.ResultView = Backbone.View.extend({
    initialize: function () {
        this.template = app.templateLoader.get('resultView');
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }
});
