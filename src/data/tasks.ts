import { Task } from '../types/game';

export const easyTasks: Task[] = [
  {
    id: 'click-button',
    type: 'click',
    instruction: 'Click the blue button',
    target: '.blue-button',
    points: 10,
    difficulty: 'easy',
    hint: 'Look for an element with the class "blue-button"'
  },
  {
    id: 'find-header',
    type: 'click',
    instruction: 'Click the main heading',
    target: 'h1',
    points: 10,
    difficulty: 'easy',
    hint: 'Find the h1 element'
  },
  {
    id: 'click-danger',
    type: 'click',
    instruction: 'Click the element with ID "danger"',
    target: '#danger',
    points: 15,
    difficulty: 'easy',
    hint: 'Look for an element with id="danger"'
  },
  {
    id: 'find-highlight',
    type: 'click',
    instruction: 'Click any element with class "highlight"',
    target: '.highlight',
    points: 15,
    difficulty: 'easy',
    hint: 'Find elements with class="highlight"'
  }
];

export const mediumTasks: Task[] = [
  {
    id: 'nav-link',
    type: 'click',
    instruction: 'Click the navigation link in the header',
    target: 'nav a',
    points: 20,
    difficulty: 'medium',
    hint: 'Look for an anchor tag inside a nav element'
  },
  {
    id: 'last-item',
    type: 'click',
    instruction: 'Click the last item in the list',
    target: 'li:last-child',
    points: 25,
    difficulty: 'medium',
    hint: 'Use the :last-child pseudo-selector'
  },
  {
    id: 'data-attribute',
    type: 'click',
    instruction: 'Click the element with data-role="primary"',
    target: '[data-role="primary"]',
    points: 30,
    difficulty: 'medium',
    hint: 'Look for elements with data-role attribute'
  }
];

export const hardTasks: Task[] = [
  {
    id: 'nth-child',
    type: 'click',
    instruction: 'Click the 3rd paragraph in the content area',
    target: '.content p:nth-child(3)',
    points: 40,
    difficulty: 'hard',
    hint: 'Use :nth-child(3) to select the third paragraph'
  },
  {
    id: 'sibling-selector',
    type: 'click',
    instruction: 'Click the paragraph that comes after the heading',
    target: 'h2 + p',
    points: 45,
    difficulty: 'hard',
    hint: 'Use the adjacent sibling selector +'
  },
  {
    id: 'complex-selector',
    type: 'click',
    instruction: 'Click the button inside the card with class "featured"',
    target: '.card.featured button',
    points: 50,
    difficulty: 'hard',
    hint: 'Combine multiple selectors: .card.featured button'
  }
];

export const allTasks = [...easyTasks, ...mediumTasks, ...hardTasks];