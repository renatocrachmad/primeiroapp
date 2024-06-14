import React from 'react'
import { View, Text } from 'react-native'

interface PropsComponent {
  title: string
}

export function CardFlatlist({title}: PropsComponent){
  return (
    <View>
      <Text>CardFlatlist: {title}</Text>
    </View>
  )
}

