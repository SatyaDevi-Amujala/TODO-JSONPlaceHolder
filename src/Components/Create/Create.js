import {React,useContext,useState} from 'react';//importing Hooks
import {store} from '../../App';// imporint store fo accessing data
import { ToastContainer, toast } from 'react-toastify';//importing toasts from react-toastify package(npm i react-toastify)
import 'react-toastify/dist/ReactToastify.css';//import css file for toasts
import {Link} from 'react-router-dom';//for navigating from one page to another page
import axios from 'axios'; //axios for api requests(npm i axios)
import './index.css';//for styling

const Create = () => {
  let status=false;
  var Id=null;
  const [Title,setTitle]=useState("")
  const [data,setData]=useContext(store);//using store data

   
 //Whenever you click "create" button, This create handler will execute
  const createHandler=()=>{
    if(!Id){
      toast.success("Createted successfully");//alerts
    }
      else{
        toast.warn("Task Already Created");//alerts 
      }
     
    if(data[0].id > 200){// creating unique id  for newly created data
      Id=data[0].id+1;
      
    }
    else{
     
    }
    //Posting new data into rest API
    axios.post('https://jsonplaceholder.typicode.com/todos',{ userId:1,
    title:Title,
    completed:status}).then(
       
    (arr) => {console.log("JSONDATA",arr.data);
    //Adding newly created data at front of array
  data.unshift(arr.data);
    //data[0].id=Id
             });

  
    



  }
  return (
    <div>
       <center>
        <h1 className="box">Create</h1>
        <div className="container box mr">
    
   
    <div className="form-check border marc ">
      <table>
        {/**/}
        {/*bootstrap Checkbox for getting status of task */}
   <td><input className="form-check-input box " onClick={()=>{status=true}} type="checkbox" value="" /></td>
    {/*bootstrap inputfield for getting  new task*/}
   <td><input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Enter Task"name="title" value={Title} className=" form-control form-control-lg  wd-50 text-start  mt mdl "></input></td>
   
   </table>
<table>
   {/*Create Button*/}
   <td><button className="btn btn-primary" onClick={()=>{createHandler()} }>Create</button><ToastContainer /></td>
    {/*For Going back to Home page*/}
   <td><Link style={{margin:"20px"}} to={'/'}className="btn btn-secondary " >Close</Link></td>
   </table> 
   </div></div>
      </center>
    </div>
  )
}

export default Create
