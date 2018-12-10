import {Navigation} from 'react-native-navigation'

import Home from './src/Home'

Navigation.registerComponent("Home",() => Home)


Navigation.events().registerAppLaunchedListener(() => {
 Navigation.setRoot({
  root: {
    component: {
      name: "Home"
    }
   }
  });
});
