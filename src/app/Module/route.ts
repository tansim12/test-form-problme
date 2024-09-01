import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
    // console.log(JSON.parse(req?.body));
console.log(req.body);

  
  
  return res.send({ body: req?.body });
});

export const route = router;
