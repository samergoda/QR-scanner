<script type="text/javascript">
  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

  scanner.addListener('scan', function(content) {
    console.log('Scanned content: ' + content);
    // Do something with the scanned content
  });

  Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
      // Find the back camera, if available
      let backCamera = cameras.find(function(camera) {
        return camera.facing === 'environment';
      });

      // Start scanning with the back camera if found, otherwise use the first camera
      scanner.start(backCamera || cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function(e) {
    console.error(e);
  });
</script>
