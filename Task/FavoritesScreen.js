import { View,Text,FlatList } from "react-native";
import ListOutput from "./ListOutput";
import {useSelector } from "react-redux";
function Favorite(){
      const theData=useSelector((state)=>state.PopMain);
      console.log(theData);
    function renderItem(itemData){
        return <ListOutput prop={itemData.item}/>
    }
    return(
        <>
    <View>
        <Text>Your Favorite States</Text>
    </View>
    <FlatList  data={theData} renderItem={renderItem} keyExtractor={(item)=>item['ID State']} />
    </>
    )
}


export default Favorite;