import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
  
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
    paddingEnd: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnArea: {
    backgroundColor: "green",
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 14
    
  }, 
  btnText:{
    color: '#fff'
  }
})