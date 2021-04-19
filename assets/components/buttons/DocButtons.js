import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

const docsLinkList = [
  { name: "Django Docs", href: "https://docs.djangoproject.com/" },
  { name: "TailwindCSS Docs", href: "https://tailwindcss.com/" },
  { name: "React Docs", href: "https://www.reactjs.org/" },
];

const DocsButtons = () =>
  docsLinkList.map((link) => <Button value={link.name} href={link.href} />);

// Our first react usage
ReactDOM.render(<DocsButtons />, document.getElementById("react_buttons"));
