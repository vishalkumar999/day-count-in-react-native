/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FirstApp from './src/FirstApp';
import List from './src/List';
import Reels from './src/Reels'
import Days from './src/Days'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Days);
