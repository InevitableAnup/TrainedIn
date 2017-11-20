import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TrainingView extends React.Component {
    static navigationOptions = {
        title: "TrainingView"
      };
  render() {
    return (
      <View style={styles.container}>
        <Text>Training View</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
