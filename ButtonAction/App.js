import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';

class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstFieldInputText: '', 
      secondFieldInputText: '',
      thirdFieldInputText: ''
    };
  }

  static navigationOptions = { title: 'Home' };

  FunctionToOpenFormCompletion = () => {
    this.props.navigation.navigate(
      'Second', {
        firstFieldInputText: this.state.firstFieldInputText,
        secondFieldInputText: this.state.secondFieldInputText,
        thirdFieldInputText: this.state.thirdFieldInputText
      }
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInputContainer}
          multiline={true}
          placeholder="Type Here..."
          onChangeText={firstFieldInputText => this.setState({ firstFieldInputText })}
          
        />
        <TextInput
          style={styles.textInputContainer}
          multiline={true}
          placeholder="Type Here..."
          onChangeText={secondFieldInputText => this.setState({ secondFieldInputText })}
        />
        <TextInput
          style={styles.textInputContainer}
          multiline={true}
          placeholder="Type Here..."
          onChangeText={thirdFieldInputText => this.setState({ thirdFieldInputText })}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.FunctionToOpenFormCompletion}
            title="Press Me!"
            fontSize="20"
          />
        </View>
      </SafeAreaView>
    );
  }
}

class CompletionView extends Component {
  static navigationOptions = { title: '' };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> 
          {this.props.navigation.state.params.firstFieldInputText}
        </Text>
        <Text style={styles.textStyle}>
          {this.props.navigation.state.params.secondFieldInputText}
        </Text>
        <Text style={styles.textStyle}>
          {this.props.navigation.state.params.thirdFieldInputText} 
        </Text>
      </View>
      
    );
  }
}

export default Project = StackNavigator({ 
  First: { screen: Homescreen }, 
  Second: { screen: CompletionView }}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
    margin: 20
  },
  textInputContainer: {
    textAlign: 'center',
    color: '#000',
    fontSize: 23,
    margin: 20
  },
  buttonContainer: {
    margin: 20
  },
});
