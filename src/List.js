import axios from "axios"
import React,{useState,useEffect} from 'react'


const List = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/studetails")
        .then((res)=>{
            setdata(res.data);
        
          
        }
    
        )        
       
    },[])

    const remove=(val)=>{
        
      // axios.delete(`http://localhost:4000/studelete/${val}`).then((res)=>{
      //     console.log(res)
      // })
      console.log(`hello ${val}`)
    } 
    return (
       
       
       
      console.log(data),
      
        <table class="table">
        <thead>
          <tr>
            <th scope="col"> RollNo</th>
            <th scope="col"> Name</th>
            <th scope="col"> Address</th>
            <th scope="col">ContactNumber</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
       {
          
           data.map((val)=>{
             const {_id}=val;
               return(
                 console.log(_id),
                <tr>
            <th scope="row">{val.RollNo}</th>
            <td>{val.Name}</td>
            <td>{val.Address}</td>
            <td>{val.ContactNumber}</td>
            <td>{val.Email}</td>
            <button onClick={remove(_id)}>delete</button>
          </tr>
               )
           })
       }
         
        </tbody>
      </table>   
       
    )
}

export default List
 