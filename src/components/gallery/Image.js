import React, { useState } from "react";
import { useGallery } from "../../context/GalleryContext";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Input from "../ui/Input";

import "./Image.css";

export default function Image({ image }) {
  const { deleteImage } = useGallery();
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const deleteHandler = () => {
    // console.log(image);
    deleteImage(image._id, inputPassword);
    setInputPassword("");
    setisDeleteModalOpen(false);
  };
  return (
    <div className="image">
      <Button
        variant="secondary"
        className="image-control"
        onClick={() => setisDeleteModalOpen(true)}
      >
        delete
      </Button>
      <img src={image.url} alt="" />
      <p>{image.label}</p>
      <Modal
        show={isDeleteModalOpen}
        onHide={() => setisDeleteModalOpen(false)}
      >
        <h3>Are you sure?</h3>
        <form onSubmit={deleteHandler}>
          <Input
            type="password"
            label="Password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <div className="btn-control">
            <span onClick={() => setisDeleteModalOpen(false)}>Cancel</span>
            <Button type="submit" variant="secondary" onCLick={deleteHandler}>
              Delete
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
