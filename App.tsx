import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Routes from './src/routes/index'
import CartProvider from "./src/context/cartContext";

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
      <Routes />
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      </CartProvider>
    </NavigationContainer>
  );
}

