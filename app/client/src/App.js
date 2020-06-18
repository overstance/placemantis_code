import React, {Suspense, lazy} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import Layout from './components/common/layout/Layout';
const Home = lazy(() => import('./pages/home/Home'));
const GamePlay = lazy(() => import('./pages/gamePlay/GamePlay'));

const RouteLoading = 'Page Loading...';

const NotFound = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const Profile = () => {
  return(
    <div>
      Profile Page Shows Here
    </div>
  )
}

const Register = () => {
  return(
    <div>
      Register Page Shows Here
    </div>
  )
}

const Login = () => {
  return(
    <div>
      Login Page Shows Here
    </div>
  )
}

const App = props => {

  let routes = (
    <Suspense fallback={RouteLoading}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route extact path="/profile" component={Profile}/>
        <Route extact path="/register" component={Register}/>
        <Route extact path="/login" component={Login}/>
        <Route extact path="/game_play" component={GamePlay}/>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
  
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}  


export default withRouter(App);
