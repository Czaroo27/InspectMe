import React from 'react';
import { Play, Zap, Shuffle, Wrench } from 'lucide-react';
import { GameMode } from '../types/game';

interface GameModeSelectorProps {
  onSelectMode: (mode: GameMode) => void;
}

export const GameModeSelector: React.FC<GameModeSelectorProps> = ({ onSelectMode }) => {
  const modes = [
    {
      id: 'classic' as GameMode,
      name: 'Classic',
      description: 'Progressive difficulty with level advancement',
      icon: Play,
      color: 'blue'
    },
    {
      id: 'speed' as GameMode,
      name: 'Speed Run',
      description: '60 seconds to complete as many tasks as possible',
      icon: Zap,
      color: 'yellow'
    },
    {
      id: 'chaos' as GameMode,
      name: 'Chaos Mode',
      description: 'Random complex selectors and challenging tasks',
      icon: Shuffle,
      color: 'red'
    },
    {
      id: 'creative' as GameMode,
      name: 'Creative',
      description: 'Create and share your own levels',
      icon: Wrench,
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-900/20 hover:bg-blue-800/30 text-blue-400',
      yellow: 'border-yellow-500 bg-yellow-900/20 hover:bg-yellow-800/30 text-yellow-400',
      red: 'border-red-500 bg-red-900/20 hover:bg-red-800/30 text-red-400',
      green: 'border-green-500 bg-green-900/20 hover:bg-green-800/30 text-green-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">Inspect</span>Me
          </h1>
          <p className="text-xl text-gray-300 mb-2">Master HTML & CSS through interactive challenges</p>
          <p className="text-gray-400">Choose your game mode to begin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                className={`p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${getColorClasses(mode.color)}`}
              >
                <div className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{mode.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{mode.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-lg px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">Ready to start learning</span>
          </div>
        </div>
      </div>
    </div>
  );
};