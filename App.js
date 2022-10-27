import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tarefaLista from './User.service';

export default function App() {

  const [filter, setFilter] = useState("");
  const [tarefa, setTarefa] = useState([...tarefaLista]);
  const [texto, setTexto] = useState();

  /* useEffect(() => {
    getUsers(filter).forEach((task)=>{setUsers(task)})
    console.log(tarefa)
  }, [filter]); */
  const addTexto = () => {
    tarefaLista.push({
      name: texto, status: "pendente"
    })
    setTexto("")
    setTarefa(tarefaLista)
  }
  const marcar = (index) => {
    tarefaLista[index].status="concluido"
    console.log(tarefaLista)
  }
  return (
    <View style={styles.container}>
      <Text>Tarefas</Text>
      <TextInput onChangeText={setTexto} style={styles.textInput}></TextInput>
      <TouchableOpacity style={styles.botao} onPress={()=>addTexto()}><Text>Adicionar na lista</Text></TouchableOpacity>
      {
        tarefa.map((user, index) => (<View style={styles.tarefaContainer} key={index}>
          <TouchableOpacity style={styles.check} onPress={()=>marcar(index)}></TouchableOpacity>
          <Text key={user.name} style={styles.conteudo}>{user.name}</Text>
          </View>
        ))
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    border: "1px solid black",
    margin: 10,
  },
  botao: {
    padding: 10,
    borderColor: "black",
    borderWidth: 3,
  },
  conteudo: {
    fontSize: 15,


  },
  tarefaContainer: {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'flex-start',
    width: 125,
    margin: 5

  },
  check: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1

  }
});
