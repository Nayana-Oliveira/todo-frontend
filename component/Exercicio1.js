import React from 'react';
import {
  View, //agrupa os elementos como um container
  StyleSheet, //cria os estilosd dos elementos do react native
  Text, //
  TouchableOpacity //
} from 'react-native';

export default function Exercicio1() {
  return (
    <View style={styles.tela}>
      <View style={styles.titulo}>
        <Text style={styles.textoTitulo}>Texto</Text>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.item}>
          <Text style={styles.textoItem}>Texto 1</Text>
          <View style={styles.quadrado} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },

  titulo: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    fontSize: 64,
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    padding: 24,
  },

  item: {
    width: '80%',
    height: 50,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
  },

  textoItem: {
    fontSize: 24,
  },

  quadrado: {
    width: 20,
    height: 20,
    backgroundColor: '#555555',
  },
});