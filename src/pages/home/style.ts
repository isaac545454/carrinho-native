import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 15,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  dot:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4
  },
  dotText:{
    fontSize: 12,
  }
})