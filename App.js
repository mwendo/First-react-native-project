import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';

export default function App() {
  const [animal, setAnimal] = useState("")

  const [list, setList] = useState([
    {id:"1", animal:"penguins"}, 
    {id:"2", animal: "gorillas"},
    {id:"3", animal: "narwhals"},
    {id:"4", animal: "ligers"},
    {id:"5", animal: "giant squid"}
  ])

  const inputStyle = {
    borderWidth: 2,
    width: "75%",
    marginTop: "40%"
  }

  const onSubmitHandler = () => {
    let newId = parseInt(list[list.length-1].id) + 1;
    
    setList([
      ...list,
      {
        id: `${newId}`,
        animal: animal
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text>hey it's me!</Text>
      <Text>second line!</Text>
      <TextInput style={inputStyle} onChangeText={(input) => setAnimal(input)} onSubmitEditing={onSubmitHandler}/>
      <FlatList data={list} renderItem={({item})=><Text>{item.animal}</Text>}/>
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
});
