const express = require('express');
const tagsRouter = express.Router();

const { getAllTags,getPostsByTagName} = require('../db');


tagsRouter.use((req,res,next)=>{
  console.log("request is made/tag");

  next();
});



tagsRouter.get('/:tagName/posts', async (req, res, next) => {

  try {
    const allPosts = await getPostsByTagName(req.params.tagName);

    const posts = allPosts.filter(post => {if (post.active) {
        return true;
      }

      if (req.user && req.user.id === post.author.id) {
        return true;
      }

      return false;

    });

    res.send({ posts });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});

module.exports = tagsRouter;