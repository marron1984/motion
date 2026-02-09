export interface ImageData {
  id: number;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface StoryData {
  id: number;
  title: string;
  excerpt: string;
  tag: string;
  thumbnail: string;
  date: string;
}

export interface FeatureData {
  id: number;
  title: string;
  description: string;
  image: string;
  accent: string;
}

// Gallery images - using placeholder SVGs generated at build time
export const galleryImages: ImageData[] = [
  { id: 1, title: "Urban Dawn", src: "/images/gallery-1.svg", alt: "City skyline at dawn with warm tones", width: 800, height: 1000 },
  { id: 2, title: "Quiet Forest", src: "/images/gallery-2.svg", alt: "Misty forest path in morning light", width: 800, height: 600 },
  { id: 3, title: "Neon Night", src: "/images/gallery-3.svg", alt: "Neon-lit street at night", width: 800, height: 1000 },
  { id: 4, title: "Ocean Blue", src: "/images/gallery-4.svg", alt: "Ocean waves crashing on rocks", width: 800, height: 600 },
  { id: 5, title: "Mountain Peak", src: "/images/gallery-5.svg", alt: "Mountain peak above clouds", width: 800, height: 1000 },
  { id: 6, title: "Desert Gold", src: "/images/gallery-6.svg", alt: "Golden desert dunes at sunset", width: 800, height: 600 },
];

export const features: FeatureData[] = [
  {
    id: 1,
    title: "Crafted Motion",
    description: "Every interaction is thoughtfully animated. Smooth transitions that feel natural, not forced. Performance-first approach ensures 60fps on any device.",
    image: "/images/feature-1.svg",
    accent: "#c8a2ff",
  },
  {
    id: 2,
    title: "Mobile Native",
    description: "Designed for thumbs first. Gesture-driven navigation, optimized touch targets, and layouts that breathe on smaller screens.",
    image: "/images/feature-2.svg",
    accent: "#7dd3fc",
  },
  {
    id: 3,
    title: "Visual Stories",
    description: "Images that load instantly and animate gracefully. Next-gen formats, responsive sizing, and lazy loading work together seamlessly.",
    image: "/images/feature-3.svg",
    accent: "#fca5a5",
  },
  {
    id: 4,
    title: "Dark Elegance",
    description: "A refined dark palette that reduces eye strain and elevates content. Carefully tuned contrast ratios for perfect readability.",
    image: "/images/feature-4.svg",
    accent: "#86efac",
  },
];

export const stories: StoryData[] = [
  {
    id: 1,
    title: "Building for the Mobile Web",
    excerpt: "Why mobile-first isn't just a buzzword — it's a design philosophy that changes everything.",
    tag: "Design",
    thumbnail: "/images/story-1.svg",
    date: "2025.12.01",
  },
  {
    id: 2,
    title: "The Art of Micro-interactions",
    excerpt: "Small details create big impressions. How subtle animations improve user experience.",
    tag: "Motion",
    thumbnail: "/images/story-2.svg",
    date: "2025.11.15",
  },
  {
    id: 3,
    title: "Performance is a Feature",
    excerpt: "Fast websites aren't just technically better — they feel better to use.",
    tag: "Engineering",
    thumbnail: "/images/story-3.svg",
    date: "2025.10.28",
  },
  {
    id: 4,
    title: "Typography on Small Screens",
    excerpt: "Mastering type scale, line height, and spacing for mobile readability.",
    tag: "Typography",
    thumbnail: "/images/story-4.svg",
    date: "2025.10.10",
  },
];
