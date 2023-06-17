import logo from './logo.svg';
import './App.css';
import { Switch,Route } from 'react-router-dom';

import Home from '../src/views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={Home}/>
        <Route path='/home/:id' component={Detail}/>
        <Route path='/create' component={Form}/>
      </Switch>
    </div>
  );
}

export default App;
