import React from 'react';
import { ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

interface SlideLayoutProps {
  currentSlide: number;
  totalSlides: number;
  title: string;
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  isTitleSlide?: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  currentSlide,
  totalSlides,
  title,
  children,
  onNext,
  onPrev,
  isTitleSlide = false,
}) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-zinc-900 text-slate-800">
      {/* Slide Container - Aspect Ratio 16:9 */}
      <div className="relative w-full max-w-6xl aspect-video bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col">
        
        {/* Header - University Style */}
        {!isTitleSlide && (
          <div className="h-16 bg-slate-900 text-white flex items-center justify-between px-8 border-b-4 border-blue-600">
            <div className="text-sm font-light uppercase tracking-wider opacity-80">USTO-MB | Dept. of Computer Science</div>
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 overflow-hidden ${isTitleSlide ? 'p-0' : 'p-8 relative'}`}>
          {isTitleSlide && (
             <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          )}
          {children}
        </div>

        {/* Footer */}
        <div className="h-10 bg-slate-100 border-t border-slate-200 flex items-center justify-between px-8 text-xs text-slate-500 font-medium">
          <span>Hybrid CNN–Transformer for Arabic SER</span>
          <span>{currentSlide + 1} / {totalSlides}</span>
        </div>

        {/* Hover Controls */}
        <div className="absolute inset-0 hover:bg-black/5 transition-colors duration-300 opacity-0 hover:opacity-100 pointer-events-none flex justify-between items-center px-4">
           <button 
             onClick={onPrev}
             disabled={currentSlide === 0}
             className={`pointer-events-auto p-3 rounded-full bg-white/90 shadow-lg hover:bg-blue-50 transition-all ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
           >
             <ChevronLeft className="w-6 h-6 text-slate-700" />
           </button>
           <button 
             onClick={onNext}
             disabled={currentSlide === totalSlides - 1}
             className={`pointer-events-auto p-3 rounded-full bg-white/90 shadow-lg hover:bg-blue-50 transition-all ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
           >
             <ChevronRight className="w-6 h-6 text-slate-700" />
           </button>
        </div>
      </div>
      
      <div className="mt-4 text-white/50 text-xs flex gap-4">
        <span>Use Arrow Keys to Navigate</span>
        <span>•</span>
        <span>Press F11 for Fullscreen</span>
      </div>
    </div>
  );
};
