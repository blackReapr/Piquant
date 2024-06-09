import prisma from "../prismaClient/index.js";

export const getReviewsController = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const reviews = await prisma.review.findMany({
      where: {
        productId,
      },
    });
    return res.status(200).json({ ...reviews });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const createReviewController = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { body: review } = req.body;
    await prisma.review.create({
      data: {
        productId,
        ...review,
      },
    });
    return res.status(201).message({ message: "Successfully created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
