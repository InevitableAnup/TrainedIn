import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContactsView extends React.Component {
    static navigationOptions = {
        title: "Contacts View"
      };
  render() {
    return (
      <View style={styles.container}>
        <Text>ContactsView</Text>
        
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
