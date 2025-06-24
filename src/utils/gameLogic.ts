import { Task, GameState, GameMode } from '../types/game';
import { allTasks, easyTasks, mediumTasks, hardTasks } from '../data/tasks';

export const getRandomTask = (difficulty?: 'easy' | 'medium' | 'hard', excludeIds: string[] = []): Task => {
  let taskPool = allTasks;
  
  if (difficulty) {
    switch (difficulty) {
      case 'easy':
        taskPool = easyTasks;
        break;
      case 'medium':
        taskPool = mediumTasks;
        break;
      case 'hard':
        taskPool = hardTasks;
        break;
    }
  }
  
  const availableTasks = taskPool.filter(task => !excludeIds.includes(task.id));
  if (availableTasks.length === 0) {
    // If all tasks are excluded, reset and use full pool
    return taskPool[Math.floor(Math.random() * taskPool.length)];
  }
  
  return availableTasks[Math.floor(Math.random() * availableTasks.length)];
};

export const getDifficultyForLevel = (level: number): 'easy' | 'medium' | 'hard' => {
  if (level <= 3) return 'easy';
  if (level <= 7) return 'medium';
  return 'hard';
};

export const checkTaskCompletion = (task: Task, clickedElement: HTMLElement, selector: string): boolean => {
  const target = task.target;
  
  // Direct selector match
  if (selector === target) return true;
  
  // Check if element matches the task target using CSS selector
  try {
    return clickedElement.matches(target);
  } catch (error) {
    // Fallback for complex selectors
    const elements = document.querySelectorAll(target);
    return Array.from(elements).includes(clickedElement);
  }
};

export const calculateScore = (task: Task, timeBonus: boolean = false): number => {
  let score = task.points;
  
  // Time bonus for quick completion
  if (timeBonus) {
    score += Math.round(task.points * 0.5);
  }
  
  return score;
};

export const initializeGameState = (mode: GameMode): GameState => {
  return {
    currentTask: null,
    score: 0,
    level: 1,
    tasksCompleted: 0,
    timeRemaining: mode === 'speed' ? 60 : undefined,
    gameMode: mode,
    isActive: false,
    selectedElement: null
  };
};

export const getNextTask = (gameState: GameState, completedTaskIds: string[]): Task => {
  switch (gameState.gameMode) {
    case 'classic':
      const difficulty = getDifficultyForLevel(gameState.level);
      return getRandomTask(difficulty, completedTaskIds);
    
    case 'speed':
    case 'chaos':
      return getRandomTask(undefined, completedTaskIds);
    
    case 'creative':
      // For now, use random tasks. In future, this could load user-created tasks
      return getRandomTask();
    
    default:
      return getRandomTask();
  }
};

export const shouldLevelUp = (gameState: GameState): boolean => {
  // Level up every 3 completed tasks in classic mode
  return gameState.gameMode === 'classic' && gameState.tasksCompleted > 0 && gameState.tasksCompleted % 3 === 0;
};