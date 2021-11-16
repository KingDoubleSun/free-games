import Carousel from "react-bootstrap/Carousel";

const Screenshots = ({ img_srcs }) => {
  return (
    <Carousel className="text-center">
      {img_srcs.map((url, i) => {
        return (
          <Carousel.Item key={i}>
            <div className="d-flex justify-content-cente">
              <img src={url} className="img-fluid" />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Screenshots;
