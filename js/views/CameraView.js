app.views.CameraView = Backbone.View.extend({
    initialize: function () {
        this.template = app.templateLoader.get('cameraView');
        this.pictureSource = navigator.camera.PictureSourceType;
        this.destinationType = navigator.camera.DestinationType;
    },

    events: {
        'click #capture': 'onCapture'
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    onCapture: function () {
        console.log("OnCapture Called");
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI
        });
    },

    analyzeImage: function(imageURI) {
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    },

    onSuccess: function (imageURI) {
        var image = document.getElementById('largeImage');
        image.style.display = 'block';
        image.src = imageURI;
        this.analyzeImage(imageURI).done(function () {
            app.router.navigate("results", { trigger: true });
            //app.spinner.stop(self.spinner_div);
        });
    },

    onFail: function (message) {
        alert("Failed because: " + message);
    }
});
