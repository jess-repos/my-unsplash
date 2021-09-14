import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const API_BASE = "http://192.168.0.122:7000/api/unsplash";

const GalleryContext = createContext({
  images: [],
  deleteImage: () => {},
  addImage: () => {},
  searchImage: () => {},
  getAllImages: () => {},
});

export const useGallery = () => useContext(GalleryContext);

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllImages = async () => {
    try {
      const response = await axios.get(API_BASE);
      // console.log(response.data);
      if (!response.data.error) {
        setImages(response.data);
      }
      setIsLoading(false);
    } catch (err) {
      toast.error("Failed to fetch images.");
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const deleteImage = async (id, password) => {
    // console.log(id, password);
    try {
      const response = await axios.post(API_BASE + "/delete/", {
        _id: id,
        password: password,
      });
      if (!response.data.error) {
        const { _id } = response.data;
        setImages((prevState) => {
          return prevState.filter((image) => image._id !== _id);
        });
        toast("Image deleted successfully!");
      }
    } catch (err) {
      toast.error("Failed to delete image.");
    }
  };

  const addImage = async (label, url) => {
    try {
      const response = await axios.post(API_BASE + "/add", {
        label: label,
        url: url,
      });
      if (!response.data.error) {
        setImages((prevState) => {
          return [...prevState, response.data];
        });
        toast("Image uploaded successfully!");
      }
    } catch (err) {
      toast.error("Failed to upload image.");
    }
  };

  const searchImage = async (label) => {
    try {
      const response = await axios.post(API_BASE + "/search", {
        label: label,
      });
      // console.log(response.data);
      if (!response.data.error) {
        setImages(response.data);
        if (response.data.length === 0) {
          toast.info("No image/s found!");
        }
      }
    } catch (err) {
      toast.error("Failed to fetch images.");
    }
  };

  const value = {
    isLoading: isLoading,
    images: images,
    getAllImages: getAllImages,
    deleteImage: deleteImage,
    addImage: addImage,
    searchImage: searchImage,
  };
  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

// const defaultImages = [
//   {
//     url: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
//     label: "cat 1",
//   },
//   {
//     label: "cat 2",
//     url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg",
//   },
//   {
//     url: "https://media.wired.com/photos/5e1e646743940d0008009167/125:94/w_2038,h_1532,c_limit/Science_Cats-84873657.jpg",
//     label: "cat 3",
//   },
//   {
//     url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Forange-kitten-955480082-2000.jpg",
//     label: "cat 4",
//   },
//   {
//     url: "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",
//     label: "cat 5",
//   },
//   {
//     url: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6082931ef598a85b055afe77%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3475%26cropY1%3D182%26cropY2%3D2137",
//     label: "cat 6",
//   },
//   {
//     url: "https://icatcare.org/app/uploads/2018/07/Elderly-cats.png",
//     label: "cat 7",
//   },
//   {
//     url: "https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
//     label: "cat 8",
//   },
//   {
//     url: "https://static.independent.co.uk/2021/07/09/11/newFile-6.jpg?width=982&height=726&auto=webp&quality=75",
//     label: "cat 9",
//   },
// ];
