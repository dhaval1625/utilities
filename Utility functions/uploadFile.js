// this example shows how to handle only jpg files upload

function importFileUploadHandler(e) {
      const inputFile = e.target.files[0];
      const uploadURL = e.target.value;
      const uploadExtension = uploadURL.slice(uploadURL.lastIndexOf('.') + 1).toLowerCase();

      if (e.target.files && inputFile && uploadExtension === 'jpg') {
         console.log(inputFile);

         
         //for image do as follows:
         const newImage = new Image();
         newImage.src = URL.createObjectURL(inputFile);

         newImage.onload = (e) => {
            // do something
         }
      }
}