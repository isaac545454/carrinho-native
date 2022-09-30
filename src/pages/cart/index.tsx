import 
{ 
  StyleSheet, 
  Text, 
  View, 
  FlatList 
} 
from 'react-native'
import {useContext} from 'react'
import { styles } from './style'
import { CartContext } from '../../context/cartContext';
import CartCard from '../../components/cartCard/index'

export default function Cart() {
  const 
  { 
    cart, 
    AddItemCart, 
    RemoveItemCart,
    total 
  } = useContext(CartContext)
  return (
    <View style={styles.container}>
      <FlatList
      data={cart}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item})=>(
        <CartCard 
        name={item.name} 
        id={item.id} 
        price={item.price} 
        URL={item.URL} 
        total={item.total} 
        amount={item.amount}
        addAmount={()=>AddItemCart(item)}
        remove={()=>RemoveItemCart(item)}
        />
        )
      }
      ListEmptyComponent={()=>(
        <View style={styles.empty}>
        <Text style={styles.emptyText}>
          não há produtos no carinho
        </Text>
        </View>
      )}
      ListFooterComponent={()=><Text style={styles.total}>total: {total}</Text>}
      />
    </View>
  )
}

