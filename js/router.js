app.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "camera": "camera",
        "result": "result"
    },

    initialize: function () {
        app.slider = new PageSlider($('#container'));

        var opts = {
            lines: 16, // The number of lines to draw
            length: 7, // The length of each line
            width: 4, // The line thickness
            radius: 10, // The radius of the inner circle
            color: '#000', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false // Whether to render a shadow
        };

        app.spinner = new Spinner(opts).spin();
        this.spinner_div = $('#container').get(0);
    },

    home: function () {
        console.log("home view");
        //this.statusbar("styleLight", "#282a30");
        var homeView = new app.views.HomeView();
        homeView.render();
        app.slider.slidePageFrom(homeView.$el, "page-left");
    },

    camera: function () {
        console.log("camera view");
        app.spinner.spin(this.spinner_div);
        //this.statusbar("styleDefault", "#FFF");
        var cameraView = new app.views.CameraView({});
        cameraView.render();
        app.slider.slidePageFrom(cameraView.$el, "page-right");
        app.spinner.stop(self.spinner_div);
    },

    results: function () {
        console.log("results view");
        //this.statusbar("styleDefault", "#FFF");
        var resultsView = new app.views.ResultsView({});
        resultsView.render();
        app.slider.slidePageFrom(resultsView.$el, "page-right");
    }
});