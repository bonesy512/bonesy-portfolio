import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET || WEBHOOK_SECRET === "whsec_your_secret_here") {
    console.error("Missing RESEND_WEBHOOK_SECRET in environment variables");
    return new NextResponse("Webhook secret not configured", { status: 500 });
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing svix headers in webhook request");
    return new NextResponse("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body as raw text for verification
  const payload = await req.text();
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: any;

  // Verify the payload with the headers
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as any;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error occured during verification", {
      status: 400,
    });
  }

  // Handle the webhook event
  const { type, data } = evt;

  console.log(`[Resend Webhook] Received event: ${type}`, {
    emailId: data.email_id,
    to: data.to,
    subject: data.subject,
    timestamp: data.created_at,
  });

  // Business logic for different event types
  switch (type) {
    case "email.delivered":
      console.info(`✓ Email ${data.email_id} successfully delivered to ${data.to}`);
      break;
    case "email.bounced":
      console.warn(`! Email ${data.email_id} bounced for ${data.to}`);
      break;
    case "email.complained":
      console.warn(`! Email ${data.email_id} marked as spam by ${data.to}`);
      break;
    case "email.clicked":
      console.info(`◌ Link clicked in email ${data.email_id}`);
      break;
    default:
      console.log(`Unhandled Resend event type: ${type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
