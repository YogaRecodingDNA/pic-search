const ImageShow = ({ image, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default ImageShow;