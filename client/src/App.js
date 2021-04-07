import { Switch, Route } from 'react-router';
import LandingPage from './components/view/LandingPage/LandingPage';
import LoginPage from './components/view/LoginPage/LoginPage';
import RegisterPage from './components/view/RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
