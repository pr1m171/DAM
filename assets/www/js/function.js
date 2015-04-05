(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

    function capturePhoto() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 100, correctOrientation: true });
    }
    function onFail(message) {
      alert('Fallo en la captura: ' + message);
    }
    function onPhotoDataSuccess(imageData) {
      //obtenemos el objeto foto
      var foto = document.getElementById('foto');
      //lo mostramos
      foto.style.display = 'block';
      //asignamos la imagen
      foto.src = imageData;
      //mostramos lo que nos ha enviado
      document.getElementById('fichero').innerHTML = imageData;
    }

var app = {

    onDeviceReady: function() {
        // onDeviceReady implementation
    },
    onDeviceSupported: function() {

        // setting callback functions that are called when the ARchitect World finished launching or failed.
        app.wikitudePlugin._onARchitectWorldLaunchedCallback = app.onARchitectWorldLaunched;
        app.wikitudePlugin._onARchitectWorldFailedLaunchingCallback = app.onARchitectWorldFailedLaunching;

        // setting up a callback to communicate from ARchitect into PhoneGap
        app.wikitudePlugin.setOnUrlInvokeCallback(app.onURLInvoked);

        // load an augmented reality experience
        app.wikitudePlugin.loadARchitectWorld("www/res/ARchitect/SimpleCircle.html"); // load an ARchitect World from the application bundle
    },
    onURLInvoked: function(url) {
        alert('Wikitude AR => PhoneGap ' + url);
    }
    // ... onDeviceNotSupported & onARchitectWorldLaunched & onARchitectWorldFailedLaunching implementation ...
};