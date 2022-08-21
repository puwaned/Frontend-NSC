import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LoadingIndicator = ({
  size = 30,
  className,
  height,
  hidden,
  style,
}: {
  size?: number;
  className?: string;
  height?: number | string;
  hidden?: boolean;
  style?: React.CSSProperties;
}) => {
  if (hidden) return null;
  return (
    <div
      className={`c-container ${className}`}
      style={{ height: height || "100vh", ...style }}
    >
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: size, color: "#F82602" }} spin />
        }
      />
    </div>
  );
};

export default LoadingIndicator;
