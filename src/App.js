import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/home page/homePage.component.jsx';
import Members from './pages/members/members.component';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/members' component={Members} />
      </Switch> */}
    </div>
  );
}

export default App;
