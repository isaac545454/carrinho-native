import 
{ 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
} 
from 'react-native'
import {styles} from './style'
import { useState } from "react";

interface propsData{
    id: string;
    name: string;
    price: number;
    URL: string;
    total: number;
    amount: number;
    addAmount: ()=>Void;
    remove: ()=> Void;
}


export default function CartCard(
  {
    name, 
    id, 
    price, 
    URL, 
    total, 
    amount, 
    addAmount, 
    remove
  }: propsData) {

  const [Amount, setAmount] = useState(amount) 

  const handleIncrement = ()=>{
    addAmount()
    setAmount(item => item+1)
  }
  const handleDecrement = ()=>{
    remove()
    setAmount(item => item-1)
  }

  return (
    <View style={styles.container}>
      <Image
       source={{uri: URL}}
       style={{width: 100, height: 100}}
      />
      <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
      </View>

      <View style={styles.amount}>
      <TouchableOpacity 
      style={styles.amountSub}
      onPress={handleDecrement}
      >
        <Text style={styles.text}>-</Text> 
      </TouchableOpacity>

      <Text >{Amount}</Text>
      <TouchableOpacity 
      style={styles.amountSoma}
      onPress={handleIncrement}
      >
        <Text style={styles.text}>+</Text>  
      </TouchableOpacity>
      </View>

    </View>
  )
}

