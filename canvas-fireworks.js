// canvas-fireworks.js

(() => {
    // gets a reference to the HTML <canvas> element
    const canvas = document.getElementById('canvas-fireworks');
  
    // get the rendering context for the canvas
    const context = canvas.getContext('2d');
  
    // get document's width and height
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    // set background to be fullscreen
    canvas.width = width;
    canvas.height = height;
  
    const positions = {
      mouseX: 0,
      mouseY: 0,
      anchorX: 0,
      anchorY: 0,
    };

    const drawAnchor = () => {
        // get the position for the anchor on the canvas
        positions.anchorX = width / 2;
        positions.anchorY = height * 0.9;
        
        context.clearRect(0, 0, width, height);
        
        // save context to remove transformation afterwards
        context.save();
        
        context.translate(positions.anchorX, positions.anchorY);
            
        // restores the empty context state
        context.restore();
      };

      // listen to the mousemove event and
    const attachEventListeners = () => {
        canvas.addEventListener('mousemove', (e) => {
        // set the mouse positions to the correct coordinates
        positions.mouseX = e.pageX;
        positions.mouseY = e.pageY;
        });
    };
    
    const loop = () => {
        requestAnimationFrame(loop); // call the loop function indefinitely and redraw the screen every frame
        drawAnchor();
    };
    
    window.addEventListener('load', () => {
        attachEventListeners();
        loop();
    });
  
  })();