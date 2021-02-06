import React from 'react';
import ReactDOM from "react-dom";

class Buttons extends React.Component {
    render() {
        return(
            <>
                <button
                    className="transition px-6 py-4 shadow-xl rounded-xl duration-500 ease-in-out bg-purple-600 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ...">
                    <a href="https://docs.djangoproject.com/" className="text-white font-medium text-3xl">Django Docs</a>
                </button>

                <button
                    className="transition px-6 py-4 shadow-xl rounded-xl duration-500 ease-in-out bg-purple-600 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ...">
                    <a href="https://tailwindcss.com/" className="text-white font-medium text-3xl">TailwindCSS Docs</a>
                </button>

                <button
                    className="transition px-6 py-4 shadow-xl rounded-xl duration-500 ease-in-out bg-purple-600 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ...">
                    <a href="https://www.reactjs.com/" className="text-white font-medium text-3xl">React Docs</a>
                </button>
            </>
        )
    }
}

// Our first react usage
ReactDOM.render(
    <Buttons/>,
    document.getElementById('react_buttons')
)