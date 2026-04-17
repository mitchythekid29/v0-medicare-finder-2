// app/api/submit-lead/route.ts
// -------------------------------------------------------
// Receives form data from your lead form and forwards it
// to the Google Apps Script webhook.
//
// Add this to your .env.local AND Vercel Environment Variables:
//   APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
// -------------------------------------------------------

import { NextResponse } from "next/server";

interface LeadPayload {
  first_name?: string;
  last_name?: string;
  phone?: string;
  cert_url?: string;
  timestamp?: string;
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json();

    const { first_name, last_name, phone, cert_url, timestamp } = body;

    if (!phone) {
      return NextResponse.json({ error: "Phone is required." }, { status: 400 });
    }

    const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL not configured." }, { status: 500 });
    }

    // Forward to Google Apps Script
    // redirect: "follow" is important — Apps Script redirects on success
    const gsResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name,
        last_name,
        phone,
        cert_url,
        timestamp: timestamp || new Date().toISOString(),
      }),
      redirect: "follow",
    });

    if (!gsResponse.ok) {
      throw new Error(`Apps Script returned ${gsResponse.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("submit-lead error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
