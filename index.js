const express = require("express")
const app = express();
const cors = require('cors');
const pool = require("./db");
const path = require("path");
const { appendFile } = require("fs");
const _dirname = path.resolve(path.dirname(''));

const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined



//middleware

app.use(cors());
app.use(express.json()); // allows us to access the req.body

if (process.env.NODE_ENV === "production"){
    //server statis content
    //npm run build
    app.use(express.static(path.join(_dirname, "client/build")))
}
console.log(_dirname)
console.log(_dirname, "client/build");


//ROUTES//

//create book

app.post('/books',async(req,res) => {
    try{
     
      const {title, image, description,writer} = req.body
      const newbook = await pool.query(
          "INSERT INTO books(title, image, description, writer) VALUES($1, $2,$3,$4) RETURNING * ",
          [title, image, description,writer]
      );
      res.json(newbook.rows[0])


    }catch (err){
        console.error(err.message);
    }

}) 


//get all books

app.get("/books", async(req,res) => {
    try{
      const allbooks = await pool.query("SELECT * FROM books");
      res.json(allbooks.rows)

    }catch(err){
        console.error(err.message);
    }

})


//get a book
app.get("/books/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const book = await pool.query("SELECT * FROM books WHERE book_id = $1",[id])
        res.json(book.rows[0])

    }catch (err){
        console.error(err.message);
    }

})

//update a // book:

app.put("/books/:id", async (req,res) => {
    try {
        const {id} = req.params
        const {title, image, description,writer} = req.body;
        const updatedbook =await pool.query("UPDATE books SET title = $1, image = $2, description = $3, writer = $4 WHERE book_id = $5 RETURNING title, image, description, writer", 
        [title, image, description, writer, id]);
        
        res.json("book was updated!")


    } catch (err) { 
        console.error(err.message);

    }
})

//delete a book
app.delete("/books/:id", async (req,res) => {
    try {
        const {id } = req.params
        const deletebook =await pool.query("DELETE FROM books WHERE book_id = $1"
        ,[id])
        res.json("book was deleted")


    } catch (err) {
         console.error(err.message);


    }
})







app.listen(process.env.PORT || 5000)
  console.log( ` hearing ${PORT}`);
  
