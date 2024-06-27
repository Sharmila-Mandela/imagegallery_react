
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