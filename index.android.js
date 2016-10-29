import React from 'react';
import {
  View,
  AppRegistry
} from 'react-native';

import Header from './src/components/Header';
import ResourceList from './src/components/ResourceList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'JavaScript Resources'} />
      <ResourceList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
