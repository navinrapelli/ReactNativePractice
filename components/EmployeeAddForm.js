import { View ,Text,Modal,Button,TextInput} from "react-native";
import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/Slices-Create";
import { updateEmployee } from "../redux/Slices-Create";
function Form({isVisible,cancel,previous}){

 var id;
       console.log(isVisible);
       console.log(previous);
       const dispatch=useDispatch();

        const [inputValues,setInputValues]=useState({
            name:previous?previous.name:"",
            age:previous?previous.age:"",
            gender:previous?previous.gender:"",
            profession:previous?previous.profession:""
        })

        function inputValuesHandler(indentifier,enterText){

                 setInputValues((currentValue)=>{
                     return{
                        ...currentValue,
                        [indentifier]:enterText
                     }
                 })

                 
        }

       

        if(previous){
           id=previous.id
        }else{
            id=Math.floor(Math.random() * 100).toString();
        }
        
        const inputData={
            name: inputValues.name,
            age: inputValues.age,
            gender:inputValues.gender,
            profession:inputValues.profession
        }
        function multiCalls(){
            if(previous){
              console.log("Edittt");
              upDateHandler();
            }else
            {addEmployeeHandler();}
            
            cancel();
        }
        
        function upDateHandler(){

               dispatch(updateEmployee({id,...inputData}))
        }
        function addEmployeeHandler(){
           
            
            dispatch(addEmployee({id:id,...inputData}));
               
        }
        

    return(

        <Modal visible={isVisible} animationType="slide">
             <View  style={{flex:1}}>
                <View>
                    <View>
                      <Text>name</Text>
                      <TextInput value={inputValues.name} onChangeText={inputValuesHandler.bind(this,"name")}/>
                      <Text>error</Text>
                   </View>
                   <View>
                        <Text>age</Text>
                        <TextInput value={inputValues.age} onChangeText={inputValuesHandler.bind(this,"age")}/>
                        <Text>error</Text>
                   </View>
                   <View>
                        <Text>gender</Text>
                        <TextInput value={inputValues.gender} onChangeText={inputValuesHandler.bind(this,"gender")}/>
                        <Text>error</Text>
                   </View>
                   <View>
                        <Text>profession</Text>
                        <TextInput value={inputValues.profession} onChangeText={inputValuesHandler.bind(this,"profession")}/>
                        <Text>error</Text>
                  </View>
               </View>
               <View>
                {previous&&(
                    <Button title="Edit" onPress={multiCalls} />
                )}
                {!previous&&(
                    <Button title="Add" onPress={multiCalls} />
                )}
                 
                 <Button title="cancel" onPress={()=>{cancel()}}/>
               </View>
             </View>

          
        </Modal>
       

    );
}

export default Form;