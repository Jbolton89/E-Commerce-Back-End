const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product
      }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});
// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findbyPk(req.params.id {
      include: [{
        model: Product
      }]
    });

    if (!categoryData) {
      res.status(404).json({
        message: 'No category found with this id!'
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    // category_name: req.body.category_name, MIGHT HAVE TO ADD ID and category_name

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});
  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update({
      category_name: req.body.category_name,
    }, 
    {
      where: {
        id: req.params.id
      },
    }
    );
    if (!updateCategory) { 
      res.status(404).json( { message: 'No category found with that ID' });
    }
    res.status(200).json(updateCategory); 
  } catch (err) { 
    res.status(500).json(err);
  }

});
  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try { 
    const deleteCategory = await Category.destroy({ 
      where: { 
        id: req.params.id
      }
    }); 
    if (!deleteCategory) { 
      res.status(404).json( { message: 'No category found with this ID' });
      return;
    }
    res.status(200).json(deleteCategory); 
  } catch (err) { 
    res.status(500).json(err); 
  }
});

module.exports = router;