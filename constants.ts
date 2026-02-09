import { Photo, QuizQuestion, Song } from './types';

export const PARTNER_NAME = "My Favorite Future Dentist";

// --- CUSTOMIZE IMAGES HERE ---

export const PROFILE_PICTURE = "./profile.jpg"; 

// Replace this with your specific teeth image if you have one locally
// e.g., "/assets/teeth_photo.jpg"
export const TEETH_IMAGE_SRC = "./t-smile.jpg";

export const BACKGROUND_MUSIC: Song = {
  title: "Can't Help Falling in Love",
  artist: "Shayan",
  url: "./chfil.mp3",
  coverUrl: "https://picsum.photos/100/100?grayscale"
};

export const GALLERY_MUSIC: Song = {
  title: "Perfect",
  artist: "Ed Sheeran", 
  // Placeholder URL (Romantic instrumental)
  url: "./perfect.mp3",
  coverUrl: "https://picsum.photos/100/100?blur=2"
};

// Special Memory Constants
// 1. Terrace Moment (10 Seconds)
export const TERRACE_MOMENT_IMAGE = "./terrace_memory.png"; 
export const TERRACE_MOMENT_AUDIO = "./pehli.mp3"; 

// 2. Final Surprise Moment (15 Seconds)
export const FINAL_SURPRISE_IMAGE = "./guitar.png"; // Change this to your 15s image
export const FINAL_SURPRISE_AUDIO = "./pehli.mp3";
export const PHOTOS: Photo[] = [
  { 
    id: 1, 
    url: "https://picsum.photos/600/600?random=10", 
    caption: "The brightest smile",
    albumImages: [
      "https://picsum.photos/600/800?random=101",
      "https://picsum.photos/600/800?random=102",
      "https://picsum.photos/600/800?random=103",
    ]
  },
  { 
    id: 2, 
    url: "https://picsum.photos/600/400?random=11", 
    caption: "Our sweet memories",
    albumImages: [
      "./t1.jpg",
      "./t2.jpg",
      "./t3.jpg",
    ]
  },
  { 
    id: 3, 
    url: "https://picsum.photos/600/800?random=12", 
    caption: "Studying hard",
    albumImages: [
      "https://picsum.photos/600/800?random=301",
      "https://picsum.photos/600/800?random=302",
      "https://picsum.photos/600/800?random=303",
    ]
  },
  { 
    id: 4, 
    url: "https://picsum.photos/600/600?random=13", 
    caption: "Date night",
    albumImages: [
      "https://picsum.photos/600/800?random=401",
      "https://picsum.photos/600/800?random=402",
      "https://picsum.photos/600/800?random=403",
    ]
  },
  { 
    id: 5, 
    url: "https://picsum.photos/600/400?random=14", 
    caption: "Adventures together",
    albumImages: [
      "https://picsum.photos/600/800?random=501",
      "https://picsum.photos/600/800?random=502",
      "https://picsum.photos/600/800?random=503",
    ]
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of these is sweet, but 100% cavity-free?",
    options: ["Chocolate", "Ice Cream", "My love for you", "Soda"],
    correctAnswer: 2,
    successMessage: "Sugar-free and pure love!"
  },
  {
    id: 2,
    question: "What's the 'Root' cause of my happiness?",
    options: ["Video Games", "You", "Pizza", "Sleep"],
    correctAnswer: 1,
    successMessage: "You are the crown jewel of my life."
  },
  {
    id: 3,
    question: "If our love was a procedure, what would it be?",
    options: ["A simple cleaning", "A root canal", "An implant (forever)", "A checkup"],
    correctAnswer: 2,
    successMessage: "Because I want you in my life permanently!"
  },
  {
    id: 4,
    question: "Where did we first meet?",
    options: ["At the Dental Clinic", "My terrace", "Coffee Shop", "College Library"],
    correctAnswer: 1,
    successMessage: "The view was nice, but looking at you was better!"
  },
  // Swapped Order: Anniversary first, then Song
  {
    id: 5,
    question: "When is our anniversary?",
    options: ["14/02/2023", "11/6/2023", "25/12/2023", "11/07/2023"],
    correctAnswer: 1,
    successMessage: "Best day ever!"
  },
  {
    id: 6,
    question: "What was the first song I sang for you?",
    options: ["Choo Lo", "Pehli Nazar Mein", "Tum Hi Ho", "Agar Tum Sath Ho"],
    correctAnswer: 1,
    successMessage: "Baby I love you..."
  }
];