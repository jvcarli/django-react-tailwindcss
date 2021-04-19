import React from "react";

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

export default Button;
