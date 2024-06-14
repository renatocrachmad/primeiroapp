import React, { useState } from 'react'
import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ButtonComponent } from '../../components/ButtonComponent'
import { TextInputComponent } from '../../components/TextInput'
import {Banner} from '../../assets/banner.webp'
import { styles } from './style'

export function Login() {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  const handlePassword = (value: string) => {
    setPassword(value)
  }

  const handleLogin = () => {
    setPassword(password);
    setEmail(email);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.logo} source={Banner} alt="Banner tela login"/>

        <TextInputComponent
          placeholder='Digite seu email'
          onChangeValue={handleEmail}
        />

        <TextInputComponent
          onChangeValue={handlePassword}
          placeholder='Digite sua senha'
          type={true}
        />

        <ButtonComponent title="Entrar" onChangeValue={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  )
}

