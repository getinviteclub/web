// La forma que tiene que tener el contenido de CUALQUIER cliente que use
// el diseño "Aura" — la demo (Valentina & Patricio) y cada cliente real
// (Juan & Juli, etc.) son ambos un AuraContent, solo cambian los valores.

export type StoryMilestone = {
  year: string
  date: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  caption?: string
  aspect?: "portrait" | "landscape" | "square"
}

export type ScheduleEvent = {
  time: string
  title: string
  scriptLabel?: string
  location: string
  description: string
  iconName?: string
}

export type AccommodationItem = {
  id: string
  name: string
  type: string
  distance: string
  address: string
  description: string
  discountCode?: string
  bookingUrl: string
  image: string
  badge?: string
  priceRange?: string
}

export type GalleryImage = {
  id: string
  src: string
  alt: string
  title: string
  location: string
  year: string
  caption?: string
  span: string
  aspectRatio: string
}

export type FAQItem = {
  question: string
  answer: string
  category?: string
}

export type BankAccount = {
  currency: "ARS" | "USD"
  bankName: string
  accountType: string
  accountNumber?: string
  holder: string
  cuitOrDni: string
  alias: string
  cbu: string
  swift?: string
  notes?: string
}

export type AuraContent = {
  /** Título de la pestaña y metadescripción — por cliente. */
  metaTitle: string
  metaDescription: string
  /** Foto de portada, detrás de los nombres en el Hero. */
  heroImage: string
  couple: {
    bride: string
    brideLastName: string
    groom: string
    groomLastName: string
    monogram: string
    tagline: string
    quoteEditorial: string
    welcomeMessage: string
  }
  date: {
    /** "18 de Noviembre" — línea 1 de la fecha en el Hero. */
    heroDay: string
    /** "2027" — línea 2 de la fecha en el Hero. */
    heroYear: string
    displayDate: string
    shortDate: string
    dayOfWeek: string
    time: string
    isoTargetDate: string
    calendarEvent: {
      title: string
      description: string
      location: string
      startDate: string
      endDate: string
    }
  }
  location: {
    venueName: string
    estateSubtitle: string
    city: string
    province: string
    country: string
    address: string
    fullAddress: string
    mapsUrl: string
    coordinates: string
  }
  dressCode: {
    title: string
    subtitle: string
    description: string
    palettes: { name: string; hex: string }[]
  }
  shuttle: {
    available: boolean
    pickupPoint: string
    pickupTime: string
    returnTimes: string[]
    note: string
  }
  story: StoryMilestone[]
  schedule: ScheduleEvent[]
  gallery: GalleryImage[]
  accommodation: AccommodationItem[]
  bankAccounts: BankAccount[]
  faq: FAQItem[]
}
