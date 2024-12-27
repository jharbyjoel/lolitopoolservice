import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my website",
      description: "This is the English description of the website",
      callUs: "Call us +1 (786) 545-6534",
      openingHours: "Opening hours: Mon - Sat: 8:00am To 9:00pm",
      bookOnline: "Book Online",
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      contactUs: "Contact Us",
      ourWork: "Our Work",
      heroTitle: "Professional Pool Maintenance Services",
      heroDescription: "Keeping your pool sparkling clean and ready to enjoy. From routine cleaning to chemical balancing, we ensure your pool is always in top shape.",
      scheduleService: "Schedule a Service", // Translated button text
      companyName: "Crystal Clear Pools", // Add this translation key

    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi sitio web",
      description: "Esta es la descripción en español del sitio",
      callUs: "Llámanos +1 (786) 545-6534",
      openingHours: "Horario de apertura: Lun - Sáb: 8:00am a 9:00pm",
      bookOnline: "Reservar en línea",
      home: "Inicio",
      aboutUs: "Sobre Nosotros",
      services: "Servicios",
      contactUs: "Contáctenos",
      ourWork: "Nuestro Trabajo",
      heroTitle: "Servicios Profesionales de Mantenimiento de Piscinas",
      heroDescription: "Mantenemos su piscina reluciente y lista para disfrutar. Desde limpieza rutinaria hasta equilibrado químico, aseguramos que su piscina siempre esté en óptimas condiciones.",
      scheduleService: "Agendar Servicio", // Translated button text
      companyName: "Piscinas Claras y Cristalinas", // Translated company nam

    },
  },
};

i18n.use(initReactI18next).init({
  resources, // Use the resources object here
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: { escapeValue: false },
});

export default i18n;
