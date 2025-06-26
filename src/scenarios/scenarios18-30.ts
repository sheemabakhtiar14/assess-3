import { Scenario } from "./types";

export const scenarios18_30: Scenario[] = [
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
