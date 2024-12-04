// import 'react-native-gesture-handler';
import React from 'react';
import AppStackNav from './navigators/AppStackNav';
// import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StateProvider} from 'react-redux';
import store from './redux/store';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

// const theme = {
// 	...DefaultTheme,
// 	dark: false,
// 	roundness: 4,
// 	colors: {
// 	  ...DefaultTheme.colors,
// 	  primary: '#3498db',
// 	  accent: '#f1c40f',
// 	},
//   };

export default  App = () => {
	const scheme = useColorScheme();
	return(
		<StateProvider store={ store }>
			{/* <PaperProvider theme={theme}> */}
			<NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
				<AppStackNav />
			</NavigationContainer>
			{/* </PaperProvider> */}
		</StateProvider>
	)
}
