import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddEvents = () => {
  // React form hook
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  console.log(imageURL);

  // Add product to database
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };
    const url = "https://hidden-forest-76924.herokuapp.com/addEvent";
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  // Image upload to imgbb
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "ff505c5a3f875cb580af60d093f207fe");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1> Product Store</h1>
      {/* Add Product */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          name="name"
          placeholder="Product Name"
          ref={register}
        />
        <br />
        <input
          className="form-control"
          name="price"
          defaultValue="Price"
          ref={register}
        />{" "}
        <br />
        <input
          name="exampleRequired"
          className="form-control"
          type="file"
          onChange={handleImageUpload}
        />
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddEvents;
