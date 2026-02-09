import React, { useState } from 'react';
import { Heart, MessageCircleHeart, PenTool, Home as HomeIcon } from 'lucide-react';
import HeartBackground from './components/HeartBackground';
import Home from './components/Home';
import Quiz from './components/Quiz';
import QuoteGenerator from './components/QuoteGenerator';
import PoemGenerator from './components/PoemGenerator';
import { AppSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.HOME:
        return <Home onStart={() => setCurrentSection(AppSection.QUOTES)} />;
      case AppSection.QUIZ:
        return <Quiz />;
      case AppSection.QUOTES:
        return <QuoteGenerator />;
      case AppSection.POEM:
        return <PoemGenerator />;
      default:
        return <Home onStart={() => setCurrentSection(AppSection.QUOTES)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 text-gray-800 font-sans relative">
      <HeartBackground />

      <main className="relative z-10 container mx-auto px-4 pb-24 pt-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center py-4 mb-4">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setCurrentSection(AppSection.HOME)}
          >
            <div className="bg-white p-2 rounded-full shadow-sm">
               <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            </div>
            <span className="font-bold text-xl text-red-600 hidden md:block romantic-font">Our Love Story</span>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-grow flex items-center justify-center">
          {renderSection()}
        </div>

        {/* Bottom Navigation */}
        {currentSection !== AppSection.HOME && (
          <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-pink-100 z-50 flex gap-6 md:gap-8">
            <button
              onClick={() => setCurrentSection(AppSection.QUOTES)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                currentSection === AppSection.QUOTES ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <MessageCircleHeart className="w-6 h-6" />
              <span className="text-xs font-medium">Quotes</span>
            </button>
            <button
              onClick={() => setCurrentSection(AppSection.QUIZ)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                currentSection === AppSection.QUIZ ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="text-xs font-medium">Quiz</span>
            </button>
            <button
              onClick={() => setCurrentSection(AppSection.POEM)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                currentSection === AppSection.POEM ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <PenTool className="w-6 h-6" />
              <span className="text-xs font-medium">Poem</span>
            </button>
          </nav>
        )}
      </main>
    </div>
  );
};

export default App;