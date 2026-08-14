import { Faq } from "../models/Faq";

const DEFAULT_FAQS = [
  // Category: About Us
  {
    category: "About Us",
    question: "What is New Energy Holdings and what is its core mission?",
    answer:
      "New Energy Holdings is a leading integrated clean energy infrastructure company. We develop, own, and operate utility-scale solar arrays, onshore wind reserves, and carbon capture & storage (CCUS) facilities across global markets to deliver reliable, low-cost renewable power.",
  },
  {
    category: "About Us",
    question: "How does New Energy Holdings generate revenue and investor returns?",
    answer:
      "Revenue is generated through long-term Power Purchase Agreements (PPAs) with utility buyers, grid battery storage discharge tariffs, and verified ESG carbon credit sales. These steady cash flows back our structured daily yield payouts to investors.",
  },
  {
    category: "About Us",
    question: "Where are New Energy Holdings' clean energy projects located?",
    answer:
      "Our operating fleet spans utility-scale solar and wind reserves across high-yield regions in North America and strategic global renewable corridors, covering over 350+ active project installations.",
  },
  {
    category: "About Us",
    question: "Is New Energy Holdings environmentally compliant and ESG certified?",
    answer:
      "Yes. All projects operate under strict environmental protection standards, local municipal permits, and ESG certifications, ensuring maximum ecological protection alongside high-efficiency energy production.",
  },

  // Category: Membership
  {
    category: "Membership",
    question: "How do I register an account with New Energy Holdings?",
    answer:
      "Click on the 'Get Started' or 'Sign Up' button at the top of the page. Fill out your username, valid email address, and a secure password. Registration is free and instant.",
  },
  {
    category: "Membership",
    question: "How do I sign in to my account portal?",
    answer:
      "Go to the 'Sign In' page, enter your registered email address or username along with your password. Once authenticated, you will be redirected straight to your investor dashboard.",
  },
  {
    category: "Membership",
    question: "What should I do if I forget my password?",
    answer:
      "Click on the 'Forgot Password?' link on the sign-in page. Enter your registered email address, and you will receive an email with instructions to securely reset your password.",
  },
  {
    category: "Membership",
    question: "How can I secure my account with Two-Factor Authentication (2FA)?",
    answer:
      "Navigate to Dashboard > Settings > Security. You can enable 2FA using Google Authenticator or an SMS verification app to add an extra layer of protection to your account and withdrawals.",
  },

  // Category: Investment Plans
  {
    category: "Investment Plans",
    question: "What investment plans are available and how do they work?",
    answer:
      "We offer structured capital tranches ranging from the 14-day Solar Micro-Array Plan (1.5% Daily ROI) up to the 90-day Institutional Renewable Reserve (3.5% Daily ROI). Each plan credits daily profits to your wallet balance every 24 hours.",
  },
  {
    category: "Investment Plans",
    question: "How do I deposit funds to activate an investment plan?",
    answer:
      "Log in to your Dashboard, navigate to the 'Deposit' tab, choose your preferred currency wallet (BTC, ETH, USDT, USDC, TRX), select your desired investment plan tranche, enter the allocation amount, and complete the transfer to the provided address.",
  },
  {
    category: "Investment Plans",
    question: "How do I request a withdrawal of my earnings or principal?",
    answer:
      "Navigate to Dashboard > Withdrawal tab, select your wallet asset, enter the payout amount, and confirm. Your principal is unlocked automatically at plan maturity, and profits can be withdrawn 24/7.",
  },
  {
    category: "Investment Plans",
    question: "Are there minimum deposit or withdrawal limits?",
    answer:
      "The minimum deposit starts at $100 for the Solar Micro-Array Plan. Minimum withdrawal thresholds depend on the selected cryptocurrency network asset (e.g. $10 - $20 USD equivalent).",
  },

  // Category: Referral
  {
    category: "Referral",
    question: "How does the New Energy Holdings partner referral program work?",
    answer:
      "Every member receives a unique referral invite link found in their dashboard. When new members sign up through your link and activate an investment plan, you earn an instant referral commission percentage.",
  },
  {
    category: "Referral",
    question: "What are the referral bonus rates for each investment tranche?",
    answer:
      "Referral commission rates range from 5% on Solar Starter plans up to 12% on Institutional Renewable Reserves. Commission payouts are credited instantly to your wallet balance and are immediately withdrawable.",
  },
  {
    category: "Referral",
    question: "Do I need an active investment plan to earn referral commissions?",
    answer:
      "No active deposit is required to participate in the referral program. You can start sharing your referral link immediately upon registering your account.",
  },
];

export async function seedFaqs(): Promise<void> {
  try {
    const existingCount = await Faq.countDocuments();
    if (existingCount === 0) {
      console.log("Seeding default FAQ knowledge base into database...");
      await Faq.insertMany(DEFAULT_FAQS);
      console.log("✓ Default FAQs seeded successfully into MongoDB!");
    }
  } catch (error) {
    console.error("✗ Failed to seed FAQ knowledge base:", error);
  }
}
