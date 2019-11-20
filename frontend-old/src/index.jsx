import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

// import App from './main/app';
import Routes from './main/routes'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//serve para esperar o retorno da promisse de retornos de api
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('app'))
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('app'))



/*
Até o componente 17 dashboardReducers.jsx ser criado era assim que o componente index.jsx era definido
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/app';
import reducers from './main/reducers'

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))

*/
/*
Até o componente 15 reducers.jsx ser criado era assim que o componente index.jsx era definido
a partir da criacao do reducers o compontente passa a ser como a parte abaixo sem comementarios
import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

ReactDOM.render(<App />, document.getElementById('app'))
*/