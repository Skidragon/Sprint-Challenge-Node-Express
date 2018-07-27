const codes = require("./../data/helpers/statusCodes");

const express = require("express");
const projectModel = require("./../data/helpers/projectModel");

const router = express.Router();

router.get("/", (req, res, next) => {
  projectModel
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
  projectModel
    .get(id)
    .catch(() => {
      throw {
        code: codes.NOT_FOUND,
        message: "There is no project with that id"
      };
    })
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
router.get("/actions/:projectId", (req, res, next) => {
  const { projectId } = req.params;
  projectModel
    .getProjectActions(projectId)
    .then(response => {
      if (response.length === 0) {
        throw {
          code: codes.NOT_FOUND,
          message: "There is no project actions with that project_id"
        };
      }
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});
router.post("/", (req, res, next) => {
  projectModel
    .insert(req.body)
    .then(response => {
      res.status(codes.CREATED).json(response);
    })
    .catch(err => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  projectModel
    .update(id, req.body)
    .then(response => {
      if (response === null) {
        throw { code: codes.NOT_FOUND };
      }
      res.status(codes.OK).json(response);
    })
    .catch(err => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  projectModel
    .remove(id)
    .then(response => {
      res.status(codes.OK).json(response);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
