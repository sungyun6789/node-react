import { Switch, Route } from 'react-router';
import LandingPage from './components/view/LandingPage/LandingPage';
import LoginPage from './components/view/LoginPage/LoginPage';
import RegisterPage from './components/view/RegisterPage/RegisterPage';
import Auth from './hoc/auth'; // HOC

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
    </div>
  );
}

export default App;
