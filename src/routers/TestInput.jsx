import React, { useEffect, useState, useRef } from "react";

export default function TestBarCodeTwo() {
  const [value, setValue] = useState({
    bar1: "",
  });
  const docEl = useRef(null);
  const { bar1, bar2 } = value;
  const handleOnChange = (e) => {
    setValue({ bar1: e.target.value });
  };
  function hideKeyboard() {
    //this set timeout needed for case when hideKeyborad
    //is called inside of 'onfocus' event handler
    setTimeout(function () {
      //creating temp field
      var field = document.createElement("input");
      field.setAttribute("type", "text");
      //hiding temp field from peoples eyes
      //-webkit-user-modify is nessesary for Android 4.x
      // field.setAttribute(
      //   "style",
      //   "position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;"
      // );
      field.onchange = (e) => handleOnChange(e);
      docEl.current.appendChild(field);

      //adding onfocus event handler for out temp field
      field.onfocus = function () {
        //this timeout of 200ms is nessasary for Android 2.3.x
        setTimeout(function () {
          // field.setAttribute("style", "display:none;");
          // setTimeout(function () {
          //   document.body.removeChild(field);
          //   document.body.focus();
          // }, 14);
        }, 200);
      };
      //focusing it
      field.focus();
    }, 50);
  }
  useEffect(() => {
    hideKeyboard();
  }, []);

  return (
    <div id="hee" ref={docEl}>
      {bar1}
    </div>
  );
}
