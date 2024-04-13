import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>HAAHAHHAHHAHAH!</h1>
      <p>JOKES : {jokes.length}</p>

      {jokes.map((joke) => {
        return (
          <>
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <h4>{joke.content}</h4>
              <hr />
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
