require("dotenv").config();

// import express from "express";
// both are same lol
const express = require("express");
const app = express();

// app.get("root", ()=>{})
// hence, callback func if listen something
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (request, response) => {
  response.send("vedlakkaddotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>HAHAHAHA</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>I am at Youtube</h2>");
});

// listen -> varibale in port + callback
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
