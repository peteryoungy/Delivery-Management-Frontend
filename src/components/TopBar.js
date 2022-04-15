import React, { useState } from "react";
import { Layout, Button, Row, Col, Space } from "antd";
import { Menu, Dropdown, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import logo_dark from "../assets/images/logo-dark.png";

const { Header, Footer, Sider, Content } = Layout;

function TopBar(props) {
  // const { isLoggedIn } = props
  //   const isLoggedIn = true;

  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
  //   console.log('state', isLoggedIn)

  const history = useHistory();

  function handleMenuClick(e) {
    // message.info("Click on menu item.");
    console.log("click", e);
    console.log(e.key);

    const key = e.key;
    if (key === "1") {
      history.push("/order-list", "home");
    } else if (key === "2") {
      // todo: setIsLoggedIn
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Orders</Menu.Item>
      <Menu.Item key="2">Log Out</Menu.Item>
    </Menu>
  );

  const onClickLogin = () => {
    history.push("/login");
  };

  const onClickSignup = () => {
    history.push("/register");
  };
  return (
    <div className="topbar">
      <Header id="header">
        <Row justify="space-between">
          <Col>
            <div className="logo-group">

                <img src={logo_dark} className="logo-topbar"/>

              <div className="logo-title">Drbot Express</div>
            </div>
          </Col>
          {!isLoggedIn ? (
            <Col>
              <Space size="small" align="center">
                <Button type="link" onClick={onClickLogin} size='large' className="btn-topbar">
                  Log In
                </Button>

                <Button type="primary" onClick={onClickSignup} size='large' className="btn-topbar">
                  Sign Up
                </Button>
              </Space>
            </Col>
          ) : (
            <Col>
              <Dropdown overlay={menu}>
                <Button>
                  Account <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          )}
        </Row>
      </Header>
    </div>
  );
}

export default TopBar;
