import Carousel from "react-bootstrap/Carousel";

const Screenshots = ({ img_srcs }) => {
  return (
    <Carousel>
      {img_srcs.map((url, i) => {
        return (
          <Carousel.Item key={i}>
            <img src={url} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Screenshots;
