import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        setImage(file)
        setImageURL(reader.result)
      };

      reader.readAsDataURL(file)
    }
  };

  return (
    <div>
      {image && <img src={imageURL} alt="img" style={{ width: '300px', height: '300px' }} />}
      <input type="file" accept="image/*" onChange={onImageChange} />
    </div>
  );
}

export default ImageUpload;

// Create a React component called ImageUpload that allows the user to select an image file from their device and displays the selected image above the input. Use state and the FileReader API to handle the selected image file and display it in your React app. Make sure to conditionally render the image only if an image has been selected.

// https://drive.google.com/file/d/1ens6Xqici2v38Jt8eKkpzW0Sb1mIMxbc/view?usp=sharing
