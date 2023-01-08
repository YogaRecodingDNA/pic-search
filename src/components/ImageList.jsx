import './images.css';
import ImageShow from "./ImageShow";

const ImageList = ({ allImages }) => {
    
  const renderThumbs = allImages.map((image, index) => {
    return (
      <ImageShow
        key={image.id}
        image={image.urls.small}
        alt={image.alt_description}
      />
    );
  });

  return (
    <div className="image-list">
       {renderThumbs}
    </div>
  )
};

export default ImageList;