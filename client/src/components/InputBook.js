import React , { Fragment, useState } from "react";

const InputBook =() => {

  const [ title, setTitle] =useState ("");
  const [ image, setImage] =useState ("");
  const [ description, setDescription] =useState ("");
  const [ writer, setWriter] =useState ("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {title,image,description, writer};
      const response =  await fetch ("http://localhost:5000/books",{
      method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(body)
      });
      //  window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }
  
   return (
        <Fragment>
          <h1 className="text-center mt-5">Reading Pile</h1>
            
            
             <form className="d-flex mt-5" onSubmit ={onSubmitForm}>
              <input type ="text"  className ="form-control " placeholder="Title" value ={title} onChange={e => setTitle(e.target.value)}/>
             {/* <button className ="btn btn-success">Add Book</button> */}
              <input type ="text" className ="form-control" placeholder="Image" value ={image} onChange={e => setImage(e.target.value)}/>
             {/* <button className ="btn btn-success">Add Book</button> */}
              <input type ="text" className ="form-control" placeholder="Description" value ={description} onChange={e => setDescription(e.target.value)}/>
             {/* <button className ="btn btn-success">Add Book</button */}
              <input type ="text" className ="form-control"  placeholder="Writer" value ={writer} onChange={e => setWriter(e.target.value)}/>
             <button className ="btn btn-success">Add Book</button>
             
           </form>
           
      
      
      
       </Fragment>
   )
   
}

export default InputBook;