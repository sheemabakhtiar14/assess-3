import React, { useState, useEffect } from "react";
import { Shield, Users, AlertTriangle, CheckCircle, Check } from "lucide-react";

interface UserInfo {
  name: string;
  age: number;
  language: string;
}

interface Response {
  scenarioId: string;
  selectedOption: number;
  riskLevel: "high" | "medium" | "low";
}

interface Scenario {
  id: string;
  theme: string;
  title: string;
  description: string;
  responses: {
    text: string;
    risk: "high" | "medium" | "low";
  }[];
}

const scenarios13_17: Scenario[] = [
  {
    id: "influencer-1",
    theme: "Influencer giveaway opportunity",
    title: "Late Night Scrolling",
    description:
      "It's a regular school night. You're lying in bed, phone in hand, scrolling through Instagram reels before sleeping. Between meme pages and gaming clips, a random reel catches your eye — it's from an account that looks like a verified creator you like. The profile looks familiar — it has 100K+ followers, clean thumbnails, and the username matches closely.\n\nTheir latest reel says: \"Private giveaway for new followers! Follow, like this reel, and check DMs 👀🎁\"",
    responses: [
      {
        text: "Follow the account, like the reel, and message them first to increase your chances of winning.",
        risk: "high",
      },
      {
        text: "Check their older posts and tagged photos to see if other people have received giveaways, then decide to participate.",
        risk: "medium",
      },
      {
        text: "Search for the creator's official handle in a new tab and compare it with the one you saw",
        risk: "low",
      },
    ],
  },
  {
    id: "influencer-2",
    theme: "Influencer giveaway opportunity",
    title: "The DM",
    description:
      'The next day, during lunch break at school, you check your phone. You\'ve got a DM from the same account. It says:\n\n"Hey! We noticed you followed and liked the reel. You\'re one of the finalists for the giveaway prize — a smartwatch or free gaming gift card. Just fill this short form to confirm 👇 (link attached)"\n\nThe message ends with: "This is only for selected fans. Keep it private 😉."',
    responses: [
      {
        text: "Click the form link and quickly fill it in before someone else claims the prize.",
        risk: "high",
      },
      {
        text: "Open the official app or search the influencer's real profile to see if there's any mention of this giveaway publicly before clicking anything.",
        risk: "low",
      },
      {
        text: 'Forward the DM to a friend and ask, "Hey, did you get this too?" before deciding whether to fill the form.',
        risk: "medium",
      },
    ],
  },
  {
    id: "influencer-3",
    theme: "Influencer giveaway opportunity",
    title: "The Email",
    description:
      "That evening, you get an email (to the same account you gave in the form). It says:\n\n\"Congratulations! You've won the 2nd prize. To receive your digital gift card, pay a ₹99 confirmation fee so we can verify you're serious and avoid spam entries.\"\n\nThe email looks neat, with a fake-but-believable brand logo, a timer counting down 10 minutes, and a UPI link to pay.",
    responses: [
      {
        text: "Pay the ₹99 using the UPI link — it's a small amount and you don't want to miss your prize.",
        risk: "high",
      },
      {
        text: 'Reply to the email and ask if you can pay later or through another method, just to "see if they respond."',
        risk: "medium",
      },
      {
        text: "Ignore the email and check the influencer's real YouTube/Instagram account to confirm if any such giveaway or prize exists officially.",
        risk: "low",
      },
    ],
  },
  {
    id: "job-1",
    theme: "Job Offers through Social Media",
    title: "The DM Offer",
    description:
      "It's Saturday evening. You're scrolling through reels when you get a DM from a page named @TeensPaidDaily.\n\n\"Hey! We saw your profile & you're eligible for a simple part-time Insta-based job 😄 Earn ₹500–₹800 per day just liking videos & sharing promo content. No experience needed. DM us 'I'm interested' to start.\"\n\nYou notice some familiar accounts already follow them, and their page has 20K followers.",
    responses: [
      {
        text: 'DM "I\'m interested" and ask, "Is this real or a scam?" — just to check.',
        risk: "high",
      },
      {
        text: 'Follow the page and check their stories and highlights to "confirm" if people are actually getting paid.',
        risk: "medium",
      },
      {
        text: "Google the page name or reverse image search their profile photo or testimonials.",
        risk: "low",
      },
    ],
  },
  {
    id: "job-2",
    theme: "Job Offers through Social Media",
    title: "Quick Application",
    description:
      'You DM them. They reply instantly:\n\n"Great! To register you, we just need:\n1. Your full name\n2. Phone number\n3. City\n4. Instagram ID\n5. UPI ID (to send payments)"\n\nThey say: "No money needed — it\'s a free job."',
    responses: [
      {
        text: 'Share all details except your UPI — you want to "see if it works" before trusting with payment info.',
        risk: "high",
      },
      {
        text: "Say you'll ask your parents first and see how they react.",
        risk: "medium",
      },
      {
        text: "Don't respond. Instead, report the account and talk to a trusted adult about it.",
        risk: "low",
      },
    ],
  },
  {
    id: "job-3",
    theme: "Job Offers through Social Media",
    title: "The Vanish or Chain Trap",
    description:
      'You send the money. But no response. After a day, they finally reply:\n\n"Your payment is stuck. To resolve, send ₹99 more. Or refer 2 friends and earn double next week!"\n\nYou now feel confused — should you trust them or cut your losses?',
    responses: [
      {
        text: "Pay the ₹99 — it's frustrating but you've already come this far.",
        risk: "high",
      },
      {
        text: "Decide to refer friends instead — it's free, and they said you'll get double.",
        risk: "medium",
      },
      {
        text: "Block the account, report to Instagram, and warn others who follow them.",
        risk: "low",
      },
    ],
  },
];

