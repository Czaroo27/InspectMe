import React from 'react';
import { Trophy, Target, Clock, RotateCcw, Home } from 'lucide-react';
import { GameState } from '../types/game';

interface GameResultsProps {
  gameState: GameState;
  timeElapsed?: number;
  onRestart: () => void;
  onBackToMenu: () => void;
}

export const GameResults: React.FC<GameResultsProps> = ({ 
  gameState, 
  timeElapsed, 
  onRestart, 
  onBackToMenu 
}) => {
  const accuracy = gameState.tasksCompleted > 0 ? Math.round((gameState.score / (gameState.tasksCompleted * 50)) * 100) : 0;
  
  const getPerformanceMessage = () => {
    if (gameState.score >= 500) return "Outstanding Inspector! 🔍";
    if (gameState.score >= 300) return "Great Detective Work! 🕵️";
    if (gameState.score >= 150) return "Good Job, Inspector! 👍";
    return "Keep Practicing! 💪";
  };

  const getPerformanceColor = () => {
    if (gameState.score >= 500) return "text-green-400";
    if (gameState.score >= 300) return "text-blue-400";
    if (gameState.score >= 150) return "text-yellow-400";
    return "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
          <div className="mb-8">
            <div className={`text-6xl font-bold mb-4 ${getPerformanceColor()}`}>
              {gameState.score}
            </div>
            <h2 className={`text-2xl font-bold mb-2 ${getPerformanceColor()}`}>
              {getPerformanceMessage()}
            </h2>
            <p className="text-gray-400 capitalize">
              {gameState.gameMode} Mode Complete
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-mono font-bold text-white">{gameState.score}</div>
              <div className="text-sm text-gray-400">Final Score</div>
            </div>

            <div className="text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-mono font-bold text-white">{gameState.tasksCompleted}</div>
              <div className="text-sm text-gray-400">Tasks Completed</div>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-mono font-bold text-white">
                {timeElapsed ? Math.round(timeElapsed / 1000) : 0}s
              </div>
              <div className="text-sm text-gray-400">Time Elapsed</div>
            </div>
          </div>

          {gameState.gameMode === 'speed' && (
            <div className="bg-gray-700 rounded-lg p-4 mb-8">
              <h3 className="text-lg font-semibold text-white mb-2">Speed Mode Stats</h3>
              <div className="text-cyan-400">
                Tasks per minute: {Math.round((gameState.tasksCompleted / 60) * 60)}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRestart}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Play Again</span>
            </button>
            
            <button
              onClick={onBackToMenu}
              className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Main Menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};