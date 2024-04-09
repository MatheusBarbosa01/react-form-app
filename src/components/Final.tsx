import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Final: React.FC<{ route: { params: { name: string, email: string, gender: string } } }> = ({ route }) => {
  const { name, email, gender } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Final</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{email}</Text>
      <Text style={styles.label}>Gênero:</Text>
      <Text style={styles.value}>{gender}</Text>
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
  },
});

export default Final;
