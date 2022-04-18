import React, { useEffect } from "react";
import { Layout, Button, Row, Col, Space, Image } from "antd";
import robot from "../../assets/images/robot-2.png";
import drone from "../../assets/images/drone.jpg";
import { useHistory } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

function Home(props) {
  const history = useHistory();

  useEffect(() => {
    var images = document.getElementsByClassName("img-home");
    // console.log(images);
    // console.log(typeof images);

    for (var i = 0; i < images.length; i++) {
      const element = images.item(i);
      //   console.log(element);

      //   element.addEventListener("mouseenter", (e) => {
      //     console.log(e.target.classList.add('mouseenter'));

      //   });
      //   element.addEventListener("mouseleave", (e) => {
      //     console.log(e.target.classList.remove('mouseenter'));
      //   });

      // att: click many times!!!!!
      element.addEventListener("click", (e) => {
        // console.log(e.target);
        console.log(e.target.id);

        const type = e.target.id;
        history.push("/create-order/page/1", type);
      });
    }
  });
  return (
    <Content>
      <div className="img-group">
        <Row justify="center">
          <Col span={9}>
            <img
              id="Drone"
              className="img-home hvr-grow-shadow hvr-shrink"
              src={drone}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={9}>
            <img
              id="Robot"
              className="img-home hvr-grow-shadow hvr-shrink"
              src={robot}
            />
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Home;
