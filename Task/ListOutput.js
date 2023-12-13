import { Text,View,StyleSheet,Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons"
function ListOutput({prop}){

    return(
        <View style={StyleOutput.main}>
                
                <Text style={[{flex:1},StyleOutput.text]}>{prop.State}</Text>
                <Text style={StyleOutput.text}>{prop.Population}</Text>
                <Text style={StyleOutput.text}>{prop.Year}</Text>
            
        </View>
    )
}

export default ListOutput;

const StyleOutput=StyleSheet.create({
   
    main:{
        padding:10,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-between"
        
       

    },
    text:{
        
        borderWidth:1,
        padding:10
        
    }

})