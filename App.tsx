import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HomeScreen } from './app/modules';
import { persistor, store } from './app/redux';
import { AppStyles, Colors } from './app/theme';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={AppStyles.ScreenContainer}>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor={Colors.white}
          />
          <HomeScreen />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App;
