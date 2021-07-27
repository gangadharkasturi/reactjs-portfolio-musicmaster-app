import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './components/Jokes';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './components/Header';
import MusicMaster from './projects/music-master'

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path='/' render={() => <Header><App/></Header>}/>
      <Route path='/jokes' render={() => <Header><Jokes/></Header>}/>
      <Route path='/music-master' render={() => <Header><MusicMaster/></Header>}/>
    </Switch>
  </Router>
,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