const scenarios18_30: Scenario[] = [
  {
    id: "fashion-1",
    theme: "Cheap Fashion & Accessory brand",
    title: "The Trendy Find",
    description:
      'You\'re scrolling through Instagram during lunch when you spot an ad that feels perfectly targeted:\n✨ "Flat ₹299 Sale – Oversized Graphic Tees, Beaded Rings, Korean Bags – All under ₹399. Free Shipping. Cash on Delivery Available." ✨\n\nThe page (@urban_wear_central) looks stylish and aesthetic. 35K followers, lots of reels, and comments like "Just ordered!", "Can\'t wait to receive mine 😍".\n\nYou tap the link in bio — it opens a clean-looking website: urbanwear-sale.shop',
    responses: [
      {
        text: "You quickly add a couple of items to your cart and proceed to checkout — deals like this don't last long.",
        risk: "high",
      },
      {
        text: 'You scroll down the website, check their "About Us" page and see a Gmail contact. They claim to be based in Mumbai. You feel more confident and proceed to pay.',
        risk: "medium",
      },
      {
        text: 'You check the brand\'s tagged section on Instagram to see if actual customers have posted photos, and then search the website name along with phrases like "delivery experience" or "real reviews" to see what others are saying.',
        risk: "low",
      },
    ],
  },
  {
    id: "fashion-2",
    theme: "Cheap Fashion & Accessory brand",
    title: "The Checkout Temptation",
    description:
      'You browse the site and see pieces you\'ve seen for ₹1,200 on Myntra — here they\'re just ₹299. There\'s even a 10% extra code: INSTA10.\n\nYou add 2 items to cart:\n- "Pastel Cargo Joggers – ₹299"\n- "Anime Oversized Tee – ₹279"\n\nCOD is unavailable for your pincode. But they say:\n💬 "Due to high fraud orders, prepaid only. Secured via Razorpay."\n\nThe timer shows: "Sale ends in 14 mins."',
    responses: [
      {
        text: 'You proceed to pay since the prices are amazing and Razorpay is a known payment gateway. You think: "If it was fake, Razorpay wouldn\'t allow them, right?"',
        risk: "high",
      },
      {
        text: "You decide to DM the Instagram page and ask if you can pay via COD or Paytm. When they don't reply immediately, you go ahead and pay before the timer runs out.",
        risk: "medium",
      },
      {
        text: "You pause and think: \"If COD isn't available and there's no brand name, no customer reviews, and no verified handle, it might be better to skip it.\"",
        risk: "low",
      },
    ],
  },
  {
    id: "fashion-3",
    theme: "Cheap Fashion & Accessory brand",
    title: "Ghosted",
    description:
      'You go ahead and pay ₹578 via UPI. You get a Razorpay confirmation SMS, and the order confirmation shows up on the site:\n\n"Thank you for your purchase. You\'ll receive a tracking link in 2–3 days."\n\nBut…\n- No email confirmation.\n- No tracking update.\n- You DM the Instagram page — no reply.\n- You try the WhatsApp number listed — shows "Business account not found."\n\nA few days pass. You search the domain name and nothing useful shows up.',
    responses: [
      {
        text: 'You think "Maybe it\'s just delayed." You wait a few more days and keep checking the website and Instagram page every night, hoping the order will be shipped.',
        risk: "medium",
      },
      {
        text: "You try emailing the support ID on the website and then message Razorpay asking for an update. You also begin checking your bank account activity for any strange transactions.",
        risk: "low",
      },
      {
        text: "You message the Instagram page angrily, threatening to report them if they don't respond within 24 hours. But you don't actually report it anywhere.",
        risk: "high",
      },
    ],
  },
  {
    id: "job-offer-1",
    theme: "job/internship offer",
    title: "The Dream DM",
    description:
      "You're between classes, checking LinkedIn on your phone. You get a DM from:\n\nPriya Jain – HR, BrightSpark Media\n\"Hi [Your Name], we're hiring remote interns for Digital Outreach. ₹7,000/month, work-from-home, certificate + PPO opportunity. You've been shortlisted! No interviews. Just basic screening. Interested?\"\n\nYou check their company page: 10K+ followers, logo, a few posts.",
    responses: [
      {
        text: 'Reply "Yes I\'m interested" and ask, "Can I get more details?" You\'re excited about the offer and want to move quickly.',
        risk: "high",
      },
      {
        text: "Visit the sender's profile, see that they have 500+ connections, and assume they're real based on their display picture and job title.",
        risk: "medium",
      },
      {
        text: "Search the company name on LinkedIn/Google to see if it has a real website, employee list, or Glassdoor reviews.",
        risk: "low",
      },
    ],
  },
  {
    id: "job-offer-2",
    theme: "job/internship offer",
    title: "The Smooth Screening",
    description:
      'They send you a link to a "quick screening form."\n\nIt asks for:\n- Full Name\n- Phone number\n- Email\n- College\n- Resume (optional)\n- LinkedIn password (optional — "for identity verification")\n\nThe form has a logo and polite language.',
    responses: [
      {
        text: "You reply to the sender asking if the password field is mandatory and if there's an official email you can use instead.",
        risk: "medium",
      },
      {
        text: 'You fill in all fields except the password and think, "It\'s probably okay if I leave out sensitive stuff."',
        risk: "high",
      },
      {
        text: 'You stop and search "BrightSpark Media internship reviews" to see if anyone else has shared experiences with this exact offer.',
        risk: "low",
      },
    ],
  },
  {
    id: "job-offer-3",
    theme: "job/internship offer",
    title: "The Pre-Onboarding Fee",
    description:
      'You receive a welcome PDF with your "intern ID." Then:\n\n"To finalize your onboarding and receive your official ID, pay ₹99. 100% refundable with first stipend. Use this UPI link."\n\nThey add: "Only 5 spots left. Team link goes live by 6 PM!"',
    responses: [
      {
        text: 'You ask them, "Can the ₹99 be deducted from my first payment instead?" — trying to be cautious while still trusting the offer.',
        risk: "high",
      },
      {
        text: "You tell them you'll pay after joining the team group or having a video call with the manager first.",
        risk: "medium",
      },
      {
        text: "You don't pay, reverse-search the company's PDF and logo, and find other posts about similar scams on Reddit or college forums.",
        risk: "low",
      },
    ],
  },
];

