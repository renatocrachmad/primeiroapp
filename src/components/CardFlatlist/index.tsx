import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style';

type PropsApi = {
  id: string;
  name: string;
  images: string[];
}

interface PropsComponent {
  comovaireceber: PropsApi;
}

export function CardFlatlist({comovaireceber}: PropsComponent){
  return (
    <View style={styles.containerInfo}>
      <View>
        <Image style={styles.imagemBeast} source={{ uri: comovaireceber.images[0] }} alt="Foto perfil akatsuki" />
        <Text style={styles.name}>{comovaireceber.name}</Text>
      </View>
    </View>
  )
}
