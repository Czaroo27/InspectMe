import React from 'react';
import { Trophy, Target, Clock, Zap } from 'lucide-react';
import { GameState } from '../types/game';

interface ScoreBoardProps {
  gameState: GameState;
  timeRemaining?: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ gameState, timeRemaining }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="text-2xl font-mono font-bold text-yellow-400">{gameState.score}</div>
          <div className="text-sm text-gray-400">Score</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Target className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-2xl font-mono font-bold text-green-400">{gameState.tasksCompleted}</div>
          <div className="text-sm text-gray-400">Tasks</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <div className="text-2xl font-mono font-bold text-blue-400">{gameState.level}</div>
          <div className="text-sm text-gray-400">Level</div>
        </div>

        {gameState.gameMode === 'speed' && timeRemaining !== undefined && (
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-red-400" />
            </div>
            <div className={`text-2xl font-mono font-bold ${timeRemaining < 10 ? 'text-red-400' : 'text-orange-400'}`}>
              {formatTime(timeRemaining)}
            </div>
            <div className="text-sm text-gray-400">Time</div>
          </div>
        )}
      </div>

      {gameState.gameMode !== 'classic' && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-400">Mode:</span>
            <span className="text-cyan-400 font-mono uppercase text-sm font-bold">
              {gameState.gameMode}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};