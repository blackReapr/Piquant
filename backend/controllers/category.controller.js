import prisma from "./../prismaClient/index.js";

export const getCategoriesController = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    return res.status(200).json({ categories });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

export const createCategoryController = async (req, res) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });
    return res.status(200).json({ ...category });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    if (
      await prisma.category.findFirst({
        where: {
          id: Number(req.params.id),
        },
      })
    ) {
      await prisma.category.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      return res.status(200).json({ message: "Deleted Successfully" });
    }
    return res.status(404).json({ error: "Category does not exist" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
};
