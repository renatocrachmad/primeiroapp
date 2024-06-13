import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

interface PropsComponent {
  placeholder: string;
  type?: boolean;
}

export function TextInputComponent({ placeholder, type }: PropsComponent) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={"#000"}
      style={styles.styleInput}
      secureTextEntry={type}      
    />
  )
}