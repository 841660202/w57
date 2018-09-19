/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Scan from "./src/scan";

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Scan);
