import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
//忽略提醒
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('HaoWuDuo', () => App);
