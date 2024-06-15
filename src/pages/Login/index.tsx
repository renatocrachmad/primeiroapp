import React, { useState } from 'react'
import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ButtonComponent } from '../../components/ButtonComponent'
import { TextInputComponent } from '../../components/TextInput'
import Banner from '../../Assets/banner.webp'
import { useNavigation } from '@react-navigation/native'
import {styles} from './style'

export function Login() {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigator = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  const handlePassword = (value: string) => {
    setPassword(value)
  }

  const handleLogin = () => {
    navigator.navigate("StackHome", {name: "Home"});
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

        <ButtonComponent title="Entrar" handleOnChange={handleLogin}/>
      </View>
    </TouchableWithoutFeedback>
  )
}

