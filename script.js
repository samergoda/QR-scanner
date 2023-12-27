let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function(content) {
  console.log('Scanned content: ' + content);
 
});

Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    
    let backCamera = cameras.find(function(camera) {
      return camera.name.toLowerCase().includes('back');
    });

    scanner.start(backCamera || cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function(e) {
  console.error(e);
  });
