import React, {Fragment, useState} from "react";

const EditBook =({book}) => {
    const [description, setDescription] =useState(book.description)


    //edit description function

    const updateDescription = async (e) => {
        try {
            const body ={description};
            const response = await fetch(`http://localhost:5000/books/${book.book_id}`,{
                method: "PUT", 
                headers:{"content-type": "application/json"},
                body:JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }
    return <Fragment>
        

    </Fragment>

};

export default EditBook