const scenarios31_60: Scenario[] = [
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

const scenarios61_90: Scenario[] = [
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

const dummyScenarios: Scenario[] = [
  {
    id: "dummy-1",
    theme: "Online Shopping",
    title: "Too Good to Be True Deal",
    description:
      "You receive an email about a limited-time offer for a luxury item at 90% off from a website you've never heard of.",
    responses: [
      { text: "Buy immediately before the offer expires", risk: "high" },
      { text: "Research the website and read reviews first", risk: "low" },
      { text: "Ask friends if they've heard of this website", risk: "medium" },
    ],
  },
  {
    id: "dummy-2",
    theme: "Investment Opportunity",
    title: "Quick Money Scheme",
    description:
      "A friend shares a 'guaranteed' investment opportunity promising 50% returns in one month.",
    responses: [
      { text: "Invest a small amount to test it out", risk: "medium" },
      { text: "Invest your savings immediately", risk: "high" },
      {
        text: "Research the company and ask for official documentation",
        risk: "low",
      },
    ],
  },
];

function App() {
  const [phase, setPhase] = useState<"intro" | "survey" | "report">("intro");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    age: 0,
    language: "English",
  });
  const [currentScenario, setCurrentScenario] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.age > 0) {
      // Set scenarios based on age
      if (userInfo.age >= 13 && userInfo.age <= 17) {
        setScenarios(scenarios13_17);
      } else if (userInfo.age >= 18 && userInfo.age <= 30) {
        setScenarios(scenarios18_30);
      } else if (userInfo.age >= 31 && userInfo.age <= 60) {
        setScenarios(scenarios31_60);
      } else if (userInfo.age >= 61 && userInfo.age <= 90) {
        setScenarios(scenarios61_90);
      } else {
        setScenarios(dummyScenarios);
      }
      setPhase("survey");
    }
  };

  const handleResponseSelect = (optionIndex: number) => {
    const scenario = scenarios[currentScenario];
    const selectedResponse = scenario.responses[optionIndex];

    setSelectedOption(optionIndex);

    // Wait briefly before proceeding to next scenario
    setTimeout(() => {
      const newResponse: Response = {
        scenarioId: scenario.id,
        selectedOption: optionIndex,
        riskLevel: selectedResponse.risk,
      };

      const updatedResponses = [...responses, newResponse];
      setResponses(updatedResponses);

      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedOption(null);
      } else {
        setPhase("report");
        setSelectedOption(null);
      }
    }, 500);
  };

  const calculateRiskReport = () => {
    const riskCounts = { high: 0, medium: 0, low: 0 };
    responses.forEach((response) => {
      riskCounts[response.riskLevel]++;
    });

    const total = responses.length;
    const highPercentage = (riskCounts.high / total) * 100;
    const mediumPercentage = (riskCounts.medium / total) * 100;
    const lowPercentage = (riskCounts.low / total) * 100;

    let overallRisk: "high" | "medium" | "low";
    let riskDescription: string;
    let recommendations: string[];

    if (highPercentage >= 50) {
      overallRisk = "high";
      riskDescription =
        "Your responses indicate high vulnerability to online scams and digital threats.";
      recommendations = [
        "Always verify the authenticity of online offers and accounts",
        "Never share personal information with unverified sources",
        "Take time to research before making quick decisions online",
        "Consult with trusted adults or friends before engaging with suspicious content",
      ];
    } else if (
      mediumPercentage >= 40 ||
      highPercentage + mediumPercentage >= 60
    ) {
      overallRisk = "medium";
      riskDescription =
        "You show moderate caution online but could benefit from enhanced digital awareness.";
      recommendations = [
        "Continue to verify sources but be more thorough in your checks",
        "Trust your instincts when something seems too good to be true",
        "Develop a habit of cross-referencing information from multiple sources",
        "Stay updated on common online scam tactics",
      ];
    } else {
      overallRisk = "low";
      riskDescription =
        "Excellent! You demonstrate strong digital safety awareness and critical thinking.";
      recommendations = [
        "Keep up your vigilant approach to online safety",
        "Share your knowledge with friends and family",
        "Stay informed about emerging digital threats",
        "Continue to trust your instincts and verify before acting",
      ];
    }

    return {
      riskCounts,
      percentages: {
        high: highPercentage,
        medium: mediumPercentage,
        low: lowPercentage,
      },
      overallRisk,
      riskDescription,
      recommendations,
    };
  };

  const resetSurvey = () => {
    setPhase("intro");
    setUserInfo({ name: "", age: 0, language: "English" });
    setCurrentScenario(0);
    setResponses([]);
    setScenarios([]);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen transition-all duration-500 dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-700/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Habits Assessment
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {phase === "intro" && (
          <div className="max-w-lg mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                  Welcome
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Help us understand your digital habits by sharing some basic
                  information
                </p>
              </div>

              <form onSubmit={handleUserInfoSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Age
                  </label>
                  <input
                    type="number"
                    required
                    min="13"
                    max="90"
                    value={userInfo.age || ""}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        age: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Preferred Language
                  </label>
                  <select
                    value={userInfo.language}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, language: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-300"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Telugu">Telugu</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Assessment
                </button>
              </form>
            </div>
          </div>
        )}

        {phase === "survey" && scenarios.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {currentScenario + 1} of {scenarios.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
                  style={{
                    width: `${
                      ((currentScenario + 1) / scenarios.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Scenario Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-200 dark:border-purple-700 text-purple-800 dark:text-purple-200 text-sm font-semibold rounded-full mb-6">
                    {scenarios[currentScenario].theme}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {scenarios[currentScenario].title}
                  </h3>
                  <div className="prose dark:prose-invert max-w-none">
                    {scenarios[currentScenario].description
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    What would you do?
                  </h4>
                  {scenarios[currentScenario].responses.map(
                    (response, index) => (
                      <button
                        key={index}
                        onClick={() => handleResponseSelect(index)}
                        className={`w-full text-left p-6 border-2 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                          selectedOption === index
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20 transform scale-[1.02]"
                            : "border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-lg hover:transform hover:scale-[1.01]"
                        }`}
                      >
                        <div className="flex items-start relative z-10">
                          <span
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 transition-all duration-300 ${
                              selectedOption === index
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 group-hover:bg-blue-500 group-hover:text-white"
                            }`}
                          >
                            {selectedOption === index ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              index + 1
                            )}
                          </span>
                          <span
                            className={`text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white text-lg leading-relaxed ${
                              selectedOption === index
                                ? "text-green-700 dark:text-green-300"
                                : ""
                            }`}
                          >
                            {response.text}
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === "report" && responses.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {(() => {
              const report = calculateRiskReport();
              return (
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-center mb-10">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${
                        report.overallRisk === "high"
                          ? "bg-gradient-to-br from-red-500 to-red-600"
                          : report.overallRisk === "medium"
                          ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                          : "bg-gradient-to-br from-green-500 to-green-600"
                      }`}
                    >
                      {report.overallRisk === "high" ? (
                        <AlertTriangle className="h-10 w-10 text-white" />
                      ) : report.overallRisk === "medium" ? (
                        <Shield className="h-10 w-10 text-white" />
                      ) : (
                        <CheckCircle className="h-10 w-10 text-white" />
                      )}
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                      Your Digital Safety Report
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Based on your responses to {responses.length} scenarios
                    </p>
                  </div>

                  {/* Risk Level Summary */}
                  <div
                    className={`p-8 rounded-2xl mb-10 border-2 ${
                      report.overallRisk === "high"
                        ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                        : report.overallRisk === "medium"
                        ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                        : "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        report.overallRisk === "high"
                          ? "text-red-800 dark:text-red-200"
                          : report.overallRisk === "medium"
                          ? "text-yellow-800 dark:text-yellow-200"
                          : "text-green-800 dark:text-green-200"
                      }`}
                    >
                      Overall Risk Level:{" "}
                      {report.overallRisk.charAt(0).toUpperCase() +
                        report.overallRisk.slice(1)}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        report.overallRisk === "high"
                          ? "text-red-700 dark:text-red-300"
                          : report.overallRisk === "medium"
                          ? "text-yellow-700 dark:text-yellow-300"
                          : "text-green-700 dark:text-green-300"
                      }`}
                    >
                      {report.riskDescription}
                    </p>
                  </div>

                  {/* Response Breakdown */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Response Breakdown
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border-2 border-red-200 dark:border-red-800">
                        <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                          {report.riskCounts.high}
                        </div>
                        <div className="text-lg font-semibold text-red-700 dark:text-red-300 mb-1">
                          High Risk
                        </div>
                        <div className="text-sm text-red-600 dark:text-red-400">
                          {report.percentages.high.toFixed(1)}%
                        </div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800">
                        <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                          {report.riskCounts.medium}
                        </div>
                        <div className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-1">
                          Medium Risk
                        </div>
                        <div className="text-sm text-yellow-600 dark:text-yellow-400">
                          {report.percentages.medium.toFixed(1)}%
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-2 border-green-200 dark:border-green-800">
                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {report.riskCounts.low}
                        </div>
                        <div className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">
                          Low Risk
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          {report.percentages.low.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Recommendations
                    </h3>
                    <ul className="space-y-4">
                      {report.recommendations.map((recommendation, index) => (
                        <li
                          key={index}
                          className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
                        >
                          <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            {recommendation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={resetSurvey}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Take Assessment Again
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
