const { startApp } = require("./configs/basic");
const { sql } = require("./configs/database");

const {
  createNewCategory,
  getCategory,
  getOneCategory,
  deleteCategory,
  updateCategory,
} = require("./services/categoryService");

const app = startApp();

app.get("/categories", async (req, res) => {
  const list = await getCategory();
  res.json(list);
});

app.get("/categories/:id", async (req, res) => {
  const { id } = req.params
  const one = await getOneCategory(id);
  res.json(one);
});

app.post("/categories", async (req, res) => {
  const { name } = req.body;
  const id = await createNewCategory({ name });
  res.status(201).json({ id });
});

app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params
  await deleteCategory(id);
  res.sendStatus(204);
});

app.put("/categories/:id", async (req, res) => {
  const { id } = req.params
  const input = req.body
  await updateCategory(id, input);
  res.sendStatus(204);
});

// app.get("/categories/:id", (req, res) => {
//   const { id } = req.params;
//   const one = getOneCategory(id);
//   const category = categories.find(cat.id === cat);ç
//   res.json(category);
//   res.json(one);
// });

// app.put("/categories/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   if (!name) {
//     res.status(400).json({ message: "`Name field is require" });
//     return;
//   }

//   await updateCategory(id, { name });

// const index = categories.findIndex((cat) => cat.id === id);
// categories[index].name = name;
// fs.writeFileSync("data/categories.json", JSON.stringify(categories));
//   res.sendStatus(204);
// });

// app.delete("/categories/:id", async (req, res) => {
//   const { id } = req.params;
//   const deleteIndex = categories.findIndex((cat) => cat.id === id);
//   if (deleteIndex < 0) {
//     res.sendStatus(404);
//     return;
//   }
// categories = categories.filter((cat) => cat.id !== id);
// await deleteCategory(id);
// fs.writeFileSync("data/categories.json", JSON.stringify(categories));
// res.sendStatus(204);
// });

// app.get()
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/articles", (req, res) => {
//   res.json([
//     { id: 1, title: "Hello" },
//     { id: 2, title: "World" },
//   ]);
// });
