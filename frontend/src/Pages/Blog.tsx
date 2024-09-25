import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Components/Blog/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import DOMPurify from "dompurify";

const Blog = () => {
  const { isAuth, setIsAuth } = useAuth();
  const postCollections = collection(db, "posts");

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  const [postList, setPostList] = useState<
    {
      title: string;
      id: string;
      content: string;
      author: { id: string; name: string };
      timestamp: any;
      isExpanded: boolean;
      phase: number;
    }[]
  >([]);

  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postCollections);
        const posts = data.docs.map((doc) => {
          const postData = doc.data();
          return {
            title: postData.title || "Untitled",
            id: doc.id,
            content: postData.content || "No content available.",
            author: postData.author || { id: "", name: "Unknown Author" },
            timestamp: postData.timestamp?.toDate() || new Date(),
            isExpanded: false,
            phase: 1,
          };
        });

        const sortedPosts = posts.sort((a, b) => (a.id > b.id ? -1 : 1));
        setPostList(sortedPosts);

        if (sortedPosts.length > 0) {
          setSelectedPost(sortedPosts[0].id);
          toggleExpand(sortedPosts[0].id); // Expand the first post initially
        }
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };
    getPosts();
  }, []);

  const toggleExpand = (id: string) => {
    setPostList((prevPostList) =>
      prevPostList.map(
        (post) =>
          post.id === id
            ? { ...post, isExpanded: !post.isExpanded, phase: 1 } // Toggle the expanded state
            : { ...post, isExpanded: false } // Collapse all other posts
      )
    );
    setSelectedPost(id); // Set the clicked post as the selected post
  };

  const loadMoreContent = (id: string) => {
    setPostList((prevPostList) =>
      prevPostList.map(
        (post) => (post.id === id ? { ...post, phase: post.phase + 1 } : post) // Increase the phase to load more content
      )
    );
  };

  return (
    <div className="flex md:flex-row flex-col sm:flex-col md:ml-64 md:mr-64 w-[100vw] sm:w-[80vw] md:w-70wv">
      <div className="w-1/4 border-r p-4 shadow-2xl mt-2">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b-2">
          My Blog Posts
        </h3>
        <ul className="space-y-2">
          {postList.map((post) => (
            <li
              key={post.id}
              className={`cursor-pointer text-gray-600 hover:underline ${
                selectedPost === post.id ? "font-bold" : ""
              }`}
              onClick={() => toggleExpand(post.id)}
            >
              {post.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4 flex flex-col flex-wrap gap-2">
        <div className="w-full flex justify-between p-2 sm:gap-2 sm:text-xs sm:flex-wrap">
          {isAuth ? (
            <>
              <div className="cursor-pointer border border-red-400 p-2 rounded-md font-thin text-gray-700 text-sm">
                <Link to="blog-create">
                  <h2>Create New Entry</h2>
                </Link>
              </div>
              <div
                className="cursor-pointer border border-red-400 p-2 rounded-md font-thin text-gray-700 text-sm"
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          ) : (
            <div className="cursor-pointer border border-red-400 p-2 rounded-md font-thin text-gray-700 text-sm">
              <Link to="blog-login">Login</Link>
            </div>
          )}
        </div>

        <Outlet />

        {postList.map((post) => {
          const contentChunks = post.content.split("\n");
          const displayedContent = contentChunks
            .slice(0, post.phase * 5)
            .join("\n");
          const sanitizedContent = DOMPurify.sanitize(displayedContent); // Sanitize the content

          return (
            <div
              key={post.id}
              className={`mb-2 p-2 border ${
                post.isExpanded ? "block" : "hidden"
              }`}
            >
              <div className="font-bold p-6">
                {post.title}
                <div className="text-sm text-gray-500">
                  Posted by: {post.author.name} on{" "}
                  {post.timestamp.toLocaleDateString()} at{" "}
                  {post.timestamp.toLocaleTimeString()}
                </div>
                <div className="border-b-2 border-gray-400"></div>
              </div>
              <div
                className="w-full text-gray-600 p-6 text-wrap text-sm font-thin tracking-wide md:text-xl"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }} // Render sanitized content
              />
              <div className="flex justify-between">
                {post.phase * 5 < contentChunks.length && (
                  <button
                    onClick={() => loadMoreContent(post.id)}
                    className="text-blue-500 underline mt-1"
                  >
                    Read More
                  </button>
                )}
                {post.isExpanded && (
                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="text-blue-500 underline mt-1"
                  >
                    Read Less
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
