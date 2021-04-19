import React from "react";
import ReactDOM from "react-dom";

const docsLinkList = [
  { name: "Django Docs", href: "https://docs.djangoproject.com/" },
  { name: "TailwindCSS Docs", href: "https://tailwindcss.com/" },
  { name: "React Docs", href: "https://www.reactjs.org/" },
];

const Button = ({ value, href }) => (
  <button className="transition px-6 py-4 shadow-xl rounded-xl xl:duration-500 xl:ease-in-out bg-purple-600 xl:hover:bg-yellow-600 transform xl:hover:-translate-y-1 xl:hover:scale-110">
    <a
      className="text-white font-medium text-xl lg:text-2xl xl:text-3xl"
      href={href}
    >
      {value}
    </a>
  </button>
);

const DocsButtons = () =>
  docsLinkList.map((link) => <Button value={link.name} href={link.href} />);

// Our first react usage
ReactDOM.render(<DocsButtons />, document.getElementById("react_buttons"));
