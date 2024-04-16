import { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListScreen from './screens/ListScreen';
import NewScreen from './screens/NewScreen';
import ViewScreen from './screens/ViewScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} hideNavBar={true} title="RamapoCollege" initial={true} />
          <Scene key="SignupScreen" component={SignupScreen} hideNavBar={true} title="RamapoCollege" />
          <Scene key="ListScreen" component={ListScreen} hideNavBar={true} title="RamapoCollege" />
          <Scene key="NewScreen" component={NewScreen} hideNavBar={true} title="RamapoCollege" />
          <Scene key="ViewScreen" component={ViewScreen} hideNavBar={true} title="RamapoCollege" />
        </Scene>
      </Router>
    )
  }
}
