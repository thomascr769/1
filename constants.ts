import { Photo, QuizQuestion, Song } from './types';

export const PARTNER_NAME = "My Favorite Future Dentist";

// --- CUSTOMIZE IMAGES HERE ---

export const PROFILE_PICTURE = "https://drive.google.com/drive-viewer/AKGpihaXFvkAJ8FTNzrvt0qq3JCLxew25qk12UG3XZd17hm4oinyWuuYzTOxOXrw56fMvzYTZSfaITtCH3LtWj60_-ysty30p0272OA=s2560"; 

// Replace this with your specific teeth image if you have one locally
// e.g., "/assets/teeth_photo.jpg"
export const TEETH_IMAGE_SRC = "/album/smile.jpg"
export const BACKGROUND_MUSIC: Song = {
  title: "Can't Help Falling in Love",
  artist: "Shayan",
  url: "https://drive.google.com/file/d/1Km5ZG_ZqUc-sMNUY4euyhTumELEvaySH/view?usp=sharing", // Placeholder
  coverUrl: "https://picsum.photos/100/100?grayscale"
};

// New Song for the Cleaning/Letter section
export const ROMANTIC_LETTER_MUSIC: Song = {
  title: "Be my baby",
  artist: "The Ronettes",
  // Placeholder URL
  url: "/1/be my baby.mp3",
  coverUrl: "https://picsum.photos/100/100?blur=5"
};

// Deprecated GALLERY_MUSIC as per request, but keeping structure if needed later
export const GALLERY_MUSIC: Song = {
  title: "Perfect",
  artist: "Ed Sheeran", 
  url: "",
  coverUrl: ""
};

// Special Memory Constants
// 1. Terrace Moment (10 Seconds) - Visual Only now
export const TERRACE_MOMENT_IMAGE = "/1/blob/master/terrace_memory.png"; 
export const TERRACE_MOMENT_AUDIO = ""; // Audio removed for 4th question

// 2. Final Surprise Moment (15 Seconds)
export const FINAL_SURPRISE_IMAGE = "https://drive.google.com/drive-viewer/AKGpihYbrUyQmy160_4B96OOfrsiLSF51vbYIRS_xYVLuP_1as8KXHQqOyntcapVM-_-56dmy1OBSnpp6JC0JU1PUOsgK0PCvZ1nP5c=s1600-rw-v1"; // Change this to your 15s image
export const FINAL_SURPRISE_AUDIO = "/1/pehli.mp3"; // Change this to your specific audio

// UPDATED: Album covers are now local paths as requested
export const PHOTOS: Photo[] = [
  { 
    id: 1, 
    url: "/album/1/1.jpg", // Replace with your local photo
    caption: "The brightest smile",
    albumImages: [
      "./album/1/2.jpg",
      "./album/1/3.jpg",
      "./album/1/4.jpg",
    ]
  },
  { 
    id: 2, 
    url: "./album/2/1.jpg",
    caption: "Our sweet memories",
    albumImages: [
      "./album/2/2.jpg",
      "./album/2/3.jpg",
      "./album/2/4.jpg",
    ]
  },
  { 
    id: 3, 
    url: "./album/3/1.jpg", // Replace with your local photo
    caption: "2023/24",
    albumImages: [
      "./album/3/2.jpg",
      "./album/3/3.jpg",
      "./album/3/4.jpg",
    ]
  },
  { 
    id: 4, 
    url: "./album/4/1.jpg", // Replace with your local photo
    caption: "Date night",
    albumImages: [
      "./album/4/2.jpg",
      "./album/4/3.jpg",
      "./album/4/4.jpg",
    ]
  },
  { 
    id: 5, 
    url: "./album/5/1.jpg", // Replace with your local photo
    caption: "Adventures together",
    albumImages: [
      "./album/5/2.jpg",
      "./album/5/3.jpg",
      "./album/5/4.jpg",
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