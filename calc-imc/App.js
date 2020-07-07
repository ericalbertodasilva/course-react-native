import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Button, TextInput } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    wieght : 50,
    height : 1.5,
    resultNumber : 0,
    resultText : "Indeterminado",
    cor: '#bdc3c7'
  }
  calcIMC = () => {
    let result = this.state.wieght / (this.state.height * this.state.height)
    this.setState({
      resultNumber: Math.ceil(result) 
    })

    if(result < 18.5) {
      this.setState({
        resultText: 'Magreza',
        cor: '#e74c3c'
      });
    } else if (result >= 18.5 && result < 25) {
      this.setState({
        resultText: 'Normal',
        cor: '#2ecc71'
      });
    } else if (result >= 25 && result < 30) {
     this.setState({
        resultText: 'Sobrepeso',
        cor: '#f1c40f'
      }); 
    } else if (result >= 30 && result < 40) {
      this.setState({
        resultText: 'Obesidade',
        cor: '#e67e22'
      }); 
    } else if (result >= 40) {
      this.setState({
        resultText: 'Obesidade Grave',
        cor: '#e74c3c'
      }); 
    }
  }
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legend}>Minha calculadora IMC</Text>
        
        <View style={[styles.panel, {backgroundColor: this.state.cor}]} >

          <Text style={styles.result}>
            {this.state.resultNumber}
          </Text>
          <Text style={styles.diagnoses}>
            {this.state.resultText}
          </Text>
        </View>

        <View>
          <TextInput 
            label = "Peso"
            style={styles.wieght} 
            value={this.state.wieght} 
            onChangeText={value => this.setState({wieght:value.replace(',','.')})}
            />
          <TextInput
            label = "Altura"
            style={styles.height} 
            value={this.state.height} 
            onChangeText={value => this.setState({height:value.replace(',','.')})}
            />
          <Button onPress={this.calcIMC}>
            Calcular
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 100,
    paddingHorizontal: 50
  },
  panel: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
  },
  legend: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnoses: {
    textAlign: 'center',
    fontSize: 16,
  },
  wieght: {
    marginVertical: 10
  },
  height: {
    marginVertical: 10
  },
});