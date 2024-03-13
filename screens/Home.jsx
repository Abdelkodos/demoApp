import React, { useState } from 'react'
import { Button, StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native'
import TodoItem from '../components/TodoItem'
import TodoForm from '../components/TodoForm'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { store } from '../store.js'


export default function Home({ navigation }) {
  const [todos, setTodos] = useState([
      // { text: "do homework", key: '1'},
      // { text: "do homework", key: '2'},
      // { text: "do homework", key: '3'},
      // { text: "do homework", key: '4'},
      // { text: "do homework", key: '5'},
      // { text: "do homework", key: '6'},
      // { text: "do homework", key: '7'},
      // { text: "do homework", key: '8'},
      // { text: "do homework", key: '9'},
      // { text: "do homework", key: '10'},
      // { text: "do homework", key: '11'},
      // { text: "do homeworks", key: '12'},
    ])

  const state = store.getState()
  const data = state.data
  // const count = useSelector((state) => state.counter.value)

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const addTodo = (input) => {
    setTodos(prevTodos => {
      if ( todos.length !== 0 )
        return [ ...prevTodos, { text: input, key: (Number(todos[ todos.length - 1 ].key) + 1).toString() } ]
      else
        return [ ...prevTodos, { text: input, key: '1' } ]
    })
  }

  const navToStat = () => navigation.push('Statistics')

  return (
    <View>
      {/* <Text>{count}</Text> */}
      <View style={styles.container}>
        <View style={styles.content}>
          {/* add todo form */}
          <TodoForm
            submitHandler={ addTodo }
          />
          <Text></Text>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        {/* Navigation Part 
          <View style={{
            height: 80,
            backgroundColor: "#FFD9CB",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <View 
            style={{
              alignItems: 'center',
              left: 20
            }}
          >
            <Image
              style={{
                width: 75,
                height: 75
              }}
              source={require('../assets/homePng.png')}
            />
            <View style={{ width: 70, height: 4, backgroundColor: 'coral' }}>

            </View>
          </View>
          {/ navigate to statistics screen /}
          <TouchableOpacity
            onPress={navToStat}
          >
            <View 
              style={{
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  width: 58,
                  height: 58
                }}
                source={require('../assets/sttc.png')}
              />
              <Text style={{ color: "#fff", fontSize: 18 }}>Statistics</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
})