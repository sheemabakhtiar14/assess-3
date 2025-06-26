import { Scenario } from "./types";

export const scenarios31_60: Scenario[] = [
  {
    id: "courier-1",
    theme: "online order",
    title: "Trouble With an Online Order",
    description:
      'It\'s Sunday evening. You ordered a product from an e-commerce app last week. The delivery was due today, but the tracking shows "Delivered" — and you haven\'t received anything.\n\nFrustrated, you Google "Flipkart customer care number" and call the first number that appears.\n\nThe person on the line says:\n\n"Yes sir, we\'ve received many such complaints. We can help right now — just need your order ID and a small account confirmation to release a refund."',
    responses: [
      {
        text: "Share the order ID and account number — he sounds professional.",
        risk: "high",
      },
      {
        text: "Ask if he can call back after dinner when you're free.",
        risk: "medium",
      },
      {
        text: "End the call and check the app or official website for the support number",
        risk: "low",
      },
    ],
  },
  {
    id: "courier-2",
    theme: "online order",
    title: "Refund Offer Over WhatsApp",
    description:
      'A few minutes later, you get a WhatsApp message from the same number:\n\n"Sir, please fill this short form to get a fast-track refund. It includes your UPI ID and bank name. Once you enter ₹1, the refund of ₹2,499 will reflect instantly."\n\nIt\'s a Google Form with their logo at the top.',
    responses: [
      {
        text: 'Fill the form and try the ₹1 "activation" — it seems minor.',
        risk: "high",
      },
      {
        text: "Ask them to send you a QR code instead.",
        risk: "medium",
      },
      {
        text: "Ignore the form and go back to your Flipkart app for help.",
        risk: "low",
      },
    ],
  },
  {
    id: "courier-3",
    theme: "online order",
    title: "QR Code for Instant Refund",
    description:
      'They now send you a QR code via WhatsApp with this message:\n\n"Refund process active. Scan this QR using any UPI app (Google Pay, PhonePe, etc.). Type ₹1 to unlock. Balance ₹2,498 will follow automatically."\n\nThey call again, sounding annoyed:\n\n"Sir, we\'re closing this file now. Just scan it — it\'s RBI-approved."\n\nYou\'re tired and just want the refund to be over.',
    responses: [
      {
        text: "Ask them to share the refund directly to your bank account.",
        risk: "medium",
      },
      {
        text: "Scan and pay ₹1 — just to get it over with.",
        risk: "high",
      },
      {
        text: "Stop responding, delete the number, and report it to the real customer support team.",
        risk: "low",
      },
    ],
  },
  {
    id: "marketplace-1",
    theme: "Market place deal",
    title: "The Premium Deal",
    description:
      'You\'re setting up a new office or shifting homes. While browsing OLX, you find:\n\n🪑 "Solid Sheesham Wood 6-Seater Dining Table – ₹17,000 (or ₹900/month EMI)"\nCaption: "Shifting to Bangalore. Bought for ₹29,000 last year. Genuine buyers only. Can deliver locally."\n\nThe photos look real. The seller replies:\n"Yes sir/madam, it\'s a genuine sale. I\'m a government employee. I want someone who\'ll use it well. You can pay monthly if full amount feels heavy."\n\nThey also share a PAN card image and say:\n"I don\'t want to deal with greedy buyers. Just honest people."',
    responses: [
      {
        text: "Ask if you can pick it up and pay full ₹17000 in cash during pickup.",
        risk: "high",
      },
      {
        text: "Say you'd like to pay first EMI ₹900 to reserve it and arrange transport later.",
        risk: "medium",
      },
      {
        text: "Offer to video call and inspect the furniture live before discussing anything.",
        risk: "low",
      },
    ],
  },
  {
    id: "marketplace-2",
    theme: "Market place deal",
    title: "The Transportation",
    description:
      'After you express interest in the sofa, the seller says:\n\n"Sir/madam, thanks for confirming. I\'ve packed it up already. My cousin has a tempo that can deliver it to your address. He usually charges ₹400 for city deliveries. Just pay the transport fee upfront so he can leave now."\n\nThey send you a QR code and say:\n"You can pay UPI to this number – it\'s my cousin\'s phone. Will share tracking details after pickup."',
    responses: [
      {
        text: "Pay ₹400 — it's just the delivery cost and the seller seems cooperative.",
        risk: "high",
      },
      {
        text: "Ask for the courier company's name and a tracking link before paying.",
        risk: "medium",
      },
      {
        text: "Say you'll pay the ₹400 directly in cash to the delivery person when they arrive.",
        risk: "low",
      },
    ],
  },
  {
    id: "marketplace-3",
    theme: "Market place deal",
    title: "The Courier Issue",
    description:
      'The seller replies a few hours later:\n\n"Sir, small issue. My cousin says the RTO is asking for a GST receipt because it\'s furniture being transported. It\'s just formal — he said a ₹950 refundable GST challan is needed for non-commercial deliveries."\n\nThey send you a PDF-like "e-receipt" with a fake GSTIN and say:\n\n"Once paid, the item will be delivered today itself. The amount is fully refunded after delivery."',
    responses: [
      {
        text: "Pay the ₹950 since they shared a receipt and promised refund — you want the sofa urgently.",
        risk: "high",
      },
      {
        text: "Tell them to cancel the deal — it's getting complicated and fishy.",
        risk: "low",
      },
      {
        text: 'Say: "If this is official, share the RTO officer\'s number or the name of your courier company so I can confirm."',
        risk: "medium",
      },
    ],
  },
];
