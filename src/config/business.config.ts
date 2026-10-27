export const BUSINESS_CONFIG = {
  name: "Astro Mixmax",
  slogan: "Ideias criativas, produtos especiais e personalização em um só lugar.",
  city: "Chapadinha",
  state: "MA",
  fullAddress: "Rua Prefeito Joaquim Almeida, 387-A, Centro, Chapadinha - MA, 65500-000",
  whatsappPhone: "5598988888888",
  whatsappDisplay: "(98) 98888-8888",
  mapsUrl: "https://www.google.com/maps/place/Astro+mixmax/@-3.7432742,-43.3645905,1182m/data=!3m2!1e3!4b1!4m6!3m5!1s0x78ccd4afbf913c7:0x49ebb051f44795f6!8m2!3d-3.7432796!4d-43.3620156",
  instagramUrl: "https://www.instagram.com/astromixmax/",
  linkBioUrl: "https://linklist.bio/Linksastro",
  hours: [
    { days: "Segunda a Sexta", time: "08:00 - 18:00" },
    { days: "Sábado", time: "08:00 - 12:30" },
    { days: "Domingo", time: "Fechado" }
  ]
};

export const createWhatsAppUrl = (messageText: string): string => {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappPhone}?text=${encoded}`;
};