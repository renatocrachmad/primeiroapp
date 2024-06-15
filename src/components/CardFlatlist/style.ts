import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerInfo: {
    flex: 1,
    backgroundColor: '#F0b114',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    width: 300,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingBottom: 20
  },

  card: {
    gap: 10,
    width: '70%'
  },

  imagemBeast: {
    width: 80,
    height: 80,
    borderRadius: 100
  },

  titleFavorite: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },

  name: {
    color: '#000',
    fontSize: 20,
    width: '80%',
    fontWeight: '700',
  },

  buttonFavorite: {
    position: 'absolute',
    top: 0,
    right: 5,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
});