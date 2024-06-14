import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

interface PropsComponent {
  title: string;
  onChangeValue: (email: string, password: string) => void;
}

export function ButtonComponent({ title, onChangeValue }: PropsComponent) {

  return (
    <>
      <TouchableOpacity style={styles.buttonstyles} onPress={() => onChangeValue}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  )
}
