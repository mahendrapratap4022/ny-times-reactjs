import Header from './container/Header';
import ArticleListing from './container/ArticleListing';
import ArticleDetail from './container/ArticleDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path='/' component={ArticleListing} />
          <Route path='/article/:id' component={ArticleDetail} />
          <Route>404 Not Fount!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
