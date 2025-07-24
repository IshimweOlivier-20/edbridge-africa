"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type TranslationKeys =
  | "home"
  | "courses"
  | "dashboard"
  | "scholarships"
  | "toolkit"
  | "mentorship"
  | "login"
  | "register"
  | "logout"
  | "welcome"
  | "subtitle"
  | "featuredCourses"
  | "scholarshipHighlights"
  | "viewAllCourses"
  | "seeAllScholarships"
  | "applicationToolkit"
  | "myDashboard"
  | "mentorshipBtn"
  | "missionTitle"
  | "missionDesc";

type LanguageCode = "en" | "fr" | "rw" | "sw";

type TranslationMap = { [key in TranslationKeys]: string };

type Translations = { [lang in LanguageCode]: TranslationMap };

const translations: Translations = {
  en: {
    home: "Home",
    courses: "Courses",
    dashboard: "Dashboard",
    scholarships: "Scholarships",
    toolkit: "Toolkit",
    mentorship: "Mentorship",
    login: "Login",
    register: "Register",
    logout: "Logout",
    welcome: "Welcome to EdBridge Africa",
    subtitle:
      "Empowering refugee students to access higher education through digital skills, academic support, and application guidance.",
    featuredCourses: "Featured Courses",
    scholarshipHighlights: "Scholarship Highlights",
    viewAllCourses: "View all courses →",
    seeAllScholarships: "See all scholarships →",
    applicationToolkit: "Application Toolkit",
    myDashboard: "My Dashboard",
    mentorshipBtn: "Mentorship",
    missionTitle: "Our Mission",
    missionDesc:
      "EdBridge Africa is dedicated to bridging the gap for refugee students by providing access to quality education, mentorship, and resources needed to succeed in higher education and beyond.",
  },
  fr: {
    home: "Accueil",
    courses: "Cours",
    dashboard: "Tableau de bord",
    scholarships: "Bourses",
    toolkit: "Boîte à outils",
    mentorship: "Mentorat",
    login: "Connexion",
    register: "S'inscrire",
    logout: "Déconnexion",
    welcome: "Bienvenue à EdBridge Africa",
    subtitle:
      "Autonomiser les étudiants réfugiés pour accéder à l'enseignement supérieur grâce aux compétences numériques, au soutien académique et à l'accompagnement des candidatures.",
    featuredCourses: "Cours en vedette",
    scholarshipHighlights: "Bourses en vedette",
    viewAllCourses: "Voir tous les cours →",
    seeAllScholarships: "Voir toutes les bourses →",
    applicationToolkit: "Boîte à outils de candidature",
    myDashboard: "Mon tableau de bord",
    mentorshipBtn: "Mentorat",
    missionTitle: "Notre mission",
    missionDesc:
      "EdBridge Africa s'engage à combler le fossé pour les étudiants réfugiés en leur donnant accès à une éducation de qualité, au mentorat et aux ressources nécessaires pour réussir dans l'enseignement supérieur et au-delà.",
  },
  rw: {
    home: "Ahabanza",
    courses: "Amasomo",
    dashboard: "Dashboard",
    scholarships: "Buruse",
    toolkit: "Ibikoresho",
    mentorship: "Ubujyanama",
    login: "Injira",
    register: "Iyandikishe",
    logout: "Sohoka",
    welcome: "Murakaza neza kuri EdBridge Africa",
    subtitle:
      "Gufasha abanyeshuri b'impunzi kubona amashuri makuru binyuze mu bumenyi bwa mudasobwa, ubufasha mu myigire, n'ubujyanama mu gusaba.",
    featuredCourses: "Amasomo yatoranijwe",
    scholarshipHighlights: "Buruse zatoranijwe",
    viewAllCourses: "Reba amasomo yose →",
    seeAllScholarships: "Reba buruse zose →",
    applicationToolkit: "Ibikoresho byo gusaba",
    myDashboard: "Dashboard yanjye",
    mentorshipBtn: "Ubujyanama",
    missionTitle: "Intego yacu",
    missionDesc:
      "EdBridge Africa yiyemeje gufasha abanyeshuri b'impunzi kubona uburezi bufite ireme, ubujyanama, n'ibikoresho bikenewe ngo batsinde mu mashuri makuru no hanze yayo.",
  },
  sw: {
    home: "Nyumbani",
    courses: "Kozi",
    dashboard: "Dashibodi",
    scholarships: "Ufadhili",
    toolkit: "Zana",
    mentorship: "Ushauri",
    login: "Ingia",
    register: "Jisajili",
    logout: "Toka",
    welcome: "Karibu EdBridge Africa",
    subtitle:
      "Kuwawezesha wanafunzi wakimbizi kupata elimu ya juu kupitia ujuzi wa kidijitali, msaada wa kitaaluma, na mwongozo wa maombi.",
    featuredCourses: "Kozi Maarufu",
    scholarshipHighlights: "Ufadhili Maarufu",
    viewAllCourses: "Tazama kozi zote →",
    seeAllScholarships: "Tazama ufadhili wote →",
    applicationToolkit: "Zana za Maombi",
    myDashboard: "Dashibodi Yangu",
    mentorshipBtn: "Ushauri",
    missionTitle: "Dhamira Yetu",
    missionDesc:
      "EdBridge Africa imejitolea kuziba pengo kwa wanafunzi wakimbizi kwa kutoa elimu bora, ushauri, na rasilimali zinazohitajika kufanikiwa katika elimu ya juu na zaidi.",
  },
};

interface LanguageContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: TranslationKeys) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("en");
  function t(key: TranslationKeys) {
    return translations[lang][key] || translations["en"][key] || key;
  }
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
