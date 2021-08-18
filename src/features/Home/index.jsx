import React from "react";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Comment from "./Comment/Comment.jsx";
import Footer from "./Footer/Footer.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Menu from "./Menu/Menu.jsx";
import News from "./News/News.jsx";
import Services from "./Services/Services.jsx";
import Slide from "./Slide/Slide.jsx";

export default function Home() {
  return (
    <>
      <Slide />
      <AboutUs />
      <Services />
      <Comment />
      <Gallery />
      <News />
      <Footer />
    </>
  );
}
