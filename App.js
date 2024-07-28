import React from "react";
import ReactDOM from "react-dom/client"

const container = React.createElement(
    'div',
    { className: "container", id: "container" },
    [
      React.createElement(
        "h3",
        { className: "heading", id: "heading" },
        "Heading Element"
      ),
      React.createElement("section", {key : 1}, [
        React.createElement("p",{}, "this is small paragraph"),
  
        React.createElement('img',{key:2, style:{width:'400px'}, src: 'https://images.pexels.com/photos/16720495/pexels-photo-16720495/free-photo-of-man-with-a-fishing-rod-on-a-shore-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'})
  
      ]),
    ] 
  );
  
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  
  root.render(container)
  