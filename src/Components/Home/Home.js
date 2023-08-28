import {React,useContext} from 'react';//importing Hooks
import {store} from '../../App';// imporint store fo accessing data
import {Link} from 'react-router-dom';//for navigating from one page to another page


const Home = () => {
    
    const [data,setData]=useContext(store);//using store data


  return (
    <div>
  
       <center>
       <div style={{width:"70%",align:"center"}}>
        <h1 style={{margin:"25px"}}>To Do</h1>
        <h3>Total tasks:{data.length}</h3><br></br>  {/*No of tasks are in the Store*/}
          {/*For adding New Data Click on this Button*/}
        <center> <Link  to={'/Create'}className="btn btn-primary " >Click to Add  New Task</Link>
  {/*Displaying All Tasks,their Status and (details & update buttons for each task)*/}
      </center>
        <table className="table table-striped table-responsive w-5 ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">status</th>
      <th scope="col">Action1</th>
      <th scope="col">Action2</th>
    </tr>
  </thead>
  <tbody>
  {
        data.map(item =>
    <tr>
      <th scope="row">{data.indexOf(item)+1}</th>
      <td><h5>{item.title}</h5></td>
      <td>{item.completed?<h4>completed</h4>:<h4> not completed</h4>}</td>
        
      <td>
         
        {/*Passing Data to Details Page through Query params(through Routes))*/}
        
        {/*Detail Button*/} 
        <Link  to={`/Detail?title=${item.title}&status=${item.completed}&id=${item.id}`}className="btn btn-secondary" >Details</Link></td>
      {/*Update Button*/} 
      <td><Link  to={`/Update?title=${item.title}&status=${item.completed}&id=${item.id}`}className="btn btn-info" >Update</Link></td>
      
    </tr>)}
  
  </tbody>
</table> 
</div>     
       
      </center>
    </div>
  )
}

export default Home
