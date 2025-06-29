import { Scenario } from "./types";

export interface TranslatedScenario extends Omit<Scenario, "responses"> {
  responses: Array<{
    text: string;
    risk: "high" | "medium" | "low";
  }>;
}

export const teluguTranslations: Record<string, TranslatedScenario[]> = {
  "13-17": [
    {
      id: "influencer-1",
      theme: "ఇన్‌ఫ్లుయెన్సర్ గివ్‌అవే అవకాశం",
      title: "రాత్రి ఆలస్యంగా స్క్రోలింగ్",
      description:
        'ఇది సాధారణ పాఠశాల రాత్రి. మీరు మంచంలో పడుకుని, ఫోన్ చేతిలో పట్టుకుని, నిద్రకు ముందు ఇన్‌స్టాగ్రామ్ రీల్స్ స్క్రోల్ చేస్తున్నారు. మీమ్ పేజీలు, గేమింగ్ క్లిప్స్ మధ్యలో, ఒక రాండమ్ రీల్ మీ దృష్టిని ఆకర్షిస్తుంది — అది మీకు ఇష్టమైన వెరిఫైడ్ క్రియేటర్ లాగా కనిపించే ఖాతా నుండి. ప్రొఫైల్ పరిచయంగా అనిపిస్తుంది — 100K+ ఫాలోవర్స్, క్లియర్ థంబ్‌నెయిల్స్, మరియు యూజర్‌నేమ్ దగ్గరగా ఉంటుంది.\n\nవారి తాజా రీల్ చెబుతుంది: "కొత్త ఫాలోవర్స్ కోసం ప్రైవేట్ గివ్‌అవే! ఫాలో అవ్వండి, ఈ రీల్‌ను లైక్ చేయండి, మరియు DM చెక్ చేయండి 👀🎁"',
      responses: [
        {
          text: "ఖాతాను ఫాలో అవ్వండి, రీల్‌ను లైక్ చేయండి, మరియు గెలిచే అవకాశాన్ని పెంచేందుకు ముందుగా వారికి మెసేజ్ చేయండి.",
          risk: "high",
        },
        {
          text: "వారి పాత పోస్ట్‌లు మరియు ట్యాగ్ చేసిన ఫోటోలు చూసి ఇతరులకు గివ్‌అవే లభించిందా చూడండి, తర్వాత పాల్గొనాలని నిర్ణయించుకోండి.",
          risk: "medium",
        },
        {
          text: "కొత్త ట్యాబ్‌లో క్రియేటర్ అధికారిక హ్యాండిల్‌ను వెతకండి మరియు మీరు చూసినదానితో పోల్చండి.",
          risk: "low",
        },
      ],
    },
    {
      id: "influencer-2",
      theme: "ఇన్‌ఫ్లుయెన్సర్ గివ్‌అవే అవకాశం",
      title: "DM",
      description:
        'తరువాత రోజు, పాఠశాలలో లంచ్ బ్రేక్ సమయంలో, మీరు మీ ఫోన్‌ను చెక్ చేస్తారు. అదే ఖాతా నుండి మీకు DM వచ్చింది. ఇది చెబుతుంది:\n\n"హాయ్! మీరు ఫాలో అయ్యారు మరియు రీల్‌ను లైక్ చేశారు అని గమనించాము. మీరు గివ్‌అవే బహుమతి కోసం ఫైనలిస్టులలో ఒకరు — ఒక స్మార్ట్‌వాచ్ లేదా ఉచిత గేమింగ్ గిఫ్ట్ కార్డ్. కన్‌ఫర్మ్ చేయడానికి ఈ చిన్న ఫారమ్‌ను పూరించండి 👇 (లింక్ అటాచ్)"\n\nమెసేజ్ చివర ఇలా ముగుస్తుంది: "ఇది ఎంపిక చేసిన అభిమానుల కోసం మాత్రమే. దయచేసి ప్రైవేట్‌గా ఉంచండి 😉."',
      responses: [
        {
          text: "ఫారమ్ లింక్‌పై క్లిక్ చేసి, ఇతరులు బహుమతి తీసుకునే ముందు త్వరగా పూరించండి.",
          risk: "high",
        },
        {
          text: "అధికారిక యాప్‌ను ఓపెన్ చేసి లేదా ఇన్‌ఫ్లుయెన్సర్ యొక్క నిజమైన ప్రొఫైల్‌ను వెతికి, ఈ గివ్‌అవే గురించి పబ్లిక్‌గా ఏదైనా ఉందా చూడండి.",
          risk: "low",
        },
        {
          text: 'DMని ఫ్రెండ్‌కు ఫార్వర్డ్ చేసి, "హే, నీకు కూడా ఇది వచ్చిందా?" అని అడిగి, ఫారమ్ పూరించాలా వద్దా నిర్ణయించుకోండి.',
          risk: "medium",
        },
      ],
    },
    {
      id: "influencer-3",
      theme: "ఇన్‌ఫ్లుయెన్సర్ గివ్‌అవే అవకాశం",
      title: "ఈమెయిల్",
      description:
        'ఆ సాయంత్రం, మీరు ఇచ్చిన అదే ఖాతాకు ఒక ఈమెయిల్ వస్తుంది. ఇది చెబుతుంది:\n\n"అభినందనలు! మీరు 2–3 రోజుల్లో ట్రాకింగ్ లింక్ పొందుతారు."\n\nకానీ…\n- ఇమెయిల్ కన్ఫర్మేషన్ లేదు.\n- ట్రాకింగ్ అప్డేట్ లేదు.\n- మీరు Instagram పేజీకి DM చేస్తారు — స్పందన లేదు.\n- మీరు WhatsApp నంబర్ ట్రై చేస్తారు — "Business account not found" చూపిస్తుంది.\n\nకొన్ని రోజులు గడుస్తాయి. మీరు డొమైన్ నేమ్ వెతకగా ఉపయోగకరమైనది కనిపించదు.',
      responses: [
        {
          text: '"బహుశా ఆలస్యం అయింది" అని మీరు అనుకుంటారు. మరికొన్ని రోజులు వేచి, వెబ్‌సైట్ మరియు Instagram పేజీని ప్రతి రాత్రి చెక్ చేస్తూ, ఆర్డర్ షిప్ అవుతుందేమో అని ఆశపడతారు.',
          risk: "medium",
        },
        {
          text: "మీరు వెబ్‌సైట్‌లోని సపోర్ట్ IDకి ఇమెయిల్ పంపి, తర్వాత Razorpayకి మెసేజ్ చేసి అప్డేట్ అడుగుతారు. బ్యాంక్ అకౌంట్‌లో ఏవైనా అనుమానాస్పద లావాదేవీలు ఉన్నాయా అని కూడా చెక్ చేస్తారు.",
          risk: "low",
        },
        {
          text: "మీరు Instagram పేజీకి కోపంగా మెసేజ్ చేసి, 24 గంటల్లో స్పందించకపోతే రిపోర్ట్ చేస్తానని బెదిరిస్తారు. కానీ ఎక్కడా నిజంగా రిపోర్ట్ చేయరు.",
          risk: "high",
        },
      ],
    },
    {
      id: "fake-website-1",
      theme: "నకిలీ వెబ్‌సైట్",
      title: "ఆన్‌లైన్ ఆర్డర్‌లో సమస్య",
      description:
        'ఇది ఆదివారం సాయంత్రం. మీరు గత వారం ఒక ఈ-కామర్స్ యాప్‌లో ప్రొడక్ట్ ఆర్డర్ చేశారు. డెలివరీ ఈరోజు రావాల్సింది, కానీ ట్రాకింగ్ "Delivered" చూపిస్తుంది — కానీ మీకు ఏమీ రాలేదు.\n\nనిరాశతో, మీరు "Flipkart customer care number" అని Google చేస్తారు మరియు కనిపించిన మొదటి నంబర్‌కు కాల్ చేస్తారు.\n\nఫోన్‌లో ఉన్న వ్యక్తి చెబుతాడు:\n\n"అవును, ఇలాంటి చాలా ఫిర్యాదులు వచ్చాయి. మేము ఇప్పుడే సహాయం చేయగలం — మీ ఆర్డర్ ID మరియు అకౌంట్ కన్ఫర్మేషన్ కోసం చిన్న డీటెయిల్ కావాలి."',
      responses: [
        {
          text: "తక్షణమే మీ ఆర్డర్ ID మరియు వ్యక్తిగత వివరాలు షేర్ చేస్తారు, ఎందుకంటే మీరు రీఫండ్ కావాలి అనుకుంటున్నారు.",
          risk: "high",
        },
        {
          text: "కేవలం ఆర్డర్ ID మాత్రమే ఇస్తారు, కానీ బ్యాంక్ వివరాలు ఇవ్వడానికి నిరాకరిస్తారు.",
          risk: "medium",
        },
        {
          text: "కాల్ కట్ చేసి, అధికారిక యాప్ లేదా వెబ్‌సైట్‌లో కస్టమర్ కేర్‌ను సంప్రదిస్తారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "fake-website-2",
      theme: "నకిలీ వెబ్‌సైట్",
      title: "త్వరిత పరిష్కారం",
      description:
        'ఆ వ్యక్తి చాలా సహాయకుడిగా కనిపిస్తాడు మరియు చెబుతాడు: "మేము వెంటనే పరిష్కరించగలం. నేను మీకు ఒక సురక్షిత లింక్ పంపుతున్నాను, అది మా రీఫండ్ పోర్టల్‌కు తీసుకెళ్తుంది. ఇది కొన్ని నిమిషాల పాటు మాత్రమే చెల్లుబాటు అవుతుంది."\n\nమీకు ఒక SMS వస్తుంది, అందులో flipkrt-refund.com లాంటి లింక్ ఉంటుంది. పేజీ Flipkart లాగా కనిపిస్తుంది మరియు మీరు లాగిన్ చేయమని అడుగుతుంది.\n\nఫోన్‌లో వ్యక్తి చెబుతాడు: "లాగిన్ చేయండి, వెంటనే మీ రీఫండ్ ప్రాసెస్ అవుతుంది."',
      responses: [
        {
          text: "సైట్‌లో మీ Flipkart అకౌంట్ వివరాలు ఎంటర్ చేస్తారు, ఎందుకంటే ఇది వేగంగా, సులభంగా అనిపిస్తుంది.",
          risk: "high",
        },
        {
          text: "URLను జాగ్రత్తగా పరిశీలిస్తారు, కానీ సురక్షితంగా అనిపిస్తే కొనసాగుతారు.",
          risk: "medium",
        },
        {
          text: "లింక్‌పై క్లిక్ చేయకుండా, Flipkart యాప్‌లో నేరుగా మీ ఆర్డర్ స్టేటస్ చెక్ చేస్తారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "social-engineering-1",
      theme: "సామాజిక ఇంజినీరింగ్",
      title: "స్కూల్ ప్రాజెక్ట్ సర్వే",
      description:
        'మీరు WhatsAppలో మీ క్లాస్ గ్రూప్‌లో ఉన్నారు. ఒక క్లాస్‌మేట్ (మీకు పరిచయం ఉన్నవాడు కానీ అంతగా స్నేహితుడు కాదు) ఇలా మెసేజ్ చేస్తాడు:\n\n"హాయ్ అందరికీ! నేను కంప్యూటర్ సైన్స్ ప్రాజెక్ట్ కోసం సర్వే చేస్తున్నాను. ఈ Google ఫారమ్ నింపడంలో సహాయం చేయగలరా? ఇది చాలా చిన్నది."\n\nఫారమ్‌లో ఈ ప్రశ్నలు ఉంటాయి:\n- పేరు\n- వయస్సు\n- ఇష్టమైన యాప్/గేమ్\n- తల్లిదండ్రుల పేరు\n- ఇంటి చిరునామా\n- పెంపుడు జంతువు పేరు (ఉంటే)\n- మీ తల్లిదండ్రులు ఎక్కడ పని చేస్తారు',
      responses: [
        {
          text: "అన్ని వివరాలు నింపుతారు, ఎందుకంటే ఇది క్లాస్‌మేట్ మరియు స్కూల్ ప్రాజెక్ట్ కోసం అనిపిస్తుంది.",
          risk: "high",
        },
        {
          text: "కేవలం ప్రాథమిక వివరాలు (పేరు, వయస్సు) మాత్రమే నింపి, మిగతా వివరాలు వదిలేస్తారు.",
          risk: "medium",
        },
        {
          text: "ఇంత వ్యక్తిగత సమాచారం ఎందుకు అవసరమో వ్యక్తిగతంగా అడుగుతారు.",
          risk: "low",
        },
      ],
    },
  ],
  "18-30": [
    {
      id: "fashion-1",
      theme: "చౌక ఫ్యాషన్ & యాక్సెసరీ బ్రాండ్",
      title: "ట్రెండీ ఫైండ్",
      description:
        'మీరు లంచ్ సమయంలో Instagram స్క్రోల్ చేస్తుంటే మీకు పర్ఫెక్ట్‌గా టార్గెట్ చేసిన ఒక ప్రకటన కనిపిస్తుంది:\n✨ "ఫ్లాట్ ₹299 సేల్ – ఓవర్సైజ్డ్ గ్రాఫిక్ టీలు, బీడెడ్ రింగ్స్, కొరియన్ బ్యాగ్స్ – అన్నీ ₹399 లోపల. ఉచిత షిప్పింగ్. క్యాష్ ఆన్ డెలివరీ అందుబాటులో ఉంది." ✨\n\nపేజీ (@urban_wear_central) స్టైలిష్‌గా, ఆకర్షణీయంగా ఉంది. 35K ఫాలోవర్స్, చాలా రీల్స్, "Just ordered!", "Can\'t wait to receive mine 😍" వంటి కామెంట్లు.\n\nమీరు బయోలోని లింక్‌పై ట్యాప్ చేస్తారు — అది urbanwear-sale.shop అనే క్లీన్గా కనిపించే వెబ్‌సైట్‌ను ఓపెన్ చేస్తుంది.',
      responses: [
        {
          text: "మీరు త్వరగా కొన్ని ఐటమ్స్ కార్ట్‌లో వేసి, డీల్ త్వరగా ముగిసిపోతుందనుకుని చెక‌కు వెళ్తారు.",
          risk: "high",
        },
        {
          text: 'మీరు వెబ్‌సైట్‌ను స్క్రోల్ చేసి, "About Us" పేజీని చూస్తారు, Gmail కాంటాక్ట్ ఉంది. వారు ముంబైలో ఉన్నారని చెబుతారు. మీరు నమ్మకం పెంచుకుని చెల్లింపు చేస్తారు.',
          risk: "medium",
        },
        {
          text: 'Instagramలో బ్రాండ్ ట్యాగ్ చేసిన సెక్షన్‌ను చూసి, నిజమైన కస్టమర్లు ఫోటోలు పోస్ట్ చేశారా చూడండి. వెబ్‌సైట్ పేరుతో పాటు "delivery experience" లేదా "real reviews" వంటి పదాలతో వెతకండి.',
          risk: "low",
        },
      ],
    },
    {
      id: "fashion-2",
      theme: "చౌక ఫ్యాషన్ & యాక్సెసరీ బ్రాండ్",
      title: "చెకౌట్ ప్రలోభం",
      description:
        'మీరు సైట్‌ను బ్రౌజ్ చేస్తున్నారు మరియు Myntraలో ₹1,200కి చూసిన పీసులు ఇక్కడ కేవలం ₹299కి ఉన్నాయి. 10% అదనపు కోడ్ కూడా ఉంది: INSTA10.\n\nమీరు 2 ఐటమ్స్ కార్ట్‌లో వేసారు:\n- "Pastel Cargo Joggers – ₹299"\n- "Anime Oversized Tee – ₹279"\n\nమీ పిన్‌కోడ్‌కు COD అందుబాటులో లేదు. కానీ వారు చెబుతున్నారు:\n💬 "హై ఫ్రాడ్ ఆర్డర్స్ కారణంగా, ప్రీపెయిడ్ మాత్రమే. Razorpay ద్వారా సెక్యూర్."\n\nటైమర్ చూపిస్తుంది: "సేల్ 14 నిమిషాల్లో ముగుస్తుంది."',
      responses: [
        {
          text: 'ధరలు అద్భుతంగా ఉన్నాయని మరియు Razorpay ప్రసిద్ధి చెందిన గేట్‌వే కాబట్టి మీరు చెల్లించడానికి ముందుకు వెళ్తారు. మీరు అనుకుంటారు: "ఇది ఫేక్ అయితే Razorpay అనుమతించదు కదా?"',
          risk: "high",
        },
        {
          text: "మీరు Instagram పేజీకి DM పంపి, COD లేదా Paytm ద్వారా చెల్లించవచ్చా అని అడుగుతారు. వారు వెంటనే స్పందించకపోతే, టైమర్ ముగిసేలోపు మీరు చెల్లించేస్తారు.",
          risk: "medium",
        },
        {
          text: 'మీరు ఆగి, "COD అందుబాటులో లేకపోతే, బ్రాండ్ పేరు, కస్టమర్ రివ్యూస్, వెరిఫైడ్ హ్యాండిల్ లేవు అంటే, వదిలేయడం మంచిది" అని ఆలోచిస్తారు.',
          risk: "low",
        },
      ],
    },
    {
      id: "fashion-3",
      theme: "చౌక ఫ్యాషన్ & యాక్సెసరీ బ్రాండ్",
      title: "గోస్టెడ్",
      description:
        'మీరు UPI ద్వారా ₹578 చెల్లిస్తారు. Razorpay నుండి కన్ఫర్మేషన్ SMS వస్తుంది, మరియు సైట్‌లో ఆర్డర్ కన్ఫర్మేషన్ కనిపిస్తుంది:\n\n"మీ కొనుగోలుకు ధన్యవాదాలు. మీరు 2–3 రోజుల్లో ట్రాకింగ్ లింక్ పొందుతారు."\n\nకానీ…\n- ఇమెయిల్ కన్ఫర్మేషన్ లేదు.\n- ట్రాకింగ్ అప్డేట్ లేదు.\n- మీరు Instagram పేజీకి DM చేస్తారు — స్పందన లేదు.\n- మీరు WhatsApp నంబర్ ట్రై చేస్తారు — "Business account not found" చూపిస్తుంది.\n\nకొన్ని రోజులు గడుస్తాయి. మీరు డొమైన్ నేమ్ వెతకగా ఉపయోగకరమైనది కనిపించదు.',
      responses: [
        {
          text: '"బహుశా ఆలస్యం అయింది" అని మీరు అనుకుంటారు. మరికొన్ని రోజులు వేచి, వెబ్‌సైట్ మరియు Instagram పేజీని ప్రతి రాత్రి చెక్ చేస్తూ, ఆర్డర్ షిప్ అవుతుందేమో అని ఆశపడతారు.',
          risk: "medium",
        },
        {
          text: "మీరు వెబ్‌సైట్‌లోని సపోర్ట్ IDకి ఇమెయిల్ పంపి, తర్వాత Razorpayకి మెసేజ్ చేసి అప్డేట్ అడుగుతారు. బ్యాంక్ అకౌంట్‌లో ఏవైనా అనుమానాస్పద లావాదేవీలు ఉన్నాయా అని కూడా చెక్ చేస్తారు.",
          risk: "low",
        },
        {
          text: "మీరు Instagram పేజీకి కోపంగా మెసేజ్ చేసి, 24 గంటల్లో స్పందించకపోతే రిపోర్ట్ చేస్తానని బెదిరిస్తారు. కానీ ఎక్కడా నిజంగా రిపోర్ట్ చేయరు.",
          risk: "high",
        },
      ],
    },
    {
      id: "job-offer-1",
      theme: "ఉద్యోగం/ఇంటర్న్‌షిప్ ఆఫర్",
      title: "డ్రీమ్ DM",
      description:
        'మీరు క్లాసుల మధ్యలో, ఫోన్‌లో LinkedIn చెక్ చేస్తున్నారు. మీకు DM వస్తుంది:\n\nప్రియా జైన్ – HR, BrightSpark Media\n"హాయ్ [మీ పేరు], మేము డిజిటల్ అవుట్‌రీచ్ కోసం రిమోట్ ఇంటర్న్స్‌ను హైరింగ్ చేస్తున్నాం. ₹7,000/నెల, వర్క్-ఫ్రమ్-హోమ్, సర్టిఫికేట్ + PPO అవకాశం. మీరు షార్ట్‌లిస్ట్ అయ్యారు! ఇంటర్వ్యూలు లేవు. కేవలం బేసిక్ స్క్రీనింగ్. ఆసక్తి ఉందా?"\n\nమీరు వారి కంపెనీ పేజీని చెక్ చేస్తారు: 10K+ ఫాలోవర్స్, లోగో, కొన్ని పోస్ట్‌లు.',
      responses: [
        {
          text: '"అవును, నాకు ఆసక్తి ఉంది" అని రిప్లై చేసి, "ఇంకా వివరాలు చెప్పగలరా?" అని అడుగుతారు. మీరు ఆఫర్‌పై ఉత్సాహంగా ఉన్నారు మరియు త్వరగా ముందుకు వెళ్లాలనుకుంటున్నారు.',
          risk: "high",
        },
        {
          text: "సెండర్ ప్రొఫైల్‌ను సందర్శించి, 500+ కనెక్షన్లు ఉన్నాయని చూస్తారు, వారి డిస్‌ప్లే పిక్చర్, ఉద్యోగ టైటిల్ ఆధారంగా నిజమైనవారిగా భావిస్తారు.",
          risk: "medium",
        },
        {
          text: "కంపెనీ పేరు LinkedIn/Googleలో వెతికి, నిజమైన వెబ్‌సైట్, ఉద్యోగుల జాబితా లేదా Glassdoor రివ్యూస్ ఉన్నాయా చూడండి.",
          risk: "low",
        },
      ],
    },
    {
      id: "job-offer-2",
      theme: "ఉద్యోగం/ఇంటర్న్‌షిప్ ఆఫర్",
      title: "స్మూత్ స్క్రీనింగ్",
      description:
        'వారు మీకు "త్వరిత స్క్రీనింగ్ ఫారమ్" లింక్ పంపుతారు.\n\nఅది అడిగే వివరాలు:\n- పూర్తి పేరు\n- ఫోన్ నంబర్\n- ఇమెయిల్\n- కాలేజ్\n- రెజ్యూమే (ఐచ్ఛికం)\n- LinkedIn పాస్‌వర్డ్ (ఐచ్ఛికం — "గుర్తింపు కోసం")\n\nఫారమ్‌లో లోగో, మర్యాదపూర్వక భాష ఉంది.',
      responses: [
        {
          text: "పాస్‌వర్డ్ ఫీల్డ్ తప్పనిసరి అయితేనా అని అడుగుతారు.",
          risk: "medium",
        },
        {
          text: 'పాస్‌వర్డ్ తప్ప మిగతా అన్ని వివరాలు నింపి, "సెన్సిటివ్ విషయాలు వదిలేస్తే బాగుంటుంది" అని అనుకుంటారు.',
          risk: "high",
        },
        {
          text: '"BrightSpark Media internship reviews" అని వెతికి, ఇదే ఆఫర్ గురించి ఎవరైనా అనుభవాలు పంచుకున్నారా చూడండి.',
          risk: "low",
        },
      ],
    },
    {
      id: "job-offer-3",
      theme: "ఉద్యోగం/ఇంటర్న్‌షిప్ ఆఫర్",
      title: "ప్రీ-ఆన్‌బోర్డింగ్ ఫీజు",
      description:
        'మీకు "ఇంటర్న్ ID"తో వెల్‌కమ్ PDF వస్తుంది. తర్వాత:\n\n"మీ ఆన్‌బోర్డింగ్‌ను ఫైనల్ చేయడానికి మరియు అధికారిక ID పొందడానికి, ₹99 చెల్లించండి. మొదటి స్టైపెండ్‌తో 100% రీఫండ్బుల్. ఈ UPI లింక్ ఉపయోగించండి."\n\nవారు జోడిస్తారు: "ఇంకా 5 స్పాట్స్ మాత్రమే ఉన్నాయి. టీమ్ లింక్ 6 PMకి లైవ్ అవుతుంది!"',
      responses: [
        {
          text: '"₹99ని నా మొదటి చెల్లింపులో నుండి కట్ చేయవచ్చా?" అని అడుగుతారు — జాగ్రత్తగా ఉండాలనుకుంటూ, అయినా ఆఫర్‌ను నమ్ముతారు.',
          risk: "high",
        },
        {
          text: "టీమ్ గ్రూప్‌లో చేరిన తర్వాత లేదా మేనేజర్‌తో వీడియో కాల్ చేసిన తర్వాత చెల్లిస్తానని చెబుతారు.",
          risk: "medium",
        },
        {
          text: "మీరు చెల్లించకుండా, కంపెనీ PDF, లోగోను రివర్స్-సెర్చ్ చేసి, Reddit లేదా కాలేజ్ ఫోరమ్‌లలో ఇలాంటి స్కామ్స్ ఉన్నాయా చూడండి.",
          risk: "low",
        },
      ],
    },
  ],
  "31-60": [
    {
      id: "courier-1",
      theme: "ఆన్‌లైన్ ఆర్డర్",
      title: "ఆన్‌లైన్ ఆర్డర్‌లో సమస్య",
      description:
        'ఇది ఆదివారం సాయంత్రం. మీరు గత వారం ఒక ఈ-కామర్స్ యాప్‌లో ప్రొడక్ట్ ఆర్డర్ చేశారు. డెలివరీ ఈరోజు రావాల్సింది, కానీ ట్రాకింగ్ "Delivered" చూపిస్తుంది — కానీ మీకు ఏమీ రాలేదు.\n\nనిరాశతో, మీరు "Flipkart customer care number" అని Google చేస్తారు మరియు కనిపించిన మొదటి నంబర్‌కు కాల్ చేస్తారు.\n\nఫోన్‌లో ఉన్న వ్యక్తి చెబుతాడు:\n\n"అవును సర్, ఇలాంటి చాలా ఫిర్యాదులు వచ్చాయి. మేము ఇప్పుడే సహాయం చేయగలం — మీ ఆర్డర్ ID మరియు రీఫండ్ విడుదల చేయడానికి చిన్న అకట్ కన్ఫర్మేషన్ కావాలి."',
      responses: [
        {
          text: "ఆర్డర్ ID మరియు అకట్ నంబర్ షేర్ చేస్తారు — అతను ప్రొఫెషనల్‌గా మాట్లాడుతున్నాడు.",
          risk: "high",
        },
        {
          text: "మీరు అతనిని, మీరు డిన్నర్ తర్వాత ఫ్రీగా ఉన్నప్పుడు కాల్ చేయమని చెబుతారు.",
          risk: "medium",
        },
        {
          text: "కాల్ ముగించి, యాప్ లేదా అధికారిక వెబ్‌సైట్‌లో సపోర్ట్ నంబర్ చెక్ చేస్తారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "courier-2",
      theme: "ఆన్‌లైన్ ఆర్డర్",
      title: "WhatsAppలో రీఫండ్ ఆఫర్",
      description:
        'కొన్ని నిమిషాల తర్వాత, అదే నంబర్ నుండి మీకు WhatsApp మెసేజ్ వస్తుంది:\n\n"సర్, ఫాస్ట్-ట్రాక్ రీఫండ్ కోసం ఈ చిన్న ఫారమ్‌ను పూరించండి. ఇందులో మీ UPI ID మరియు బ్యాంక్ పేరు ఉంటుంది. మీరు ₹1 ఎంటర్ చేస్తే, ₹2,499 రీఫండ్ వెంటనే వస్తుంది."\n\nఫారమ్ టాప్‌లో వారి లోగో ఉంది.',
      responses: [
        {
          text: 'ఫారమ్ నింపి, ₹1 "యాక్టివేషన్" ట్రై చేస్తారు — ఇది చిన్న విషయం అనిపిస్తుంది.',
          risk: "high",
        },
        {
          text: "వారు QR కోడ్ పంపమని అడిగి, అది సాధారణ మర్చంట్ UPI లాగా ఉంటుంది.",
          risk: "medium",
        },
        {
          text: "ఫారమ్‌ను పట్టించుకోకుండా, మళ్లీ Flipkart యాప్‌లో సహాయం కోసం వెళ్తారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "courier-3",
      theme: "ఆన్‌లైన్ ఆర్డర్",
      title: "ఇన్‌స్టంట్ రీఫండ్ కోసం QR కోడ్",
      description:
        'వారు ఇప్పుడు మీకు WhatsAppలో QR కోడ్ పంపుతారు, ఈ మెసేజ్‌తో:\n\n"రీఫండ్ ప్రాసెస్ యాక్టివ్. ఏదైనా UPI యాప్ (Google Pay, PhonePe, etc.)తో ఈ QR స్కాన్ చేయండి. ₹1 టైప్ చేయండి. మిగతా ₹2,498 వెంటనే వస్తుంది."\n\nవారు మళ్లీ కాల్ చేసి, చిరాకు గా చెబుతారు:\n\n"సర్, ఇప్పుడు ఈ ఫైల్ క్లోజ్ చేస్తున్నాం. స్కాన్ చేయండి — ఇది RBI-అప్రూవ్డ్."\n\nమీరు అలసిపోయి, రీఫండ్ త్వరగా కావాలనుకుంటున్నారు.',
      responses: [
        {
          text: "వారు రీఫండ్ నేరుగా బ్యాంక్ అకట్‌కు పంపమని అడిగి, అది త్వరగా పూర్తవుతుందని భావిస్తారు.",
          risk: "medium",
        },
        {
          text: "స్కాన్ చేసి ₹1 చెల్లిస్తారు — ఇది త్వరగా పూర్తవుతుందని భావిస్తారు.",
          risk: "high",
        },
        {
          text: "స్పందించకుండా, నంబర్ డిలీట్ చేసి, నిజమైన కస్టమర్ సపోర్ట్ టీమ్‌కు రిపోర్ట్ చేస్తారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "marketplace-1",
      theme: "మార్కెట్‌ప్లేస్ డీల్",
      title: "ప్రీమియం డీల్",
      description:
        'మీరు కొత్త ఆఫీస్ సెటప్ చేస్తున్నారా లేదా ఇంటిని మారుస్తున్నారా. OLXలో బ్రౌజ్ చేస్తూ మీకు కనిపిస్తుంది:\n\n🪑 "Solid Sheesham Wood 6-Seater Dining Table – ₹17,000 (లేదా ₹900/నెల EMI)"\nకాప్షన్: "బెంగళూరుకు మారుతున్నాను. గత సంవత్సరం ₹29,000కి కొనుగోలు చేశాను. నిజమైన కొనుగోలుదారులు మాత్రమే. లోకల్ డెలివరీ చేయగలను."\n\nఫోటోలు నిజమైనవిగా కనిపిస్తున్నాయి. సెల్లర్ ఇలా రిప్లై చేస్తాడు:\n"అవును సర్/మేడం, ఇది నిజమైన అమ్మకం. నేను ప్రభుత్వ ఉద్యోగి. దీన్ని బాగా వాడే వ్యక్తికి ఇవ్వాలనుకుంటున్నాను. మొత్తం మొత్తం కష్టంగా అనిపిస్తే నెలవారీగా చెల్లించవచ్చు."\n\nవారు PAN కార్డ్ ఇమేజ్ కూడా షేర్ చేస్తారు, చెబుతారు:\n\n"లోభి కొనుగోలుదారులతో పని చేయదలచుకోలేదు. నిజాయితీగా ఉండే వాళ్లే కావాలి."',
      responses: [
        {
          text: "పికప్ చేసేటప్పుడు మొత్తం ₹17000 క్యాష్‌లో చెల్లించవచ్చా అని అడుగుతారు.",
          risk: "high",
        },
        {
          text: "మొదటి EMI ₹900 ముందుగా చెల్లించి, తర్వాత ట్రాన్స్‌పోర్ట్ ఏర్పాటు చేసిన తర్వాత చెల్లిస్తానని చెబుతారు.",
          risk: "medium",
        },
        {
          text: "వీడియో కాల్ చేసి, ఫర్నిచర్‌ను లైవ్‌గా పరిశీలించడానికి ఆఫర్ చేసిన తర్వాత చెల్లిస్తానని చెబుతారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "marketplace-2",
      theme: "మార్కెట్‌ప్లేస్ డీల్",
      title: "ట్రాన్స్‌పోర్టేషన్",
      description:
        'సోఫాలో ఆసక్తి చూపిన తర్వాత, సెల్లర్ ఇలా చెబుతాడు:\n\n"సర్/మేడం, ధన్యవాదాలు. నేను ఇప్పటికే ప్యాక్ చేశాను. నా కజిన్ దగ్గర టెంపో ఉంది, అది మీ అడ్రస్‌కు డెలివరీ చేయగలదు. సిటీ డెలివరీలకు సాధారణంగా ₹400 తీసుకుంటాడు. అతను ఇప్పుడే బయలుదేరేందుకు ట్రాన్స్‌పోర్ట్ ఫీజు ముందుగా చెల్లించండి."\n\nవారు మీకు QR కోడ్ పంపుతారు, చెబుతారు:\n"ఈ నంబర్‌కు UPI ద్వారా చెల్లించవచ్చు – ఇది నా కజిన్ ఫోన్. పికప్ తర్వాత ట్రాకింగ్ డీటెయిల్స్ షేర్ చేస్తాను."',
      responses: [
        {
          text: "₹400 చెల్లించండి — ఇది కేవలం డెలివరీ ఖర్చు మాత్రమే, సెల్లర్ సహకారిగా ఉన్నాడు.",
          risk: "high",
        },
        {
          text: "కూరియర్ కంపెనీ పేరు, ట్రాకింగ్ లింక్ అడగండి.",
          risk: "medium",
        },
        {
          text: "డెలివరీ పర్సన్ వచ్చినప్పుడు నేరుగా క్యాష్‌లో ₹400 చెల్లిస్తానని చెబుతారు.",
          risk: "low",
        },
      ],
    },
    {
      id: "marketplace-3",
      theme: "మార్కెట్‌ప్లేస్ డీల్",
      title: "కూరియర్ సమస్య",
      description:
        'కొన్ని గంటల తర్వాత సెల్లర్ ఇలా చెబుతాడు:\n\n"సర్, చిన్న సమస్య. నా కజిన్ చెబుతున్నాడు RTO ఫర్నిచర్ ట్రాన్స్‌పోర్ట్ చేస్తున్నందున GST రసీదు కావాలంటున్నాడు. ఇది కేవలం ఫార్మాలిటీ — నాన్-కమర్షియల్ డెలివరీలకు ₹950 రీఫండ్బుల్ GST చలాన్ కావాలి."\n\nవారు మీకు ఫేక్ GSTINతో PDF లాంటి "ఈ-రసీదు" పంపుతారు, చెబుతారు:\n\n"పేమెంట్ చేసిన వెంటనే, వస్తువు ఈరోజే డెలివర్ అవుతుంది. మొత్తం డెలివరీ తర్వాత పూర్తిగా రీఫండ్ అవుతుంది."',
      responses: [
        {
          text: "వారు రసీదు షేర్ చేశారు, రీఫండ్ హామీ ఇచ్చారు కాబట్టి మీరు ₹950 చెల్లిస్తారు — సోఫా తక్షణమే కావాలి.",
          risk: "high",
        },
        {
          text: "డీల్ క్యాన్సిల్ చేయమని చెబుతారు — ఇది కాంప్లికేటెడ్, అనుమానాస్పదంగా ఉంది.",
          risk: "low",
        },
        {
          text: '"ఇది అధికారికమైతే, మీ కూరియర్ కంపెనీ పేరు లేదా RTO ఆఫీసర్ నంబర్ ఇవ్వండి, నేను కన్ఫర్మ్ చేసుకుంటాను" అని అడుగుతారు.',
          risk: "medium",
        },
      ],
    },
  ],
  "61-90": [
    {
      id: "health-scheme-1",
      theme: "మందులు/ఆరోగ్య పథకం",
      title: "అనుకోని కాల్",
      description:
        'మీకు ఉదయం ఒక వినయపూర్వకమైన ఫోన్ కాల్ వస్తుంది.\n\n"నమస్తే మేడం/సర్, నేను నేషనల్ సీనియర్ హెల్త్ బోర్డ్ నుండి కాల్ చేస్తున్నాను. 60 ఏళ్లు పైబడినవారికి కొత్త ప్రభుత్వ పథకం కింద మీరు ఉచిత నెలవారీ హెల్త్ కిట్‌కు ఎంపికయ్యారు."\n\nఅతను ఇంకా చెబుతాడు:\n\n"ఇందులో డయాబెటిస్ మాత్రలు, BP మానిటర్ స్ట్రిప్స్, మరియు జాయింట్ రిలీఫ్ ఆయిల్ ఉన్నాయి — ఎలాంటి ఛార్జీలు లేవు, కేవలం ₹99 చిన్న కూరియర్ ఫీజు మాత్రమే."',
      responses: [
        {
          text: "అవును అని చెప్పి, మీ ఇంటి చిరునామా మరియు వయస్సు షేర్ చేయండి",
          risk: "high",
        },
        {
          text: "ముందు బ్రోషర్ లేదా ప్రభుత్వ లింక్ అడగండి",
          risk: "medium",
        },
        {
          text: "ముందుగా మీ డాక్టర్ లేదా లోకల్ హెల్త్ ఆఫీస్‌ను సంప్రదిస్తానని చెప్పి, కాల్ కట్ చేయండి",
          risk: "low",
        },
      ],
    },
    {
      id: "health-scheme-2",
      theme: "మందులు/ఆరోగ్య పథకం",
      title: "WhatsApp బ్రోషర్",
      description:
        'ఆ రోజు తర్వాత, అదే వ్యక్తి మీకు WhatsAppలో PDF బ్రోషర్ పంపుతాడు. అది ప్రొఫెషనల్‌గా కనిపిస్తుంది మరియు ఇలా ఉంది:\n\n"సీనియర్ హెల్త్ మిషన్ – ఆయుష్ మంత్రిత్వ శాఖ మద్దతుతో"\n\nఆఫర్: ₹3,499 హెల్త్ కిట్ కేవలం ₹199కి, హోమ్ డెలివరీతో\n\nఅతను చెబుతాడు:\n\n"మేడం/సర్, ఇది ఈరోజు మొదటి 100 దరఖాస్తుదారులకు మాత్రమే పరిమితం. నేను మీకు ఇప్పుడే బుక్ చేయమా?"',
      responses: [
        {
          text: "అంగీకరించి, ఎలా చెల్లించాలో అడగండి — ₹199 సరైన ధర అనిపిస్తుంది",
          risk: "high",
        },
        {
          text: "మీ కాలనీ లో ఎవరికైనా ఇది వచ్చిందా అని అడగండి",
          risk: "medium",
        },
        {
          text: "అవసరాన్ని పట్టించుకోకుండా, చెల్లించకుండా, మీ ఫ్యామిలీ డాక్టర్‌ను కాల్ చేసి ఇలాంటి పథకాలు ఉన్నాయా అని తెలుసుకోండి",
          risk: "low",
        },
      ],
    },
    {
      id: "health-scheme-3",
      theme: "మందులు/ఆరోగ్య పథకం",
      title: "చెల్లింపు & కూరియర్ ట్రిక్",
      description:
        'తరువాత రోజు, మీకు మరో వ్యక్తి నుండి కాల్ వస్తుంది.\n\n"హలో! మీ పార్సెల్ రెడీగా ఉంది. ఇప్పుడు UPI ద్వారా ₹199 చెల్లించండి లేదా ఈ QR కోడ్ స్కాన్ చేయండి. మీరు చెల్లించిన వెంటనే, రేపు ఉదయం డెలివరీ అవుతుంది."\n\nవారు WhatsAppలో QR పంపుతారు, అది సాధారణ మర్చంట్ UPI లాగా ఉంటుంది.',
      responses: [
        {
          text: "స్కాన్ చేసి చెల్లించండి — మీరు ఇప్పటికే పార్సెల్ కోసం ఎదురుచూస్తున్నారు",
          risk: "high",
        },
        {
          text: "ముందుగా ఏదైనా చెల్లించడానికి నిరాకరించండి, కేవలం Cash on Delivery మాత్రమే అంగీకరిస్తానని చెప్పండి",
          risk: "low",
        },
        {
          text: "వారిని తిరిగి కాల్ చేసి, వారి ఆఫీస్ లొకేషన్ అడగండి",
          risk: "medium",
        },
      ],
    },
    {
      id: "aadhaar-scam-1",
      theme: "ఆధార్ వెరిఫికేషన్",
      title: "సెమీ-ఆఫిషియల్ SMS",
      description:
        "మీకు ఈ SMS ఉదయం వస్తుంది:\n\n[UIDAI-KYC Alert]: మీ ఆధార్ అప్డేట్ వెరిఫికేషన్ పెండింగ్‌లో ఉంది. 2 గంటల్లో చర్య తీసుకోకపోతే డీఆక్టివేషన్ జరుగుతుంది. మా హెల్ప్‌లైన్ 92839 6XXXXకి కాల్ చేయండి లేదా uidai-reverify.in క్లిక్ చేసి e-KYC పూర్తి చేయండి.\n\nలింక్ దాదాపు ప్రభుత్వ URL లాగా ఉంది. టైమింగ్, పదజాలం అధికారికంగా అనిపిస్తుంది, కానీ మీరు ఖచ్చితంగా తెలియదు. మీరు 6 నెలల క్రితం ఆధార్ అప్డేట్ చేసిన విషయం vaguly గుర్తుంది.",
      responses: [
        {
          text: "లింక్ క్లిక్ చేసి వారు ఏ వివరాలు అడుగుతున్నారో చూడండి — ఏమీ సమర్పించకపోతే సరిపోతుంది",
          risk: "high",
        },
        {
          text: "నంబర్‌కు త్వరగా కాల్ చేయండి — ఫేక్ అయితే ఎప్పుడైనా కాల్ కట్ చేయవచ్చు",
          risk: "medium",
        },
        {
          text: "లింక్, నంబర్‌ను పట్టించుకోకుండా వదిలేయండి",
          risk: "low",
        },
      ],
    },
    {
      id: "aadhaar-scam-2",
      theme: "ఆధార్ వెరిఫికేషన్",
      title: "వినయపూర్వకంగా మాట్లాడే కాలర్",
      description:
        'మధ్యాహ్నం సమయంలో, మీకు కాల్ వస్తుంది. వ్యక్తి హిందీ, ఇంగ్లీష్‌లో ఫ్లూయెంట్‌గా మాట్లాడతాడు, అధికారిక టోన్‌తో:\n\n"నమస్తే మేడం/సర్, UIDAI రీజినల్ ఆఫీస్ నుండి కాల్ చేస్తున్నాను. మీ ఆధార్ DOB, ఫోన్ నంబర్‌లో మిస్మ్యాచ్ ఉంది, మీ కార్డ్ రివ్యూలో ఉంది. చాలా మందికి ఇదే సమస్య వస్తోంది — మేము ఫోన్‌లోనే వీటిని పరిష్కరిస్తున్నాం."\n\nతర్వాత, వారు మీ ఆధార్ మొదటి 4 డిజిట్స్ సరిగ్గా చెబుతారు — మీరు ఆశ్చర్యపోతారు.\n\nవారు చెబుతారు:\n\n"ఇది పూర్తి చేయడానికి, మాకు చివరి 8 డిజిట్స్, రిజిస్టర్డ్ మొబైల్ నంబర్ కావాలి. మేము bulk corrections చేస్తున్నాం."',
      responses: [
        {
          text: "వారు ఇప్పటికే కొంత తెలుసు కాబట్టి మిగతా డిజిట్స్, మొబైల్ నంబర్ షేర్ చేయండి",
          risk: "high",
        },
        {
          text: "వారు మొదటి 4 డిజిట్స్ ఎలా తెలుసుకున్నారు అని అడిగి, అయినా పూర్తి వివరాలు ఇవ్వండి",
          risk: "medium",
        },
        {
          text: "ఇంకా వివరాలు ఇవ్వడానికి నిరాకరించండి",
          risk: "low",
        },
      ],
    },
    {
      id: "aadhaar-scam-3",
      theme: "ఆధార్ వెరిఫికేషన్",
      title: "'రిఫండబుల్ ఫీజు' ఒత్తిడి",
      description:
        "సాయంత్రం, మీకు చివరి కాల్ వస్తుంది — ఈసారి కొంత అత్యవసరంగా:\n\n'ఈ రాత్రి కేసులు ఫైనలైజ్ చేస్తున్నాం. మీ ఆధార్ రీ-వెరిఫికేషన్ 'non-responsive'గా ఉంది. తాత్కాలిక సస్పెన్షన్ నివారించడానికి, త్వరగా అన్‌లాక్ చేయడానికి, ఇప్పుడు ₹250 సెక్యూర్ UPI ద్వారా చెల్లించండి. ఇది KYC సక్సెస్ అయిన తర్వాత రీఫండ్ అవుతుంది — మీ ఇమెయిల్‌కు రసీదు పంపిస్తాం.'\n\nవారు మీకు UPI ID పంపుతారు, కాల్‌లో నిశ్శబ్దంగా ఉంటారు.\n\nమీకు WhatsAppలో ఫేక్ రసీదు ప్రివ్యూ కూడా వస్తుంది.",
      responses: [
        {
          text: "₹250 చెల్లించండి — రసీదు నిజమైనదిగా ఉంది, మీకు తిరిగి వస్తుంది కదా అని అనుకుంటారు",
          risk: "high",
        },
        {
          text: "ఏదైనా చెల్లించడానికి ముందు రాతపూర్వక ఇమెయిల్ కన్ఫర్మేషన్ అడగండి",
          risk: "medium",
        },
        {
          text: "చెల్లించడానికి లేదా ఇంకా స్పందించడానికి నిరాకరించండి",
          risk: "low",
        },
      ],
    },
  ],
};
