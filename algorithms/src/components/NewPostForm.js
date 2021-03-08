import React, { useState, useContext } from 'react'

import { PostsContext } from '../contexts/PostsContext';

export default function NewPostForm() {
    const { addPost } = useContext(PostsContext);

    const [title, setTitle]= useState('')
    const [author, setAuthor]= useState('')
    const [content, setContent]= useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        addPost(title, author, content);
        setTitle('');
        setAuthor('');
        setContent('');
    }
    return (
        <aside>
            <p className="title">CREATE</p>
            <form onSubmit={handleSubmit} className="post-form">
                <input type="text" placeholder="Post Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>

                <input type="text" placeholder="Author" value={author} onChange={(e)=>{setAuthor(e.target.value)}} required />

                {/* <label>Select Image </label>
                <input type="file" id="img" name="img" accept="image/*" value={image} onChange={(e)=>{setImage(e.target.value)}} /> */}

                <label>Content</label>
                <textarea col="3" row="5" value={content} onChange={(e)=>{setContent(e.target.value)}} required></textarea>

                <button type="submit" style={{backgroundColor:"#8CB4EF"}}>Create Post</button>
            </form>
        </aside>
      
    )
}
