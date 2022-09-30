import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 20,    
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
  amount: {
    flexDirection: 'row',   
    justifyContent: 'center',
  },
  amountSoma:{
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 25,
    width: 25,
    backgroundColor: 'green',
    borderRadius: 15,
  },
  amountSub:{
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 25,
    width: 25,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  text: {
    color: '#fff',
  }

})