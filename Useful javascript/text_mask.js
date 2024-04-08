// this will draw text on canvas with image mask 

const canvas = document.getElementById('canvas');
const container = document.querySelector('.container');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

function drawTextMask() {
   const img = new Image();
   img.src = 'assets/image-4.jpg';

   img.onload = () => {
      const imgHeight = 400 * (img.height / img.width);
      canvas.height = imgHeight;
      ctx.drawImage(img, 0, 0, 400, imgHeight);

      ctx.fillStyle = 'black';
      ctx.globalCompositeOperation = 'destination-in';
      ctx.lineWidth = 10;
      ctx.font = '700 80px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';

      ctx.fillText('Hello world', 100, canvas.height / 2, 300);
   };
}

drawTextMask();
