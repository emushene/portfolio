import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; 
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config'; 
import { useNavigate } from "react-router";
import { auth } from "../../firebase-config"; 
import DOMPurify from 'dompurify'; // Import DOMPurify

type Props = {};

const CreatePost = (props: Props) => {
  const [title, setTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  let navigate = useNavigate();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePostContent = (content: string) => {
    setPostContent(content);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !postContent) {
      alert('Please provide both a title and content for your post.');
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to create a post.");
        return;
      }

      const sanitizedContent = DOMPurify.sanitize(postContent); // Sanitize the content

      await addDoc(collection(db, 'posts'), {
        title: title,
        content: sanitizedContent, 
        createdAt: new Date(), 
        author: {
          name: user.displayName || "Anonymous",
          id: user.uid
        }
      });

      navigate("/blog");
      console.log("Post successfully created!");

      setTitle('');
      setPostContent('');
    } catch (error) {
      console.error("Error creating post: ", error);
      alert("An error occurred while creating the post. Please try again."); // User feedback
    }
  };

  return (
    <div className="mx-auto shadow-md p-3">
      <div className="flex flex-col items-center ">
        <h1 className="text-center md:text-3xl mb-4 text-gray-600 sm:text-sm">Create a post</h1>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="flex flex-col mb-4 w-full max-w-2xl">
            <label className="font-semibold md:text-2xl mr-3 text-gray-600 text-sm">Title:</label>
            <input 
              type="text" 
              placeholder="Enter your Title here"
              className="sm:w-10 border p-2 rounded-md bg-gray-200 md:min-w-180"
              value={title}
              onChange={handleTitle}
              required
            />
          </div>
          
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <label className="text-gray-700 text-sm md:text-xl">Main Post:</label>
            <div className="w-full">
              <ReactQuill 
                theme="snow" 
                value={postContent}
                onChange={handlePostContent}
                placeholder="Write your post here..." 
                className="w-[70vw] max-w-full"
              />
            </div>
          </div>
          
          <button 
            type="submit"
            className="md:text-xl text-sm border rounded-md p-2 bg-gray-600 text-white hover:bg-opacity-70 w-fit mt-4"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
