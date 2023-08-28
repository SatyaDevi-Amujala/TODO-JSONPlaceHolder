import {React,useContext, useState} from 'react';//importing Hooks
import { ToastContainer, toast } from 'react-toastify';//importing toasts from react-toastify package(npm i react-toastify)
import 'react-toastify/dist/ReactToastify.css';//import css file for toasts
import { useLocation,Link } from 'react-router-dom';//for navigating from one page to another page
import {store} from '../../App';// imporint store fo accessing data
import axios from 'axios';//axios for api requests(npm i axios)
import './index.css';//for styling

const Detail = () => {
 const [data,setData]=useContext(store);//using store data
    let {search}=useLocation();
    let params=new URLSearchParams(search);//For getting query params data
    const [title,setTitle]=useState(params.get('title'))

//Whenever you click delete button, This Delete handler will execute
    const deleteHandler=(id)=>{
      if(title){
      toast.warn("Deleted successfully");//alerts
    setTitle('')}
      else{
        toast.error("Task Already Deleted"); //alerts
      }
      //Deleting selected data from rest API
       axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
       
         (arr) => {console.log("JSONDATA",arr.data)
  
          
       //Using filter we can delete selected data from store
          data.map((item)=>console.log("iddd",item.id,id))
    const ndata=data.filter((item)=>item.id.toString()!==id.toString());
    setData(ndata);//adding filtered data into store
    }

       ); }
    return (
    <div>
       <center>
       
       <h1 className="md">Details</h1>
    
     <div className="container w-50 border pd rounded mr">
    
 {params.get('status').toString()==="true"?
 <div className="form-check  rounded mar ">
   {/*bootstrap Checkbox for getting status of task */}
    {/*if status of Task  is Completed this checkbox will be display in web page*/}
<div><input className="form-check-input box " type="checkbox" value=""checked /><span><h4 className=" text-start   border  rounded mdl">{title}</h4></span>
</div>
</div>:

<div className="form-check  mar ">
  {/*bootstrap Checkbox for getting status of task */}
    {/*if status of Task  is not Completed this checkbox will be display in web page*/}
<div><input className="form-check-input box "  value="" /><span><h4 className=" text-start   border rounded mdl">{title}</h4></span>
</div></div>}
<table>
  {/*Delete Button*/}
<td><button className="btn btn-danger" onClick={()=>deleteHandler(params.get('id'))}>Delete</button>
<ToastContainer /></td>
{/*For Going back to Home page*/}
<td><Link style={{margin:"20px"}} to={'/'}className="btn btn-secondary " >Close</Link></td>
</table>
</div>
      </center>
    </div>
  )
}

export default Detail
