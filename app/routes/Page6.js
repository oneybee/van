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
            <Column col={6} mCol={6}><span>Work</span></Column>
          </Row>
        </header>
        <div style={{ paddingTop: "150px" }}>
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
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
              }}
            >
              <span
                style={{
                  marginBottom: "50px",
                  fontSize: "10.15vw",
                  fontWeight: 400,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#1106FF"
                }}
              >
                Jessi Van
              </span>
              <span
                style={{
                  marginBottom: "50px",
                  fontSize: "10.15vw",
                  display: "block",
                  fontWeight: 400,
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#1106FF"
                }}
              >
                Jessi Van
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
        />
      </div>
    ); // eslint-disable-line
  }
}
export default Page6;
