"use strict";

function Project(props) {
  return React.createElement("figure", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, React.createElement("img", {
    src: props.img
  })), React.createElement("figcaption", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.caption)));
}

function ProjectList() {
  return React.createElement("div", {
    id: "img-container"
  }, React.createElement(Project, {
    img: "images/toptravel.svg",
    caption: "travel agency TopTravel",
    url: "https://toptravel.crimea.ua/"
  }), React.createElement(Project, {
    img: "images/irig-tech.png",
    caption: "irig tech",
    url: "./pages/reaction-test/reaction-test.html"
  }), React.createElement(Project, {
    img: "images/CalcRN.png",
    caption: "calculator rn",
    url: "https://github.com/occnah/CalculatorRN"
  }));
}

var el = React.createElement(ProjectList, null);
ReactDOM.render(el, document.getElementById("img-container"));