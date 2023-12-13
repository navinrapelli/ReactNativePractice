import { View } from "react-native";
import Form from "../components/EmployeeAddForm";
import { useState } from "react";
function ManageEmployee({isVisible}){
    const [modelVisible,setModelVisible]=useState(false);


    if(isVisible===true){
       handler();
    }
  
    function handler(){
        setModelVisible(true);
    }
  
     
    
    function cancelHandler(){
      setModelVisible(false);
    }
    return(

        <View>
           <Form isVisible={modelVisible}  cancel={cancelHandler} />
        </View>

    )


}
export default ManageEmployee;