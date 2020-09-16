const HeroBuilder = (image, width) => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    width: `${width}%`,
  };
  return style;
};

export default HeroBuilder;
