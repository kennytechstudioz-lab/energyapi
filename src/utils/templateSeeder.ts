import { EmailTemplate } from "../models/EmailTemplate";
import { NotificationTemplate } from "../models/NotificationTemplate";

const DEFAULT_EMAIL_TEMPLATES = [
  {
    name: "deposit_approval",
    title: "Deposit Approved - {{companyName}}",
    greeting: "Hi {{username}},",
    content: "Your deposit allocation of <strong>${{amount}}</strong> worth of <strong>{{currency}}</strong> has been verified, approved, and deployed into active clean energy pools.",
  },
  {
    name: "deposit_rejected",
    title: "Deposit Request Declined",
    greeting: "Hi {{username}},",
    content: "Your deposit request of <strong>${{amount}}</strong> worth of <strong>{{currency}}</strong> was declined by administration. Please contact our support team if you require assistance.",
  },
  {
    name: "withdrawal_approved",
    title: "Withdrawal Request Approved",
    greeting: "Hi {{username}},",
    content: "Your withdrawal request of <strong>${{amount}}</strong> worth of <strong>{{currency}}</strong> has been approved and processed to your designated wallet address.",
  },
  {
    name: "withdrawal_approval",
    title: "Withdrawal Request Approved",
    greeting: "Hi {{username}},",
    content: "Your withdrawal request of <strong>${{amount}}</strong> worth of <strong>{{currency}}</strong> has been approved and processed to your designated wallet address.",
  },
  {
    name: "withdrawal_rejected",
    title: "Withdrawal Request Declined",
    greeting: "Hi {{username}},",
    content: "Your withdrawal request of <strong>${{amount}}</strong> worth of <strong>{{currency}}</strong> was declined by administration. Your funds have been returned to your wallet balance.",
  },
  {
    name: "bonus",
    title: "Bonus Credit Received",
    greeting: "Hi {{username}},",
    content: "Congratulations! An administrative bonus credit of <strong>${{amount}}</strong> worth of <strong>{{currency}}</strong> has been added to your account balance.",
  },
];

const DEFAULT_NOTIFICATION_TEMPLATES = [
  {
    name: "deposit_approval",
    title: "Deposit Approved",
    content: "Your deposit of ${{amount}} worth of {{currency}} has been processed and approved.",
  },
  {
    name: "deposit_rejected",
    title: "Deposit Declined",
    content: "Hello {{username}}, your deposit request of ${{amount}} worth of {{currency}} was declined. Contact support for details.",
  },
  {
    name: "withdrawal_approved",
    title: "Withdrawal Approved",
    content: "Hello {{username}}, your withdrawal of ${{amount}} worth of {{currency}} has been processed and approved.",
  },
  {
    name: "withdrawal_rejected",
    title: "Withdrawal Declined",
    content: "Hello {{username}}, your withdrawal of ${{amount}} worth of {{currency}} was declined. Your funds were restored to your wallet.",
  },
  {
    name: "bonus",
    title: "Bonus Credit Received",
    content: "Hi {{username}}, you have received a bonus of ${{amount}} worth of {{currency}} added to your balance.",
  },
];

export async function seedTemplates(): Promise<void> {
  try {
    // 1. Seed Email Templates
    for (const t of DEFAULT_EMAIL_TEMPLATES) {
      const exists = await EmailTemplate.findOne({ name: t.name });
      if (!exists) {
        await EmailTemplate.create(t);
        console.log(`[Template Seeder] ✓ Seeded email template "${t.name}"`);
      }
    }

    // 2. Seed Notification Templates
    for (const t of DEFAULT_NOTIFICATION_TEMPLATES) {
      const exists = await NotificationTemplate.findOne({ name: t.name });
      if (!exists) {
        await NotificationTemplate.create(t);
        console.log(`[Template Seeder] ✓ Seeded notification template "${t.name}"`);
      }
    }
  } catch (error) {
    console.error("✗ Failed to seed email & notification templates:", error);
  }
}
