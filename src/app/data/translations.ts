export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    vision: string;
    issues: string;
    leadership: string;
    activities: string;
    joinUs: string;
    contact: string;
    joinCta: string;
    gallery: string;
    members: string;
  };
  hero: {
    titleSpan1: string;
    titleSpan2: string;
    titleSpan3: string;
    subtitle: string;
    copy: string;
    trustStatement: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    heading: string;
    para1: string;
    para2: string;
    para3: string;
  };
  vision: {
    heading: string;
    statement: string;
    supporting: string;
    quote: string;
  };
  mission: {
    heading: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  issues: {
    heading: string;
    subheading: string;
    learnMore: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  struggle: {
    heading: string;
    copy: string;
    cta: string;
  };
  leadership: {
    heading: string;
    name: string;
    title: string;
    org: string;
    statement: string;
    showMembers: string;
    hideMembers: string;
    teams: {
      pradesh: { title: string; members: Array<{ name: string; role: string; desc: string; image?: string }> };
      mandal: { title: string; members: Array<{ name: string; role: string; desc: string; image?: string }> };
      zila: { title: string; members: Array<{ name: string; role: string; desc: string; image?: string }> };
      nagar: { title: string; members: Array<{ name: string; role: string; desc: string; image?: string }> };
      yuva: { title: string; members: Array<{ name: string; role: string; desc: string; image?: string }> };
    };
  };
  activities: {
    heading: string;
    readMore: string;
    cards: Array<{
      date: string;
      category: string;
      title: string;
      desc: string;
    }>;
  };
  joinSection: {
    heading: string;
    copy: string;
    btnJoin: string;
    btnContact: string;
  };
  contactSection: {
    heading: string;
    presidentTitle: string;
    whatsappBtn: string;
    callBtn: string;
    followUs: string;
    addressLabel: string;
    addressVal: string;
  };
  form: {
    title: string;
    desc: string;
    ownerName: string;
    ownerPlaceholder: string;
    businessName: string;
    businessPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    category: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    validationError: string;
  };
  gallery: {
    heading: string;
    subheading: string;
  };
}

export const translations: Record<"en" | "hi", TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      vision: "Our Vision",
      issues: "Traders' Issues",
      leadership: "Our Leadership",
      activities: "Activities",
      joinUs: "Join Us",
      contact: "Contact",
      joinCta: "Join the Parishad",
      gallery: "Gallery",
      members: "Office Bearers"
    },
    hero: {
      titleSpan1: "United Traders.",
      titleSpan2: " Stronger Voice.",
      titleSpan3: " Stronger Future.",
      subtitle: "Vyapari Ekta Parishad",
      copy: "Established in 2023, Vyapari Ekta Parishad is a collective platform dedicated to protecting the legitimate interests of traders, raising their concerns, and strengthening unity across the trading community.",
      trustStatement: "Established in 2023 • Dedicated to Trader Welfare • Uttar Pradesh",
      primaryCta: "Join The Parishad",
      secondaryCta: "Raise a Trader Issue"
    },
    about: {
      heading: "About Vyapari Ekta Parishad",
      para1: "Vyapari Ekta Parishad was established in 2023 with a clear vision: to unite traders, protect their legitimate interests, and provide them with a strong collective platform to raise their concerns.",
      para2: "Under the leadership of State President & Founder Shri Rahul Verma Ji, the organization is committed to addressing the challenges faced by traders and ensuring that their voices are heard by the appropriate authorities and stakeholders.",
      para3: "We believe that traders are not merely business owners. They are an essential pillar of the local economy, generating employment, contributing to economic growth, and supporting communities across the state."
    },
    vision: {
      heading: "Our Vision",
      statement: "To build a strong, united, respected and empowered trading community.",
      supporting: "We envision a trading environment where every trader has access to representation, support, guidance and a platform to raise legitimate concerns.",
      quote: "“A strong trader builds a strong market, and a strong market builds a strong economy.”"
    },
    mission: {
      heading: "Our Mission",
      cards: [
        {
          title: "Protect Trader Rights",
          desc: "Protecting the legitimate rights and interests of traders."
        },
        {
          title: "Raise Traders' Voices",
          desc: "Taking traders’ concerns to government authorities and administration."
        },
        {
          title: "Support Small & Medium Traders",
          desc: "Helping small and medium-sized businesses navigate challenges."
        },
        {
          title: "Promote Trader Unity",
          desc: "Building unity, cooperation and solidarity among traders."
        },
        {
          title: "Fight Unfair Practices",
          desc: "Standing against unnecessary harassment, exploitation and unfair practices."
        },
        {
          title: "Awareness & Guidance",
          desc: "Providing information about policies, regulations and government schemes."
        },
        {
          title: "Resolve Market Issues",
          desc: "Working towards solutions for infrastructure and local market challenges."
        },
        {
          title: "Collective Representation",
          desc: "Providing a unified platform for traders to raise important issues."
        }
      ]
    },
    issues: {
      heading: "Issues That Matter to Traders",
      subheading: "Vyapari Ekta Parishad actively acts on crucial challenges impacting local business growth and trade freedom.",
      learnMore: "Learn More",
      cards: [
        {
          title: "Trader Rights & Representation",
          desc: "Standing firm against policy changes that ignore the voices of independent businesses."
        },
        {
          title: "Unnecessary Harassment",
          desc: "Intervening in cases of administrative harassment or excessive pressure on local shopkeepers."
        },
        {
          title: "Market Infrastructure",
          desc: "Directing efforts toward clean roads, proper lighting, and security inside trading complexes."
        },
        {
          title: "Government Policies & Regulations",
          desc: "Guiding members through complex compliance frameworks, tax structures, and business licensing."
        },
        {
          title: "Small Business Challenges",
          desc: "Promoting support packages, rent negotiations, and easy micro-credit access for small vendors."
        },
        {
          title: "Employment & Local Growth",
          desc: "Boosting trade corridors to generate stable local jobs and secure commercial growth."
        },
        {
          title: "Trader Safety & Security",
          desc: "Collaborating with police departments to prevent thefts and extortion in marketplace regions."
        },
        {
          title: "Administrative Concerns",
          desc: "Resolving license renewal delays, local zoning conflicts, and utility billing errors."
        }
      ]
    },
    struggle: {
      heading: "Our Voice. Our Unity. Our Rights.",
      copy: "When a trader faces an issue, it should not remain an individual struggle. Vyapari Ekta Parishad believes in collective representation and constructive action. We work to bring genuine trader concerns into the public and administrative conversation and pursue solutions through democratic, lawful and constitutional means.",
      cta: "Raise Your Issue"
    },
    leadership: {
      heading: "Our Leadership",
      name: "Shri Rahul Verma Ji",
      title: "State President & Founder",
      org: "Vyapari Ekta Parishad",
      statement: "Under the leadership of Shri Rahul Verma Ji, Vyapari Ekta Parishad is committed to strengthening trader unity and ensuring that genuine trader concerns receive a collective voice.",
      showMembers: "Show Team Members",
      hideMembers: "Hide Team Members",
      teams: {
        pradesh: {
          title: "State Executive Committee (Pradesh Team)",
          members: [
            { name: "Rajeev Verma", role: "State Treasurer", desc: "Civil Engineer" },
            { name: "Devesh Chaudhary", role: "State General Secretary", desc: "Medical Supplier" },
            { name: "MP Singh", role: "State Patron", desc: "Hospital Director" },
            { name: "Shamshad Ansari", role: "State Vice President", desc: "Vegetable & Fruit Wholesaler" },
            { name: "Chaudhary Charan Singh", role: "State Spokesperson", desc: "Bullion / Sarrafa Merchant" }
          ]
        },
        mandal: {
          title: "Divisional Committee (Mandal Team)",
          members: [
            { name: "Er. Mohd Kashif", role: "Mandal In-charge", desc: "", image: "/members/mohd-kashif.png" },
            { name: "Mohd Pasha", role: "Mandal President", desc: "" },
            { name: "Azhar Bukhari", role: "Mandal Vice President", desc: "" },
            { name: "Ragib Farooqui", role: "Mandal Vice President", desc: "" }
          ]
        },
        zila: {
          title: "District Committee (Zila Team)",
          members: [
            { name: "Anuj Manav Sharma", role: "District President", desc: "Restaurant Proprietor" },
            { name: "Tariq Masood", role: "District In-charge", desc: "Medicine Vendor" },
            { name: "Prashant Chaudhary", role: "District General Secretary", desc: "Building Material Supplier" },
            { name: "Rajeev Kumar", role: "District Secretary", desc: "Restaurant Proprietor" },
            { name: "Faheem Ahmed", role: "District Vice President", desc: "Grocery Merchant" },
            { name: "Azeem Ahmed", role: "District Secretary", desc: "Grocery Merchant" },
            { name: "Naeem Ahmed Ansari", role: "District President (Minority Cell)", desc: "" }
          ]
        },
        nagar: {
          title: "City Committee (Nagar Team)",
          members: [
            { name: "Mustaqeem Ahmed", role: "City President", desc: "" },
            { name: "Ashish Gupta", role: "City General Secretary", desc: "" }
          ]
        },
        yuva: {
          title: "Youth Wing (Yuva Team)",
          members: [
            { name: "Vijay Mohan Gupta", role: "District President (Youth Wing)", desc: "" },
            { name: "Maninder Singh", role: "District General Secretary (Youth Wing)", desc: "" }
          ]
        }
      }
    },
    activities: {
      heading: "Latest Activities & Updates",
      readMore: "Read More",
      cards: [
        {
          date: "October 12, 2026",
          category: "MEETING",
          title: "State Level Traders Convention in Lucknow",
          desc: "Discussing key policy resolutions regarding local market GST compliances and trader security schemes with state leaders."
        },
        {
          date: "September 28, 2026",
          category: "NEWS",
          title: "Rahul Verma Ji Raises Market Parking Challenges",
          desc: "VEP submits memorandum to administration regarding critical parking layouts in major commercial zones."
        },
        {
          date: "August 15, 2026",
          category: "AWARENESS",
          title: "Digital Payment Security & Cyber Safety Workshop",
          desc: "Helping local shopkeepers secure their mobile payment gateways against digital fraudulent traps."
        }
      ]
    },
    joinSection: {
      heading: "Your Business. Your Voice. Your Unity.",
      copy: "Become part of a collective platform working for the legitimate interests of the trading community.",
      btnJoin: "Join the Parishad",
      btnContact: "Contact Us"
    },
    contactSection: {
      heading: "Contact Office Bearers",
      presidentTitle: "Central Office of State President",
      whatsappBtn: "WhatsApp Us",
      callBtn: "Call Helpline",
      followUs: "Follow Our Socials",
      addressLabel: "Address",
      addressVal: "Near DAV School, Vidurkuti Road, Bukhara, Bijnor - 246808"
    },
    form: {
      title: "Raise Your Issue / Register",
      desc: "Fill in the details to submit your trader issue or request to join V.E.P.",
      ownerName: "Owner / Proprietor Name",
      ownerPlaceholder: "e.g., Rahul Verma",
      businessName: "Business / Shop Name",
      businessPlaceholder: "e.g., Verma Textiles",
      phone: "Phone Number",
      phonePlaceholder: "e.g., 7669090008",
      category: "Business Category",
      message: "Describe your Issue / Message",
      messagePlaceholder: "Please describe your concerns or reason to join V.E.P. in detail...",
      submit: "Submit Details",
      submitting: "Submitting...",
      success: "Thank you! Your details have been recorded. Shri Rahul Verma Ji's office will review your request shortly.",
      validationError: "Please fill in all required fields correctly (minimum 10 digits for phone)."
    },
    gallery: {
      heading: "Photo Gallery",
      subheading: "Moments of trade solidarity, campaigns, and community meetings across Uttar Pradesh."
    }
  },
  hi: {
    nav: {
      home: "गृह",
      about: "हमारे बारे में",
      vision: "हमारा दृष्टिकोण",
      issues: "व्यापारियों के मुद्दे",
      leadership: "हमारा नेतृत्व",
      activities: "गतिविधियां",
      joinUs: "हमसे जुड़ें",
      contact: "संपर्क",
      joinCta: "परिषद से जुड़ें",
      gallery: "गैलरी",
      members: "पदाधिकारी"
    },
    hero: {
      titleSpan1: "संगठित व्यापारी।",
      titleSpan2: " सशक्त आवाज़।",
      titleSpan3: " मजबूत भविष्य।",
      subtitle: "व्यापारी एकता परिषद",
      copy: "2023 में स्थापित, व्यापारी एकता परिषद एक सामूहिक मंच है जो व्यापारियों के वैध हितों की रक्षा करने, उनकी समस्याओं को उठाने और संपूर्ण व्यापारी वर्ग में एकता को मजबूत करने के लिए समर्पित है।",
      trustStatement: "स्थापना 2023 • व्यापारी कल्याण के लिए समर्पित • उत्तर प्रदेश",
      primaryCta: "परिषद से जुड़ें",
      secondaryCta: "व्यापारी समस्या दर्ज करें"
    },
    about: {
      heading: "व्यापारी एकता परिषद के बारे में",
      para1: "व्यापारी एकता परिषद की स्थापना 2023 में एक स्पष्ट दृष्टिकोण के साथ की गई थी: व्यापारियों को एकजुट करना, उनके वैध हितों की रक्षा करना और उन्हें अपनी चिंताओं को उठाने के लिए एक मजबूत सामूहिक मंच प्रदान करना।",
      para2: "प्रदेश अध्यक्ष एवं संस्थापक श्री राहुल वर्मा जी के नेतृत्व में, संगठन व्यापारियों द्वारा सामना की जाने वाली चुनौतियों का समाधान करने और यह सुनिश्चित करने के लिए प्रतिबद्ध है कि उनकी आवाज़ उपयुक्त अधिकारियों और हितधारकों तक पहुंचे।",
      para3: "हमारा मानना है कि व्यापारी केवल व्यवसाय के मालिक नहीं हैं। वे स्थानीय अर्थव्यवस्था के एक अनिवार्य स्तंभ हैं, जो रोजगार पैदा करते हैं, आर्थिक विकास में योगदान देते हैं, और राज्य भर के समुदायों का समर्थन करते हैं।"
    },
    vision: {
      heading: "हमारा दृष्टिकोण",
      statement: "एक मजबूत, संगठित, सम्मानित और सशक्त व्यापारी समुदाय का निर्माण करना।",
      supporting: "हम एक ऐसे व्यापारिक माहौल की कल्पना करते हैं जहां प्रत्येक व्यापारी को प्रतिनिधित्व, समर्थन, मार्गदर्शन और वैध चिंताओं को उठाने के लिए एक मंच प्राप्त हो।",
      quote: "“एक मजबूत व्यापारी एक मजबूत बाजार का निर्माण करता है, और एक मजबूत बाजार एक मजबूत अर्थव्यवस्था का निर्माण करता है।”"
    },
    mission: {
      heading: "हमारा मिशन",
      cards: [
        {
          title: "व्यापारी अधिकारों की रक्षा",
          desc: "व्यापारियों के वैध अधिकारों और हितों की रक्षा करना।"
        },
        {
          title: "व्यापारियों की आवाज़ उठाना",
          desc: "व्यापारियों की चिंताओं को सरकारी अधिकारियों और प्रशासन तक ले जाना।"
        },
        {
          title: "छोटे व मध्यम व्यापारियों का समर्थन",
          desc: "छोटे और मध्यम आकार के व्यवसायों को चुनौतियों से निपटने में मदद करना।"
        },
        {
          title: "व्यापारी एकता को बढ़ावा",
          desc: "व्यापारियों के बीच एकता, सहयोग और एकजुटता का निर्माण करना।"
        },
        {
          title: "अनुचित प्रथाओं के खिलाफ लड़ाई",
          desc: "अनावश्यक उत्पीड़न, शोषण और अनुचित प्रथाओं के खिलाफ खड़े होना।"
        },
        {
          title: "जागरूकता और मार्गदर्शन",
          desc: "नीतियों, नियमों और सरकारी योजनाओं के बारे में जानकारी प्रदान करना।"
        },
        {
          title: "बाजार की समस्याओं का समाधान",
          desc: "बुनियादी ढांचे और स्थानीय बाजार की चुनौतियों के समाधान के लिए काम करना।"
        },
        {
          title: "सामूहिक प्रतिनिधित्व",
          desc: "व्यापारियों को महत्वपूर्ण मुद्दों को उठाने के लिए एक एकीकृत मंच प्रदान करना।"
        }
      ]
    },
    issues: {
      heading: "व्यापारियों के प्रमुख मुद्दे",
      subheading: "व्यापारी एकता परिषद स्थानीय व्यापार विकास और व्यापार स्वतंत्रता को प्रभावित करने वाली चुनौतियों पर सक्रिय रूप से काम करती है।",
      learnMore: "अधिक जानें",
      cards: [
        {
          title: "व्यापारी अधिकार और प्रतिनिधित्व",
          desc: "स्वतंत्र व्यवसायों की आवाज़ की अनदेखी करने वाले नीतिगत बदलावों के खिलाफ मजबूती से खड़े होना।"
        },
        {
          title: "अनावश्यक उत्पीड़न",
          desc: "स्थानीय दुकानदारों पर प्रशासनिक उत्पीड़न या अत्यधिक दबाव के मामलों में हस्तक्षेप करना।"
        },
        {
          title: "बाजार का बुनियादी ढांचा",
          desc: "व्यापारिक परिसरों के भीतर साफ सड़कों, उचित प्रकाश व्यवस्था और सुरक्षा की ओर प्रयास निर्देशित करना।"
        },
        {
          title: "सरकारी नीतियां और नियम",
          desc: "जटिल अनुपालन ढांचे, कर संरचनाओं और व्यावसायिक लाइसेंसिंग के माध्यम से सदस्यों का मार्गदर्शन करना।"
        },
        {
          title: "छोटे व्यवसायों की चुनौतियाँ",
          desc: "छोटे विक्रेताओं के लिए सहायता पैकेज, किराये की बातचीत और आसान सूक्ष्म-ऋण पहुंच को बढ़ावा देना।"
        },
        {
          title: "रोजगार और स्थानीय विकास",
          desc: "स्थिर स्थानीय रोजगार पैदा करने और सुरक्षित व्यावसायिक विकास के लिए व्यापार गलियारों को बढ़ावा देना।"
        },
        {
          title: "व्यापारी सुरक्षा और संरक्षा",
          desc: "बाजार क्षेत्रों में चोरी और जबरन वसूली को रोकने के लिए पुलिस विभागों के साथ सहयोग करना।"
        },
        {
          title: "प्रशासनिक चिंताएं",
          desc: "लाइसेंस नवीनीकरण में देरी, स्थानीय जोनिंग संघर्षों और उपयोगिता बिलिंग त्रुटियों का समाधान करना।"
        }
      ]
    },
    struggle: {
      heading: "हमारी आवाज़, हमारी एकता, हमारे अधिकार",
      copy: "जब कोई व्यापारी किसी समस्या का सामना करता है, तो उसे व्यक्तिगत संघर्ष नहीं रहना चाहिए। व्यापारी एकता परिषद सामूहिक प्रतिनिधित्व और रचनात्मक कार्रवाई में विश्वास करती है। हम जनहित और प्रशासनिक बातचीत में व्यापारियों की वास्तविक चिंताओं को लाने के लिए काम करते हैं और लोकतांत्रिक, कानूनी और संवैधानिक साधनों के माध्यम से समाधान तलाशते हैं।",
      cta: "अपनी समस्या दर्ज करें"
    },
    leadership: {
      heading: "हमारे नेतृत्व में",
      name: "श्री राहुल वर्मा जी",
      title: "प्रदेश अध्यक्ष एवं संस्थापक",
      org: "व्यापारी एकता परिषद",
      statement: "श्री राहुल वर्मा जी के नेतृत्व में, व्यापारी एकता परिषद व्यापारी एकता को मजबूत करने और यह सुनिश्चित करने के लिए प्रतिबद्ध है कि व्यापारियों की वास्तविक चिंताओं को एक सामूहिक आवाज़ मिले।",
      showMembers: "सदस्य देखें",
      hideMembers: "सदस्य छिपाएं",
      teams: {
        pradesh: {
          title: "प्रदेश कार्यकारिणी (Pradesh Team)",
          members: [
            { name: "राजीव वर्मा", role: "प्रदेश कोषाध्यक्ष", desc: "सिविल इंजीनियर" },
            { name: "देवेश चौधरी", role: "प्रदेश महामंत्री", desc: "मेडिकल सप्लायर" },
            { name: "एमपी सिंह", role: "प्रदेश संरक्षक", desc: "अस्पताल संचालक" },
            { name: "शमशाद अंसारी", role: "प्रदेश उपाध्यक्ष", desc: "सब्जी फल थोक विक्रेता" },
            { name: "चौधरी चरण सिंह", role: "प्रदेश प्रवक्ता", desc: "सर्राफा व्यापारी" }
          ]
        },
        mandal: {
          title: "मंडल कार्यकारिणी (Mandal Team)",
          members: [
            { name: "इंजी. मोहम्मद काशिफ", role: "मंडल प्रभारी", desc: "", image: "/members/mohd-kashif.png" },
            { name: "मोहम्मद पाशा", role: "मंडल अध्यक्ष", desc: "" },
            { name: "अजहर बुखारी", role: "मंडल उपाध्यक्ष", desc: "" },
            { name: "रागिब फारूकी", role: "मंडल उपाध्यक्ष", desc: "" }
          ]
        },
        zila: {
          title: "जिला कार्यकारिणी (Zila Team)",
          members: [
            { name: "अनुज मानव शर्मा", role: "जिला अध्यक्ष", desc: "रेस्टोरेंट संचालक" },
            { name: "तारिक मसूद", role: "जिला प्रभारी", desc: "दवाई विक्रेता" },
            { name: "प्रशांत चौधरी", role: "जिला महामंत्री", desc: "बिल्डिंग मटेरियल सप्लायर" },
            { name: "राजीव कुमार", role: "जिला मंत्री", desc: "रेस्टोरेंट संचालक" },
            { name: "फहीम अहमद", role: "जिला उपाध्यक्ष", desc: "किराना व्यापारी" },
            { name: "अजीम अहमद", role: "जिला मंत्री", desc: "किराना व्यापारी" },
            { name: "नईम अहमद अंसारी", role: "जिला अध्यक्ष (अल्पसंख्यक प्रकोष्ठ)", desc: "" }
          ]
        },
        nagar: {
          title: "नगर कार्यकारिणी (Nagar Team)",
          members: [
            { name: "मुस्तकीम अहमद", role: "नगर अध्यक्ष", desc: "" },
            { name: "आशीष गुप्ता", role: "नगर महामंत्री", desc: "" }
          ]
        },
        yuva: {
          title: "युवा मोर्चा (Yuva Team)",
          members: [
            { name: "विजय मोहन गुप्ता", role: "जिला अध्यक्ष (युवा मोर्चा)", desc: "" },
            { name: "मनिंदर सिंह", role: "जिला महामंत्री (युवा मोर्चा)", desc: "" }
          ]
        }
      }
    },
    activities: {
      heading: "गतिविधियां एवं अपडेट",
      readMore: "अधिक पढ़ें",
      cards: [
        {
          date: "12 अक्टूबर, 2026",
          category: "बैठक",
          title: "लखनऊ में राज्य स्तरीय व्यापारी सम्मेलन",
          desc: "राज्य के नेताओं के साथ स्थानीय बाजार जीएसटी अनुपालन और व्यापारी सुरक्षा योजनाओं के संबंध में प्रमुख नीतिगत प्रस्तावों पर चर्चा।"
        },
        {
          date: "28 सितंबर, 2026",
          category: "समाचार",
          title: "राहुल वर्मा जी ने उठाई बाजार में पार्किंग की चुनौतियाँ",
          desc: "वी.ई.पी. ने प्रमुख व्यावसायिक क्षेत्रों में महत्वपूर्ण पार्किंग लेआउट के संबंध में प्रशासन को ज्ञापन सौंपा।"
        },
        {
          date: "15 अगस्त, 2026",
          category: "जागरूकता",
          title: "डिजिटल भुगतान सुरक्षा और साइबर सुरक्षा कार्यशाला",
          desc: "स्थानीय दुकानदारों को डिजिटल धोखाधड़ी के जाल से अपने मोबाइल भुगतान गेटवे को सुरक्षित करने में मदद करना।"
        }
      ]
    },
    joinSection: {
      heading: "आपका व्यवसाय। आपकी आवाज़। आपकी एकता।",
      copy: "व्यापारी समुदाय के वैध हितों के लिए काम करने वाले एक सामूहिक मंच का हिस्सा बनें।",
      btnJoin: "परिषद से जुड़ें",
      btnContact: "हमसे संपर्क करें"
    },
    contactSection: {
      heading: "पदाधिकारियों से संपर्क करें",
      presidentTitle: "प्रदेश अध्यक्ष का केंद्रीय कार्यालय",
      whatsappBtn: "व्हाट्सएप करें",
      callBtn: "हेल्पलाइन पर कॉल करें",
      followUs: "सोशल मीडिया पर जुड़ें",
      addressLabel: "पता",
      addressVal: "निकट डी.ए.वी. स्कूल, विदुरकुटी रोड, बुखारा, बिजनौर - 246808"
    },
    form: {
      title: "समस्या दर्ज करें / पंजीकरण",
      desc: "अपनी व्यापारी समस्या दर्ज करने या वी.ई.पी. में शामिल होने का अनुरोध करने के लिए विवरण भरें।",
      ownerName: "मालिक / प्रोपराइटर का नाम",
      ownerPlaceholder: "उदा., राहुल वर्मा",
      businessName: "व्यवसाय / दुकान का नाम",
      businessPlaceholder: "उदा., वर्मा टेक्सटाइल्स",
      phone: "फोन नंबर",
      phonePlaceholder: "उदा., 7669090008",
      category: "व्यापार की श्रेणी",
      message: "अपनी समस्या / संदेश का विवरण दें",
      messagePlaceholder: "कृपया अपनी चिंताओं या वी.ई.पी. में शामिल होने के कारणों के बारे में विस्तार से लिखें...",
      submit: "विवरण जमा करें",
      submitting: "जमा किया जा रहा है...",
      success: "धन्यवाद! आपका विवरण दर्ज कर लिया गया है। श्री राहुल वर्मा जी का कार्यालय जल्द ही आपके अनुरोध की समीक्षा करेगा।",
      validationError: "कृपया सभी आवश्यक फ़ील्ड सही ढंग से भरें (फोन में कम से कम 10 अंक होने चाहिए)।"
    },
    gallery: {
      heading: "फ़ोटो गैलरी",
      subheading: "उत्तर प्रदेश भर में व्यापारी एकजुटता, अभियानों और सामुदायिक बैठकों की कुछ झलकियाँ।"
    }
  }
};
