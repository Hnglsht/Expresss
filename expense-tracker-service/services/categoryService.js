const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

async function createNewCategory( {name} ) {
  const id = uuidv4();
  await sql`insert into category(id, name) values (${id}, ${name})`;
  return id;
}

async function getCategory() {
  const list = await sql`select * from category order by name desc`;
  return list;
}

async function getOneCategory(id) {
  const list = await sql`select * from category where id = ${id}`;
  if(list.length){
    return list[0];
  }
  return null;
}

async function deleteCategory(id) {
  await sql`delete from category where id = ${id}`
}

async function updateCategory(id, update) {
  const list = await sql`update category set name = ${update.name} where id = ${id}`;
}


module.exports = {
  createNewCategory,
  getCategory,
  getOneCategory,
  deleteCategory,
  updateCategory,
};
