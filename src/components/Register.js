import React from "react";
import { Form, Input, Button, Row, Col, Tooltip } from "antd";
import cover_1 from "../assets/images/cover-1.png";
import cover_2 from "../assets/images/cover-2.png";
import cover_3 from "../assets/images/cover-3.png";
import logo_light from "../assets/images/logo-2.png";
import FloatInput from "../utils/FloatInput";
import { CloseOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Register(props) {
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClickClose = () => {
    history.push("/");
  };

  return (
    <Row>
      <Col span={13}>
        <img src={cover_3} className="img-login" />
      </Col>
      <Col span={10}>
        <div className="login-right">
          <Tooltip title="close">
            <Button
              shape="circle"
              size="large"
              icon={<CloseOutlined />}
              style={{
                marginTop: "20px",
                borderWidth: "0px",
              }}
              onClick={onClickClose}
            />
          </Tooltip>
          <div className="login-subright">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src={logo_light} className="img-logo" />
              {/* <div> */}

              {/* </div> */}
            </div>
            <div className="login-title">Delivery Within Reach</div>

            <div className="login-subtitle">Join us now.</div>
            <Form
              name="basic"
              // labelCol={{
              //   span: 8,
              // }}
              wrapperCol={{
                //   offset: 1,
                span: 24,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              size="large"
            >
              <Form.Item
                //   label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                {/* <Input placeholder="Username" size="large"/> */}
                <FloatInput
                  label="Phone, email or username"
                  placeholder="Phone, email or username"
                />
              </Form.Item>

              <Form.Item
                //   label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                {/* <Input.Password placeholder="Password" size="large"/> */}
                <FloatInput
                  label="Password"
                  placeholder="Password"
                  type="password"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                // label="Confirm Password"
                dependencies={["password"]}
                // hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                {/* <Input.Password /> */}

                <FloatInput
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  // offset: 3,
                  span: 24,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Sign up
                </Button>
              </Form.Item>

              <Form.Item>
                Already have an account? <a href="/login">Log in</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Register;
