
import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
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
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton = () =>{
    const {Text} = this.state;
       Alert.alert('Inputed Text: ' + Text)
     }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInputContainer}
          multiline={true}
          placeholder="Type Here..."
          color="steelblue"
          onChangeText={Text => this.setState({Text})}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me!"
            color="powderblue"
            fontSize="20"
          />
        </View>
      </SafeAreaView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  textInputContainer: {
    textAlign: 'center',
    fontSize: 36
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'steelblue'
  }
});
