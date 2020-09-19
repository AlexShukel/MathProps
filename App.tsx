import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Label from './src/Label';

// TODO write isPrime function
const isPrime = (n: number): boolean => {

}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single number properties</Text>
      <TextInput placeholder="Input number" keyboardType="number-pad" style={styles.input} />
      <View style={styles.properties}>
        <Label label="Is prime"></Label>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  title: {
    fontSize: 24,
  },
  input: {
    fontSize: 18
  },
  properties: {

  }
});
