import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './components/store';
import Addremove from './components/Addremove';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaleCategory from './screens/MaleCategory';
import { NavigationContainer } from '@react-navigation/native';
import FemaleCategory from './screens/FemaleCategory';
import Form from './components/EmployeeAddForm';
import { useState } from 'react';
import { storeRed } from './redux/store';
import { useDispatch } from 'react-redux';
import { addEmployee } from './redux/Slices-Create';
import MainScreen from './Task/MainScreen';
import Favorite from './Task/FavoritesScreen';
import { storePop } from './Task/redux-pop/StorePop';
const Tab=createBottomTabNavigator();
    
export default function App() {
  const [modelVisible,setModelVisible]=useState(false);
  
  function handler(){

   setModelVisible(true);
  }

  function cancelHandler(){
    setModelVisible(false);
  }

  
  return (
    <>
    <MainScreen/>
    {/* <Provider store={storePop}>
    <NavigationContainer>
     <Tab.Navigator>
        <Tab.Screen name='MainScreen' component={MainScreen}/>
        <Tab.Screen name='Favorite' component={Favorite}/>
       </Tab.Navigator>
    </NavigationContainer>
    </Provider> */}
    {/* <Provider store={storeRed}>
    <Form isVisible={modelVisible}  cancel={cancelHandler} />
    <NavigationContainer>
    
    <Tab.Navigator screenOptions={{
      headerRight:()=><Button title='add' onPress={handler} />
    }}>
        <Tab.Screen name='MaleCategory' component={MaleCategory}/>
        <Tab.Screen name='Female' component={FemaleCategory}/>
    </Tab.Navigator>
    </NavigationContainer>
    </Provider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    margin:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
