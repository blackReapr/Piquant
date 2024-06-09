import prisma from "../prismaClient/index.js";

export const getReviewsController = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const reviews = await prisma.review.findMany({
      where: {
        productId: Number(productId),
      },
    });
    return res.status(200).json({ reviews });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const createReviewController = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { body: review } = req;
    const newReview = await prisma.review.create({
      data: {
        productId: Number(productId),
        raiting: review.raiting,
        content: review.content,
        email: review.email,
      },
    });
    return res.status(201).json({ ...newReview });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
