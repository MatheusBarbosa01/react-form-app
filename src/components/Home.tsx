import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Mobile Form!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Form')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ir para o Formulário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Home;
