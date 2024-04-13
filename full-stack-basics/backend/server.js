import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server Ready!!");
// });

app.use(express.static("dist"));

// get list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "This is a fourth joke",
    },
    {
      id: 5,
      title: "Your life",
      content: "The biggest joke",
    },
  ];
  res.send(jokes);
});

// take from env, if not then 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
