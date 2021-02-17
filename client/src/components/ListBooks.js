import React, { Fragment , useEffect, useState} from "react";
import EditBook from "./EditBook"



const ListBooks = () => {
  const [books, setBooks]= useState([]);

  // delete book function

  const deleteBook =async (id) => {
    try {
      const deleteBook = await fetch(`http://localhost:5000/books/${id}`,{
        method:"DELETE"
      })
      setBooks(books.filter(book => book.book_id !== id));
    } catch (err) {
       console.error(err.message);
    }
  }

  const getBooks = async () => {
    try {
       const response = await fetch("http://localhost:5000/books")
       const jsonData =  await response.json()
       console.log(jsonData);
       setBooks(jsonData)
    } catch (err) {
      console.error(err.message)
      
    }
  }
  useEffect(() => {
    getBooks();
  },[])

   
  
  return <Fragment> 


<div className="container">
     
      {books.map(book => (
        <div className= "item">
          
          <h4 className="mt-5"key={book.book_id}>{book.title}</h4>
          <br />
          <img height="150em" src={book.image} 
          alt="Book"/> 
          <br />
          {/* {book.description} */}
          <h5 className="mt-5">
            By: {book.writer}
          </h5>
          <br />
          {/* <ShowBook></ShowBook> */}

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Show Book
        </button>
        


     <div class="modal" id="myModal">
       <div class="modal-dialog">
        <div class="modal-content">

     
      {/* <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div> */}

     
      <div class="modal-body">
        {/* <button type="button" class="btn btn-danger"  onClick={() =>
          
          EditBook(book.book_id) }>
          update</button> */}
        <h4 className="mt-5">{book.title}</h4>
          <br />
        <img height="150em" src={book.image} 
          alt="Book"/> 
          <br/>
         <p>{book.description}</p>
      </div>

      
      <div class="modal-footer">
         <button type="button" class="btn btn-warning"  onClick={() =>
          
          deleteBook(book.book_id) }>
          Delete</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
        </div>
      ))}
      
    </div>
    
  </Fragment>
};

export default ListBooks;