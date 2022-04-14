import React, { useState } from "react";
import { Layout, Button, Row, Col, Space} from "antd";
const { Header, Footer, Sider, Content } = Layout;

function TopBar(props) {
  // const { isLoggedIn } = props
  const isLoggedIn = true;

  return (
    <div>
      <Header id="header">
        <Row justify="space-between">
          <Col>Delivery & Dispatch</Col>
          {isLoggedIn ? (
            <Col>
              <Space size="small" align='center'>
                <Button>Log In</Button>

                <Button>Sign Up</Button>
              </Space>
            </Col>
          ) : (
            <Col>
              <Button>Log Out</Button>
            </Col>
          )}
        </Row>
      </Header>
    </div>
  );
}

export default TopBar;
