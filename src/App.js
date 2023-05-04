import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Manu",
      message: "This is my first post",
      timestamp: "April 20, 2023 10:30 AM"
    },
    {
      username: "Manoj",
      message: "This is my second post.",
      timestamp: "April 20, 2023 11:00 AM"
    },
    {
      username: "Brooks",
      message: "This is my third post",
      timestamp: "April 20, 2023 12:00 PM"
    },
    {
      username: "Annette",
      message: "This is my fourth post.",
      timestamp: "April 20, 2023 1:00 PM"
    },
    {
      username: "Sreeram",
      message: "This is my fifth post.",
      timestamp: "April 20, 2023 1:00 PM"
    },
    


  ]);
  return (
    <div>
      <Navbar />
      {/* The rest of your website content goes here */}
      <h1>Welcome to my blog website!</h1>
      <p><i>These are few posts that are displayed </i></p>
      {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      {/* <Post username="redian" message="The content of the blogpost is here" timestamp="04.20.2023"  />
      <Post username="redian" message="The content of the blogpost is here" timestamp="04.20.2023"  />
      <Post username="redian" message="The content of the blogpost is here" timestamp="04.20.2023"  />
      <Post username="redian" message="The content of the blogpost is here" timestamp="04.20.2023"  /> */}
      <Footer />
    </div>
  );
}

export default App;
