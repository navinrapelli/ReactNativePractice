import {View,Text,StyleSheet,Button,TextInput} from 'react-native'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { add,remove,incrementByValue} from './Slices';
function Addremove(){
    const [inputValue,setInputValue]=useState(0)
    const valuee=useSelector((state)=>state.counter.value);
      
    const dispatch=useDispatch();

    function getValue(enterText){
        setInputValue(enterText);
    }
    
    return(
       <View style={addRemoveStyle.mainContainer} >
            <View style={addRemoveStyle.firstHalfContenet}>
               <Button title='+' onPress={()=>dispatch(add())} />
                <Text style={addRemoveStyle.input}>{valuee}</Text>
               <Button title='-' onPress={()=>dispatch(remove())} />
            </View>
            <View style={addRemoveStyle.firstHalfContenet}>
                <TextInput style={addRemoveStyle.input} value={inputValue} onChangeText={getValue}></TextInput>
                <Button title='add input' onPress={()=>dispatch(incrementByValue({value:parseInt(inputValue)}))}/>
                <Button title='add By 6'/>
            </View>
       </View>
    )
}

export default Addremove;


const addRemoveStyle=StyleSheet.create({
    mainContainer:{
        flex:1
        
       
    },
    firstHalfContenet:{
       margin:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center"
    },
    input:{
        padding:20,
        marginHorizontal:5,
        backgroundColor:"orange"
    }


})