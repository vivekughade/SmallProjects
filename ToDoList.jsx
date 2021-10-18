import React, { useState } from "react";
import "../style.css";
const ToDoList = () =>{
    
    const[data,setData] = useState("");
    const getData = (event) =>{
        setData(event.target.value);
    }

    const[datac,aData] = useState([ ]);
    const bData = () =>{
        aData((pval)=>{
                return [...pval, data];
        });
        setData("");
    }

    const deldata = (id) =>{
            aData((pval)=>{
                    return pval.filter((av,index)=>{
                            return index !== id;
                            
                    })
            })
    }

    return (
        <>
            <div  className = "todolist">
                    <h3>Write your task here...</h3>
                    <span><input type="text" onChange={getData} value={data}/> 
                    <span onClick={bData}  className ="far fa-plus-square"/>
                    </span>
                   
                    
                    <br />
                    
            {  datac.map((e,index)=>{
                return (  <>
                        <div className="box">
                        <li key={index} id={index}>{e}</li>
                        <i className="far fa-trash-alt" onClick = {()=>{
                                  deldata(index);
                        }}  ></i>
                    </div>
               </> )
            })
                    
}        

              </div>
        </>
    )
}

export default ToDoList;