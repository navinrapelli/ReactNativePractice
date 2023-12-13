import {View,Text, StyleSheet,FlatList} from 'react-native'
import EmployeeeOUT from '../components/EmployeeeOUT';
import { DUMMY_DATA } from '../redux/Slices-Create';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

import {deleteEmployee} from '../redux/Slices-Create';
function MaleCategory(){

    const contextt=useSelector((state)=>state.dataEmployeee);

    console.log(contextt);
    const dispatch=useDispatch();

    const maleData=contextt.filter((male)=>male.gender=="male");

     function deleteHandler(id){
           console.log(id);
          dispatch(deleteEmployee({id:id}));

     }
    function maleHandler(itemData){
        return <EmployeeeOUT {...itemData.item} deleteHandler={deleteHandler.bind(this,itemData.item.id)} />
    }
    return(

        <View>
            <FlatList data={maleData} renderItem={maleHandler} keyExtractor={(item)=>item.id}/>
        </View>

    );


}
import Form from '../components/EmployeeAddForm';

export default MaleCategory;

const MaleStyle=StyleSheet.create({


})