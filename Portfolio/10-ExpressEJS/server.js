const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3000;

// Archivos estáticos (css, imágenes, html)
app.use(express.static(path.join(__dirname, "public")));

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// JSON y formularios
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
let posts = [];
let name;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/index.html"));
});

// Login POST → redirige a /home
app.post("/login", (req, res) => {
  name = req.body.name;
  if (!name) return res.redirect("/");
  res.redirect("/home");
});

// Página principal del blog
app.get("/home", (req, res) => {
  if (!name) return res.redirect("/");
  res.render("home", { username: name, posts });
});

// Crear un nuevo post
app.post("/newpost", (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    posts.push({ title, content });
  }
  res.redirect("/home");
});

// Leer un post
app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const post = posts[id];
  if (!post) return res.redirect("/home");
  res.render("post", { id, post });
});

// Editar un post
app.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  posts[id] = {
    title: req.body.title,
    content: req.body.content,
  };
  res.redirect("/home");
});

// Eliminar un post
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  posts.splice(id, 1);
  res.redirect("/home");
});

// Servidor
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
