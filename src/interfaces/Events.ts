export interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Testimonial {
  author: string;
  content: string;
}

export interface Event {
  name: string;
  banner: string;
  slug: string;
  description: string;
  sponsors: Sponsor[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
}

export interface EventsCMS {
  events: Event[];
}
