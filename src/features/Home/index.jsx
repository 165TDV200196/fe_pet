import React from "react";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Comment from "./Comment/Comment.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import News from "./News/News.jsx";
import Services from "./Services/Services.jsx";
import Slide from "./Slide/Slide.jsx";
import TestBarCodeTwo from "../../routers/TestInput";

export default function Home() {
  return (
    <>
      <TestBarCodeTwo />
      <Slide />
      <AboutUs />
      <Services />
      <Comment />
      <Gallery />
      <News />
    </>
  );
}
