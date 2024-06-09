import prisma from "../prismaClient/index.js";

export const getTagsController = async (req, res) => {
  try {
    const tags = await prisma.tag.findMany();
    return res.status(200).json({ tags });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const createTagController = async (req, res) => {
  try {
    const { body: tag } = req;
    await prisma.tag.create({
      data: {
        ...tag,
      },
    });
    return res.status(200).json({ message: "Successfully created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
