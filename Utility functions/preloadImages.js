// This method is useful for preloading multiples images to be drawn on canvas for eg.

// Define a function to preload images
function preloadImages(imageArray) {
    const promises = imageArray.map((imgObj) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = imgObj.imgSrc;
            img.onload = () => resolve(img);
        });
    });

    return Promise.all(promises);
}

// Usage
preloadImages(exampleImagesArray)
    .then((images) => {
        images.forEach((img, idx) => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        });
    });