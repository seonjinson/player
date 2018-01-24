import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import { ProductList, Login } from './components';
import  Home  from './containers/Home';

const rootElement = document.getElementById('root');
ReactDOM.render(
        <Provider>
        <Router>
        <div>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        </div>
    </Router>
    </Provider>, rootElement

);