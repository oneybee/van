/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
import { Row, Column } from "modules/Layout";

import { wem } from "ruucm-blocks/tools/mixins";
import { isMobile } from "ruucm-blocks/tools/media";
class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <header style={{ paddingTop: "65px", paddingBottom: "65px" }}>
          <Row
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Column col={6} mCol={6} />
            <Column col={6} mCol={6}>
              <span>Work</span>
              <span>About</span>
            </Column>
          </Row>
        </header>
        <div
          style={{
            paddingTop: "150px",
            paddingBottom: wem(400),
            marginBottom: "50px"
          }}
        >
          <div
            style={{
              marginBottom: "100px",
              paddingRight: "30px",
              paddingLeft: "30px",
              marginLeft: "0px",
              marginRight: "auto",
              position: "relative",
              display: "block"
            }}
          >
            <p
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                position: "absolute",
                display: "inline-block"
              }}
            >
              <span
                style={{
                  fontSize: "10.15vw",
                  fontWeight: 400,
                  color: isMobile() ? "#1106FF" : "pink",
                  backgroundColor: isMobile() ? "gray" : "blue",
                  width: "90%",
                  margin: "0 auto"
                }}
              >
                I enjoy figuring out how to make things work better.
              </span>
            </p>
          </div>
        </div>
        <div style={{ paddingRight: "30px", paddingLeft: "30px" }}>
          <div
            style={{
              marginTop: "20px",
              marginLeft: "-15px",
              marginRight: "-15px"
            }}
          >
            <p
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "#1106FF"
              }}
            >
              <span
                style={{
                  marginBottom: "10px",
                  fontSize: wem(50), // 21px goes to 21/1920 * 100vw = 1.09vw
                  fontWeight: 300,
                  display: "block"
                }}
              >
                I care about the details and consider the motion design of
                affordances to be crucial in creating effective, intuitive
                interfaces. I consider prototyping to be my weapon of choice in
                thinking through interaction models and new possibilities.
              </span>
              <span
                style={{
                  marginBottom: "10px",
                  fontSize: "21px",
                  fontWeight: 300,
                  display: "block",
                  paddingTop: "8px"
                }}
                className="test"
              >
                I thrive on learning new things — I enjoy exploring new paths to
                familiar places. I really love snowboarding (I like both park
                and powder days). I also really enjoy exploring the amazing
                trails and landscapes around the bay area on my mountain bike.
                I’ve travelled a lot and enjoy seeing things from a fresh
                perspective :)
              </span>
            </p>
          </div>
        </div>
        <Row>
          <Column col={6} mCol={6}>
            <img
              src="http://www.jessievan.com/images/about/photo-1.png"
              style={{ width: "100%" }}
            />
          </Column>
          <Column col={6} mCol={6}>
            <img
              src="http://www.jessievan.com/images/about/photo-3.png"
              style={{ width: "100%" }}
            />
          </Column>
        </Row>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
