import React from 'react';
import { GameModeSelector } from './components/GameModeSelector';
import { TaskDisplay } from './components/TaskDisplay';
import { GameArea } from './components/GameArea';
import { ScoreBoard } from './components/ScoreBoard';
import { GameResults } from './components/GameResults';
import { useGame } from './hooks/useGame';

function App() {
  const {
    gameState,
    showHint,
    startGame,
    resetGame,
    handleElementClick,
    toggleHint,
    getElapsedTime
  } = useGame();

  // Show mode selector if no game is active
  if (!gameState) {
    return <GameModeSelector onSelectMode={startGame} />;
  }

  // Show results if game is finished
  if (!gameState.isActive && gameState.tasksCompleted > 0) {
    return (
      <GameResults
        gameState={gameState}
        timeElapsed={getElapsedTime()}
        onRestart={() => startGame(gameState.gameMode)}
        onBackToMenu={resetGame}
      />
    );
  }

  // Main game interface
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold font-mono">
              <span className="text-cyan-400">Inspect</span>Me
            </h1>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
              <span>Mode:</span>
              <span className="text-cyan-400 uppercase font-mono">{gameState.gameMode}</span>
            </div>
          </div>
          
          <button
            onClick={resetGame}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Menu
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Task and Score */}
          <div className="lg:col-span-1 space-y-6">
            <ScoreBoard 
              gameState={gameState} 
              timeRemaining={gameState.timeRemaining} 
            />
            
            <TaskDisplay
              task={gameState.currentTask}
              showHint={showHint}
              onShowHint={toggleHint}
            />
          </div>

          {/* Right Column - Game Area */}
          <div className="lg:col-span-3">
            <GameArea
              currentTask={gameState.currentTask}
              onElementClick={handleElementClick}
            />
          </div>
        </div>
      </div>

      {/* Game status indicator */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${gameState.isActive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
          <span className="text-sm text-gray-300">
            {gameState.isActive ? 'Game Active' : 'Game Paused'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;