app.views.CameraView = Backbone.View.extend({
    initialize: function () {
        this.template = app.templateLoader.get('cameraView');
        if (navigator.camera) {
            console.log("camera availeble");
            this.pictureSource = navigator.camera.PictureSourceType;
            this.destinationType = navigator.camera.DestinationType;
        }
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
        var self = this;
        if (navigator.camera) {
            navigator.camera.getPicture(self.onSuccess, self.onFail, {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI
            });
        }
    },

    analyzeImage: function(imageURI) {
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    },

    onSuccess: function (imageURI) {
        console.log("success");
        var image = document.getElementById('largeImage');
        image.style.display = 'block';
        image.src = imageURI;
        this.analyzeImage(imageURI).done(function () {            
            if (navigator.camera) {
                navigator.camera.cleanup(onSuccess, onFail);
                function onSuccess() {
                    console.log("Camera cleanup success.")
                }

                function onFail(message) {
                    alert('Failed because: ' + message);
                }
                app.router.navigate("results", { trigger: true });
            }
        });
    },

    onFail: function (message) {
        console.log(message);
        alert("Failed because: " + message);
    }
});
