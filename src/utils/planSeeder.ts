import { Plan } from "../models/Plan";

const DEFAULT_PLANS = [
  {
    name: "Solar Micro-Array Plan",
    percent: 1.5,
    duration: 14,
    min: 100,
    max: 1000,
    referralPercent: 5,
    picture: "/images/solarenergy.webp",
    benefits: [
      "Daily automated ROI payouts",
      "Short 14-day lockup cycle",
      "5% referral bonus reward",
      "Principal returned at maturity",
    ],
    description:
      "Ideal for retail investors entering clean energy asset management. Focused on distributed solar photovoltaic arrays.",
  },
  {
    name: "Wind Reserve Tranche",
    percent: 2.2,
    duration: 30,
    min: 1000,
    max: 10000,
    referralPercent: 7,
    picture: "/images/windenergy.webp",
    benefits: [
      "2.2% daily profit distribution",
      "Medium 30-day growth horizon",
      "7% referral bonus reward",
      "Priority withdrawal processing",
    ],
    description:
      "Medium-term capital allocation in utility-scale onshore wind farms generating steady grid power yields.",
  },
  {
    name: "Carbon Capture & CCUS Plan",
    percent: 2.8,
    duration: 60,
    min: 5000,
    max: 50000,
    referralPercent: 10,
    picture: "/images/site.png",
    benefits: [
      "2.8% daily profit distribution",
      "60-day structured tranche",
      "10% referral bonus reward",
      "Dedicated account manager",
    ],
    description:
      "High-yield investment tranche backing industrial carbon sequestration and green hydrogen storage systems.",
  },
  {
    name: "Institutional Renewable Reserve",
    percent: 3.5,
    duration: 90,
    min: 10000,
    max: 0,
    referralPercent: 12,
    picture: "/images/storage.jpg",
    benefits: [
      "Maximum 3.5% daily return",
      "Unlimited maximum allocation",
      "12% referral bonus reward",
      "VIP portfolio audit & report",
    ],
    description:
      "Exclusive institutional tranche backing mega-scale utility battery storage and global grid transition assets.",
  },
];

export async function seedPlans(): Promise<void> {
  try {
    const existingCount = await Plan.countDocuments();
    if (existingCount === 0) {
      console.log("Seeding default investment plans into database...");
      await Plan.insertMany(DEFAULT_PLANS);
      console.log("✓ 4 Default investment plans seeded successfully into MongoDB!");
    }
  } catch (error) {
    console.error("✗ Failed to seed investment plans:", error);
  }
}
