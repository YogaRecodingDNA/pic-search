import ImageShow from "./ImageShow";

function ImageList({ allImages }) {
    
  const renderThumbs = allImages.map((image, index) => <img src={image.urls.thumb} alt={image.alt_description} />);

  return (
    <div>
       {renderThumbs}
    </div>
  )
};

export default ImageList;