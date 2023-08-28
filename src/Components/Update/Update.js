import {React,useContext,useState} from 'react';//importing Hooks
import {store} from '../../App';// imporint store fo accessing data
import { useLocation,Link } from 'react-router-dom';//for navigating from one page to another page
import { ToastContainer, toast } from 'react-toastify';//importing toasts from react-toastify package(npm i react-toastify)
import 'react-toastify/dist/ReactToastify.css';//import css file for toasts
import axios from 'axios';//axios for api requests(npm i axios)
import './index.css';//for styling

const Update = () => {
 
  let {search}=useLocation();
  let params=new URLSearchParams(search);//For getting query params data
  var status=params.get('status');
  const [data,setData]=useContext(store);
  const [Title,setTitle]=useState(params.get('title'))
  
  //Whenever you click "update" button, This update handler will execute
  const updateHandler=()=>{
    
    toast.info("Updated successfully");//alerts
    if(params.get('id')<200){
      //Updating selected data  
    axios.put(`https://jsonplaceholder.typicode.com/todos/${params.get('id')}`,{ userId:1,
    id:params.get('id'),
    title:Title,
    completed:status}).then(
       
    (arr,err) =>{ console.log("JSONDATA",arr.data,err);
    
    });}
//Using map we can update selected data 
   data.map(item=>{
    
if(item.id.toString()==params.get('id').toString()){
  item.title=Title;
  item.completed=status;
}


    })
   
  };
  
  return (
    <div>
       <center>
        <h1 className="box">Update</h1>
        <div className="container box mr">
    
   
    <div className="form-check border marc ">
      <table>
   {console.log("checkbox",status)}{status.toString()==="true"?
    <td>{/*bootstrap Checkbox for getting status of task */}
    {/*if status of Task  is Completed this checkbox will be display in web page*/}
    <input className="form-check-input box " onClick={()=>{status=false}} type="checkbox"  value='' checked /></td>:
    <td>  {/*if status of Task  is not Completed this checkbox will be display in web page*/}
    <input className="form-check-input box " onClick ={()=>{status=true}} type="checkbox"  value='' /></td>}
   <td><input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Enter Task"name="Title" value={Title} className=" form-control form-control-lg  wd-50 text-start  mt mdl "></input></td>
   
   </table>
   <table>
<td>
  {/*Update Button*/}
   <button className="btn btn-primary" onClick={()=>{updateHandler()} }>Update</button><ToastContainer /></td>
   {/*For Going back to Home page*/}
   <td> <Link style={{margin:"20px"}} to={'/'}className="btn btn-secondary " >Close</Link></td>
   </table>
   </div></div>
      </center>
    </div>
  )
}

export default Update
