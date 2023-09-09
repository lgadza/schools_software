import  { FC } from "react";
import { ImageProps } from "../Types";


const Image: FC<ImageProps> = ({ src, alt, width, height }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: `${width}px`, height: `${height}px`, borderRadius: "50%" }}
    className="img_component"
  />
);

export default Image;
