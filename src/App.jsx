import { useState, useEffect } from 'react';
import CardList from './CardList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return <CardList posts={posts} />;
}

export default App;
