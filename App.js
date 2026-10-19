// useState -> usado para guardar valores que mudam na tela
import React, { useState } from 'react';

import {
  // Agrupa os elemento como um container
  View,
  // Cria os estilos dos elementos do React Native
  StyleSheet,
  // Exibe texto na interface
  Text,
  // Área que responde ao toque
  TouchableOpacity,
  // Campo de digitação
  TextInput,
  // Ajusta a tela quando o teclado fica visível
  KeyboardAvoidingView,
  // Retorna o sistema operacional no qual a aplicação está rodando
  Platform,
} from 'react-native';
import Atividades from './component/Atividades';

export default function App() {
  // Aqui colocamos todos os nosso useStates, useEffects, etc...

  // useState para guardar o que o usuário digitou.
  const [atividade, setAtividade] = useState('');
  // useState -> para criar o nosso vetor de atividades
  const [atividades, setAtividades] = useState([]);

  const adicionarAtividades = () => {
    // Fechar o teclado após iniciar o meétodo
    Keyboard.dismiss();
    // Alimentando o vetor atividades
    setAtividade([...Atividades, atividade]);

    // Limpa o campo de atividade
    setAtividade('');
  };

  // Apagar um elemento no vetor de atividades
  const deletarAtividade = (index) => {
    // Criar uma cópia do vetor original
    const auxiliar = [...atividades];

    // Apagar um único elemento de um vetor
    auxiliar.splice(index, 1);

    // Atribuir este vetor auxiliar ao vetor original
    setAtividade(auxiliar);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Atividades</Text>

      <View style={styles.tarefas}>
        {/* Mapeando o vetor para acessar os elementos do vetor */}
        {atividades.map((atividade, index) => (
          //Para cada item do vetor exibimos a tela 1 botão e a atividade de acordo com o indice no vetor
          <TouchableOpacity
            style={styles.quadrado}
            key={index}
            onPress={deletarAtividade(index)}>
            <Atividades text={atividade}></Atividades>
          </TouchableOpacity>
        ))}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerInput}>
        <TextInput
          // Estilizar o elemento
          style={styles.input}
          // Permite a exibição de um texto prévio
          placeholder="Digite uma atividade"
          // Atriuir o que foi digitado a uma variável
          value={atividade}
          // Atualizar o estado da variável sempre que o usuário digitar algo
          onChangeText={(text) => setAtividade(text)}></TextInput>
        <TouchableOpacity onPress={adicionarAtividades}>
          <View style={styles.adicionarContainer}>
            <Text style={styles.adicionarTexto}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal: 25,
  },
  titulo: {
    paddingTop: 80,
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },

  tarefas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#CCCCCC',
    padding: 10,
  },

  tarefa: {
    fontSize: 24,
  },

  quadrado: {
    width: 24,
    height: 24,
    backgroundColor: '#000000',
    alignSelf: 'center',
  },

  containerInput: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    textAlign: 'center',
  },

  adicionarContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },

  adicionarTexto: {
    fontSize: 32,
    fontWeight: '900',
    color: '#f2f2f2',
  },
});
