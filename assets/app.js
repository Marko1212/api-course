/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// les imports importants
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CustomersPage from './pages/CustomersPage';
import CustomersPageWithPagination from './pages/CustomersPageWithPagination';
import InvoicesPage from './pages/InvoicesPage';
import LoginPage from './pages/LoginPage';
import AuthAPI from "./services/authAPI";

AuthAPI.setup();

const PrivateRoute = ({path, isAuthenticated, component}) => isAuthenticated ? <Route path = {path} component = {component} /> : <Redirect to="/login" />;

const App = () => {

    
   const [isAuthenticated, setIsAuthenticated] = useState(AuthAPI.isAuthenticated());

   const NavbarWithRouter = withRouter(Navbar);

    return <HashRouter>
        < NavbarWithRouter isAuthenticated={isAuthenticated} onLogout = {setIsAuthenticated}/>
        <main className="container pt-5">
            <Switch>
                <Route path="/login" render={props => (<LoginPage onLogin={setIsAuthenticated} {...props} />)} />
                <PrivateRoute path="/invoices" isAuthenticated={isAuthenticated} component={InvoicesPage} />
                <PrivateRoute path="/customers" isAuthenticated={isAuthenticated} component={CustomersPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </main>
    </HashRouter>
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);

