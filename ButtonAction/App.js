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

  static navigationOptions = { title: 'Homescreen' };

  FunctionToOpenFormView = () => {
    this.props.navigation.navigate('Second');
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
            onPress={this.FunctionToOpenFormView}
            title="Press Me!"
            fontSize="20"
          />
        </View>
      </SafeAreaView>
    );
  }
}

class FormView extends Component {
  static navigationOptions = { title: 'FormView' };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> 
          {this.props.firstFieldInputText}
        </Text>
        <Text style={styles.textStyle}>
          {this.props.secondFieldInputText}
        </Text>
        <Text style={styles.textStyle}>
          {this.props.thirdFieldInputText} 
        </Text>
      </View>
      
    );
  }
}

export default Project = StackNavigator({ 
  First: { screen: Homescreen }, 
  Second: { screen: FormView } }
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
