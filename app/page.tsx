'use client';

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Menu, 
  X, 
  Globe, 
  Heart, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Users, 
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

// Local high-quality generated images
import elderlyCareImg from '../src/assets/images/elderly_care_home_1783718987604.jpg';
import newbornCareImg from '../src/assets/images/newborn_baby_care_1783719001906.jpg';
import nursingClinicalImg from '../src/assets/images/nursing_clinical_1783719013382.jpg';
import nursingHeroImg from '../src/assets/images/nursing_hero_1783719026387.jpg';
import medicationManagementImg from '../src/assets/images/medication_management_1783719622889.jpg';
import postOpRecoveryImg from '../src/assets/images/post_op_recovery_1783719635522.jpg';
import preventativeWellnessImg from '../src/assets/images/preventative_wellness_1783719650257.jpg';

// Bilingual translations dictionary
const translations = {
  ar: {
    navLogo: "رعاية تمريض منزلي",
    navLogoSub: "Nurses Home Care",
    phone: "0551404251",
    email: "ayaarab720@gmail.com",
    home: "الرئيسية",
    services: "خدماتنا",
    whyUs: "قيمنا",
    howItWorks: "آلية العمل",
    contact: "تواصل معنا",
    ctaButton: "اطلب استفساراً",
    saudiWideBadge: "رعاية تمريضية احترافية في جميع أنحاء المملكة العربية السعودية",
    heroBadge: "خدمات طبية منزلية موثوقة وعالية الجودة",
    heroTitle: "رعاية تمريضية متكاملة لجميع الأعمار في منزلك",
    heroSubtitle: "نوفر رعاية تمريضية منزلية احترافية ومخصصة بالكامل لتلبية الاحتياجات الصحية واليومية لأحبائكم بأعلى معايير الأمان، الدفء، والنزاهة الأخلاقية والمهنية.",
    ctaCall: "اتصل بنا الآن",
    ctaWhatsApp: "مراسلة عبر واتساب",
    ctaForm: "تقديم طلب استفسار",
    servicesTitle: "خدماتنا المخصصة",
    servicesSubtitle: "دعم صحي مرن وممتاز يلبي كافة احتياجات عائلتكم",
    servicesIntro: "نقدم خدمات تمريض ورعاية منزلية مرنة ومصممة لتناسب مختلف الفئات العمرية والحالات الصحية. نوضح أدناه أمثلة تمثيلية لما يمكن لفريقنا تقديمه من دعم، مع التأكيد على التزامنا بتعديل وتطوير خطط الرعاية بما يتناسب تماماً مع توجيهات الأطباء ورغبة الأسرة.",
    servicesFooter: "هل تبحث عن ترتيب رعاية تمريضية خاصة بحالة معينة؟ منسقونا جاهزون لمساعدتكم والإجابة على كافة تساؤلاتكم وتوفير التنسيق الطبي الملائم.",
    servicesDisclaimer: "*الخدمات المذكورة هي أمثلة توضيحية لخيارات الرعاية العامة التي يمكن تقديمها وليست قائمة حصرية كاملة.",
    
    service1Title: "التمريض المنزلي العام للمرضى",
    service1Desc: "مراقبة العلامات الحيوية، العناية بالجروح، متابعة سوائل الجسم والتحاليل، ومتابعة الوضع الصحي للمرضى من مختلف الأعمار.",
    service2Title: "إعطاء الحقن وإدارة الأدوية موضعياً",
    service2Desc: "إعطاء الحقن الوريدية والعضلية تحت الجلد، وإعطاء المحاليل بجرعاتها الدقيقة وتنظيم الأدوية اليومية تحت إشراف طبي صارم.",
    service3Title: "رعاية ومرافقة كبار السن والعجزة",
    service3Desc: "مرافقة عطوفة يومية، مساعدة في الحركة والتنقل الآمن والأنشطة الأساسية، والتذكير الفعّال بمواعيد الفحوصات الطبية والأدوية.",
    service4Title: "رعاية الأطفال والمواليد والرضع بالمنزل",
    service4Desc: "مساعدة الأمهات في رعاية الأطفال حديثي الولادة والمبتسرين، ومراقبة مؤشرات النمو وتقديم النصائح التمريضية والوقائية للوالدين.",
    service5Title: "الرعاية بعد العمليات وفترات التعافي للجميع",
    service5Desc: "توفير رعاية تخصصية للمتعافين حديثاً من العمليات الجراحية أو الإقامات الطويلة في المستشفيات لتسريع عملية الشفاء وتجنب المضاعفات.",
    service6Title: "الدعم الصحي الوقائي والرفاهية العائلية",
    service6Desc: "المساعدة في التغذية الصحية السليمة، تشجيع حركات العلاج الطبيعي البسيطة، وتقديم الدعم النفسي والوقائي المتكامل في المنزل.",
 
    trustTitle: "لماذا رعاية تمريض منزلي؟",
    trustSubtitle: "قيم مهنية وجدارة مطلقة في تقديم الخدمات الصحية المنزلية المعتمدة",
    trustFactor1Title: "كادر تمريضي مرخص ومؤهل",
    trustFactor1Desc: "نحرص على تلبية متطلباتكم من خلال ممرضين وممرضات يحملون مؤهلات طبية معتمدة لضمان تطبيق الرعاية بشكل علمي وسليم.",
    trustFactor2Title: "خطط رعاية مخصصة ومطابقة",
    trustFactor2Desc: "نصمم خطة الزيارات والمهام بشكل فردي وخاص لكل حالة، متبعين بدقة توصيات أطباء المريض المعالجين.",
    trustFactor3Title: "تنسيق طبي واستجابة متواصلة",
    trustFactor3Desc: "نوفر قنوات تواصل سريعة ومرنة لترتيب المواعيد وتحديث جدول الرعاية المنزلية بما يضمن راحتكم واستمرارية الخدمة.",
    trustFactor4Title: "أمان وخصوصية تامة للأسرة",
    trustFactor4Desc: "نلتزم بأعلى معايير الأمان السلوكي والخصوصية الأخلاقية لحماية كرامة وخصوصية المريض وجميع أفراد عائلته بالمنزل.",
 
    howItWorksTitle: "خطوات الحصول على الخدمة",
    howItWorksSubtitle: "عملية بسيطة وسريعة لتأمين رعاية تمريضية منزلية موثوقة لعائلتك",
    step1Title: "١. تقديم الطلب أو الاستفسار",
    step1Desc: "تواصل معنا مباشرة عبر مكالمة هاتفية، أو رسالة واتساب، أو من خلال ملء نموذج الاستفسار بالأسفل.",
    step2Title: "٢. الاستشارة والتقييم الأولي",
    step2Desc: "يتواصل معك منسقنا الطبي لفهم احتياجات الحالة بدقة، مراجعة توصيات الطبيب، واقتراح خطة رعاية مناسبة.",
    step3Title: "٣. بدء الخدمة والزيارات المنزلية",
    step3Desc: "يتم مطابقة الحالة مع الممرض أو الممرضة الأنسب للبدء بالزيارات وفق الجدول الزمني المتفق عليه وتوفير الرعاية فوراً.",
 
    formTitle: "أرسل استفسارك الطبي فوراً",
    formSubtitle: "املأ هذا النموذج البسيط ببياناتك وسيقوم منسقنا الطبي بإنشاء مسودة بريد إلكتروني تواصل معنا بها وسيتصل بك فوراً.",
    formName: "الاسم الكامل للمتصل",
    formPhone: "رقم الجوال النشط",
    formPhonePlaceholder: "05xxxxxxxx",
    formService: "الرعاية المطلوبة أو الحالة العامة",
    formServiceSelect: "يرجى تحديد الخدمة المطلوبة...",
    formMessage: "تفاصيل الحالة الصحية أو مواعيد الرعاية المفضلة (اختياري)",
    formMessagePlaceholder: "اكتب هنا أي تفاصيل تود توضيحها مثل الفئة العمرية، التشخيص، أو عدد الساعات المطلوبة...",
    formSubmit: "إرسال الاستفسار الآن (عبر البريد الإلكتروني)",
    formSuccessMessage: "سيتم الآن فتح تطبيق البريد الخاص بك لإرسال بيانات الاستفسار مباشرة لقسم التنسيق والمتابعة.",
    formRequired: "هذا الحقل مطلوب للتواصل معك",
 
    footerText: "مؤسسة رعاية تمريض منزلي (Nurses Home Care) تقدم خدمات التمريض والرعاية المنزلية المتكاملة لجميع الأعمار في مختلف مدن المملكة العربية السعودية، ملتزمين بالرحمة والجودة الطبية والنزاهة الأخلاقية والمهنية المطلقة.",
    footerRights: "جميع الحقوق محفوظة. رعاية تمريض منزلي © ٢٠٢٦.",
    footerHoursTitle: "ساعات استقبال الطلبات",
    footerHours: "نحن في خدمتكم طوال أيام الأسبوع على مدار ٢٤ ساعة، ونرد على كافة الاتصالات والاستفسارات الواردة بمرونة تامة وسرعة قصوى.",
    footerContactTitle: "قنوات الاتصال الرسمية",
    footerLinksTitle: "روابط وتنقّل سريع",
    
    servicesItems: [
      "التمريض المنزلي العام",
      "إدارة الحقن والأدوية والمحاليل",
      "رعاية ومرافقة كبار السن والعجزة",
      "رعاية الأطفال حديثي الولادة والمواليد",
      "الرعاية التلطيفية والتعافي بعد الجراحة",
      "الدعم الصحي والرفاهية الوقائية المنزلية"
    ]
  },
  en: {
    navLogo: "Nurses Home Care",
    navLogoSub: "رعاية تمريض منزلي",
    phone: "0551404251",
    email: "ayaarab720@gmail.com",
    home: "Home",
    services: "Our Services",
    whyUs: "Our Values",
    howItWorks: "How It Works",
    contact: "Contact Us",
    ctaButton: "Inquire Now",
    saudiWideBadge: "Professional Nursing Care Services Across Saudi Arabia",
    heroBadge: "Trusted & Premium Home Healthcare",
    heroTitle: "Integrated Nursing & Care for All Ages in Your Home",
    heroSubtitle: "We provide professional, personalized, and compassionate home nursing services tailored completely to meet your loved ones' medical and daily care needs with the highest standards of safety, dignity, and clinical ethics.",
    ctaCall: "Call Us Now",
    ctaWhatsApp: "Message on WhatsApp",
    ctaForm: "Send Quick Inquiry",
    servicesTitle: "Our Comprehensive Services",
    servicesSubtitle: "Flexible & Professional Healthcare Support Designed for Every Need",
    servicesIntro: "We deliver professional and adaptive home nursing care customized to support different ages, health profiles, and recovering stages. Below are representative examples of how our dedicated nurses can assist, highlighting that we customize care schedules and plans entirely for your specific situation under medical oversight.",
    servicesFooter: "Looking for a customized clinical arrangement? Our responsive medical coordination team is ready to answer all your inquiries and help map out the optimal home nursing care plan.",
    servicesDisclaimer: "*Note: The services mentioned above are illustrative examples of general care options we support, rather than an exhaustive catalog.",

    service1Title: "General Home Clinical Nursing",
    service1Desc: "Monitoring vital signs, professional wound dressing, managing body fluids, and ensuring overall health assessments at home for individuals of all ages.",
    service2Title: "Injections & Medication Administration",
    service2Desc: "Administering prescribed intravenous (IV) or intramuscular (IM) injections and carefully scheduling medications under doctor instructions.",
    service3Title: "Elderly Companionship & Care",
    service3Desc: "Compassionate daily support, mobility and transfer assistance, and structured reminders for essential medications, medical visits, and meals.",
    service4Title: "Pediatric & Newborn Home Support",
    service4Desc: "Providing support for families with newborn baby care, tracking growth parameters, and guiding parents on pediatric wellness and preventive care.",
    service5Title: "Post-Operative & Surgical Recovery",
    service5Desc: "Specialized post-surgical home nursing to encourage rapid healing, prevent complications, manage discomfort, and support daily activities.",
    service6Title: "Wellness & Preventative Home Support",
    service6Desc: "Assisting with basic range-of-motion movements, preparing structured nutritional meals, and delivering compassionate preventative care.",

    trustTitle: "Why Choose Nurses Home Care?",
    trustSubtitle: "Factual integrity, certified professionals, and complete dedication to home care",
    trustFactor1Title: "Qualified & Licensed Nurses",
    trustFactor1Desc: "We fulfill care requests through licensed, professional nurses who possess valid health credentials to guarantee high standards of safety.",
    trustFactor2Title: "Customized & Compliant Care Plans",
    trustFactor2Desc: "Each case is evaluated individually to design a custom visiting schedule and caregiver checklist aligned with doctor recommendations.",
    trustFactor3Title: "Continuous Coordination & Communication",
    trustFactor3Desc: "Our responsive desk coordinates schedules, answers client queries promptly, and handles client updates with total flexibility.",
    trustFactor4Title: "Absolute Privacy & Ethical Conduct",
    trustFactor4Desc: "We value the privacy of your home and enforce a strict code of professional ethics to secure patient dignity and ease of mind.",

    howItWorksTitle: "Simple 3-Step Process",
    howItWorksSubtitle: "Securing professional home nursing care for your family has never been easier",
    step1Title: "1. Quick Outreach",
    step1Desc: "Contact us directly via a phone call, WhatsApp chat, or complete the short inquiry form below on our website.",
    step2Title: "2. Plan Formulation",
    step2Desc: "Our medical coordinator speaks with you to understand health goals, review clinical instructions, and propose a customized nursing routine.",
    step3Title: "3. Care Execution Begins",
    step3Desc: "We match the perfect professional nurse for your schedule and family dynamics to begin clinical visits and supportive home care.",

    formTitle: "Contact Us Directly For Inquiries",
    formSubtitle: "Fill out the simple form below. Submitting it will prepare a pre-formatted email draft on your device. We will respond instantly.",
    formName: "Full Name of Contact Person",
    formPhone: "Active Mobile Number",
    formPhonePlaceholder: "05xxxxxxxx",
    formService: "Desired Service or Health Profile",
    formServiceSelect: "Select the most relevant care option...",
    formMessage: "Health Profile Details or Desired Schedule (Optional)",
    formMessagePlaceholder: "Describe any special medical conditions, preferred frequency, hours per day, or ages of those requiring home nursing...",
    formSubmit: "Submit Inquiry (Open Email Draft)",
    formSuccessMessage: "This will open your mail application to send your details directly to our coordination team.",
    formRequired: "This field is required for us to reach you",

    footerText: "Nurses Home Care provides integrated, professional home nursing and healthcare support services for all ages across Saudi Arabia. Committed to absolute safety, clinical standards, compassionate treatment, and ethical integrity.",
    footerRights: "All rights reserved. Nurses Home Care © 2026.",
    footerHoursTitle: "Working & Contact Hours",
    footerHours: "We operate 24 hours a day, 7 days a week, and are dedicated to answering your calls and coordinate services promptly.",
    footerContactTitle: "Official Channels",
    footerLinksTitle: "Quick Navigation",
    
    servicesItems: [
      "General Home Nursing",
      "Injections & Medication Administration",
      "Elderly Care & Companionship",
      "Newborn & Infant Home Support",
      "Post-Surgical & Recovery Care",
      "Preventative Wellness & Home Support"
    ]
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar'); // Arabic first-class support by default
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Ensure HTML element reflects correct direction
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.formRequired;
    if (!formData.phone.trim()) newErrors.phone = t.formRequired;
    if (!formData.service) newErrors.service = t.formRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct Mailto Link
    const subject = encodeURIComponent(`Nurses Home Care - Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name / الاسم: ${formData.name}\n` +
      `Phone / الجوال: ${formData.phone}\n` +
      `Service / الخدمة: ${formData.service}\n` +
      `Message / تفاصيل الاستفسار:\n${formData.message || 'No additional details / لا توجد تفاصيل إضافية'}\n\n` +
      `--- Submitted via nursecare24.com ---`
    );

    window.location.href = `mailto:ayaarab720@gmail.com?subject=${subject}&body=${emailBody}`;
  };

  // Static HTML version template for copy/download (disabled)
  const staticHtmlCode = "";
  const ignoredRest = `<!DOCTYPE html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>رعاية تمريض منزلي | Nurses Home Care - Saudi Arabia</title>
  <meta name="description" content="Nurses Home Care (رعاية تمريض منزلي) provides premium, trusted, and compassionate professional home nursing and healthcare services for all ages across Saudi Arabia. Contact us at 0551404251.">
  <link rel="canonical" href="https://nursecare24.com/">
  <!-- Google Fonts (Cairo for Arabic, Plus Jakarta Sans for English) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Tailwind CSS v3 Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'Cairo', 'sans-serif'],
            cairo: ['Cairo', 'sans-serif'],
          },
          colors: {
            brand: {
              emerald: '#0f4c43',
              emeraldLight: '#165f54',
              emeraldDark: '#0a332d',
              cream: '#f9f6f0',
              sand: '#f0e9dc',
              gold: '#c3a475',
              goldDark: '#a98755',
              coral: '#e07a5f',
            }
          }
        }
      }
    }
  </script>
  <style>
    html {
      scroll-behavior: smooth;
    }
    .lang-en .show-ar { display: none !important; }
    .lang-ar .show-en { display: none !important; }
  </style>
</head>
<body class="bg-[#f9f6f0] text-slate-800 antialiased font-sans ${lang === 'ar' ? 'lang-ar' : 'lang-en'}">

  <!-- TOP BAR -->
  <div class="bg-brand-emerald text-brand-sand text-xs py-2 px-4 text-center border-b border-brand-emeraldLight font-medium">
    <span class="show-ar">رعاية تمريضية احترافية في جميع أنحاء المملكة العربية السعودية</span>
    <span class="show-en">Professional Nursing Care Services Across Saudi Arabia</span>
  </div>

  <!-- STICKY NAVBAR -->
  <header class="sticky top-0 z-50 bg-[#f9f6f0]/95 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-brand-emerald rounded-xl flex items-center justify-center text-brand-cream font-bold text-lg">NH</div>
        <div>
          <h1 class="text-brand-emerald font-bold text-lg leading-tight">
            <span class="show-ar">رعاية تمريض منزلي</span>
            <span class="show-en">Nurses Home Care</span>
          </h1>
          <p class="text-xs text-brand-gold font-medium leading-none mt-0.5">
            <span class="show-ar">Nurses Home Care</span>
            <span class="show-en">رعاية تمريض منزلي</span>
          </p>
        </div>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#services" class="text-slate-700 hover:text-brand-emerald transition-colors">
          <span class="show-ar">خدماتنا</span><span class="show-en">Our Services</span>
        </a>
        <a href="#whyUs" class="text-slate-700 hover:text-brand-emerald transition-colors">
          <span class="show-ar">قيمنا</span><span class="show-en">Our Values</span>
        </a>
        <a href="#howItWorks" class="text-slate-700 hover:text-brand-emerald transition-colors">
          <span class="show-ar">آلية العمل</span><span class="show-en">How It Works</span>
        </a>
        <a href="#contact" class="text-slate-700 hover:text-brand-emerald transition-colors font-semibold text-brand-emerald">
          <span class="show-ar">تواصل معنا</span><span class="show-en">Contact Us</span>
        </a>
      </nav>

      <!-- Language Toggle & Direct Inquiry -->
      <div class="flex items-center gap-4">
        <button onclick="toggleLanguage()" class="flex items-center gap-1.5 text-xs font-bold uppercase border border-slate-300 rounded-lg px-3 py-1.5 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer">
          <svg class="w-4 h-4 text-brand-emerald" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"></path></svg>
          <span class="show-ar">English</span><span class="show-en">عربي</span>
        </button>
        <a href="#contact" class="hidden sm:inline-flex items-center justify-center bg-brand-emerald hover:bg-brand-emeraldLight text-brand-cream text-xs font-bold rounded-lg px-4 py-2.5 transition-all">
          <span class="show-ar">اطلب استفساراً</span><span class="show-en">Inquire Now</span>
        </a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#f9f6f0] via-[#f3ede1] to-[#f9f6f0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 bg-brand-cream border border-brand-gold/30 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-emeraldLight">
            <span class="w-2 h-2 rounded-full bg-[#e07a5f] animate-pulse"></span>
            <span class="show-ar">خدمات طبية منزلية موثوقة وعالية الجودة</span>
            <span class="show-en">Trusted & Premium Home Healthcare</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-emeraldDark leading-tight tracking-tight">
            <span class="show-ar">رعاية تمريضية متكاملة لجميع الأعمار في منزلك</span>
            <span class="show-en">Integrated Nursing & Care for All Ages in Your Home</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            <span class="show-ar">نوفر رعاية تمريضية منزلية احترافية ومخصصة بالكامل لتلبية الاحتياجات الصحية واليومية لأحبائكم بأعلى معايير الأمان، الدفء، والنزاهة الأخلاقية والمهنية.</span>
            <span class="show-en">We provide professional, personalized, and compassionate home nursing services tailored completely to meet your loved ones' medical and daily care needs with the highest standards of safety, dignity, and clinical ethics.</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="tel:0551404251" class="inline-flex items-center justify-center bg-brand-emerald hover:bg-brand-emeraldLight text-brand-cream font-bold px-6 py-3.5 rounded-xl transition-all shadow-md gap-2 text-center">
              <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.145-5.12-3.443-6.265-6.265l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
              <span class="show-ar">اتصل بنا الآن (0551404251)</span>
              <span class="show-en">Call Us Now (0551404251)</span>
            </a>
            <a href="https://wa.me/966551404251" target="_blank" class="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md gap-2 text-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.4 0 9.786-4.391 9.788-9.799.002-2.618-1.01-5.08-2.859-6.93C16.305 2.025 13.84 1.01 11.997 1.01c-5.4 0-9.786 4.392-9.788 9.799-.001 1.93.51 3.8 1.478 5.438L2.8 20.9l4.847-1.746z"></path></svg>
              <span class="show-ar">مراسلة عبر واتساب</span>
              <span class="show-en">Message on WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <!-- CARD STATEMENTS -->
          <div class="bg-white border border-slate-200 shadow-xl rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-brand-emerald">
              <span class="show-ar">طلب استفسار ورعاية منزلية</span>
              <span class="show-en">Home Care Inquiry</span>
            </h3>
            <p class="text-xs text-slate-500">
              <span class="show-ar">أدخل بياناتك وسوف ننشئ لك مسودة بريد تواصل معنا بها، وسوف نتواصل معك مباشرة لتنسيق الخدمة.</span>
              <span class="show-en">Enter your information below to formulate a pre-set email inquiry to our office. We will call you back.</span>
            </p>
            <form onsubmit="handleFormSubmit(event)" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  <span class="show-ar">الاسم الكامل</span><span class="show-en">Full Name</span>
                </label>
                <input type="text" id="form-name" required placeholder="..." class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  <span class="show-ar">رقم الجوال</span><span class="show-en">Mobile Number</span>
                </label>
                <input type="tel" id="form-phone" required placeholder="05xxxxxxxx" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  <span class="show-ar">الخدمة المطلوبة</span><span class="show-en">Desired Service</span>
                </label>
                <select id="form-service" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald">
                  <option class="show-ar" value="التمريض المنزلي العام">التمريض المنزلي العام للمرضى</option>
                  <option class="show-ar" value="إعطاء الحقن والادوية">إعطاء الحقن وإدارة الأدوية والمحاليل</option>
                  <option class="show-ar" value="رعاية كبار السن">رعاية ومرافقة كبار السن والعجزة</option>
                  <option class="show-ar" value="رعاية الأطفال والمواليد">رعاية الأطفال والمواليد والرضع</option>
                  <option class="show-ar" value="رعاية ما بعد الجراحة">الرعاية بعد العمليات وفترات التعافي للجميع</option>
                  <option class="show-ar" value="الدعم الصحي الوقائي">الدعم الصحي الوقائي والرفاهية العائلية</option>
                  <option class="show-en" value="General Home Clinical Nursing">General Home Clinical Nursing</option>
                  <option class="show-en" value="Injections & Medication Administration">Injections & Medication Administration</option>
                  <option class="show-en" value="Elderly Companionship & Care">Elderly Companionship & Care</option>
                  <option class="show-en" value="Pediatric & Newborn Home Support">Pediatric & Newborn Home Support</option>
                  <option class="show-en" value="Post-Operative & Surgical Recovery">Post-Operative & Surgical Recovery</option>
                  <option class="show-en" value="Wellness & Preventative Home Support">Wellness & Preventative Home Support</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  <span class="show-ar">تفاصيل الحالة (اختياري)</span><span class="show-en">Inquiry Details (Optional)</span>
                </label>
                <textarea id="form-message" rows="2" class="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald" placeholder="..."></textarea>
              </div>
              <button type="submit" class="w-full bg-brand-emerald hover:bg-brand-emeraldLight text-brand-cream font-bold py-2.5 rounded-lg transition-all text-sm shadow cursor-pointer">
                <span class="show-ar">إرسال الاستفسار الآن (البريد الإلكتروني)</span>
                <span class="show-en">Submit Inquiry (Send Email)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-emeraldDark">
          <span class="show-ar">خدماتنا التمريضية المخصصة</span>
          <span class="show-en">Our Comprehensive Services</span>
        </h2>
        <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
          <span class="show-ar">نقدم خدمات تمريض ورعاية منزلية مرنة ومصممة لتناسب مختلف الفئات العمرية والحالات الصحية. نوضح أدناه أمثلة تمثيلية لما يمكن لفريقنا تقديمه من دعم، مع التأكيد على التزامنا بتعديل وتطوير خطط الرعاية بما يتناسب تماماً مع توجيهات الأطباء ورغبة الأسرة.</span>
          <span class="show-en">We deliver professional and adaptive home nursing care customized to support different ages, health profiles, and recovering stages. Below are representative examples of how our dedicated nurses can assist, highlighting that we customize care schedules and plans entirely for your specific situation under medical oversight.</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="bg-brand-cream border border-brand-sand/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-6 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-brand-emeraldDark mb-3">
              <span class="show-ar">التمريض المنزلي العام للمرضى</span>
              <span class="show-en">General Home Clinical Nursing</span>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              <span class="show-ar">مراقبة العلامات الحيوية، العناية بالجروح، متابعة سوائل الجسم والتحاليل، ومتابعة الوضع الصحي للمرضى من مختلف الأعمار.</span>
              <span class="show-en">Monitoring vital signs, professional wound dressing, managing body fluids, and ensuring overall health assessments at home for individuals of all ages.</span>
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
            <span class="show-ar">اطلب الخدمة</span><span class="show-en">Inquire Now</span> &rarr;
          </a>
        </div>

        <!-- Service 2 -->
        <div class="bg-brand-cream border border-brand-sand/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-6 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-brand-emeraldDark mb-3">
              <span class="show-ar">إعطاء الحقن وإدارة الأدوية</span>
              <span class="show-en">Injections & Medication Administration</span>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              <span class="show-ar">إعطاء الحقن الوريدية والعضلية تحت الجلد، وإعطاء المحاليل بجرعاتها الدقيقة وتنظيم الأدوية اليومية تحت إشراف طبي صارم.</span>
              <span class="show-en">Administering prescribed intravenous (IV) or intramuscular (IM) injections and carefully scheduling medications under doctor instructions.</span>
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
            <span class="show-ar">اطلب الخدمة</span><span class="show-en">Inquire Now</span> &rarr;
          </a>
        </div>

        <!-- Service 3 -->
        <div class="bg-brand-cream border border-brand-sand/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-6 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-brand-emeraldDark mb-3">
              <span class="show-ar">رعاية ومرافقة كبار السن والعجزة</span>
              <span class="show-en">Elderly Companionship & Care</span>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              <span class="show-ar">مرافقة عطوفة يومية، مساعدة في الحركة والتنقل الآمن والأنشطة الأساسية، والتذكير الفعّال بمواعيد الفحوصات الطبية والأدوية.</span>
              <span class="show-en">Compassionate daily support, mobility and transfer assistance, and structured reminders for essential medications, medical visits, and meals.</span>
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
            <span class="show-ar">اطلب الخدمة</span><span class="show-en">Inquire Now</span> &rarr;
          </a>
        </div>

        <!-- Service 4 -->
        <div class="bg-brand-cream border border-brand-sand/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-6 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-brand-emeraldDark mb-3">
              <span class="show-ar">رعاية الأطفال والمواليد بالمنزل</span>
              <span class="show-en">Pediatric & Newborn Home Support</span>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              <span class="show-ar">مساعدة الأمهات في رعاية الأطفال حديثي الولادة والمبتسرين، ومراقبة مؤشرات النمو وتقديم النصائح التمريضية والوقائية للوالدين.</span>
              <span class="show-en">Providing support for families with newborn baby care, tracking growth parameters, and guiding parents on pediatric wellness and preventative care.</span>
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
            <span class="show-ar">اطلب الخدمة</span><span class="show-en">Inquire Now</span> &rarr;
          </a>
        </div>

        <!-- Service 5 -->
        <div class="bg-brand-cream border border-brand-sand/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-6 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-brand-emeraldDark mb-3">
              <span class="show-ar">الرعاية بعد العمليات وفترات التعافي</span>
              <span class="show-en">Post-Operative & Surgical Recovery</span>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              <span class="show-ar">توفير رعاية تخصصية للمتعافين حديثاً من العمليات الجراحية أو الإقامات الطويلة في المستشفيات لتسريع عملية الشفاء وتجنب المضاعفات.</span>
              <span class="show-en">Specialized post-surgical home nursing to encourage rapid healing, prevent complications, manage discomfort, and support daily activities.</span>
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
            <span class="show-ar">اطلب الخدمة</span><span class="show-en">Inquire Now</span> &rarr;
          </a>
        </div>

        <!-- Service 6 -->
        <div class="bg-brand-cream border border-brand-sand/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-6 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-9-4.5h15m-15 9h15"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-brand-emeraldDark mb-3">
              <span class="show-ar">الدعم الصحي الوقائي والرفاهية</span>
              <span class="show-en">Wellness & Preventative Home Support</span>
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              <span class="show-ar">المساعدة في التغذية الصحية السليمة، تشجيع حركات العلاج الطبيعي البسيطة، وتقديم الدعم النفسي والوقائي المتكامل في المنزل.</span>
              <span class="show-en">Assisting with basic range-of-motion movements, preparing structured nutritional meals, and delivering compassionate preventative care.</span>
            </p>
          </div>
          <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
            <span class="show-ar">اطلب الخدمة</span><span class="show-en">Inquire Now</span> &rarr;
          </a>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-xs text-slate-400 italic">
          <span class="show-ar">*الخدمات المذكورة هي أمثلة توضيحية لخيارات الرعاية العامة التي يمكن تقديمها وليست قائمة حصرية كاملة.</span>
          <span class="show-en">*Note: The services mentioned above are illustrative examples of general care options we support, rather than an exhaustive catalog.</span>
        </p>
      </div>
    </div>
  </section>

  <!-- TRUST SECTION -->
  <section id="whyUs" class="py-20 bg-brand-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-emeraldDark">
            <span class="show-ar">لماذا رعاية تمريض منزلي؟</span>
            <span class="show-en">Why Choose Nurses Home Care?</span>
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            <span class="show-ar">نلتزم بتقديم رعاية طبية منزلية تتسم بالأمان والمهنية العالية وقيم النزاهة المهنية المطلقة. نحن ندرك تماماً حساسية الرعاية المنزلية، ولذلك نعمل بجدية فائقة للتأكد من تلبية متطلباتكم الطبية واليومية بمهنية وخصوصية تامة.</span>
            <span class="show-en">We are strictly dedicated to providing premium clinical home care guided by clinical safety, factual transparency, and high professional standards. We match qualified staff according to your physical demands and family context.</span>
          </p>
          <div class="border-t border-brand-sand pt-6 flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-brand-emerald flex items-center justify-center text-brand-cream font-bold text-lg">✓</div>
            <div>
              <p class="text-sm font-bold text-brand-emeraldDark">
                <span class="show-ar">رعاية تمريضية مرخصة بنسبة ١٠٠٪</span>
                <span class="show-en">100% Certified Nursing Care</span>
              </p>
              <p class="text-xs text-slate-500">
                <span class="show-ar">موثوقة وآمنة وصادقة بالكامل</span>
                <span class="show-en">Safe, honest, and entirely reliable</span>
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Factor 1 -->
          <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-brand-emeraldDark text-base mb-2">
              <span class="show-ar">كادر تمريضي مرخص ومؤهل</span>
              <span class="show-en">Qualified & Licensed Nurses</span>
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              <span class="show-ar">نحرص على تلبية متطلباتكم من خلال ممرضين وممرضات يحملون مؤهلات طبية معتمدة لضمان تطبيق الرعاية بشكل علمي وسليم.</span>
              <span class="show-en">We fulfill care requests through licensed, professional nurses who possess valid health credentials to guarantee high standards of safety.</span>
            </p>
          </div>
          <!-- Factor 2 -->
          <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-brand-emeraldDark text-base mb-2">
              <span class="show-ar">خطط رعاية مخصصة ومطابقة</span>
              <span class="show-en">Customized & Compliant Plans</span>
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              <span class="show-ar">نصمم خطة الزيارات والمهام بشكل فردي وخاص لكل حالة، متبعين بدقة توصيات أطباء المريض المعالجين.</span>
              <span class="show-en">Each case is evaluated individually to design a custom visiting schedule and caregiver checklist aligned with doctor recommendations.</span>
            </p>
          </div>
          <!-- Factor 3 -->
          <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-brand-emeraldDark text-base mb-2">
              <span class="show-ar">تنسيق طبي واستجابة متواصلة</span>
              <span class="show-en">Continuous Coordination</span>
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              <span class="show-ar">نوفر قنوات تواصل سريعة ومرنة لترتيب المواعيد وتحديث جدول الرعاية المنزلية بما يضمن راحتكم واستمرارية الخدمة.</span>
              <span class="show-en">Our responsive desk coordinates schedules, answers client queries promptly, and handles client updates with total flexibility.</span>
            </p>
          </div>
          <!-- Factor 4 -->
          <div class="bg-white p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-brand-emeraldDark text-base mb-2">
              <span class="show-ar">أمان وخصوصية تامة للأسرة</span>
              <span class="show-en">Absolute Privacy & Ethics</span>
            </h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              <span class="show-ar">نلتزم بأعلى معايير الأمان السلوكي والخصوصية الأخلاقية لحماية كرامة وخصوصية المريض وجميع أفراد عائلته بالمنزل.</span>
              <span class="show-en">We value the privacy of your home and enforce a strict code of professional ethics to secure patient dignity and ease of mind.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section id="howItWorks" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-emeraldDark">
          <span class="show-ar">خطوات الحصول على الخدمة</span>
          <span class="show-en">Simple 3-Step Process</span>
        </h2>
        <p class="text-sm text-slate-600">
          <span class="show-ar">عملية بسيطة وسريعة لتأمين رعاية تمريضية منزلية موثوقة لعائلتك</span>
          <span class="show-en">Securing professional home nursing care for your family has never been easier</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Step 1 -->
        <div class="text-center space-y-4 relative z-10">
          <div class="w-16 h-16 bg-brand-cream border border-brand-sand text-brand-emerald font-bold text-xl rounded-full flex items-center justify-center mx-auto shadow-sm">1</div>
          <h3 class="font-bold text-lg text-brand-emeraldDark">
            <span class="show-ar">١. تقديم الطلب أو الاستفسار</span>
            <span class="show-en">1. Quick Outreach</span>
          </h3>
          <p class="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
            <span class="show-ar">تواصل معنا مباشرة عبر مكالمة هاتفية، أو رسالة واتساب، أو من خلال ملء نموذج الاستفسار بالأسفل.</span>
            <span class="show-en">Contact us directly via a phone call, WhatsApp chat, or complete the short inquiry form below on our website.</span>
          </p>
        </div>
        <!-- Step 2 -->
        <div class="text-center space-y-4 relative z-10">
          <div class="w-16 h-16 bg-brand-cream border border-brand-sand text-brand-emerald font-bold text-xl rounded-full flex items-center justify-center mx-auto shadow-sm">2</div>
          <h3 class="font-bold text-lg text-brand-emeraldDark">
            <span class="show-ar">٢. الاستشارة والتقييم الأولي</span>
            <span class="show-en">2. Plan Formulation</span>
          </h3>
          <p class="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
            <span class="show-ar">يتواصل معك منسقنا الطبي لفهم احتياجات الحالة بدقة، مراجعة توصيات الطبيب، واقتراح خطة رعاية مناسبة.</span>
            <span class="show-en">Our medical coordinator speaks with you to understand health goals, review clinical instructions, and propose a customized nursing routine.</span>
          </p>
        </div>
        <!-- Step 3 -->
        <div class="text-center space-y-4 relative z-10">
          <div class="w-16 h-16 bg-brand-cream border border-brand-sand text-brand-emerald font-bold text-xl rounded-full flex items-center justify-center mx-auto shadow-sm">3</div>
          <h3 class="font-bold text-lg text-brand-emeraldDark">
            <span class="show-ar">٣. بدء الخدمة والزيارات المنزلية</span>
            <span class="show-en">3. Care Execution Begins</span>
          </h3>
          <p class="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
            <span class="show-ar">يتم مطابقة الحالة مع الممرض أو الممرضة الأنسب للبدء بالزيارات وفق الجدول الزمني المتفق عليه وتوفير الرعاية فوراً.</span>
            <span class="show-en">We match the perfect professional nurse for your schedule and family dynamics to begin clinical visits and supportive home care.</span>
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT / CALL TO ACTION -->
  <section id="contact" class="py-20 bg-[#f3ede1]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <h2 class="text-2xl sm:text-4xl font-extrabold text-brand-emeraldDark">
        <span class="show-ar">اتصل بنا الآن لتنسيق الرعاية التمريضية</span>
        <span class="show-en">Call Us Now to Coordinate Care</span>
      </h2>
      <p class="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
        <span class="show-ar">فريق التنسيق الطبي لدينا جاهز لمكالماتكم واستفساراتكم على مدار ٢٤ ساعة طوال أيام الأسبوع. لا تتردد في الاتصال الهاتفي المباشر أو المراسلة الفورية.</span>
        <span class="show-en">Our clinical coordinators are ready to answer your inquiries 24/7. Reach out directly by phone, WhatsApp message, or email.</span>
      </p>

      <div class="flex flex-wrap justify-center gap-6 pt-4">
        <a href="tel:0551404251" class="inline-flex items-center gap-2 bg-brand-emerald hover:bg-brand-emeraldLight text-brand-cream font-bold px-8 py-4 rounded-xl shadow transition-all">
          <span class="show-ar">اتصال مباشر: 0551404251</span>
          <span class="show-en">Call Directly: 0551404251</span>
        </a>
        <a href="https://wa.me/966551404251" target="_blank" class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow transition-all">
          <span class="show-ar">راسلنا واتساب</span>
          <span class="show-en">WhatsApp Message</span>
        </a>
        <a href="mailto:ayaarab720@gmail.com" class="inline-flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl shadow transition-all">
          <span class="show-ar">ayaarab720@gmail.com</span>
          <span class="show-en">ayaarab720@gmail.com</span>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-brand-emeraldDark text-brand-sand py-12 border-t border-brand-emerald">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
      <div class="md:col-span-5 space-y-4">
        <h3 class="text-xl font-bold text-brand-cream">
          <span class="show-ar">رعاية تمريض منزلي</span>
          <span class="show-en">Nurses Home Care</span>
        </h3>
        <p class="text-xs text-brand-sand/80 leading-relaxed max-w-sm">
          <span class="show-ar">مؤسسة رعاية تمريض منزلي (Nurses Home Care) تقدم خدمات التمريض والرعاية المنزلية المتكاملة لجميع الأعمار في مختلف مدن المملكة العربية السعودية، ملتزمين بالرحمة والجودة الطبية والنزاهة الأخلاقية والمهنية المطلقة.</span>
          <span class="show-en">Nurses Home Care provides integrated, professional home nursing and healthcare support services for all ages across Saudi Arabia. Committed to absolute safety, clinical standards, compassionate treatment, and ethical integrity.</span>
        </p>
      </div>

      <div class="md:col-span-4 space-y-4">
        <h4 class="font-bold text-sm text-brand-cream">
          <span class="show-ar">معلومات الاتصال</span>
          <span class="show-en">Contact Info</span>
        </h4>
        <ul class="text-xs text-brand-sand/80 space-y-2">
          <li><span class="show-ar">الهاتف: 0551404251</span><span class="show-en">Phone: 0551404251</span></li>
          <li><span class="show-ar">البريد الإلكتروني: ayaarab720@gmail.com</span><span class="show-en">Email: ayaarab720@gmail.com</span></li>
          <li><span class="show-ar">ساعات العمل: ٢٤ ساعة طوال أيام الأسبوع</span><span class="show-en">Hours: 24 Hours / 7 Days</span></li>
        </ul>
      </div>

      <div class="md:col-span-3 space-y-4">
        <h4 class="font-bold text-sm text-brand-cream">
          <span class="show-ar">الموقع الإلكتروني</span>
          <span class="show-en">Website Address</span>
        </h4>
        <p class="text-xs text-brand-sand/80">nursecare24.com</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-emerald py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sand/60">
      <p>
        <span class="show-ar">جميع الحقوق محفوظة. رعاية تمريض منزلي © ٢٠٢٦.</span>
        <span class="show-en">All rights reserved. Nurses Home Care © 2026.</span>
      </p>
    </div>
  </footer>

  <!-- JS CODE FOR BILINGUAL AND SUBMISSION -->
  <script>
    function toggleLanguage() {
      const body = document.body;
      const isArabic = body.classList.contains('lang-ar');
      if (isArabic) {
        body.classList.remove('lang-ar');
        body.classList.add('lang-en');
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
      } else {
        body.classList.remove('lang-en');
        body.classList.add('lang-ar');
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      }
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const service = document.getElementById('form-service').value;
      const message = document.getElementById('form-message').value;

      const subject = encodeURIComponent("Nurses Home Care - Inquiry / طلب رعاية منزلية");
      const body = encodeURIComponent(
        "Name / الاسم: " + name + "\\n" +
        "Phone / الجوال: " + phone + "\\n" +
        "Service / الخدمة: " + service + "\\n" +
        "Message / التفاصيل:\\n" + message + "\\n\\n" +
        "--- Submitted via nursecare24.com ---"
      );

      window.location.href = "mailto:ayaarab720@gmail.com?subject=" + subject + "&body=" + body;
    }
  </script>
</body>
</html>`;

  return (
    <div className={`min-h-screen text-slate-800 bg-stone-50 font-sans selection:bg-brand-emerald selection:text-brand-cream`}>
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-brand-emerald text-brand-sand text-xs py-2 px-4 text-center border-b border-brand-emerald-light font-medium tracking-wide">
        {t.saudiWideBadge}
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-emerald rounded-xl flex items-center justify-center text-brand-cream font-bold text-lg shadow-sm">
              NH
            </div>
            <div>
              <h1 className="text-brand-emerald font-bold text-lg sm:text-xl leading-tight">
                {t.navLogo}
              </h1>
              <p className="text-xs text-brand-gold font-medium leading-none mt-0.5">
                {t.navLogoSub}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="text-slate-600 hover:text-brand-emerald transition-colors">
              {t.services}
            </a>
            <a href="#whyUs" className="text-slate-600 hover:text-brand-emerald transition-colors">
              {t.whyUs}
            </a>
            <a href="#howItWorks" className="text-slate-600 hover:text-brand-emerald transition-colors">
              {t.howItWorks}
            </a>
            <a href="#contact" className="text-slate-600 hover:text-brand-emerald transition-colors font-semibold text-brand-emerald">
              {t.contact}
            </a>
          </nav>

          {/* Controls: Language and CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 text-xs font-bold uppercase border border-stone-300 rounded-lg px-3 py-1.5 text-slate-700 hover:bg-stone-100 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-brand-emerald" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            <a 
              href="#inquiryForm"
              className="hidden sm:inline-flex items-center justify-center bg-brand-emerald hover:bg-brand-emerald-light text-brand-cream text-xs font-bold rounded-lg px-4 py-2.5 transition-all cursor-pointer shadow-sm"
            >
              {t.ctaButton}
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700 hover:bg-stone-100 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3 font-medium text-sm flex flex-col">
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-slate-700 border-b border-stone-100"
                >
                  {t.services}
                </a>
                <a 
                  href="#whyUs" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-slate-700 border-b border-stone-100"
                >
                  {t.whyUs}
                </a>
                <a 
                  href="#howItWorks" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-slate-700 border-b border-stone-100"
                >
                  {t.howItWorks}
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-brand-emerald font-semibold"
                >
                  {t.contact}
                </a>
                <a 
                  href="#inquiryForm"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full bg-brand-emerald text-brand-cream font-bold py-2.5 rounded-lg text-center text-xs"
                >
                  {t.ctaButton}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-stone-50 via-brand-cream/40 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Hero text & Image Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-start rtl:lg:text-right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gold/30 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-emerald-light">
                  <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                  <span>{t.heroBadge}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-emerald-dark leading-tight tracking-tight">
                  {t.heroTitle}
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t.heroSubtitle}
                </p>

                {/* Direct call action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href={`tel:${t.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-emerald hover:bg-brand-emerald-light text-brand-cream font-bold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg gap-2 text-center"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <span>{t.ctaCall} ({t.phone})</span>
                  </a>
                  
                  <a
                    href={`https://wa.me/966551404251`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg gap-2 text-center"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{t.ctaWhatsApp}</span>
                  </a>
                </div>
              </div>

              {/* Premium Hero Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[16/9] sm:aspect-[2.1] bg-stone-100 w-full mt-6">
                <Image 
                  src={nursingHeroImg} 
                  alt={lang === 'ar' ? 'رعاية تمريضية منزلية متكاملة' : 'Integrated Home Nursing Care'} 
                  fill 
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent flex items-end p-5">
                  <span className="text-white text-xs font-bold tracking-wide uppercase bg-brand-emerald/90 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm font-sans">
                    {lang === 'ar' ? 'رعاية تمريضية منزلية مرخصة ٢٤ ساعة' : 'Licensed 24/7 Home Nursing Care'}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Quick Form Column */}
            <div id="inquiryForm" className="lg:col-span-5 relative">
              
              {/* Hero Quick Form Card */}
              <div className="bg-white border border-stone-200 shadow-xl rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-emerald-dark">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.formSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formName} *
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-stone-50 border ${errors.name ? 'border-red-500' : 'border-stone-300'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald`}
                      placeholder="..."
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-0.5">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formPhone} *
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-stone-50 border ${errors.phone ? 'border-red-500' : 'border-stone-300'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald`}
                      placeholder={t.formPhonePlaceholder}
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-0.5">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formService} *
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full bg-stone-50 border ${errors.service ? 'border-red-500' : 'border-stone-300'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald`}
                    >
                      <option value="">{t.formServiceSelect}</option>
                      {t.servicesItems.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                    {errors.service && <span className="text-xs text-red-500 mt-0.5">{errors.service}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.formMessage}
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald"
                      placeholder={t.formMessagePlaceholder}
                      rows={3}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-emerald hover:bg-brand-emerald-light text-brand-cream font-bold py-3 rounded-xl transition-all text-sm shadow cursor-pointer text-center"
                  >
                    {t.formSubmit}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    {t.formSuccessMessage}
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald-dark">
              {t.servicesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.servicesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service card 1 */}
            <div className="bg-brand-cream border border-brand-sand/40 rounded-2xl overflow-hidden flex flex-col justify-between glow-on-hover">
              <div>
                <div className="relative h-48 w-full bg-stone-100">
                  <Image 
                    src={nursingClinicalImg} 
                    alt={t.service1Title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                    placeholder="blur"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-4 shadow-sm">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-emerald-dark mb-3">
                    {t.service1Title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.service1Desc}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#inquiryForm" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
                  <span>{t.ctaForm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service card 2 */}
            <div className="bg-brand-cream border border-brand-sand/40 rounded-2xl overflow-hidden flex flex-col justify-between glow-on-hover">
              <div>
                <div className="relative h-48 w-full bg-stone-100">
                  <Image 
                    src={medicationManagementImg} 
                    alt={t.service2Title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                    placeholder="blur"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-4 shadow-sm">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-emerald-dark mb-3">
                    {t.service2Title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.service2Desc}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#inquiryForm" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
                  <span>{t.ctaForm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service card 3 */}
            <div className="bg-brand-cream border border-brand-sand/40 rounded-2xl overflow-hidden flex flex-col justify-between glow-on-hover">
              <div>
                <div className="relative h-48 w-full bg-stone-100">
                  <Image 
                    src={elderlyCareImg} 
                    alt={t.service3Title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                    placeholder="blur"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-4 shadow-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-emerald-dark mb-3">
                    {t.service3Title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.service3Desc}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#inquiryForm" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
                  <span>{t.ctaForm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service card 4 */}
            <div className="bg-brand-cream border border-brand-sand/40 rounded-2xl overflow-hidden flex flex-col justify-between glow-on-hover">
              <div>
                <div className="relative h-48 w-full bg-stone-100">
                  <Image 
                    src={newbornCareImg} 
                    alt={t.service4Title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                    placeholder="blur"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-4 shadow-sm">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-emerald-dark mb-3">
                    {t.service4Title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.service4Desc}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#inquiryForm" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
                  <span>{t.ctaForm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service card 5 */}
            <div className="bg-brand-cream border border-brand-sand/40 rounded-2xl overflow-hidden flex flex-col justify-between glow-on-hover">
              <div>
                <div className="relative h-48 w-full bg-stone-100">
                  <Image 
                    src={postOpRecoveryImg} 
                    alt={t.service5Title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                    placeholder="blur"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-4 shadow-sm">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-emerald-dark mb-3">
                    {t.service5Title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.service5Desc}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#inquiryForm" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
                  <span>{t.ctaForm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Service card 6 */}
            <div className="bg-brand-cream border border-brand-sand/40 rounded-2xl overflow-hidden flex flex-col justify-between glow-on-hover">
              <div>
                <div className="relative h-48 w-full bg-stone-100">
                  <Image 
                    src={preventativeWellnessImg} 
                    alt={t.service6Title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                    placeholder="blur"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-emerald mb-4 shadow-sm">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-emerald-dark mb-3">
                    {t.service6Title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.service6Desc}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#inquiryForm" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-emerald hover:text-brand-gold transition-colors">
                  <span>{t.ctaForm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center bg-stone-50 border border-stone-200 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-sm text-slate-700 leading-relaxed">
              {t.servicesFooter}
            </p>
            <p className="text-xs text-slate-400 mt-3">
              {t.servicesDisclaimer}
            </p>
          </div>

        </div>
      </section>

      {/* VALUES & WHY US */}
      <section id="whyUs" className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-center lg:text-start rtl:lg:text-right">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald-dark">
                {t.trustTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.trustSubtitle}
              </p>
              <div className="border-t border-brand-sand pt-6 flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-emerald flex items-center justify-center text-brand-cream font-bold text-lg">
                  ✓
                </div>
                <div className="text-start rtl:text-right">
                  <p className="text-sm font-bold text-brand-emerald-dark">
                    {lang === 'ar' ? 'رعاية آمنة ومتوافقة بالكامل' : 'Safe and compliant care'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {lang === 'ar' ? 'مصداقية ونزاهة علمية طوال اليوم' : 'Factual reliability and continuous support'}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
                <ShieldCheck className="w-8 h-8 text-brand-emerald mb-2" />
                <h3 className="font-bold text-brand-emerald-dark text-base">
                  {t.trustFactor1Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.trustFactor1Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
                <CheckCircle2 className="w-8 h-8 text-brand-emerald mb-2" />
                <h3 className="font-bold text-brand-emerald-dark text-base">
                  {t.trustFactor2Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.trustFactor2Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
                <Clock className="w-8 h-8 text-brand-emerald mb-2" />
                <h3 className="font-bold text-brand-emerald-dark text-base">
                  {t.trustFactor3Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.trustFactor3Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
                <ShieldCheck className="w-8 h-8 text-brand-emerald mb-2" />
                <h3 className="font-bold text-brand-emerald-dark text-base">
                  {t.trustFactor4Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.trustFactor4Desc}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section id="howItWorks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald-dark">
              {t.howItWorksTitle}
            </h2>
            <p className="text-sm text-slate-600">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            <div className="text-center space-y-4 relative z-10 bg-stone-50 border border-stone-200/60 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-brand-cream border border-brand-sand text-brand-emerald font-bold text-lg rounded-full flex items-center justify-center mx-auto shadow-sm">
                1
              </div>
              <h3 className="font-bold text-base text-brand-emerald-dark">
                {t.step1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>

            <div className="text-center space-y-4 relative z-10 bg-stone-50 border border-stone-200/60 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-brand-cream border border-brand-sand text-brand-emerald font-bold text-lg rounded-full flex items-center justify-center mx-auto shadow-sm">
                2
              </div>
              <h3 className="font-bold text-base text-brand-emerald-dark">
                {t.step2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            <div className="text-center space-y-4 relative z-10 bg-stone-50 border border-stone-200/60 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-brand-cream border border-brand-sand text-brand-emerald font-bold text-lg rounded-full flex items-center justify-center mx-auto shadow-sm">
                3
              </div>
              <h3 className="font-bold text-base text-brand-emerald-dark">
                {t.step3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* QUICK INQUIRY & CONTACT CHANNELS */}
      <section id="contact" className="py-16 bg-brand-cream/50 border-t border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald-dark">
            {lang === 'ar' ? 'تنسيق رعاية منزلية فورية ومريحة' : 'Coordinate Immediate & Convenient Home Care'}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            {lang === 'ar' 
              ? 'يسعد منسقونا الإجابة على جميع اتصالاتكم واستفساراتكم على مدار الساعة لتسهيل ترتيب خطة رعاية مخصصة ومريحة لأسرتكم في جميع مناطق المملكة.'
              : 'Our coordinators are here to receive calls and questions around the clock to organize an integrated, certified nursing arrangement.'}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`tel:${t.phone}`}
              className="inline-flex items-center gap-2 bg-brand-emerald hover:bg-brand-emerald-light text-brand-cream font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>{lang === 'ar' ? 'اتصل بنا:' : 'Call Us:'} {t.phone}</span>
            </a>

            <a 
              href="https://wa.me/966551404251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.ctaWhatsApp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-emerald-dark text-brand-sand py-12 border-t border-brand-emerald">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 text-start rtl:text-right">
          
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-brand-cream">
              {t.navLogo}
            </h3>
            <p className="text-xs text-brand-sand/80 leading-relaxed max-w-sm">
              {t.footerText}
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-sm text-brand-cream">
              {t.footerContactTitle}
            </h4>
            <ul className="text-xs text-brand-sand/80 space-y-2.5">
              <li>{lang === 'ar' ? 'رقم الهاتف الداعم:' : 'Direct Phone Line:'} <strong>{t.phone}</strong></li>
              <li>{lang === 'ar' ? 'التغطية الجغرافية:' : 'Coverage:'} <strong>{lang === 'ar' ? 'جميع مدن المملكة العربية السعودية' : 'Across all Saudi Arabia'}</strong></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-brand-cream">
              {t.footerHoursTitle}
            </h4>
            <p className="text-xs text-brand-sand/80 leading-relaxed">
              {t.footerHours}
            </p>
            <p className="text-xs text-brand-gold font-semibold pt-2">
              nursecare24.com
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-emerald/40 pt-6 text-center text-xs text-brand-sand/60">
          <p>{t.footerRights}</p>
        </div>
      </footer>

    </div>
  );
}
