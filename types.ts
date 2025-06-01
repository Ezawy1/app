export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  altText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
}

export interface Offer {
  id: string;
  title: string;
  items: string[];
  price: string;
  originalPrice?: string;
  isPrimary?: boolean; // To highlight or style a specific offer
  savings?: string;
  ctaText?: string;
  highlightTag?: string; // Added highlightTag property
}