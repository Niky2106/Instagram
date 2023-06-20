import { useState } from "react";
import "./App.css";

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

// components
import TopBar from "./assets/components/TopBar";
import Stories from "./assets/components/Stories";
import Posts from "./assets/components/Posts";
import { CameraIcon } from "./assets/components/icons";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);



  return (
    <>
      <TopBar />
      <Stories user={user} stories={stories} />
      <Posts posts={posts} />
    </>
  );
}

export default App;
