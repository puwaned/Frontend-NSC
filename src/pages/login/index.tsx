import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import styled from "styled-components";
import { UserHolderImage } from "../../assets/images";
import CImage from "../../components/display/c-image";
import CInput from "../../components/input/c-input";

const Container = styled(Form)`
  background-color: rgba(255, 255, 255, 0.5);
  width: 400px;
`;

const PageBackground = styled.div`
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <PageBackground className="c-container">
      <Container className="py-3 px-5" layout="vertical">
        <CImage
          wrapperStyle={{ display: "block", margin: "auto" }}
          src={UserHolderImage}
          height={120}
          width={120}
        />
        <Form.Item noStyle name="username">
          <LoginInput icon={<UserOutlined />} />
        </Form.Item>
        <Form.Item noStyle name="password">
          <LoginInput icon={<LockOutlined />} />
        </Form.Item>
      </Container>
    </PageBackground>
  );
};

const LoginInput = ({
  icon,
  ...rest
}: {
  onChange?: any;
  value?: any;
  icon: any;
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="c-container bg-white" style={{ width: 45, height: 45 }}>
        {icon}
      </div>
      <CInput width='auto' className="bg-white" {...rest} bordered={false} />
    </div>
  );
};

export default LoginPage;
