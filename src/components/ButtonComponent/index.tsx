import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

interface PropsComponent {
  title: string;
}

export function ButtonComponent({ title }: PropsComponent) {

  return (
    <View>
      <TouchableOpacity style={styles.buttonstyles}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
