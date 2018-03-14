
import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  _onPressButton = () =>{
    const {Text} = this.state;
       Alert.alert('Inputed Text: ' + Text)
     }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Type Here..."
          onChangeText={Text => this.setState({Text})}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me!"
          />
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  textInputContainer: {
    textAlign: 'center',
    fontSize: 36
  },
  buttonContainer: {
    margin: 20
  }
});
