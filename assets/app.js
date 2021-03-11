/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// les imports importants
import React from 'react';
import ReactDOM from 'react-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
    return <>
        < Navbar />
        <div className="container pt-5">
            <HomePage />
        </div>
    </>
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);

