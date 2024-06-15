import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { CardFlatlist } from '../../components/CardFlatlist'
import { TextInputComponent } from '../../components/TextInput'
import { styles } from './style'

type PropsApi = {
  id: string;
  name: string;
  images: string[];
}

export function Home() {

  const [dataApi, setDataApi] = useState<PropsApi[]>([]);
  const [filterName, setFilterName] = useState<string>('');

  const loadApi = async () => {
    const url = 'https://narutodb.xyz/api/akatsuki';
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDataApi(data.akatsuki)
    } 
    catch(error) {
      console.log('Erro ao buscar a api', error)
    }
  };

  const handleSearch = (name: string) => {
    setFilterName(name)
  }

  const resulFilters = dataApi.filter(name => {
    const inputName = filterName.toLocaleLowerCase();
    const nameApi = name.name.toLowerCase();
    return nameApi.includes(inputName);
  });


  useEffect(() => {
    loadApi();
  }, []);

  return (
    <View style={styles.container}>
      
      <TextInputComponent 
        placeholder='Buscar...'
        onChangeValue={handleSearch}
      />

      <FlatList
        data={resulFilters}
        renderItem={({ item }) =>
          <CardFlatlist comovaireceber={item}/>
        }
        keyExtractor={item => item.id}
      />
      {dataApi.length <= 0 && (
        <Text>Loading...</Text>
      )}
    </View>
  )
}
