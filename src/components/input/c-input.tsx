import { Input, InputProps } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  height: 45px;
  .ant-input-group-wrapper,
  .ant-input-wrapper,
  .ant-input-group {
    height: 45px;
    input {
      height: 45px;
    }
  }
`;

interface CInputProps extends InputProps {}

const CInput = (props: CInputProps) => {
  return <StyledInput {...props} />;
};

export default CInput;
