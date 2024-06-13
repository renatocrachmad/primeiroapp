import React from 'react'
import { TextInput, View } from 'react-native'
import { ButtonComponent } from '../../components/ButtonComponent'
import { styles } from './style'
import { TextInputComponent } from '../../components/texInput'


export function Home() {
  return (
    <View style={styles.container}>

      <TextInputComponent
        placeholder='Digite seu email'
      />

      <TextInputComponent
        placeholder='Digite sua senha'
        type={true}
      />

      <ButtonComponent title="Entrar" />
      <ButtonComponent title="Sair" />
    </View>
  )
}
