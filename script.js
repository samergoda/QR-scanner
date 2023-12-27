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
  document.getElementById('result').textContent = content;
});

Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    // Find a camera by checking if it is not labeled as the front camera
    const backCamera = cameras.find(camera => !camera.name.toLowerCase().includes('front'));

    // If a back camera is found, start scanning with it; otherwise, use the first available camera
    scanner.start(backCamera || cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function(e) {
  console.error(e);
});
