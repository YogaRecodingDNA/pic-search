import './images.css';
import ImageShow from "./ImageShow";

function ImageList({ allImages }) {
    
  const renderThumbs = allImages.map((image, index) => {
    return (
      <ImageShow
        className='thumb'
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