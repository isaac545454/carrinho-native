import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,  
} from 'react-native'
import React from 'react'
import { styles } from './style'

interface data{
  name: string;
  price: number;
  URL: string;
  handleToCart: ()=>Void;
}


export default function Card({name, price, URL, handleToCart}: data) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
      source={{uri: URL}}
      style={{width: 100, height: 100}}
      />

      <View style={styles.name}>
      <Text>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
       
       <TouchableOpacity style={styles.btnArea} onPress={handleToCart}>
          <Text style={styles.btnText}>+</Text>
       </TouchableOpacity>
      
      </View>
    </View>
  )
}

