/**
 *
 * Page6
 *
 */
import React, { Component } from "react";
import { Row, Column } from "modules/Layout";
class Page6 extends Component {
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
              <span>Work</span><span>About</span>
            </Column>
          </Row>
        </header>
        <div
          style={{
            paddingTop: "150px",
            marginBottom: "50px",
            paddingBottom: "50px"
          }}
        >
          <div
            style={{
              marginBottom: "100px",
              paddingRight: "30px",
              paddingLeft: "30px",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative"
            }}
          >
            <p
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                position: "absolute"
              }}
            >
              <span
                style={{
                  fontSize: "10.15vw",
                  fontWeight: 400,
                  color: "#1106FF",
                  display: "block"
                }}
              >
                Jessi Van
              </span>
              <span
                style={{
                  fontWeight: 300,
                  left: "50%",
                  fontSize: "19px",
                  width: "75%",
                  color: "#C5C5C5",
                  marginTop: "15px"
                }}
              >
                Hi! I'm a Product Designer based in Oakland, California.
              </span>
            </p>
          </div>
        </div>
        <div
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Row style={{ marginBottom: "75px" }}>
            <Column
              col={6}
              mCol={6}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "30px"
              }}
            >
              <a href="#" style={{ display: "block" }}>
                <img
                  src="http://www.jessievan.com/images/grid-projects/MBTV.png"
                  style={{ width: "100%" }}
                />
              </a>
            </Column>
            <Column
              col={6}
              mCol={6}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "30px"
              }}
            >
              <a href="#" style={{ display: "block" }}>
                <img
                  src="http://www.jessievan.com/images/grid-projects/Coleman.png"
                  style={{ width: "100%" }}
                />
              </a>
            </Column>
            <Column
              col={6}
              mCol={6}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "30px"
              }}
            >
              <a href="#" style={{ display: "block" }}>
                <img
                  src="http://www.jessievan.com/images/grid-projects/Coleman.png"
                  style={{ width: "100%" }}
                />
              </a>
            </Column>
            <Column
              col={6}
              mCol={6}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "30px"
              }}
            >
              <a href="#" style={{ display: "block" }}>
                <img
                  src="http://www.jessievan.com/images/grid-projects/Coleman.png"
                  style={{ width: "100%" }}
                />
              </a>
            </Column>
          </Row>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default Page6;
