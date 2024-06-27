
import React, { useState } from 'react';
import ImageItem from './ImageItem.jsx';
import ImageModal from './ImageModal.jsx';
import './ImageGallery.css';

const images =['https://media.gettyimages.com/id/506812641/photo/india-gate.jpg?s=612x612&w=0&k=20&c=3ZxJgQAcE6UWq6zf9ONdfpDpwCyN9iJ5vDLEQNaVFRo=',
  'https://media.gettyimages.com/id/485899645/photo/taj-mahal-monument-at-sunrise-agra-india.jpg?s=612x612&w=0&k=20&c=zLDGvDZJ0c_m38e630HTNreoiUipOTM8IFuzWHSnPO4=',
'https://media.gettyimages.com/id/522676626/photo/gateway-of-india-is-in-the-heart-of-mumbais-tourist-district-and-is-the-cittys-most-famous.jpg?s=612x612&w=0&k=20&c=tmDQS6so5xDpxCmvjQ_SZIux4N-TxKreIxVbgoTldEc=',
 'https://media.gettyimages.com/id/1223353223/photo/india-madhya-pradesh-state-sanchi-buddhist-monuments.jpg?s=612x612&w=0&k=20&c=guoR1o5c-XLlg9SmNG9eZ3FH6qxbWMnhr-TsC2pcUd0=',
'https://media.gettyimages.com/id/541363304/photo/qutb-minar-and-ruins-of-quwwat-ul-islam-mosque.jpg?s=612x612&w=0&k=20&c=WfN2tzWDZNKGVYY5HU49RTdX6-xT-Asg_Y-lBLcBrek=',
'https://media.gettyimages.com/id/sb10067052i-001/photo/india-delhi-indian-flay-flying-above-red-fort.jpg?s=612x612&w=0&k=20&c=MTzypqHY0caJNiD-7AxR7qjqDSVLL8BauKkzs-XMw8s=',
'https://media.gettyimages.com/id/575065591/photo/night-view-of-lotus-temple-new-delhi.jpg?s=612x612&w=0&k=20&c=Xa2ZwDRiUiVQK4VKRoWrHN60gtVbY6Vcxx0GveZXc8Q=',
'https://media.gettyimages.com/id/1339281474/photo/hawa-mahal-or-palace-of-the-winds-in-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=IzcPo2xPXXHnyjPkp4FT7dXhBkTPXyMLkAfNBgZIflU=',
'https://media.gettyimages.com/id/503141139/photo/akshardham-temple.jpg?s=612x612&w=0&k=20&c=KiryNacoUDr4dShV6RifBf336C7nSnlmzuRsF8GDP_Q=',
'https://media.gettyimages.com/id/547907515/photo/konarkk-erotic-sculptures.jpg?s=612x612&w=0&k=20&c=WNd87r0uRSFyo8aon4zbWBhnYw3lg8K2KwKw9i0rC9k=',
'https://media.gettyimages.com/id/1437628936/photo/charminar-at-hyderabad-telangana-india.jpg?s=612x612&w=0&k=20&c=mb2iJTPcG1QyCjViRHzdKN7S75CSNdeTmFXidPJ1pIc=',
'https://media.gettyimages.com/id/137336783/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=mQq4me5Nr_8uWnr4eQcJCSy5tcZ46H-QzIxrYsn6f2E=',
'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/2215065240_4530831482_b.jpg',
'https://www.tusktravel.com/blog/wp-content/uploads/2022/02/Victoria-Memorial-Kolkata-West-Bengal.jpg',
'https://th.bing.com/th/id/OIP.6DGkKeN8PoBypT60CR8TNAHaFb?pid=ImgDet&w=182&h=133&c=7&dpr=1.3',


];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} index={index} openModal={openModal} />
      ))}
      {selectedImageIndex !== null && (
        <ImageModal
          image={images[selectedImageIndex]}
          closeModal={closeModal}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
