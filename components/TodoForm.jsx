import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'

export default function TodoForm ({ submitHandler }) {
  const [ input, onChangeInput ] = useState()


  return (
    <View>
      <TextInput 
        placeholder="Enter your next todo"
        value={input}
        onChangeText={(text) => onChangeInput(text) }
        style={ input != null ? { height: 60, borderColor: "coral", borderWidth: .3, margin: 6, padding: 8 } : { height: 60, borderColor: "coral", borderWidth: .3, margin: 6, padding: 8, color: "red" } }
      />
      <Button 
        title="add todo"
        onPress={ () => {
            if (input != '')
              submitHandler(input)
            onChangeInput('')
          }
        }
        color="coral"
      />
    </View>
  )
}