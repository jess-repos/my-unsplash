import React, { useState, useEffect } from "react";

import "./Header.css";
import brand from "../../assets/my_unsplash_logo.svg";
import Button from "../ui/Button";
import SearchInput from "../ui/SearchInput";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import { useGallery } from "../../context/GalleryContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import SearchInputMin from "../ui/SearchInputMin";
import { isUri } from "valid-url";

export default function Header() {
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const { addImage, searchImage, getAllImages } = useGallery();
  const { height, width } = useWindowDimensions();
  const [errorMessage, setErrorMessage] = useState();

  const addPhotoHandler = (e) => {
    e.preventDefault();
    if (inputLabel.length > 0 && isUri(inputUrl)) {
      addImage(inputLabel, inputUrl);
      setInputUrl("");
      setInputLabel("");
      setIsAddPhotoOpen(false);
    } else {
      setErrorMessage("Label is empty or invalid URL");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputSearch.length > 0) {
        searchImage(inputSearch);
      } else {
        getAllImages();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [inputSearch]);

  useEffect(() => {
    console.log(height, width);
  }, [height, width]);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInputSearch(value);
  };

  const handleLabelChange = (e) => {
    setInputLabel(e.target.value);
  };

  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const buttonAdd = (
    <span className="button-with-icon">
      <i className="fas fa-plus-square"></i>
      {width > 654 && <span>Add a photo</span>}
    </span>
  );
  return (
    <div className="header">
      <div className="header-main">
        <img src={brand} alt="" />
        {width > 654 && (
          <SearchInput
            placeholder="Search by name"
            value={inputSearch}
            onChange={handleSearchChange}
          />
        )}
      </div>
      <div className="header-control">
        {width <= 654 && (
          <SearchInputMin
            placeholder="Search by name"
            value={inputSearch}
            onChange={handleSearchChange}
          />
        )}
        <Button onClick={() => setIsAddPhotoOpen(true)}>{buttonAdd}</Button>
      </div>
      <Modal show={isAddPhotoOpen} onHide={() => setIsAddPhotoOpen(false)}>
        <form onSubmit={addPhotoHandler}>
          <h3>Add a new photo</h3>
          {errorMessage && <div className="modal-error">{errorMessage}</div>}
          <Input
            label="Label"
            id="photoLabel"
            placeholder="Label for the photo"
            value={inputLabel}
            onChange={handleLabelChange}
          />
          <Input
            label="Photo URL"
            id="photoUrl   "
            placeholder="URL for the photo"
            value={inputUrl}
            onChange={handleUrlChange}
          />
          <div className="btn-control">
            <span onClick={() => setIsAddPhotoOpen(false)}>Cancel</span>
            <Button type="submit" onCLick={addPhotoHandler} variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
