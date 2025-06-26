import { Scenario } from "./types";

export const scenarios61_90: Scenario[] = [
  {
    id: "health-scheme-1",
    theme: "medicine/health scheme",
    title: "The Unexpected Call",
    description:
      'You receive a polite phone call in the morning.\n\n"Namaste ma\'am/sir, I\'m calling from the National Senior Health Board. You\'ve been selected for a free monthly health kit under a new government program for people above 60."\n\nHe adds:\n\n"It includes diabetes tablets, BP monitor strips, and joint relief oil — no charges, just a small courier fee of ₹99."',
    responses: [
      {
        text: "Say yes and share your home address and age",
        risk: "high",
      },
      {
        text: "Ask for a brochure or government link before proceeding",
        risk: "medium",
      },
      {
        text: "Say you'll first check with your doctor or local health office and hang up",
        risk: "low",
      },
    ],
  },
  {
    id: "health-scheme-2",
    theme: "medicine/health scheme",
    title: "The WhatsApp Brochure",
    description:
      'Later that day, the same person sends you a PDF brochure on WhatsApp. It looks professional and mentions:\n\n"Senior Health Mission – Supported by Ayush Ministry"\n\nOffer: ₹3,499 health kit for just ₹199 with home delivery\n\nHe says:\n\n"Ma\'am/sir, this is limited to the first 100 applicants today. Shall I book it for you right now?"',
    responses: [
      {
        text: "Agree and ask how to pay — ₹199 is reasonable",
        risk: "high",
      },
      {
        text: "Ask if someone else in your colony received it",
        risk: "medium",
      },
      {
        text: "Ignore the urgency, do not pay, and call your family doctor to verify if such schemes exist",
        risk: "low",
      },
    ],
  },
  {
    id: "health-scheme-3",
    theme: "medicine/health scheme",
    title: "Payment & Courier Trick",
    description:
      'The next day, you get another call — this time from a different person.\n\n"Hello! Your parcel is ready. Just pay ₹199 now via UPI or scan this QR code. Once you pay, it\'ll be delivered tomorrow morning."\n\nThey send the QR on WhatsApp, and it looks like a regular merchant UPI.',
    responses: [
      {
        text: "Scan and pay — you're already expecting the parcel",
        risk: "high",
      },
      {
        text: "Refuse to pay anything in advance and say you'll only accept Cash on Delivery",
        risk: "low",
      },
      {
        text: "Call back and ask for their office location",
        risk: "medium",
      },
    ],
  },
  {
    id: "aadhaar-scam-1",
    theme: "AADHAAR verification",
    title: "The Semi-Official SMS",
    description:
      "You receive this SMS early morning:\n\n[UIDAI-KYC Alert]: Your Aadhaar update is pending verification. Failure to act in 2 hrs may lead to deactivation. Call our helpline at 92839 6XXXX or click uidai-reverify.in to complete e-KYC.\n\nThe link looks almost like a government URL. The timing and wording make it feel official, but you're not sure. You vaguely remember updating your Aadhaar 6 months ago.",
    responses: [
      {
        text: "Click the link and check what details they want — you won't submit anything, just look",
        risk: "high",
      },
      {
        text: "Call the number quickly — if it's fake, you can always hang up",
        risk: "medium",
      },
      {
        text: "Ignore the link and number",
        risk: "low",
      },
    ],
  },
  {
    id: "aadhaar-scam-2",
    theme: "AADHAAR verification",
    title: "The Gentle, Well-Spoken Caller",
    description:
      "Around noon, you get a call. The person speaks fluent Hindi and English, with a calm, official tone:\n\n\"Namaste ma'am/sir, calling from UIDAI Regional Office. There's a mismatch in your Aadhaar DOB and phone number, and your card is under review. Many people are facing this — we're resolving them over the phone.\"\n\nThen, they give you the first 4 digits of your Aadhaar correctly — you're surprised.\n\nThey say:\n\n\"To complete this, we just need the last 8 digits, and the registered mobile number. We're running bulk corrections.\"",
    responses: [
      {
        text: "Share the remaining digits and mobile — they already have part of it",
        risk: "high",
      },
      {
        text: "Ask them how they got the first 4 digits, but still provide the rest to complete it",
        risk: "medium",
      },
      {
        text: "Refuse to share any more info",
        risk: "low",
      },
    ],
  },
  {
    id: "aadhaar-scam-3",
    theme: "AADHAAR verification",
    title: 'The "Refundable Fee" Pressure',
    description:
      "In the evening, you get one last call — this time with some urgency:\n\n\"We're finalizing cases tonight. Your Aadhaar re-verification is showing 'non-responsive'. To avoid temporary suspension and unlock faster, you can pay ₹250 now through secure UPI. It's refundable after KYC success — we'll send a receipt to your email.\"\n\nThey send you a UPI ID and wait silently on the call.\n\nYou also receive a fake receipt preview via WhatsApp.",
    responses: [
      {
        text: "Pay the ₹250 — the receipt looks legit and you'll get it back anyway",
        risk: "high",
      },
      {
        text: "Ask for written email confirmation before paying anything",
        risk: "medium",
      },
      {
        text: "Refuse to pay or respond further",
        risk: "low",
      },
    ],
  },
];
