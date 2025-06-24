import React from 'react';
import { Target, Lightbulb, Star } from 'lucide-react';
import { Task } from '../types/game';

interface TaskDisplayProps {
  task: Task | null;
  showHint: boolean;
  onShowHint: () => void;
}

export const TaskDisplay: React.FC<TaskDisplayProps> = ({ task, showHint, onShowHint }) => {
  if (!task) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-gray-400 uppercase tracking-wide">Current Task</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-mono">{task.points}pts</span>
          </div>
          <span className={`text-sm font-mono uppercase ${getDifficultyColor(task.difficulty)}`}>
            {task.difficulty}
          </span>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-mono text-white mb-2">{task.instruction}</h3>
        <div className="bg-gray-800 border border-gray-600 rounded p-3">
          <span className="text-cyan-300 font-mono text-sm">Target selector: </span>
          <code className="text-green-400 font-mono bg-gray-700 px-2 py-1 rounded">
            {task.target}
          </code>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onShowHint}
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Lightbulb className="w-4 h-4" />
          <span className="text-sm">Show Hint</span>
        </button>
        
        {showHint && task.hint && (
          <div className="flex-1 ml-4 bg-blue-900/20 border border-blue-800 rounded p-3">
            <p className="text-blue-300 text-sm">{task.hint}</p>
          </div>
        )}
      </div>
    </div>
  );
};