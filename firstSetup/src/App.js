import React from 'react';
import {Text, TextInput, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Functional Component</Text>
      <TextInput placeholder="Masukkan username" />
      <TextInput placeholder="Masukkan password" />
      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal : 20,
    marginVertical: 20,
},
  title: {
    fontSize: 36,
    fontWeight: '700'
  },
});

export default App;