/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
import { Row, Column } from "modules/Layout";
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
                  display: "block",
                  width: "90%",
                  margin: "0 auto"
                }}
              >
                I enjoy figuring out how to make things work better.
              </span>
            </p>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
