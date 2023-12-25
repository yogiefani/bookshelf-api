const {
  addItem,
  getAllItems,
  getItemById,
  editItemById,
  deleteItemById,
} = require("./handler");
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addItem,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllItems,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getItemById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editItemById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteItemById,
  },
  {
    method: "*",
    path: "/{any*}",
    handler: () => "Halaman tidak ditemukan",
  },
];

module.exports = routes;
