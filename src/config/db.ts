import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedPlans } from "../utils/planSeeder";
import { seedFaqs } from "../utils/faqSeeder";
import { seedTemplates } from "../utils/templateSeeder";
import { seedCurrencies } from "../utils/currencySeeder";

// Ensure environment variables are loaded
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDatabase(): Promise<void> {
  if (!MONGODB_URI) {
    console.error("✗ MONGODB_URI is undefined in environmental configurations! Check your .env file.");
    process.exit(1);
  }

  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGODB_URI);
    console.log("✓ Connected to MongoDB Atlas successfully!");

    // Auto-seed investment plans, FAQs, templates, and currencies if empty
    await seedPlans();
    await seedFaqs();
    await seedTemplates();
    await seedCurrencies();
  } catch (error) {
    console.error("✗ MongoDB Atlas connection failure:", error);
    // Do not crash the entire server immediately, but log failure telemetry
  }
}
