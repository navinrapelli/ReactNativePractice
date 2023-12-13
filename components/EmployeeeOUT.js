import { View,Text, Button ,StyleSheet } from "react-native";
import Form from "./EmployeeAddForm";
import { useState } from "react";
function EmployeeeOUT({id,name,age,gender,profession,deleteHandler}){

    const [modelVisible,setModelVisible]=useState(false);
  
  function handler(){

   setModelVisible(true);
  }

  function cancelHandler(){
    setModelVisible(false);
  }

        const Data={
            id:id,
            name:name,
            age:age,
            gender:gender,
            profession:profession
        }

    
    return(

    <View>
        <View>
        <Form isVisible={modelVisible} cancel={cancelHandler}  previous={Data}  />
        </View>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{gender}</Text>
        <Text>{profession}</Text>
     <View>
        <Button title="Edit" onPress={handler}/>
        <Button title="Delete" onPress={deleteHandler}/>
     </View>

    </View>
    );


}

export default EmployeeeOUT;

const EmployeeeOUTStyle=StyleSheet.create({



})