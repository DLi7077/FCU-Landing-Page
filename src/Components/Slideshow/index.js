import Carousel from "react-material-ui-carousel";

export default function Slideshow(props) {
  const { slides } = props;
  return (
    <Carousel navButtonsAlwaysVisible height={600}>
      {slides.map((slide, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img key={idx} src={slide} alt="slide" />;
          </div>
        );
      })}
    </Carousel>
  );
}
