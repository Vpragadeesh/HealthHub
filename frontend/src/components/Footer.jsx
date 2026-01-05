import React from "react";
import { CDBSidebarFooter, CDBLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../images/healthhub.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <CDBSidebarFooter
      className="shadow"
      style={{
        background:
          "linear-gradient(170deg, rgb(0, 198, 167), rgb(30, 77, 146))",
      }}
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              <img alt="HealthHub logo" src={logo} width="30px" /> HealthHub
            </p>

            <p className="my-3" style={{ width: "250px" }}>
              Your comprehensive healthcare management platform providing quality medical services, medicine delivery, and emergency support.
            </p>
            <CDBBox display="flex" className="mt-4">
              <a href="https://github.com/yourusername/HealthHub-MERN" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="github" />
                </CDBBtn>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="linkedin" />
                </CDBBtn>
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
              </a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              HealthHub
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Service
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Medicine</CDBLink>
              <CDBLink href="/">Doctor</CDBLink>
              <CDBLink href="/">Blood</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <hr className="bg-light" />
        <CDBBox display="flex" justifyContent="between" alignItems="center" className="flex-wrap mt-4 pt-4">
          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
            <strong>Developed by:</strong> Your Name | 
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="ms-2">GitHub</a> | 
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="ms-2">LinkedIn</a>
          </p>
          <small className="text-center flex-grow-1">
            &copy; HealthHub @ {currentYear} All rights reserved. | Powered by MERN Stack
          </small>
        </CDBBox>
      </CDBBox>
    </CDBSidebarFooter>
  );
};

export default Footer;
