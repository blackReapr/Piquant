import prisma from "../prismaClient/index.js";

export const getProducts = async (req, res) => {
  try {
    const { minValue, maxValue, categoryId } = req.query;
    let products = await prisma.product.findMany();
    if (minValue || maxValue) {
      products = products.filter(
        product => product.price >= minValue && product.price <= maxValue
      );
    }
    if (categoryId) {
      products = products.filter(
        product => product.categoryId === Number(categoryId)
      );
    }
    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { body: product } = req;
    const newProduct = await prisma.product.create({
      data: {
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        category: {
          connect: {
            name: product.category,
          },
        },
        tags: {
          connect: product.tags.map(tag => ({ name: tag })),
        },
      },
    });
    return res.status(201).json({ ...newProduct });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        title: true,
        description: true,
        image: true,
        reviews: true,
        price: true,
      },
    });
    if (!product)
      return res.status(404).json({ error: "Product does not exist" });
    return res.status(200).json({ ...product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
