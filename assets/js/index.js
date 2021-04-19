import React from "react";
import ReactDOM from "react-dom";

class DocsButtons extends React.Component {
  render() {
    return (
      <>
        <button className="transition px-6 py-4 shadow-xl rounded-xl xl:duration-500 xl:ease-in-out bg-purple-600 xl:hover:bg-yellow-600 transform xl:hover:-translate-y-1 xl:hover:scale-110">
          <a
            href="https://docs.djangoproject.com/"
            className="text-white font-medium text-xl lg:text-2xl xl:text-3xl"
          >
            Django Docs
          </a>
        </button>

        <button className="transition px-6 py-4 shadow-xl rounded-xl xl:duration-500 xl:ease-in-out bg-purple-600 xl:hover:bg-yellow-600 transform xl:hover:-translate-y-1 xl:hover:scale-110">
          <a
            href="https://tailwindcss.com/"
            className="text-white font-medium text-xl lg:text-2xl xl:text-3xl"
          >
            TailwindCSS Docs
          </a>
        </button>

        <button className="transition px-6 py-4 shadow-xl rounded-xl xl:duration-500 xl:ease-in-out bg-purple-600 xl:hover:bg-yellow-600 transform xl:hover:-translate-y-1 xl:hover:scale-110">
          <a
            href="https://www.reactjs.org/"
            className="text-white font-medium text-xl lg:text-2xl xl:text-3xl"
          >
            React Docs
          </a>
        </button>
      </>
    );
  }
}

// Our first react usage
ReactDOM.render(<DocsButtons />, document.getElementById("react_buttons"));
