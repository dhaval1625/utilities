html2canvasInfo.js

While using html2canvas if image is not loaded give following options: 

html2canvas(document.querySelector("#belt-container"),{useCORS: true}).then(canvas => {
    document.body.appendChild(canvas)
    console.log(canvas);
});