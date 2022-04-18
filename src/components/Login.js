import React from "react";
import { Form, Input, Button, Row, Col, Tooltip } from "antd";
import logo_light from "../assets/images/logo-light.png";
import FloatInput from "../utils/FloatInput";
import { CloseOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Login(props) {

    const history = useHistory()
    const baseUrl = process.env['REACT_APP_S3_ADDRESS']

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClickClose = () => {
    history.push('/')
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const getRandomImage = () => {

    const number = getRandomInt(18) + 1

    const url = baseUrl + 'cover-' + number + '.png'
    console.log(url)
    return url
  }

  return (
    <Row>
      <Col span={13}>
        <img src={getRandomImage()} className="img-login" />
      </Col>
      <Col span={10}>
        <div className="login-right">
          {/* <CloseOutlined style={{ fontSize: "20px", marginTop: "30px" }} /> */}

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

            <div className="login-subtitle">Sign in to Drbot now.</div>
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
                  Log in
                </Button>
              </Form.Item>

              <Form.Item>
                Don't have an account? <a href="/register">Sign up</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Login;

// return (
//     <div>
//         <img src={cover_1} className='img-login'/>

//         <Form
//           name="basic"
//           labelCol={{
//             span: 16,
//           }}
//           wrapperCol={{
//             span: 8,
//           }}
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your username!",
//               },
//             ]}
//           >
//             <Input placeholder="Username" />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>

//           <Form.Item
//             wrapperCol={{
//               offset: 16,
//               span: 16,
//             }}
//           >
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>

//     </div>
//   );
