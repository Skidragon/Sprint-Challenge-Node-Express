const codes = require("./../data/helpers/statusCodes");

const express = require("express");
const actionModel = require("./../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res, next) => {
  actionModel
    .get()
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  actionModel
    .get(id)
    .catch(() => {
        throw {
            code: codes.NOT_FOUND,
            message: "The action with that id does not exist"
          };
    })
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
router.post("/", (req, res, next) => {
  actionModel
    .insert(req.body)
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
router.put("/:id", (req, res, next) => {
  const { id } = req.params;

  actionModel
    .update(id, req.body)
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  actionModel
    .remove(id)
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
module.exports = router;
