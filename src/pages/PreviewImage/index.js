import { useEffect, useState } from "react";

function PreviewImage() {
  const [image, setImage] = useState("");
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    // URL.createObjectURL để tạo một đường dẫn tạm thời url này sẽ dừng lại khi đóng tab
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl);
  };
  useEffect(() => {
    const inputElement = document.getElementById("fileInput");
    inputElement.addEventListener("change", handleImageChange);
    return () => {
      inputElement.removeEventListener("change", handleImageChange);
    };
  }, []);
  return (
    <div>
      <input id="fileInput" type="file" accept="image/*" />
      {image && <img src={image} alt="Preview" />}
    </div>
  );
}

export default PreviewImage;
