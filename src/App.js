import React from "react";
// import { withStyles } from "@material-ui/styles";
import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import TeamMemeber from "./components/teamMember/teamMember";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import MyWork from "./components/MyWork/MyWork";
import ContactUs from "./components/contactUs/ContactUs";
// import { Styles } from "./AppbarStyle";
import Scrollspy from "react-scrollspy";

export default function App() {
  return (
    <div>
      <Menu />
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <TeamMemeber />
      <MyWork />
      <ContactUs/>

      {/* <div>
        <div>
          {" "}
          <Scrollspy
            items={["section-1", "section-2", "section-3"]}
            currentClassName="is-current"
          >
            <li>
              <a href="#section-1">Menu</a>
            </li>
            <li>
              <a href="#section-2">dasd</a>
            </li>
            <li>
              <a href="#section-3">section 3</a>
            </li>
          </Scrollspy>
          <section id="section-1">
      <Header/>
          </section>
          <section id="section-2">
            {" "}
            <p>sdss</p>
            <p>de</p>
            <p>hellllllll</p>
            <p>zc</p>
            <p>zc</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
          </section>
          <section id="section-3">
            {" "}
            <p>cccc</p>
            <p>de</p>
            <p>hellllllll</p>
            <p>zc</p>
            <p>zc</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
            <p>hellllllll</p>
          </section>
        </div>
      </div> */}
    </div>
  );
}

// export default withStyles(Styles)(ButtonAppBar);
