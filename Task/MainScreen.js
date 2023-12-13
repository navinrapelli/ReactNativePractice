import {View,Text,FlatList,TextInput,StyleSheet} from "react-native"
import { useEffect,useLayoutEffect } from "react";
import { getData } from "./DataPop";
import { useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import ListOutput from "./ListOutput";
import { fetchData } from "./DataPop";
import { addPop, deletePop } from "./redux-pop/SlicePop";
function MainScreen(){


  
    const [theData,setOutput]=useState([]);
    
    const [inpuText,setText]=useState("");
    const [chek,setcheck]=useState("In progress");

     function setTextHandler(enterText){
              setText(enterText);
     }
   
     function renderItem(itemData){
        
        return <ListOutput prop={itemData.item}/>

     }

     

     useLayoutEffect(()=>{
        
    fetchData().then((data)=>{
         return data.json();
    }).then((data)=>{
        console.log(data);
    })
        
        async function getDa(){
         const res=await getData();
        
         console.log(res);
                 if(res.status===200){
                      console.log("yooo");
                      setcheck("Completed")
                 }else{
                    console.log("yooo11111");
                    setcheck("inpro")

                 }

         if(inpuText===""){
        
            setOutput(res.data.data.sort((a,b)=>a.Population-b.Population));
            
         }else{
            setOutput(res.data.data.filter((a)=>a.State.toLowerCase().startsWith(inpuText.toLowerCase())).sort());

         }
         
         
        }
         setTimeout(()=>{
            getDa();
         },1000)
        
    },[inpuText])
    
    return(
        <>
        <View style={MainStyle.main}>
             <Text>Status: {chek}</Text>
             <View style={MainStyle.inpuuu}>
               <Text style={{padding:3}}>Filter</Text> 
               <TextInput style={MainStyle.inputt} onChangeText={setTextHandler} value={inpuText}></TextInput>
             </View>
             <View style={MainStyle.main2}>
                <Text style={[{flex:1},MainStyle.text]}>State</Text>
                <Text style={MainStyle.text}>Population</Text>
                <Text style={MainStyle.text}>Year</Text>
                
             </View>
            <View>
            <FlatList  data={theData} renderItem={renderItem} keyExtractor={(item)=>item['ID State']} />
            </View>
        </View>
        </>
    )
}

export default MainScreen;


const MainStyle=StyleSheet.create({

    main:{
        flex:5,
        padding:10
    },
    inputt:{
        flex:1,
        borderWidth:1,
        padding:10,
        
        
    },
    inpuuu:{
        paddingVertical:20,
        paddingRight:10,
        flexDirection:"row",
        alignItems:"center",
        
    },
    main2:{
        padding:10,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-between"
        
       

    },
    text:{
        
        
        padding:10,
        fontWeight:"bold",
        fontSize:15
        
    }

})