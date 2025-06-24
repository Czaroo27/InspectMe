import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, GameMode, Task } from '../types/game';
import { 
  initializeGameState, 
  getNextTask, 
  checkTaskCompletion, 
  calculateScore, 
  shouldLevelUp 
} from '../utils/gameLogic';

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [gameStartTime, setGameStartTime] = useState<number | null>(null);
  const [gameEndTime, setGameEndTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer for speed mode
  useEffect(() => {
    if (gameState?.gameMode === 'speed' && gameState.isActive && gameState.timeRemaining !== undefined) {
      timerRef.current = setInterval(() => {
        setGameState(prev => {
          if (!prev || prev.timeRemaining === undefined || prev.timeRemaining <= 0) {
            return prev;
          }
          
          const newTimeRemaining = prev.timeRemaining - 1;
          if (newTimeRemaining <= 0) {
            // Game over
            return { ...prev, isActive: false, timeRemaining: 0 };
          }
          
          return { ...prev, timeRemaining: newTimeRemaining };
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState?.gameMode, gameState?.isActive, gameState?.timeRemaining]);

  const startGame = useCallback((mode: GameMode) => {
    const newGameState = initializeGameState(mode);
    const firstTask = getNextTask(newGameState, []);
    
    setGameState({
      ...newGameState,
      currentTask: firstTask,
      isActive: true
    });
    setCompletedTaskIds([]);
    setShowHint(false);
    setGameStartTime(Date.now());
    setGameEndTime(null);
  }, []);

  const handleElementClick = useCallback((element: HTMLElement, selector: string) => {
    if (!gameState?.currentTask || !gameState.isActive) return;

    const isCorrect = checkTaskCompletion(gameState.currentTask, element, selector);
    
    if (isCorrect) {
      const score = calculateScore(gameState.currentTask);
      const newCompletedIds = [...completedTaskIds, gameState.currentTask.id];
      
      setGameState(prev => {
        if (!prev) return prev;
        
        const newState = {
          ...prev,
          score: prev.score + score,
          tasksCompleted: prev.tasksCompleted + 1,
          level: shouldLevelUp(prev) ? prev.level + 1 : prev.level
        };

        // Check if game should end (for speed mode when time runs out)
        if (prev.gameMode === 'speed' && prev.timeRemaining !== undefined && prev.timeRemaining <= 0) {
          return { ...newState, isActive: false };
        }

        // Get next task
        try {
          const nextTask = getNextTask(newState, newCompletedIds);
          return { ...newState, currentTask: nextTask };
        } catch (error) {
          // No more tasks available
          return { ...newState, isActive: false, currentTask: null };
        }
      });
      
      setCompletedTaskIds(newCompletedIds);
      setShowHint(false);
      
      // Visual feedback
      element.style.boxShadow = '0 0 20px #10b981';
      setTimeout(() => {
        element.style.boxShadow = '';
      }, 500);
    } else {
      // Wrong element clicked - visual feedback
      element.style.boxShadow = '0 0 20px #ef4444';
      setTimeout(() => {
        element.style.boxShadow = '';
      }, 500);
    }
  }, [gameState, completedTaskIds]);

  const endGame = useCallback(() => {
    setGameState(prev => prev ? { ...prev, isActive: false } : prev);
    setGameEndTime(Date.now());
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const resetGame = useCallback(() => {
    setGameState(null);
    setCompletedTaskIds([]);
    setShowHint(false);
    setGameStartTime(null);
    setGameEndTime(null);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const toggleHint = useCallback(() => {
    setShowHint(prev => !prev);
  }, []);

  const getElapsedTime = useCallback(() => {
    if (!gameStartTime) return 0;
    const endTime = gameEndTime || Date.now();
    return endTime - gameStartTime;
  }, [gameStartTime, gameEndTime]);

  // Auto-end game when time runs out in speed mode
  useEffect(() => {
    if (gameState?.gameMode === 'speed' && gameState.timeRemaining === 0 && gameState.isActive) {
      endGame();
    }
  }, [gameState?.timeRemaining, gameState?.isActive, gameState?.gameMode, endGame]);

  return {
    gameState,
    showHint,
    startGame,
    endGame,
    resetGame,
    handleElementClick,
    toggleHint,
    getElapsedTime
  };
};