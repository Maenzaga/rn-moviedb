/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { AppN } from './src/components/AppN';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppN);
