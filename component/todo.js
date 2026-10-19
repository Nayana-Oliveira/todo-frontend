import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function todo() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, { flexDirection: 'row' }]}>
        <View style={[styles.comum, styles.container1]}>
          <Text style={styles.texto}>1</Text>
        </View>
        <View style={[styles.comum, styles.container2]}>
          <Text style={styles.texto}>2</Text>
        </View>
      </View>

      <View style={[styles.container, { flexDirection: 'row' }]}>
        <View style={[styles.comum, styles.container3]}>
          <Text style={styles.texto}>3</Text>
        </View>
        <View style={[styles.comum, styles.container4]}>
          <Text style={styles.texto}>4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comum: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 150,
    width: 150,
  },
  container1: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container2: {
    flex: 1,
    backgroundColor: '#EAEADA',
  },
  container3: {
    flex: 1,
    backgroundColor: '#EAEAED',
  },
  container4: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  texto: {
    fontSize: 64,
  },
});
