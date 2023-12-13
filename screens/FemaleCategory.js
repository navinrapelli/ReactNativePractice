import { View ,Text,StyleSheet,FlatList} from "react-native";
import EmployeeeOUT from "../components/EmployeeeOUT";
import { DUMMY_DATA } from "../redux/Slices-Create";
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/Slices-Create";
import Form from "../components/EmployeeAddForm";
function FemaleCategory(){
  
    const context=useSelector((state)=>state.dataEmployeee);
    const dispatch=useDispatch();

    function deleteHandler(id){
        console.log(id);
       dispatch(deleteEmployee(id));

  }
  const femaleData= context.filter((female)=>female.gender=="female");
    function feMale(itemData){
        return <EmployeeeOUT {...itemData.item} deleteHandler={deleteHandler.bind(this,itemData.item.id)} />
    }
    return(

        <View>
            <FlatList data={femaleData} renderItem={feMale} keyExtractor={(item)=>item.id}/>
        </View>

    );
}

export default FemaleCategory;

const FemaleCategoryStyle=StyleSheet.create({


})