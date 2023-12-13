import axios from 'axios'

export async function getData(){

    const response=await axios.get("https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest");
    
      
    console.log(response);
    console.log(response.data);
    console.log(response.status);
    return response;
}

export function fetchData(){
     const ress=fetch("https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest");
     console.log(ress);

     return ress;

     
}
