import React,{useState,useEffect} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";
const App=()=> {
  const [user,setuser]=useState({
    RollNo:"",
    Name:"",
    Address:"",
    ContactNumber:"",
    Email:""
  })
  const [data,setdata]=useState([]);
  // const {_id}=data[0];
    useEffect(()=>{
        axios.get("http://localhost:4000/studetails")
        .then((res)=>{
            setdata(res.data);
        
          
        }
    
        )        
       
    },[])
  const change=(e)=>{
     let name,value;
     name=e.target.name;
     value=e.target.value;
     setuser({...user,[name]:value})

}  

const submit=async(e)=>{
    e.preventDefault();
    const result=await axios.post("http://localhost:4000/stuinfo",user)
    console.log(result.data);
    setuser({
      RollNo:"",
      Name:"",
      Address:"",
      ContactNumber:"",
      Email:""

    })

  }


return (
  
    // console.log(_id),
    <div class = "form">
    <form  class="form1">

    <div class="form-group">
    <label class=" label" >RollNo</label>
    <input type="number" class="form-control"  name="RollNo" value={user.RollNo} onChange={change}  placeholder="Enter your roll no"/>
  </div>


  <div class="form-group">
    <label class=" label">Name</label>
    <input type="text" class="form-control" name="Name" value={user.Name}  onChange={change}  placeholder="Enter your name"/>
  </div>
  


  <div class="form-group">
    <label  class=" label">Address</label>
    <input type="text" class="form-control" name="Address" value={user.Address}  onChange={change}  placeholder="Enter your address"/>
  </div>
  


  <div class="form-group">
    <label class=" label">Contact Number</label>
    <input type="number" class="form-control" name="ContactNumber" value={user.ContactNumber}  onChange={change}  placeholder="Enter your contact number"/>
  </div>
  


  <div class="form-group">
    <label class=" label">Email address</label>
    <input type="email" class="form-control" name="Email" value={user.Email} onChange={change} placeholder="Enter email"/>
   </div>
   <br/>


  
  
  <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
</form>
</div>
   
       
  );
}

export default App;
