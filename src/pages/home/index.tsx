import React, { useState } from 'react'
import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from 'react-native'
import { ButtonComponent } from '../../components/ButtonComponent'
import { styles } from './style'
import { TextInputComponent } from '../../components/TextInput'
import Banner from '../../assets/banner.webp'


export function Home() {

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
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <ButtonComponent title="Sair" onChangeValue={()=>console.log('sair')} />

          
      </TouchableWithoutFeedback>
    </View>
  )
}
