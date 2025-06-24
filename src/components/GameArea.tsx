import React, { useEffect, useRef } from 'react';
import { Task } from '../types/game';

interface GameAreaProps {
  currentTask: Task | null;
  onElementClick: (element: HTMLElement, selector: string) => void;
}

export const GameArea: React.FC<GameAreaProps> = ({ currentTask, onElementClick }) => {
  const gameAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && gameAreaRef.current?.contains(target)) {
        event.preventDefault();
        
        // Generate selector for the clicked element
        let selector = target.tagName.toLowerCase();
        if (target.id) {
          selector = `#${target.id}`;
        } else if (target.className) {
          const classes = target.className.split(' ').filter(Boolean);
          if (classes.length > 0) {
            selector = `.${classes.join('.')}`;
          }
        }
        
        onElementClick(target, selector);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [onElementClick]);

  return (
    <div 
      ref={gameAreaRef}
      className="bg-gray-800 border border-gray-600 rounded-lg p-8 min-h-[400px] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 bg-gray-700 px-4 py-2 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-4 font-mono">localhost:3000/inspect-me</span>
        </div>
      </div>

      <div className="pt-12 space-y-6">
        {/* Header */}
        <header className="border-b border-gray-600 pb-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">
              InspectMe
            </h1>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                Home
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                About
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          <section className="content space-y-4">
            <h2 className="text-xl font-semibold text-white">Welcome to the Inspector Game</h2>
            <p className="text-gray-300">
              This is the first paragraph in the content area. Click on elements to complete tasks!
            </p>
            <p className="text-gray-300 highlight">
              This paragraph has a "highlight" class. It might be important for some tasks.
            </p>
            <p className="text-gray-300">
              This is the third paragraph. Some tasks might require you to select specific positions.
            </p>
          </section>

          {/* Interactive Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border border-gray-600 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Regular Card</h3>
              <p className="text-gray-300 mb-4">This is a regular card element.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                Regular Button
              </button>
            </div>

            <div className="card featured border border-cyan-400 rounded p-4 bg-cyan-900/10">
              <h3 className="text-lg font-semibold text-cyan-300 mb-3">Featured Card</h3>
              <p className="text-gray-300 mb-4">This card has the "featured" class.</p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors">
                Featured Button
              </button>
            </div>
          </div>

          {/* Special Elements */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="blue-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Blue Button
            </button>
            <div id="danger" className="bg-red-900/20 border border-red-600 text-red-300 px-4 py-2 rounded cursor-pointer hover:bg-red-900/30 transition-colors">
              Danger Element
            </div>
            <span className="highlight bg-yellow-400 text-black px-3 py-1 rounded cursor-pointer hover:bg-yellow-300 transition-colors">
              Highlighted Text
            </span>
            <div data-role="primary" className="bg-purple-900/20 border border-purple-600 text-purple-300 px-4 py-2 rounded cursor-pointer hover:bg-purple-900/30 transition-colors">
              Primary Data Role
            </div>
          </div>

          {/* List for nth-child practice */}
          <ul className="space-y-2 bg-gray-700 p-4 rounded">
            <li className="text-gray-300 cursor-pointer hover:text-white transition-colors">First list item</li>
            <li className="text-gray-300 cursor-pointer hover:text-white transition-colors">Second list item</li>
            <li className="text-gray-300 cursor-pointer hover:text-white transition-colors">Third list item (might be targeted!)</li>
            <li className="text-gray-300 cursor-pointer hover:text-white transition-colors">Last list item</li>
          </ul>
        </main>
      </div>

      {/* Hover overlay effect */}
      <style jsx>{`
        .game-area *:hover {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
          background-color: rgba(6, 182, 212, 0.1);
        }
      `}</style>
    </div>
  );
};