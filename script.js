//  // Create a new instance of the Instascan scanner
//     let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  
//     // Add a listener for the 'scan' event, triggered when a QR code is successfully scanned
//     scanner.addListener('scan', function(content) {
//       console.log('Scanned content: ' + content);
//       // Do something with the scanned content, e.g., display it on the page
//       document.getElementById('result').textContent = content;
//     });
  
//     // Get the available cameras and start scanning with the first camera
//     Instascan.Camera.getCameras().then(function(cameras) {
//       if (cameras.length > 0) {
//         scanner.start(cameras[0]);
//       } else {
//         console.error('No cameras found.');
        
//       }
//     }).catch(function(e) {
//       console.error(e);
//     });








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