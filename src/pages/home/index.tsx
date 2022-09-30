import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  FlatList, 
  TouchableOpacity, 
} from 'react-native'
import {styles} from './style'
import { data } from '../../data/index'
import { useState, useEffect, useContext } from "react";
import { Feather } from '@expo/vector-icons' 
import Card from "../../components/card/index";
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../context/cartContext'

interface data{
  id: string;
  name: string;
  price: number;
  URL: string;
}


export default function Home() {
  const {cart, AddItemCart } = useContext(CartContext)
  const [produtos, setProdutos] = useState<data[]>(data)
  const navigation = useNavigation()
  
  const handleAddCart = (item)=>{
    AddItemCart(item)
  }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.cartContent}>
      <Text style={styles.title}>Lista de produtos</Text>

      <TouchableOpacity 
      style={styles.cartButton}
      onPress={()=>navigation.navigate("Cart")}
      >
        {cart.length === 0 ? (<View />):(
        <View style={styles.dot}>
          <Text style={styles.dotText}>
            {cart?.length}
          </Text>
        </View>)
       }
        <Feather name="shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
      </View>

      <FlatList
      style={styles.list}
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Card 
      name={item.name} 
      price={item.price} 
      URL={item.URL}
      handleToCart={()=>handleAddCart(item)}
      /> }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
      />



    </SafeAreaView>
  )
}

