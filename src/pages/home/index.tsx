import React, { useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { CardFlatlist } from '../../Components/CardFlatlist'
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'

export function Home() {

  const navigator = useNavigation();

  const data = [
    { id: 1, title: 'Titulo1' },
    { id: 2, title: 'Titulo2' },
    { id: 3, title: 'Titulo3' },
    { id: 4, title: 'Titulo4' },
    { id: 5, title: 'Titulo5' },
    { id: 6, title: 'Titulo6' },
    { id: 7, title: 'Titulo7' },
    { id: 8, title: 'Titulo8' },
    { id: 9, title: 'Titulo9' },
  ]

  const handleLogout = () => {
    navigator.navigate("StackLogin", {name: "Login"});
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="Sair" onPress={handleLogout} />

      <FlatList
        data={data}
        renderItem={({ item }) =>
          <CardFlatlist {...item}/>
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

