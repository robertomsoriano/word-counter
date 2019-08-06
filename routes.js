const express = require("express");
const router = express.Router();
const Count = require("./Schema");

//Helper function to for json message sanitation
function msgSan(obj) {
  //If msg comes as (example: { "id": "123", "message": "hello world" }), use the body only.
  if (!obj.id) {
    let key = Object.keys(obj)[0];
    return obj[key];
  }
  //if msg comes as { "id": "123", "message": "hello world" }, use directly
  return obj;
}

//Helper function for input sanitation
function rmWhiteSpace(str) {
  //Remove before and after white space, then split into an array.
  let arr = str.trim().split(/\s+/);
  //Remove all white-space only elements.
  array = arr.filter(ele => {
    return /\S/.test(ele);
  });
  //return the length of the array for words counted.
  return array.length;
}

// @route   POST /
// @desc    updates counter
// @access  Public

router.post("/", async (req, res) => {
  let obj = msgSan(req.body);
  //check for invalid requests with empty params.
  if (
    !obj.id ||
    !obj.message ||
    obj.message.trim() === "" ||
    typeof obj.message !== "string"
  ) {
    res.status(400).json({
      error:
        "Request must have an id and a message field. For example: { 'id': '123', 'message': 'hello world' }"
    });
  }
  // Find our counter, which we have given the arbritrary key of 1.
  const filter = { key: 1 };
  Count.findOne(filter, async (err, item) => {
    //if error, throw error
    if (err) {
      console.log(err);
      throw err;
    }
    //If counter doesn't exist, create a new one.
    if (item === null) {
      console.log("New item");
      const count = new Count({
        counted: rmWhiteSpace(obj.message),
        ids: Array.of(obj.id.toString())
      });
      count.save();
      return res.json({ count: count.counted });
    }
    //If the counter exists, then update it.
    else {
      console.log("Update Item");
      //Check for duplicates. If id has been used, words are not counted.
      let counted = item.ids.includes(obj.id.toString())
        ? 0
        : rmWhiteSpace(obj.message) + parseInt(item.counted);
      item.ids.push(obj.id.toString());

      //If words were counted, then update the counter.
      if (counted > 0) {
        const update = { counted: counted, ids: item.ids };
        let doc = await Count.findOneAndUpdate(filter, update, {
          new: true,
          upsert: true
        });
        await res.json({ count: doc.counted });
      }
      //If the id param was a duplicate, throw error message.
      else {
        res.json({
          error: `id ${obj.id} is a duplicate. Your words will not be counted.`
        });
      }
    }
  });
});

router.get("/count", async (req, res) => {
  const filter = { key: 1 };
  Count.findOne(filter, async (err, item) => {
    //if error, throw error
    if (err) {
      console.log(err);
      throw err;
    }
    if (item === null) {
      let count = 0;
      res.json({ count: count });
      return count;
    } else {
      let count = parseInt(item.counted);
      res.json({ count: count });
      return count;
    }
  });
});

module.exports = router;
