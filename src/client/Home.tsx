
import React, {useState, useEffect} from 'react';

const Home: React.FC<HomeProps> = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000")
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    }, []);
  
    return (
      <main className="container">
        <div className="card">
          <div className="card-body">
            {posts.map((post) => (
              <li key={`${post.id}`}>{post.user} </li>
              
            ))}
            {/* {this.state.todo.map((todo) => (
                <li key={`todo-post-${todo.id}`}>{todo.post} </li>
              ))} */}
          </div>
        </div>
      </main>
    );
  };
  
  interface HomeProps {}
  
  export default Home;