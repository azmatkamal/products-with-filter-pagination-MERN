const express = require("express");
const router = express.Router();
// Load User model
const Products = require("../models/Products");
const cors = require("cors");

router.options("/", cors());
router.post("/", async (req, res) => {
  const pageNumber = req.body.page_number || 1;
  const perPage = req.body.per_page || 25;
  const { keyword_column, keyword, order_column, order } = req.body;

  const filter = {};
  if (keyword_column) {
    if (keyword_column === "title" || keyword_column === "description") {
      filter[`${keyword_column}`] = new RegExp(keyword, "i");
    } else {
      filter[`${keyword_column}`] = keyword;
    }
  }

  const sort = {};
  if (order_column) {
    sort[`${order_column}`] = order;
  }

  Products.paginate(filter, {
    offset: perPage * (pageNumber - 1),
    limit: perPage,
    sort,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401).json({ msg: "Unable to fetch the data." });
    });
});

router.options("/product", cors());
router.post("/product", async (req, res) => {
  const id = req.body.id;

  if (!id) {
    res.status(404).json({ msg: "Invalid product id." });
  }

  Products.findOne({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401).json({ msg: "Unable to fetch the data." });
    });
});

module.exports = router;
