export interface Task {
  id: string;
  type: 'click' | 'find-class' | 'find-id' | 'modify-class' | 'modify-text' | 'select-element';
  instruction: string;
  target: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  hint?: string;
}

export interface GameState {
  currentTask: Task | null;
  score: number;
  level: number;
  tasksCompleted: number;
  timeRemaining?: number;
  gameMode: GameMode;
  isActive: boolean;
  selectedElement?: HTMLElement | null;
}

export type GameMode = 'classic' | 'speed' | 'chaos' | 'creative';

export interface GameStats {
  totalScore: number;
  bestScore: number;
  tasksCompleted: number;
  accuracy: number;
}