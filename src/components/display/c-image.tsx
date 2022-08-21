import { Image, ImageProps } from "antd";
import fallback from "../../assets/images/holder/fallback.jpeg";
import LoadingIndicator from "./loading-indicator";

const CImage = ({ preview = false, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      preview={preview}
      fallback={fallback}
      placeholder={
        <LoadingIndicator
          height={
            props?.height || props.style?.height || props.wrapperStyle?.height
          }
        />
      }
    />
  );
};

export default CImage;
