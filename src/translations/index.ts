export interface Translations {
  // Header
  appTitle: string;

  // Welcome Section
  welcome: string;
  welcomeSubtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  ageLabel: string;
  agePlaceholder: string;
  languageLabel: string;
  beginAssessment: string;

  // Survey Section
  assessmentProgress: string;
  question: string;
  complete: string;
  whatWouldYouDo: string;
  savingResults: string;
  saveError: string;

  // Report Section
  digitalSafetyReport: string;
  basedOnResponses: string;
  overallRiskLevel: string;
  assessmentResults: string;
  responseBreakdown: string;
  highRisk: string;
  mediumRisk: string;
  lowRisk: string;
  personalizedRecommendations: string;
  readyForAnother: string;
  takeAssessmentAgain: string;

  // Risk Descriptions
  lowRiskDescription: string;
  mediumRiskDescription: string;
  highRiskDescription: string;

  // Recommendations
  lowRiskRecommendations: string[];
  mediumRiskRecommendations: string[];
  highRiskRecommendations: string[];
}

export const translations: Record<string, Translations> = {
  English: {
    // Header
    appTitle: "Digital Habits Assessment",

    // Welcome Section
    welcome: "Welcome",
    welcomeSubtitle: "Discover how well you navigate the digital world",
    nameLabel: "What's your name?",
    namePlaceholder: "Enter your name",
    ageLabel: "How old are you?",
    agePlaceholder: "Enter your age",
    languageLabel: "Preferred Language",
    beginAssessment: "Begin Your Assessment →",

    // Survey Section
    assessmentProgress: "Assessment Progress",
    question: "Question",
    complete: "Complete",
    whatWouldYouDo: "What would you do?",
    savingResults: "Saving your results...",
    saveError: "Failed to save your results. Please try again.",

    // Report Section
    digitalSafetyReport: "Your Digital Safety Report",
    basedOnResponses: "Based on your responses to",
    overallRiskLevel: "Overall Risk Level:",
    assessmentResults: "Assessment Results",
    responseBreakdown: "Response Breakdown",
    highRisk: "High Risk",
    mediumRisk: "Medium Risk",
    lowRisk: "Low Risk",
    personalizedRecommendations: "🛡️ Personalized Recommendations",
    readyForAnother: "Ready for another assessment?",
    takeAssessmentAgain: "Take Assessment Again →",

    // Risk Descriptions
    lowRiskDescription:
      "Excellent! You demonstrate strong digital safety awareness and critical thinking.",
    mediumRiskDescription:
      "You show some caution online but could benefit from enhanced digital awareness.",
    highRiskDescription:
      "Your responses indicate vulnerability to online scams and digital threats.",

    // Recommendations
    lowRiskRecommendations: [
      "Keep up your vigilant approach to online safety",
      "Share your knowledge with friends and family",
      "Stay informed about emerging digital threats",
      "Continue to trust your instincts and verify before acting",
    ],
    mediumRiskRecommendations: [
      "Continue to verify sources but be more thorough in your checks",
      "Trust your instincts when something seems too good to be true",
      "Develop a habit of cross-referencing information from multiple sources",
      "Stay updated on common online scam tactics",
    ],
    highRiskRecommendations: [
      "Always verify the authenticity of online offers and accounts",
      "Never share personal information with unverified sources",
      "Take time to research before making quick decisions online",
      "Consult with trusted adults or friends before engaging with suspicious content",
    ],
  },

  Hindi: {
    // Header
    appTitle: "डिजिटल आदतों का मूल्यांकन",

    // Welcome Section
    welcome: "स्वागत है",
    welcomeSubtitle:
      "जानें कि आप डिजिटल दुनिया में कितनी अच्छी तरह नेविगेट करते हैं",
    nameLabel: "आपका नाम क्या है?",
    namePlaceholder: "अपना नाम दर्ज करें",
    ageLabel: "आपकी उम्र कितनी है?",
    agePlaceholder: "अपनी उम्र दर्ज करें",
    languageLabel: "पसंदीदा भाषा",
    beginAssessment: "अपना मूल्यांकन शुरू करें →",

    // Survey Section
    assessmentProgress: "मूल्यांकन की प्रगति",
    question: "प्रश्न",
    complete: "पूर्ण",
    whatWouldYouDo: "आप क्या करेंगे?",
    savingResults: "आपके परिणाम सहेजे जा रहे हैं...",
    saveError: "आपके परिणाम सहेजने में विफल। कृपया पुनः प्रयास करें।",

    // Report Section
    digitalSafetyReport: "आपकी डिजिटल सुरक्षा रिपोर्ट",
    basedOnResponses: "आपके उत्तरों के आधार पर",
    overallRiskLevel: "समग्र जोखिम स्तर:",
    assessmentResults: "मूल्यांकन परिणाम",
    responseBreakdown: "उत्तर विवरण",
    highRisk: "उच्च जोखिम",
    mediumRisk: "मध्यम जोखिम",
    lowRisk: "कम जोखिम",
    personalizedRecommendations: "🛡️ व्यक्तिगत सिफारिशें",
    readyForAnother: "एक और मूल्यांकन के लिए तैयार हैं?",
    takeAssessmentAgain: "मूल्यांकन फिर से लें →",

    // Risk Descriptions
    lowRiskDescription:
      "बहुत बढ़िया! आप मजबूत डिजिटल सुरक्षा जागरूकता और आलोचनात्मक सोच प्रदर्शित करते हैं।",
    mediumRiskDescription:
      "आप ऑनलाइन कुछ सावधानी बरतते हैं लेकिन बेहतर डिजिटल जागरूकता से लाभ उठा सकते हैं।",
    highRiskDescription:
      "आपके उत्तर ऑनलाइन घोटालों और डिजिटल खतरों के प्रति संवेदनशीलता दर्शाते हैं।",

    // Recommendations
    lowRiskRecommendations: [
      "ऑनलाइन सुरक्षा के प्रति अपना सतर्क दृष्टिकोण बनाए रखें",
      "अपने मित्रों और परिवार के साथ अपना ज्ञान साझा करें",
      "उभरते डिजिटल खतरों के बारे में जानकारी रखें",
      "अपनी प्रवृत्ति पर भरोसा करना और कार्य करने से पहले सत्यापन करना जारी रखें",
    ],
    mediumRiskRecommendations: [
      "स्रोतों को सत्यापित करना जारी रखें लेकिन अपनी जांच में अधिक गहन रहें",
      "जब कुछ बहुत अच्छा लगे तो अपनी प्रवृत्ति पर भरोसा करें",
      "कई स्रोतों से जानकारी की क्रॉस-रेफरेंसिंग की आदत डालें",
      "सामान्य ऑनलाइन घोटाला रणनीतियों के बारे में अपडेट रहें",
    ],
    highRiskRecommendations: [
      "हमेशा ऑनलाइन ऑफर और खातों की प्रामाणिकता सत्यापित करें",
      "कभी भी अपरिष्कृत स्रोतों के साथ व्यक्तिगत जानकारी साझा न करें",
      "ऑनलाइन त्वरित निर्णय लेने से पहले अनुसंधान करने का समय लें",
      "संदिग्ध सामग्री से जुड़ने से पहले विश्वसनीय वयस्कों या मित्रों से सलाह लें",
    ],
  },

  Telugu: {
    // Header
    appTitle: "డిజిటల్ అలవాట్ల మూల్యాంకనం",

    // Welcome Section
    welcome: "స్వాగతం",
    welcomeSubtitle:
      "మీరు డిజిటల్ ప్రపంచంలో ఎంత బాగా నావిగేట్ చేస్తారో తెలుసుకోండి",
    nameLabel: "మీ పేరు ఏమిటి?",
    namePlaceholder: "మీ పేరు నమోదు చేయండి",
    ageLabel: "మీ వయస్సు ఎంత?",
    agePlaceholder: "మీ వయస్సు నమోదు చేయండి",
    languageLabel: "ప్రాధాన్య భాష",
    beginAssessment: "మీ మూల్యాంకనాన్ని ప్రారంభించండి →",

    // Survey Section
    assessmentProgress: "మూల్యాంకన పురోగతి",
    question: "ప్రశ్న",
    complete: "పూర్తి",
    whatWouldYouDo: "మీరు ఏమి చేస్తారు?",
    savingResults: "మీ ఫలితాలను సేవ్ చేస్తున్నాము...",
    saveError:
      "మీ ఫలితాలను సేవ్ చేయడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",

    // Report Section
    digitalSafetyReport: "మీ డిజిటల్ భద్రతా నివేదిక",
    basedOnResponses: "మీ సమాధానాల ఆధారంగా",
    overallRiskLevel: "మొత్తం రిస్క్ స్థాయి:",
    assessmentResults: "మూల్యాంకన ఫలితాలు",
    responseBreakdown: "సమాధాన వివరణ",
    highRisk: "అధిక రిస్క్",
    mediumRisk: "మధ్యస్థ రిస్క్",
    lowRisk: "తక్కువ రిస్క్",
    personalizedRecommendations: "🛡️ వ్యక్తిగత సిఫార్సులు",
    readyForAnother: "మరో మూల్యాంకనం కోసం సిద్ధంగా ఉన్నారా?",
    takeAssessmentAgain: "మూల్యాంకనాన్ని మళ్లీ చేయండి →",

    // Risk Descriptions
    lowRiskDescription:
      "అద్భుతం! మీరు బలమైన డిజిటల్ భద్రతా అవగాహన మరియు విమర్శనాత్మక ఆలోచనను ప్రదర్శిస్తున్నారు.",
    mediumRiskDescription:
      "మీరు ఆన్‌లైన్‌లో కొంత జాగ్రత్త చూపిస్తున్నారు కానీ మెరుగైన డిజిటల్ అవగాహన నుండి ప్రయోజనం పొందవచ్చు.",
    highRiskDescription:
      "మీ సమాధానాలు ఆన్‌లైన్ మోసాలు మరియు డిజిటల్ ముప్పులకు దురభిప్రాయాన్ని సూచిస్తున్నాయి.",

    // Recommendations
    lowRiskRecommendations: [
      "ఆన్‌లైన్ భద్రత పట్ల మీ అప్రమత్త విధానాన్ని కొనసాగించండి",
      "మీ స్నేహితులు మరియు కుటుంబంతో మీ జ్ఞానాన్ని పంచుకోండి",
      "అభివృద్ధి చెందుతున్న డిజిటల్ ముప్పుల గురించి తెలుసుకోండి",
      "మీ అంతర్దృష్టిని విశ్వసించడం మరియు చర్య తీసుకునే ముందు ధృవీకరించడం కొనసాగించండి",
    ],
    mediumRiskRecommendations: [
      "మూలాలను ధృవీకరించడం కొనసాగించండి కానీ మీ తనిఖీలో మరింత క్షుణ్ణంగా ఉండండి",
      "ఏదైనా చాలా మంచిగా అనిపించినప్పుడు మీ అంతర్దృష్టిని విశ్వసించండి",
      "అనేక మూలాల నుండి సమాచారాన్ని క్రాస్-రిఫరెన్స్ చేసే అలవాటును పెంచుకోండి",
      "సాధారణ ఆన్‌లైన్ మోసం వ్యూహాల గురించి అప్‌డేట్‌గా ఉండండి",
    ],
    highRiskRecommendations: [
      "ఎల్లప్పుడూ ఆన్‌లైన్ ఆఫర్లు మరియు ఖాతాల ప్రామాణికతను ధృవీకరించండి",
      "ధృవీకరించని మూలాలతో వ్యక్తిగత సమాచారాన్ని ఎప్పుడూ పంచుకోవద్దు",
      "ఆన్‌లైన్‌లో త్వరిత నిర్ణయాలు తీసుకునే ముందు పరిశోధన చేయడానికి సమయం కేటాయించండి",
      "అనుమానాస్పద కంటెంట్‌తో పాలుపంచుకునే ముందు విశ్వసనీయ పెద్దలు లేదా స్నేహితులను సంప్రదించండి",
    ],
  },

  Urdu: {
    // Header
    appTitle: "ڈیجیٹل عادات کا جائزہ",

    // Welcome Section
    welcome: "خوش آمدید",
    welcomeSubtitle:
      "دیکھیں کہ آپ ڈیجیٹل دنیا میں کتنی مہارت سے نیویگیٹ کرتے ہیں",
    nameLabel: "آپ کا نام کیا ہے؟",
    namePlaceholder: "اپنا نام درج کریں",
    ageLabel: "آپ کی عمر کیا ہے؟",
    agePlaceholder: "اپنی عمر درج کریں",
    languageLabel: "پسندیدہ زبان",
    beginAssessment: "اپنا جائزہ شروع کریں →",

    // Survey Section
    assessmentProgress: "جائزہ کی پیش رفت",
    question: "سوال",
    complete: "مکمل",
    whatWouldYouDo: "آپ کیا کریں گے؟",
    savingResults: "آپ کے نتائج محفوظ کیے جا رہے ہیں...",
    saveError: "آپ کے نتائج محفوظ کرنے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں۔",

    // Report Section
    digitalSafetyReport: "آپ کی ڈیجیٹل سیفٹی رپورٹ",
    basedOnResponses: "آپ کے جوابات کی بنیاد پر",
    overallRiskLevel: "مجموعی رسک لیول:",
    assessmentResults: "جائزہ کے نتائج",
    responseBreakdown: "جوابات کی تفصیل",
    highRisk: "زیادہ رسک",
    mediumRisk: "درمیانہ رسک",
    lowRisk: "کم رسک",
    personalizedRecommendations: "🛡️ ذاتی نوعیت کی سفارشات",
    readyForAnother: "کیا آپ ایک اور جائزے کے لیے تیار ہیں؟",
    takeAssessmentAgain: "دوبارہ جائزہ لیں →",

    // Risk Descriptions
    lowRiskDescription:
      "بہت خوب! آپ ڈیجیٹل سیفٹی اور تنقیدی سوچ میں مہارت رکھتے ہیں۔",
    mediumRiskDescription:
      "آپ آن لائن کچھ احتیاط برتتے ہیں لیکن مزید ڈیجیٹل آگاہی سے فائدہ اٹھا سکتے ہیں۔",
    highRiskDescription:
      "آپ کے جوابات آن لائن فراڈ اور ڈیجیٹل خطرات کے لیے حساسیت ظاہر کرتے ہیں۔",

    // Recommendations
    lowRiskRecommendations: [
      "اپنی آن لائن سیفٹی کے لیے محتاط رہیں",
      "اپنا علم دوستوں اور خاندان کے ساتھ شیئر کریں",
      "ابھرتے ہوئے ڈیجیٹل خطرات سے باخبر رہیں",
      "عمل کرنے سے پہلے اپنی بصیرت پر بھروسہ کریں اور تصدیق کریں",
    ],
    mediumRiskRecommendations: [
      "ذرائع کی تصدیق جاری رکھیں لیکن اپنی جانچ میں مزید گہرائی لائیں",
      "جب کچھ بہت اچھا لگے تو اپنی بصیرت پر بھروسہ کریں",
      "مختلف ذرائع سے معلومات کی تصدیق کی عادت ڈالیں",
      "عام آن لائن فراڈ کی حکمت عملیوں سے باخبر رہیں",
    ],
    highRiskRecommendations: [
      "ہمیشہ آن لائن آفرز اور اکاؤنٹس کی اصلیت کی تصدیق کریں",
      "غیر مصدقہ ذرائع کے ساتھ کبھی بھی ذاتی معلومات شیئر نہ کریں",
      "آن لائن فوری فیصلے کرنے سے پہلے تحقیق کے لیے وقت نکالیں",
      "مشکوک مواد میں شامل ہونے سے پہلے قابل اعتماد بڑوں یا دوستوں سے مشورہ کریں",
    ],
  },
};

export const getTranslation = (language: string): Translations => {
  return translations[language] || translations.English;
};
