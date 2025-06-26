import { Scenario } from "./types";

export const scenarios13_17: Scenario[] = [
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
