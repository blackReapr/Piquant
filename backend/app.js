import express from "express";
import prisma from "./prismaClient/index.js";
import cors from "cors";

// Routes
import reviewRoutes from "./routes/review.routes.js";
import productRoutes from "./routes/product.routes.js";
import tagRoutes from "./routes/tag.routes.js";
import categoryRoutes from "./routes/category.routes.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());

// API Routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/products", productRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/categories", categoryRoutes);

const shutdown = async () => {
  try {
    await prisma.$disconnect();
    console.log("Disconnected from database");
    process.exit(0);
  } catch (error) {
    console.error("Error during disconnection", error);
    process.exit(1);
  }
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

app.listen(5000, () => {
  console.log("Runnig on 5000");
});
