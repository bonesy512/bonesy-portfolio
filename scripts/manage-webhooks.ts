import { Resend } from "resend";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!process.env.RESEND_API_KEY) {
    console.error("Error: RESEND_API_KEY not found in .env.local");
    process.exit(1);
  }

  try {
    switch (command) {
      case "create":
        const url = args[1];
        if (!url) {
          console.error("Usage: npm run webhook create <url>");
          process.exit(1);
        }
        const { data: createData, error: createError } = await resend.webhooks.create({
          endpoint: url,
          events: ["email.sent", "email.delivered", "email.bounced", "email.complained"],
        });
        if (createError) throw createError;
        console.log("✓ Webhook created successfully:", createData);
        break;

      case "list":
        const { data: listData, error: listError } = await resend.webhooks.list();
        if (listError) throw listError;
        console.log("✓ Current Webhooks:");
        console.table(listData?.data || []);
        break;

      case "delete":
        const id = args[1];
        if (!id) {
          console.error("Usage: npm run webhook delete <id>");
          process.exit(1);
        }
        const { data: deleteData, error: deleteError } = await resend.webhooks.remove(id);
        if (deleteError) throw deleteError;
        console.log(`✓ Webhook ${id} deleted successfully.`);
        break;

      default:
        console.log(`
Usage:
  npm run webhook list
  npm run webhook create <url>
  npm run webhook delete <id>

Examples:
  npm run webhook create https://bonesydesign.com/api/webhooks/resend
        `);
    }
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
