import { Task } from '../types/game';

export interface Level {
  id: number;
  name: string;
  theme: string;
  description: string;
  layout: string;
  tasks: Task[];
}

export const levels: Level[] = [
  // Levels 1-10: Basic Web Elements
  {
    id: 1,
    name: "Welcome Page",
    theme: "landing",
    description: "A simple landing page with basic elements",
    layout: "landing",
    tasks: [
      {
        id: 'level1-task1',
        type: 'click',
        instruction: 'Click the main heading',
        target: 'h1',
        points: 10,
        difficulty: 'easy',
        hint: 'Look for the largest text at the top'
      },
      {
        id: 'level1-task2',
        type: 'click',
        instruction: 'Click the blue button',
        target: '.btn-primary',
        points: 15,
        difficulty: 'easy',
        hint: 'Find the button with primary styling'
      }
    ]
  },
  {
    id: 2,
    name: "Blog Article",
    theme: "blog",
    description: "A blog post layout with article content",
    layout: "blog",
    tasks: [
      {
        id: 'level2-task1',
        type: 'click',
        instruction: 'Click the article title',
        target: 'article h2',
        points: 15,
        difficulty: 'easy',
        hint: 'Find the heading inside the article element'
      },
      {
        id: 'level2-task2',
        type: 'click',
        instruction: 'Click the author name',
        target: '.author',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for an element with class "author"'
      }
    ]
  },
  {
    id: 3,
    name: "Navigation Menu",
    theme: "navigation",
    description: "A website with complex navigation structure",
    layout: "navigation",
    tasks: [
      {
        id: 'level3-task1',
        type: 'click',
        instruction: 'Click the third navigation item',
        target: 'nav ul li:nth-child(3)',
        points: 25,
        difficulty: 'medium',
        hint: 'Use nth-child selector to find the third item'
      },
      {
        id: 'level3-task2',
        type: 'click',
        instruction: 'Click the dropdown menu trigger',
        target: '.dropdown-toggle',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for an element that toggles a dropdown'
      }
    ]
  },
  {
    id: 4,
    name: "Product Card",
    theme: "ecommerce",
    description: "An e-commerce product display",
    layout: "product",
    tasks: [
      {
        id: 'level4-task1',
        type: 'click',
        instruction: 'Click the product price',
        target: '.price',
        points: 15,
        difficulty: 'easy',
        hint: 'Find the element showing the price'
      },
      {
        id: 'level4-task2',
        type: 'click',
        instruction: 'Click the "Add to Cart" button',
        target: 'button[data-action="add-to-cart"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for a button with data-action attribute'
      }
    ]
  },
  {
    id: 5,
    name: "Contact Form",
    theme: "form",
    description: "A contact form with various input types",
    layout: "form",
    tasks: [
      {
        id: 'level5-task1',
        type: 'click',
        instruction: 'Click the email input field',
        target: 'input[type="email"]',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the input with type="email"'
      },
      {
        id: 'level5-task2',
        type: 'click',
        instruction: 'Click the submit button',
        target: 'input[type="submit"]',
        points: 15,
        difficulty: 'easy',
        hint: 'Look for the submit input'
      }
    ]
  },
  {
    id: 6,
    name: "Image Gallery",
    theme: "gallery",
    description: "A photo gallery with thumbnails",
    layout: "gallery",
    tasks: [
      {
        id: 'level6-task1',
        type: 'click',
        instruction: 'Click the first image in the gallery',
        target: '.gallery img:first-child',
        points: 25,
        difficulty: 'medium',
        hint: 'Use :first-child to select the first image'
      },
      {
        id: 'level6-task2',
        type: 'click',
        instruction: 'Click the image with alt text "sunset"',
        target: 'img[alt="sunset"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for img with specific alt attribute'
      }
    ]
  },
  {
    id: 7,
    name: "Dashboard",
    theme: "dashboard",
    description: "An admin dashboard with widgets",
    layout: "dashboard",
    tasks: [
      {
        id: 'level7-task1',
        type: 'click',
        instruction: 'Click the statistics widget',
        target: '.widget[data-type="stats"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Find widget with data-type="stats"'
      },
      {
        id: 'level7-task2',
        type: 'click',
        instruction: 'Click the refresh button in the chart widget',
        target: '.widget.chart .refresh-btn',
        points: 40,
        difficulty: 'hard',
        hint: 'Look inside the chart widget for refresh button'
      }
    ]
  },
  {
    id: 8,
    name: "Social Media Post",
    theme: "social",
    description: "A social media post layout",
    layout: "social",
    tasks: [
      {
        id: 'level8-task1',
        type: 'click',
        instruction: 'Click the like button',
        target: '.like-btn',
        points: 15,
        difficulty: 'easy',
        hint: 'Find the like button element'
      },
      {
        id: 'level8-task2',
        type: 'click',
        instruction: 'Click the user avatar',
        target: '.user-avatar',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the user profile picture'
      }
    ]
  },
  {
    id: 9,
    name: "News Article",
    theme: "news",
    description: "A news website article page",
    layout: "news",
    tasks: [
      {
        id: 'level9-task1',
        type: 'click',
        instruction: 'Click the article category tag',
        target: '.category-tag',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the category classification'
      },
      {
        id: 'level9-task2',
        type: 'click',
        instruction: 'Click the share button',
        target: '.share-btn',
        points: 15,
        difficulty: 'easy',
        hint: 'Look for the sharing option'
      }
    ]
  },
  {
    id: 10,
    name: "Login Page",
    theme: "auth",
    description: "A user authentication form",
    layout: "login",
    tasks: [
      {
        id: 'level10-task1',
        type: 'click',
        instruction: 'Click the password input',
        target: 'input[type="password"]',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the password field'
      },
      {
        id: 'level10-task2',
        type: 'click',
        instruction: 'Click the "Forgot Password" link',
        target: '.forgot-password',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the password recovery link'
      }
    ]
  },

  // Levels 11-20: Advanced Layouts
  {
    id: 11,
    name: "Restaurant Menu",
    theme: "restaurant",
    description: "A restaurant menu with categories",
    layout: "menu",
    tasks: [
      {
        id: 'level11-task1',
        type: 'click',
        instruction: 'Click the appetizers section',
        target: '.menu-section[data-category="appetizers"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Find section with appetizers category'
      },
      {
        id: 'level11-task2',
        type: 'click',
        instruction: 'Click the most expensive item',
        target: '.menu-item[data-price="highest"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Look for item with highest price attribute'
      }
    ]
  },
  {
    id: 12,
    name: "Music Player",
    theme: "music",
    description: "A web-based music player interface",
    layout: "player",
    tasks: [
      {
        id: 'level12-task1',
        type: 'click',
        instruction: 'Click the play button',
        target: '.play-btn',
        points: 15,
        difficulty: 'easy',
        hint: 'Find the play control'
      },
      {
        id: 'level12-task2',
        type: 'click',
        instruction: 'Click the volume slider',
        target: '.volume-slider',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the volume control'
      }
    ]
  },
  {
    id: 13,
    name: "Weather App",
    theme: "weather",
    description: "A weather forecast application",
    layout: "weather",
    tasks: [
      {
        id: 'level13-task1',
        type: 'click',
        instruction: 'Click the current temperature',
        target: '.current-temp',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the main temperature display'
      },
      {
        id: 'level13-task2',
        type: 'click',
        instruction: 'Click tomorrow\'s forecast',
        target: '.forecast-day:nth-child(2)',
        points: 30,
        difficulty: 'medium',
        hint: 'Use nth-child to find tomorrow'
      }
    ]
  },
  {
    id: 14,
    name: "Portfolio Site",
    theme: "portfolio",
    description: "A personal portfolio website",
    layout: "portfolio",
    tasks: [
      {
        id: 'level14-task1',
        type: 'click',
        instruction: 'Click the skills section',
        target: '#skills',
        points: 20,
        difficulty: 'medium',
        hint: 'Find element with id "skills"'
      },
      {
        id: 'level14-task2',
        type: 'click',
        instruction: 'Click the first project card',
        target: '.project-card:first-of-type',
        points: 30,
        difficulty: 'medium',
        hint: 'Use :first-of-type selector'
      }
    ]
  },
  {
    id: 15,
    name: "Chat Interface",
    theme: "chat",
    description: "A messaging application interface",
    layout: "chat",
    tasks: [
      {
        id: 'level15-task1',
        type: 'click',
        instruction: 'Click the message input',
        target: '.message-input',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the text input for messages'
      },
      {
        id: 'level15-task2',
        type: 'click',
        instruction: 'Click the last message',
        target: '.message:last-child',
        points: 25,
        difficulty: 'medium',
        hint: 'Use :last-child to find the newest message'
      }
    ]
  },
  {
    id: 16,
    name: "Calendar App",
    theme: "calendar",
    description: "A calendar application with events",
    layout: "calendar",
    tasks: [
      {
        id: 'level16-task1',
        type: 'click',
        instruction: 'Click today\'s date',
        target: '.calendar-day.today',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the day marked as today'
      },
      {
        id: 'level16-task2',
        type: 'click',
        instruction: 'Click the event on the 15th',
        target: '.calendar-day[data-date="15"] .event',
        points: 40,
        difficulty: 'hard',
        hint: 'Look for event inside day 15'
      }
    ]
  },
  {
    id: 17,
    name: "Video Player",
    theme: "video",
    description: "A custom video player interface",
    layout: "video",
    tasks: [
      {
        id: 'level17-task1',
        type: 'click',
        instruction: 'Click the fullscreen button',
        target: '.fullscreen-btn',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the fullscreen control'
      },
      {
        id: 'level17-task2',
        type: 'click',
        instruction: 'Click the progress bar',
        target: '.progress-bar',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the video timeline'
      }
    ]
  },
  {
    id: 18,
    name: "Shopping Cart",
    theme: "cart",
    description: "An e-commerce shopping cart",
    layout: "cart",
    tasks: [
      {
        id: 'level18-task1',
        type: 'click',
        instruction: 'Click the quantity increase button',
        target: '.qty-increase',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the button to increase quantity'
      },
      {
        id: 'level18-task2',
        type: 'click',
        instruction: 'Click the remove item button',
        target: '.remove-item',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the delete/remove option'
      }
    ]
  },
  {
    id: 19,
    name: "Forum Thread",
    theme: "forum",
    description: "A discussion forum thread",
    layout: "forum",
    tasks: [
      {
        id: 'level19-task1',
        type: 'click',
        instruction: 'Click the thread starter\'s post',
        target: '.post:first-child',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the first post in the thread'
      },
      {
        id: 'level19-task2',
        type: 'click',
        instruction: 'Click the reply button',
        target: '.reply-btn',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the reply option'
      }
    ]
  },
  {
    id: 20,
    name: "File Manager",
    theme: "files",
    description: "A web-based file management system",
    layout: "files",
    tasks: [
      {
        id: 'level20-task1',
        type: 'click',
        instruction: 'Click the Documents folder',
        target: '.folder[data-name="Documents"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Find folder with name "Documents"'
      },
      {
        id: 'level20-task2',
        type: 'click',
        instruction: 'Click the upload button',
        target: '.upload-btn',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the file upload option'
      }
    ]
  },

  // Levels 21-40: Complex Selectors
  {
    id: 21,
    name: "Data Table",
    theme: "table",
    description: "A complex data table with sorting",
    layout: "table",
    tasks: [
      {
        id: 'level21-task1',
        type: 'click',
        instruction: 'Click the header of the third column',
        target: 'th:nth-child(3)',
        points: 30,
        difficulty: 'medium',
        hint: 'Use nth-child to find the third header'
      },
      {
        id: 'level21-task2',
        type: 'click',
        instruction: 'Click the cell in row 2, column 4',
        target: 'tr:nth-child(2) td:nth-child(4)',
        points: 45,
        difficulty: 'hard',
        hint: 'Combine nth-child selectors for row and column'
      }
    ]
  },
  {
    id: 22,
    name: "Accordion Menu",
    theme: "accordion",
    description: "An expandable accordion interface",
    layout: "accordion",
    tasks: [
      {
        id: 'level22-task1',
        type: 'click',
        instruction: 'Click the second accordion header',
        target: '.accordion-item:nth-child(2) .accordion-header',
        points: 35,
        difficulty: 'hard',
        hint: 'Find header in second accordion item'
      },
      {
        id: 'level22-task2',
        type: 'click',
        instruction: 'Click the content inside the expanded section',
        target: '.accordion-item.expanded .accordion-content',
        points: 40,
        difficulty: 'hard',
        hint: 'Look for content in expanded accordion'
      }
    ]
  },
  {
    id: 23,
    name: "Tabs Interface",
    theme: "tabs",
    description: "A tabbed content interface",
    layout: "tabs",
    tasks: [
      {
        id: 'level23-task1',
        type: 'click',
        instruction: 'Click the active tab',
        target: '.tab.active',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the tab with active class'
      },
      {
        id: 'level23-task2',
        type: 'click',
        instruction: 'Click the content of the visible tab panel',
        target: '.tab-panel:not(.hidden)',
        points: 35,
        difficulty: 'hard',
        hint: 'Use :not() to find visible panel'
      }
    ]
  },
  {
    id: 24,
    name: "Modal Dialog",
    theme: "modal",
    description: "A modal dialog with overlay",
    layout: "modal",
    tasks: [
      {
        id: 'level24-task1',
        type: 'click',
        instruction: 'Click the modal close button',
        target: '.modal .close-btn',
        points: 25,
        difficulty: 'medium',
        hint: 'Find close button inside modal'
      },
      {
        id: 'level24-task2',
        type: 'click',
        instruction: 'Click the modal backdrop',
        target: '.modal-backdrop',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the overlay behind the modal'
      }
    ]
  },
  {
    id: 25,
    name: "Dropdown Menu",
    theme: "dropdown",
    description: "A complex dropdown menu system",
    layout: "dropdown",
    tasks: [
      {
        id: 'level25-task1',
        type: 'click',
        instruction: 'Click the submenu item',
        target: '.dropdown-menu .submenu-item',
        points: 30,
        difficulty: 'medium',
        hint: 'Find item inside dropdown submenu'
      },
      {
        id: 'level25-task2',
        type: 'click',
        instruction: 'Click the divider in the menu',
        target: '.dropdown-divider',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the menu separator'
      }
    ]
  },
  {
    id: 26,
    name: "Card Grid",
    theme: "grid",
    description: "A responsive card grid layout",
    layout: "grid",
    tasks: [
      {
        id: 'level26-task1',
        type: 'click',
        instruction: 'Click the card in the second row, first column',
        target: '.card-grid .card:nth-child(4)',
        points: 40,
        difficulty: 'hard',
        hint: 'Calculate position in grid layout'
      },
      {
        id: 'level26-task2',
        type: 'click',
        instruction: 'Click the featured card',
        target: '.card.featured',
        points: 25,
        difficulty: 'medium',
        hint: 'Find card with featured class'
      }
    ]
  },
  {
    id: 27,
    name: "Sidebar Navigation",
    theme: "sidebar",
    description: "A collapsible sidebar navigation",
    layout: "sidebar",
    tasks: [
      {
        id: 'level27-task1',
        type: 'click',
        instruction: 'Click the nested menu item',
        target: '.sidebar .nested-menu li',
        points: 35,
        difficulty: 'hard',
        hint: 'Find list item in nested menu'
      },
      {
        id: 'level27-task2',
        type: 'click',
        instruction: 'Click the sidebar toggle button',
        target: '.sidebar-toggle',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the collapse/expand button'
      }
    ]
  },
  {
    id: 28,
    name: "Breadcrumb Navigation",
    theme: "breadcrumb",
    description: "A breadcrumb navigation system",
    layout: "breadcrumb",
    tasks: [
      {
        id: 'level28-task1',
        type: 'click',
        instruction: 'Click the last breadcrumb item',
        target: '.breadcrumb li:last-child',
        points: 30,
        difficulty: 'medium',
        hint: 'Use :last-child for final breadcrumb'
      },
      {
        id: 'level28-task2',
        type: 'click',
        instruction: 'Click the breadcrumb separator',
        target: '.breadcrumb-separator',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the divider between breadcrumbs'
      }
    ]
  },
  {
    id: 29,
    name: "Progress Tracker",
    theme: "progress",
    description: "A multi-step progress indicator",
    layout: "progress",
    tasks: [
      {
        id: 'level29-task1',
        type: 'click',
        instruction: 'Click the completed step',
        target: '.step.completed',
        points: 25,
        difficulty: 'medium',
        hint: 'Find step with completed status'
      },
      {
        id: 'level29-task2',
        type: 'click',
        instruction: 'Click the current active step',
        target: '.step.active',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the currently active step'
      }
    ]
  },
  {
    id: 30,
    name: "Tag Cloud",
    theme: "tags",
    description: "A tag cloud with different sizes",
    layout: "tags",
    tasks: [
      {
        id: 'level30-task1',
        type: 'click',
        instruction: 'Click the largest tag',
        target: '.tag.size-large',
        points: 30,
        difficulty: 'medium',
        hint: 'Find tag with large size class'
      },
      {
        id: 'level30-task2',
        type: 'click',
        instruction: 'Click a tag with 5+ characters',
        target: '.tag[data-length="5+"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Look for tag with length attribute'
      }
    ]
  },

  // Levels 31-50: Advanced CSS Selectors
  {
    id: 31,
    name: "Form Validation",
    theme: "validation",
    description: "A form with validation states",
    layout: "validation",
    tasks: [
      {
        id: 'level31-task1',
        type: 'click',
        instruction: 'Click the invalid input field',
        target: 'input:invalid',
        points: 35,
        difficulty: 'hard',
        hint: 'Use :invalid pseudo-class'
      },
      {
        id: 'level31-task2',
        type: 'click',
        instruction: 'Click the required field that\'s empty',
        target: 'input:required:placeholder-shown',
        points: 45,
        difficulty: 'hard',
        hint: 'Combine :required and :placeholder-shown'
      }
    ]
  },
  {
    id: 32,
    name: "Interactive Elements",
    theme: "interactive",
    description: "Elements with various interactive states",
    layout: "interactive",
    tasks: [
      {
        id: 'level32-task1',
        type: 'click',
        instruction: 'Click the disabled button',
        target: 'button:disabled',
        points: 30,
        difficulty: 'medium',
        hint: 'Use :disabled pseudo-class'
      },
      {
        id: 'level32-task2',
        type: 'click',
        instruction: 'Click the checked checkbox',
        target: 'input:checked',
        points: 35,
        difficulty: 'hard',
        hint: 'Find checked input element'
      }
    ]
  },
  {
    id: 33,
    name: "List Variations",
    theme: "lists",
    description: "Different types of lists and items",
    layout: "lists",
    tasks: [
      {
        id: 'level33-task1',
        type: 'click',
        instruction: 'Click every odd list item',
        target: 'li:nth-child(odd)',
        points: 40,
        difficulty: 'hard',
        hint: 'Use :nth-child(odd) selector'
      },
      {
        id: 'level33-task2',
        type: 'click',
        instruction: 'Click the item that\'s not the first or last',
        target: 'li:not(:first-child):not(:last-child)',
        points: 50,
        difficulty: 'hard',
        hint: 'Combine :not() with :first-child and :last-child'
      }
    ]
  },
  {
    id: 34,
    name: "Attribute Selectors",
    theme: "attributes",
    description: "Elements with various attributes",
    layout: "attributes",
    tasks: [
      {
        id: 'level34-task1',
        type: 'click',
        instruction: 'Click the element with title starting with "Info"',
        target: '[title^="Info"]',
        points: 40,
        difficulty: 'hard',
        hint: 'Use ^= for "starts with" attribute matching'
      },
      {
        id: 'level34-task2',
        type: 'click',
        instruction: 'Click the element with class containing "btn"',
        target: '[class*="btn"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Use *= for "contains" attribute matching'
      }
    ]
  },
  {
    id: 35,
    name: "Sibling Selectors",
    theme: "siblings",
    description: "Elements with sibling relationships",
    layout: "siblings",
    tasks: [
      {
        id: 'level35-task1',
        type: 'click',
        instruction: 'Click the paragraph after the heading',
        target: 'h3 + p',
        points: 35,
        difficulty: 'hard',
        hint: 'Use + for adjacent sibling selector'
      },
      {
        id: 'level35-task2',
        type: 'click',
        instruction: 'Click any div that follows a paragraph',
        target: 'p ~ div',
        points: 40,
        difficulty: 'hard',
        hint: 'Use ~ for general sibling selector'
      }
    ]
  },
  {
    id: 36,
    name: "Pseudo Elements",
    theme: "pseudo",
    description: "Elements with pseudo-element styling",
    layout: "pseudo",
    tasks: [
      {
        id: 'level36-task1',
        type: 'click',
        instruction: 'Click the element with a ::before pseudo-element',
        target: '.has-before',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for element styled with ::before'
      },
      {
        id: 'level36-task2',
        type: 'click',
        instruction: 'Click the first letter of the paragraph',
        target: '.first-letter',
        points: 35,
        difficulty: 'hard',
        hint: 'Find element with ::first-letter styling'
      }
    ]
  },
  {
    id: 37,
    name: "Empty Elements",
    theme: "empty",
    description: "Elements with empty or filled states",
    layout: "empty",
    tasks: [
      {
        id: 'level37-task1',
        type: 'click',
        instruction: 'Click the empty div',
        target: 'div:empty',
        points: 35,
        difficulty: 'hard',
        hint: 'Use :empty pseudo-class'
      },
      {
        id: 'level37-task2',
        type: 'click',
        instruction: 'Click the div that has content',
        target: 'div:not(:empty)',
        points: 40,
        difficulty: 'hard',
        hint: 'Combine :not() with :empty'
      }
    ]
  },
  {
    id: 38,
    name: "Language Selectors",
    theme: "language",
    description: "Elements with language attributes",
    layout: "language",
    tasks: [
      {
        id: 'level38-task1',
        type: 'click',
        instruction: 'Click the element in English',
        target: ':lang(en)',
        points: 40,
        difficulty: 'hard',
        hint: 'Use :lang() pseudo-class'
      },
      {
        id: 'level38-task2',
        type: 'click',
        instruction: 'Click the element with lang="fr"',
        target: '[lang="fr"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Use attribute selector for lang'
      }
    ]
  },
  {
    id: 39,
    name: "Root and Target",
    theme: "root",
    description: "Elements with special pseudo-classes",
    layout: "root",
    tasks: [
      {
        id: 'level39-task1',
        type: 'click',
        instruction: 'Click the target element',
        target: ':target',
        points: 45,
        difficulty: 'hard',
        hint: 'Use :target pseudo-class'
      },
      {
        id: 'level39-task2',
        type: 'click',
        instruction: 'Click the element that\'s the root',
        target: ':root',
        points: 50,
        difficulty: 'hard',
        hint: 'Use :root pseudo-class'
      }
    ]
  },
  {
    id: 40,
    name: "Complex Combinations",
    theme: "complex",
    description: "Complex selector combinations",
    layout: "complex",
    tasks: [
      {
        id: 'level40-task1',
        type: 'click',
        instruction: 'Click the third child of the second section',
        target: 'section:nth-child(2) > *:nth-child(3)',
        points: 50,
        difficulty: 'hard',
        hint: 'Combine multiple nth-child selectors'
      },
      {
        id: 'level40-task2',
        type: 'click',
        instruction: 'Click the link inside a list item that\'s not first',
        target: 'li:not(:first-child) a',
        points: 45,
        difficulty: 'hard',
        hint: 'Combine :not(), :first-child, and descendant selector'
      }
    ]
  },

  // Levels 41-60: Specialized Layouts
  {
    id: 41,
    name: "Kanban Board",
    theme: "kanban",
    description: "A project management kanban board",
    layout: "kanban",
    tasks: [
      {
        id: 'level41-task1',
        type: 'click',
        instruction: 'Click the card in the "In Progress" column',
        target: '.column[data-status="in-progress"] .card',
        points: 35,
        difficulty: 'hard',
        hint: 'Find card in specific status column'
      },
      {
        id: 'level41-task2',
        type: 'click',
        instruction: 'Click the add button in the "Done" column',
        target: '.column[data-status="done"] .add-card',
        points: 40,
        difficulty: 'hard',
        hint: 'Look for add button in done column'
      }
    ]
  },
  {
    id: 42,
    name: "Timeline",
    theme: "timeline",
    description: "A vertical timeline of events",
    layout: "timeline",
    tasks: [
      {
        id: 'level42-task1',
        type: 'click',
        instruction: 'Click the timeline event from 2023',
        target: '.timeline-event[data-year="2023"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Find event with specific year'
      },
      {
        id: 'level42-task2',
        type: 'click',
        instruction: 'Click the milestone marker',
        target: '.timeline-milestone',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for milestone indicator'
      }
    ]
  },
  {
    id: 43,
    name: "Pricing Table",
    theme: "pricing",
    description: "A comparison pricing table",
    layout: "pricing",
    tasks: [
      {
        id: 'level43-task1',
        type: 'click',
        instruction: 'Click the popular plan',
        target: '.pricing-plan.popular',
        points: 25,
        difficulty: 'medium',
        hint: 'Find plan marked as popular'
      },
      {
        id: 'level43-task2',
        type: 'click',
        instruction: 'Click the feature that\'s not available in basic plan',
        target: '.pricing-plan.basic .feature.unavailable',
        points: 45,
        difficulty: 'hard',
        hint: 'Find unavailable feature in basic plan'
      }
    ]
  },
  {
    id: 44,
    name: "Image Carousel",
    theme: "carousel",
    description: "An image carousel with controls",
    layout: "carousel",
    tasks: [
      {
        id: 'level44-task1',
        type: 'click',
        instruction: 'Click the next button',
        target: '.carousel-next',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the next navigation button'
      },
      {
        id: 'level44-task2',
        type: 'click',
        instruction: 'Click the third indicator dot',
        target: '.carousel-indicator:nth-child(3)',
        points: 35,
        difficulty: 'hard',
        hint: 'Use nth-child for third indicator'
      }
    ]
  },
  {
    id: 45,
    name: "Search Results",
    theme: "search",
    description: "Search results with filters",
    layout: "search",
    tasks: [
      {
        id: 'level45-task1',
        type: 'click',
        instruction: 'Click the filter for "Recent"',
        target: '.filter[data-type="recent"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Find filter with recent type'
      },
      {
        id: 'level45-task2',
        type: 'click',
        instruction: 'Click the second search result',
        target: '.search-result:nth-child(2)',
        points: 30,
        difficulty: 'medium',
        hint: 'Use nth-child for second result'
      }
    ]
  },
  {
    id: 46,
    name: "Code Editor",
    theme: "editor",
    description: "A web-based code editor interface",
    layout: "editor",
    tasks: [
      {
        id: 'level46-task1',
        type: 'click',
        instruction: 'Click the line number 5',
        target: '.line-number[data-line="5"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Find line number with specific data attribute'
      },
      {
        id: 'level46-task2',
        type: 'click',
        instruction: 'Click the syntax highlighted keyword',
        target: '.syntax-keyword',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for highlighted code keyword'
      }
    ]
  },
  {
    id: 47,
    name: "Mind Map",
    theme: "mindmap",
    description: "An interactive mind map diagram",
    layout: "mindmap",
    tasks: [
      {
        id: 'level47-task1',
        type: 'click',
        instruction: 'Click the central node',
        target: '.node.central',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the main central node'
      },
      {
        id: 'level47-task2',
        type: 'click',
        instruction: 'Click a leaf node (no children)',
        target: '.node:not(.has-children)',
        points: 40,
        difficulty: 'hard',
        hint: 'Use :not() to find nodes without children'
      }
    ]
  },
  {
    id: 48,
    name: "Notification Center",
    theme: "notifications",
    description: "A notification management interface",
    layout: "notifications",
    tasks: [
      {
        id: 'level48-task1',
        type: 'click',
        instruction: 'Click the unread notification',
        target: '.notification.unread',
        points: 25,
        difficulty: 'medium',
        hint: 'Find notification marked as unread'
      },
      {
        id: 'level48-task2',
        type: 'click',
        instruction: 'Click the dismiss button on the error notification',
        target: '.notification.error .dismiss',
        points: 40,
        difficulty: 'hard',
        hint: 'Find dismiss button in error notification'
      }
    ]
  },
  {
    id: 49,
    name: "Flowchart",
    theme: "flowchart",
    description: "An interactive flowchart diagram",
    layout: "flowchart",
    tasks: [
      {
        id: 'level49-task1',
        type: 'click',
        instruction: 'Click the decision node',
        target: '.node[data-type="decision"]',
        points: 35,
        difficulty: 'hard',
        hint: 'Find node with decision type'
      },
      {
        id: 'level49-task2',
        type: 'click',
        instruction: 'Click the connector between nodes',
        target: '.connector',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for the connecting line'
      }
    ]
  },
  {
    id: 50,
    name: "Virtual Keyboard",
    theme: "keyboard",
    description: "An on-screen virtual keyboard",
    layout: "keyboard",
    tasks: [
      {
        id: 'level50-task1',
        type: 'click',
        instruction: 'Click the space bar',
        target: '.key.spacebar',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the spacebar key'
      },
      {
        id: 'level50-task2',
        type: 'click',
        instruction: 'Click the shift key',
        target: '.key[data-key="shift"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Find key with shift data attribute'
      }
    ]
  },

  // Levels 51-70: Advanced Interactions
  {
    id: 51,
    name: "Drag and Drop",
    theme: "dragdrop",
    description: "A drag and drop interface",
    layout: "dragdrop",
    tasks: [
      {
        id: 'level51-task1',
        type: 'click',
        instruction: 'Click the draggable item',
        target: '.draggable',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the item that can be dragged'
      },
      {
        id: 'level51-task2',
        type: 'click',
        instruction: 'Click the drop zone',
        target: '.drop-zone',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the target drop area'
      }
    ]
  },
  {
    id: 52,
    name: "Color Picker",
    theme: "colorpicker",
    description: "A color selection interface",
    layout: "colorpicker",
    tasks: [
      {
        id: 'level52-task1',
        type: 'click',
        instruction: 'Click the red color swatch',
        target: '.color-swatch[data-color="red"]',
        points: 30,
        difficulty: 'medium',
        hint: 'Find swatch with red color data'
      },
      {
        id: 'level52-task2',
        type: 'click',
        instruction: 'Click the color slider',
        target: '.color-slider',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the color adjustment slider'
      }
    ]
  },
  {
    id: 53,
    name: "Tree View",
    theme: "treeview",
    description: "A hierarchical tree structure",
    layout: "treeview",
    tasks: [
      {
        id: 'level53-task1',
        type: 'click',
        instruction: 'Click the expand button on the parent node',
        target: '.tree-node.parent .expand-btn',
        points: 35,
        difficulty: 'hard',
        hint: 'Find expand button in parent node'
      },
      {
        id: 'level53-task2',
        type: 'click',
        instruction: 'Click the deepest nested child',
        target: '.tree-node .tree-node .tree-node',
        points: 45,
        difficulty: 'hard',
        hint: 'Find node nested three levels deep'
      }
    ]
  },
  {
    id: 54,
    name: "Split Pane",
    theme: "splitpane",
    description: "A resizable split pane interface",
    layout: "splitpane",
    tasks: [
      {
        id: 'level54-task1',
        type: 'click',
        instruction: 'Click the resize handle',
        target: '.resize-handle',
        points: 30,
        difficulty: 'medium',
        hint: 'Find the divider between panes'
      },
      {
        id: 'level54-task2',
        type: 'click',
        instruction: 'Click content in the right pane',
        target: '.pane.right .content',
        points: 35,
        difficulty: 'hard',
        hint: 'Find content inside right pane'
      }
    ]
  },
  {
    id: 55,
    name: "Tooltip System",
    theme: "tooltips",
    description: "Elements with tooltip interactions",
    layout: "tooltips",
    tasks: [
      {
        id: 'level55-task1',
        type: 'click',
        instruction: 'Click the element with a tooltip',
        target: '[data-tooltip]',
        points: 30,
        difficulty: 'medium',
        hint: 'Find element with tooltip data attribute'
      },
      {
        id: 'level55-task2',
        type: 'click',
        instruction: 'Click the visible tooltip',
        target: '.tooltip.visible',
        points: 35,
        difficulty: 'hard',
        hint: 'Find tooltip that is currently shown'
      }
    ]
  },
  {
    id: 56,
    name: "Context Menu",
    theme: "contextmenu",
    description: "A right-click context menu",
    layout: "contextmenu",
    tasks: [
      {
        id: 'level56-task1',
        type: 'click',
        instruction: 'Click the context menu item',
        target: '.context-menu .menu-item',
        points: 30,
        difficulty: 'medium',
        hint: 'Find item in the context menu'
      },
      {
        id: 'level56-task2',
        type: 'click',
        instruction: 'Click the separator in the menu',
        target: '.context-menu .separator',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for menu divider line'
      }
    ]
  },
  {
    id: 57,
    name: "Slider Controls",
    theme: "sliders",
    description: "Various slider and range controls",
    layout: "sliders",
    tasks: [
      {
        id: 'level57-task1',
        type: 'click',
        instruction: 'Click the range slider thumb',
        target: '.range-slider .thumb',
        points: 35,
        difficulty: 'hard',
        hint: 'Find the draggable slider handle'
      },
      {
        id: 'level57-task2',
        type: 'click',
        instruction: 'Click the slider track',
        target: '.slider-track',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the slider background track'
      }
    ]
  },
  {
    id: 58,
    name: "Toggle Switches",
    theme: "toggles",
    description: "Various toggle and switch controls",
    layout: "toggles",
    tasks: [
      {
        id: 'level58-task1',
        type: 'click',
        instruction: 'Click the enabled toggle switch',
        target: '.toggle.enabled',
        points: 25,
        difficulty: 'medium',
        hint: 'Find toggle in enabled state'
      },
      {
        id: 'level58-task2',
        type: 'click',
        instruction: 'Click the switch handle',
        target: '.switch .handle',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for the movable switch part'
      }
    ]
  },
  {
    id: 59,
    name: "Loading States",
    theme: "loading",
    description: "Elements with loading animations",
    layout: "loading",
    tasks: [
      {
        id: 'level59-task1',
        type: 'click',
        instruction: 'Click the loading spinner',
        target: '.spinner',
        points: 20,
        difficulty: 'medium',
        hint: 'Find the rotating loading indicator'
      },
      {
        id: 'level59-task2',
        type: 'click',
        instruction: 'Click the progress bar',
        target: '.progress-bar',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the progress indicator'
      }
    ]
  },
  {
    id: 60,
    name: "Error States",
    theme: "errors",
    description: "Elements showing error conditions",
    layout: "errors",
    tasks: [
      {
        id: 'level60-task1',
        type: 'click',
        instruction: 'Click the error message',
        target: '.error-message',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the error text display'
      },
      {
        id: 'level60-task2',
        type: 'click',
        instruction: 'Click the retry button',
        target: '.retry-btn',
        points: 20,
        difficulty: 'medium',
        hint: 'Look for the retry action button'
      }
    ]
  },

  // Levels 61-80: Modern Web Components
  {
    id: 61,
    name: "Card Carousel",
    theme: "cardcarousel",
    description: "A carousel of interactive cards",
    layout: "cardcarousel",
    tasks: [
      {
        id: 'level61-task1',
        type: 'click',
        instruction: 'Click the active card in the carousel',
        target: '.carousel-card.active',
        points: 30,
        difficulty: 'medium',
        hint: 'Find the currently active card'
      },
      {
        id: 'level61-task2',
        type: 'click',
        instruction: 'Click the card action button',
        target: '.carousel-card .action-btn',
        points: 35,
        difficulty: 'hard',
        hint: 'Find action button inside a card'
      }
    ]
  },
  {
    id: 62,
    name: "Infinite Scroll",
    theme: "infinitescroll",
    description: "A list with infinite scrolling",
    layout: "infinitescroll",
    tasks: [
      {
        id: 'level62-task1',
        type: 'click',
        instruction: 'Click the load more trigger',
        target: '.load-more-trigger',
        points: 30,
        difficulty: 'medium',
        hint: 'Find the element that triggers more content'
      },
      {
        id: 'level62-task2',
        type: 'click',
        instruction: 'Click the 10th item in the list',
        target: '.scroll-item:nth-child(10)',
        points: 35,
        difficulty: 'hard',
        hint: 'Use nth-child to find the 10th item'
      }
    ]
  },
  {
    id: 63,
    name: "Masonry Layout",
    theme: "masonry",
    description: "A Pinterest-style masonry grid",
    layout: "masonry",
    tasks: [
      {
        id: 'level63-task1',
        type: 'click',
        instruction: 'Click the tallest masonry item',
        target: '.masonry-item.tall',
        points: 30,
        difficulty: 'medium',
        hint: 'Find item with tall class'
      },
      {
        id: 'level63-task2',
        type: 'click',
        instruction: 'Click the item in the second column',
        target: '.masonry-item[data-column="2"]',
        points: 40,
        difficulty: 'hard',
        hint: 'Find item with column data attribute'
      }
    ]
  },
  {
    id: 64,
    name: "Sticky Elements",
    theme: "sticky",
    description: "Elements with sticky positioning",
    layout: "sticky",
    tasks: [
      {
        id: 'level64-task1',
        type: 'click',
        instruction: 'Click the sticky header',
        target: '.sticky-header',
        points: 25,
        difficulty: 'medium',
        hint: 'Find the header that sticks to top'
      },
      {
        id: 'level64-task2',
        type: 'click',
        instruction: 'Click the floating action button',
        target: '.fab',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for the floating action button'
      }
    ]
  },
  {
    id: 65,
    name: "Parallax Sections",
    theme: "parallax",
    description: "Sections with parallax scrolling effects",
    layout: "parallax",
    tasks: [
      {
        id: 'level65-task1',
        type: 'click',
        instruction: 'Click the parallax background element',
        target: '.parallax-bg',
        points: 30,
        difficulty: 'medium',
        hint: 'Find the background with parallax effect'
      },
      {
        id: 'level65-task2',
        type: 'click',
        instruction: 'Click the foreground content',
        target: '.parallax-content',
        points: 25,
        difficulty: 'medium',
        hint: 'Look for content over parallax background'
      }
    ]
  },
  {
    id: 66,
    name: "CSS Grid Layout",
    theme: "cssgrid",
    description: "A complex CSS Grid layout",
    layout: "cssgrid",
    tasks: [
      {
        id: 'level66-task1',
        type: 'click',
        instruction: 'Click the item spanning multiple columns',
        target: '.grid-item.span-cols',
        points: 35,
        difficulty: 'hard',
        hint: 'Find item that spans across columns'
      },
      {
        id: 'level66-task2',
        type: 'click',
        instruction: 'Click the item in grid area "header"',
        target: '.grid-item[style*="grid-area: header"]',
        points: 45,
        difficulty: 'hard',
        hint: 'Find item with grid-area: header'
      }
    ]
  },
  {
    id: 67,
    name: "Flexbox Layout",
    theme: "flexbox",
    description: "Advanced flexbox arrangements",
    layout: "flexbox",
    tasks: [
      {
        id: 'level67-task1',
        type: 'click',
        instruction: 'Click the flex item that grows',
        target: '.flex-item.grow',
        points: 30,
        difficulty: 'medium',
        hint: 'Find item with flex-grow property'
      },
      {
        id: 'level67-task2',
        type: 'click',
        instruction: 'Click the centered flex item',
        target: '.flex-container.center .flex-item',
        points: 35,
        difficulty: 'hard',
        hint: 'Find item in centered flex container'
      }
    ]
  },
  {
    id: 68,
    name: "CSS Animations",
    theme: "animations",
    description: "Elements with CSS animations",
    layout: "animations",
    tasks: [
      {
        id: 'level68-task1',
        type: 'click',
        instruction: 'Click the bouncing element',
        target: '.bounce',
        points: 25,
        difficulty: 'medium',
        hint: 'Find element with bounce animation'
      },
      {
        id: 'level68-task2',
        type: 'click',
        instruction: 'Click the element that fades in',
        target: '.fade-in',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for element with fade-in animation'
      }
    ]
  },
  {
    id: 69,
    name: "CSS Transforms",
    theme: "transforms",
    description: "Elements with CSS transform effects",
    layout: "transforms",
    tasks: [
      {
        id: 'level69-task1',
        type: 'click',
        instruction: 'Click the rotated element',
        target: '.rotated',
        points: 25,
        difficulty: 'medium',
        hint: 'Find element with rotation transform'
      },
      {
        id: 'level69-task2',
        type: 'click',
        instruction: 'Click the scaled element',
        target: '.scaled',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for element with scale transform'
      }
    ]
  },
  {
    id: 70,
    name: "CSS Filters",
    theme: "filters",
    description: "Elements with CSS filter effects",
    layout: "filters",
    tasks: [
      {
        id: 'level70-task1',
        type: 'click',
        instruction: 'Click the blurred element',
        target: '.blurred',
        points: 25,
        difficulty: 'medium',
        hint: 'Find element with blur filter'
      },
      {
        id: 'level70-task2',
        type: 'click',
        instruction: 'Click the grayscale element',
        target: '.grayscale',
        points: 30,
        difficulty: 'medium',
        hint: 'Look for element with grayscale filter'
      }
    ]
  },

  // Levels 71-90: Expert Challenges
  {
    id: 71,
    name: "Shadow DOM",
    theme: "shadowdom",
    description: "Elements with shadow DOM components",
    layout: "shadowdom",
    tasks: [
      {
        id: 'level71-task1',
        type: 'click',
        instruction: 'Click the custom element',
        target: 'custom-element',
        points: 40,
        difficulty: 'hard',
        hint: 'Find the custom web component'
      },
      {
        id: 'level71-task2',
        type: 'click',
        instruction: 'Click the slotted content',
        target: '[slot="content"]',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element with slot attribute'
      }
    ]
  },
  {
    id: 72,
    name: "Web Components",
    theme: "webcomponents",
    description: "Custom web components interface",
    layout: "webcomponents",
    tasks: [
      {
        id: 'level72-task1',
        type: 'click',
        instruction: 'Click the component with attribute "active"',
        target: 'my-component[active]',
        points: 40,
        difficulty: 'hard',
        hint: 'Find custom component with active attribute'
      },
      {
        id: 'level72-task2',
        type: 'click',
        instruction: 'Click inside the component\'s template',
        target: 'my-component .template-content',
        points: 45,
        difficulty: 'hard',
        hint: 'Find content inside component template'
      }
    ]
  },
  {
    id: 73,
    name: "CSS Container Queries",
    theme: "container",
    description: "Layout with container queries",
    layout: "container",
    tasks: [
      {
        id: 'level73-task1',
        type: 'click',
        instruction: 'Click the container-responsive element',
        target: '.container-responsive',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element that responds to container size'
      },
      {
        id: 'level73-task2',
        type: 'click',
        instruction: 'Click the element inside the small container',
        target: '.container.small .responsive-item',
        points: 50,
        difficulty: 'hard',
        hint: 'Find item inside small container'
      }
    ]
  },
  {
    id: 74,
    name: "CSS Subgrid",
    theme: "subgrid",
    description: "Advanced grid with subgrid",
    layout: "subgrid",
    tasks: [
      {
        id: 'level74-task1',
        type: 'click',
        instruction: 'Click the subgrid container',
        target: '.subgrid-container',
        points: 45,
        difficulty: 'hard',
        hint: 'Find container using subgrid'
      },
      {
        id: 'level74-task2',
        type: 'click',
        instruction: 'Click the item aligned to parent grid',
        target: '.subgrid-item.aligned',
        points: 50,
        difficulty: 'hard',
        hint: 'Find item aligned with parent grid lines'
      }
    ]
  },
  {
    id: 75,
    name: "CSS Cascade Layers",
    theme: "layers",
    description: "Styles with cascade layers",
    layout: "layers",
    tasks: [
      {
        id: 'level75-task1',
        type: 'click',
        instruction: 'Click the element styled by the "theme" layer',
        target: '.theme-styled',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element styled by theme cascade layer'
      },
      {
        id: 'level75-task2',
        type: 'click',
        instruction: 'Click the element with overridden styles',
        target: '.layer-override',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element with layer style override'
      }
    ]
  },
  {
    id: 76,
    name: "CSS Nesting",
    theme: "nesting",
    description: "Styles with native CSS nesting",
    layout: "nesting",
    tasks: [
      {
        id: 'level76-task1',
        type: 'click',
        instruction: 'Click the nested element',
        target: '.parent .nested',
        points: 35,
        difficulty: 'hard',
        hint: 'Find element styled with nested CSS'
      },
      {
        id: 'level76-task2',
        type: 'click',
        instruction: 'Click the deeply nested element',
        target: '.parent .child .grandchild',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element three levels deep'
      }
    ]
  },
  {
    id: 77,
    name: "CSS Custom Properties",
    theme: "customprops",
    description: "Elements using CSS custom properties",
    layout: "customprops",
    tasks: [
      {
        id: 'level77-task1',
        type: 'click',
        instruction: 'Click the element using --primary-color',
        target: '.uses-primary-color',
        points: 40,
        difficulty: 'hard',
        hint: 'Find element styled with primary color variable'
      },
      {
        id: 'level77-task2',
        type: 'click',
        instruction: 'Click the element with custom property fallback',
        target: '.has-fallback',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element with CSS variable fallback'
      }
    ]
  },
  {
    id: 78,
    name: "CSS Logical Properties",
    theme: "logical",
    description: "Layout using logical properties",
    layout: "logical",
    tasks: [
      {
        id: 'level78-task1',
        type: 'click',
        instruction: 'Click the element with inline-start margin',
        target: '.margin-inline-start',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element with logical margin property'
      },
      {
        id: 'level78-task2',
        type: 'click',
        instruction: 'Click the element with block-end padding',
        target: '.padding-block-end',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element with logical padding property'
      }
    ]
  },
  {
    id: 79,
    name: "CSS Scroll Snap",
    theme: "scrollsnap",
    description: "Scrollable area with snap points",
    layout: "scrollsnap",
    tasks: [
      {
        id: 'level79-task1',
        type: 'click',
        instruction: 'Click the snap point element',
        target: '.snap-point',
        points: 40,
        difficulty: 'hard',
        hint: 'Find element that acts as scroll snap point'
      },
      {
        id: 'level79-task2',
        type: 'click',
        instruction: 'Click the mandatory snap item',
        target: '.snap-mandatory',
        points: 45,
        difficulty: 'hard',
        hint: 'Find item with mandatory scroll snap'
      }
    ]
  },
  {
    id: 80,
    name: "CSS Anchor Positioning",
    theme: "anchor",
    description: "Elements with anchor positioning",
    layout: "anchor",
    tasks: [
      {
        id: 'level80-task1',
        type: 'click',
        instruction: 'Click the anchor element',
        target: '.anchor',
        points: 40,
        difficulty: 'hard',
        hint: 'Find the element serving as anchor'
      },
      {
        id: 'level80-task2',
        type: 'click',
        instruction: 'Click the positioned element',
        target: '.anchored',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element positioned relative to anchor'
      }
    ]
  },

  // Levels 81-100: Master Challenges
  {
    id: 81,
    name: "Complex Form Validation",
    theme: "complexform",
    description: "Advanced form with complex validation",
    layout: "complexform",
    tasks: [
      {
        id: 'level81-task1',
        type: 'click',
        instruction: 'Click the field with custom validity',
        target: 'input:user-invalid',
        points: 50,
        difficulty: 'hard',
        hint: 'Use :user-invalid pseudo-class'
      },
      {
        id: 'level81-task2',
        type: 'click',
        instruction: 'Click the field group with error',
        target: '.field-group:has(.error)',
        points: 55,
        difficulty: 'hard',
        hint: 'Use :has() to find group containing error'
      }
    ]
  },
  {
    id: 82,
    name: "Dynamic Content",
    theme: "dynamic",
    description: "Dynamically generated content",
    layout: "dynamic",
    tasks: [
      {
        id: 'level82-task1',
        type: 'click',
        instruction: 'Click the element added after page load',
        target: '.dynamic-content',
        points: 45,
        difficulty: 'hard',
        hint: 'Find content added dynamically'
      },
      {
        id: 'level82-task2',
        type: 'click',
        instruction: 'Click the conditionally rendered element',
        target: '.conditional[data-visible="true"]',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element with visible condition'
      }
    ]
  },
  {
    id: 83,
    name: "Intersection Observer",
    theme: "intersection",
    description: "Elements with intersection-based behavior",
    layout: "intersection",
    tasks: [
      {
        id: 'level83-task1',
        type: 'click',
        instruction: 'Click the element in viewport',
        target: '.in-viewport',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element currently visible in viewport'
      },
      {
        id: 'level83-task2',
        type: 'click',
        instruction: 'Click the lazy-loaded element',
        target: '.lazy-loaded',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element loaded when scrolled into view'
      }
    ]
  },
  {
    id: 84,
    name: "Resize Observer",
    theme: "resize",
    description: "Elements that respond to size changes",
    layout: "resize",
    tasks: [
      {
        id: 'level84-task1',
        type: 'click',
        instruction: 'Click the size-responsive element',
        target: '.size-responsive',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element that adapts to size changes'
      },
      {
        id: 'level84-task2',
        type: 'click',
        instruction: 'Click the element that changed size',
        target: '.size-changed',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element that recently changed dimensions'
      }
    ]
  },
  {
    id: 85,
    name: "Mutation Observer",
    theme: "mutation",
    description: "Elements tracked for DOM mutations",
    layout: "mutation",
    tasks: [
      {
        id: 'level85-task1',
        type: 'click',
        instruction: 'Click the mutated element',
        target: '.mutated',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element that was recently modified'
      },
      {
        id: 'level85-task2',
        type: 'click',
        instruction: 'Click the element with added attributes',
        target: '[data-mutation="added"]',
        points: 55,
        difficulty: 'hard',
        hint: 'Find element with newly added attributes'
      }
    ]
  },
  {
    id: 86,
    name: "Performance Observer",
    theme: "performance",
    description: "Elements with performance monitoring",
    layout: "performance",
    tasks: [
      {
        id: 'level86-task1',
        type: 'click',
        instruction: 'Click the performance-critical element',
        target: '.perf-critical',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element marked as performance critical'
      },
      {
        id: 'level86-task2',
        type: 'click',
        instruction: 'Click the element with timing data',
        target: '[data-timing]',
        points: 55,
        difficulty: 'hard',
        hint: 'Find element with performance timing data'
      }
    ]
  },
  {
    id: 87,
    name: "Web Animations API",
    theme: "webanimations",
    description: "Elements using Web Animations API",
    layout: "webanimations",
    tasks: [
      {
        id: 'level87-task1',
        type: 'click',
        instruction: 'Click the element with running animation',
        target: '.animating',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element currently being animated'
      },
      {
        id: 'level87-task2',
        type: 'click',
        instruction: 'Click the animation control',
        target: '.animation-control',
        points: 50,
        difficulty: 'hard',
        hint: 'Find control for animation playback'
      }
    ]
  },
  {
    id: 88,
    name: "Service Worker",
    theme: "serviceworker",
    description: "Elements affected by service worker",
    layout: "serviceworker",
    tasks: [
      {
        id: 'level88-task1',
        type: 'click',
        instruction: 'Click the cached element',
        target: '.cached',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element served from cache'
      },
      {
        id: 'level88-task2',
        type: 'click',
        instruction: 'Click the offline indicator',
        target: '.offline-indicator',
        points: 45,
        difficulty: 'hard',
        hint: 'Find element showing offline status'
      }
    ]
  },
  {
    id: 89,
    name: "Web Workers",
    theme: "webworkers",
    description: "Interface communicating with web workers",
    layout: "webworkers",
    tasks: [
      {
        id: 'level89-task1',
        type: 'click',
        instruction: 'Click the worker status indicator',
        target: '.worker-status',
        points: 50,
        difficulty: 'hard',
        hint: 'Find element showing worker status'
      },
      {
        id: 'level89-task2',
        type: 'click',
        instruction: 'Click the element with worker data',
        target: '[data-worker-result]',
        points: 55,
        difficulty: 'hard',
        hint: 'Find element with data from worker'
      }
    ]
  },
  {
    id: 90,
    name: "WebAssembly Interface",
    theme: "wasm",
    description: "Interface for WebAssembly module",
    layout: "wasm",
    tasks: [
      {
        id: 'level90-task1',
        type: 'click',
        instruction: 'Click the WASM module status',
        target: '.wasm-status',
        points: 55,
        difficulty: 'hard',
        hint: 'Find WebAssembly module status indicator'
      },
      {
        id: 'level90-task2',
        type: 'click',
        instruction: 'Click the element with WASM result',
        target: '.wasm-result',
        points: 60,
        difficulty: 'hard',
        hint: 'Find element displaying WASM computation result'
      }
    ]
  },

  // Levels 91-100: Ultimate Master Challenges
  {
    id: 91,
    name: "Multi-dimensional Selectors",
    theme: "multidim",
    description: "Complex multi-dimensional selector challenges",
    layout: "multidim",
    tasks: [
      {
        id: 'level91-task1',
        type: 'click',
        instruction: 'Click the element in row 3, column 2 of the second table',
        target: 'table:nth-of-type(2) tr:nth-child(3) td:nth-child(2)',
        points: 60,
        difficulty: 'hard',
        hint: 'Combine multiple nth-child selectors with nth-of-type'
      },
      {
        id: 'level91-task2',
        type: 'click',
        instruction: 'Click the element that is both first and last child',
        target: ':first-child:last-child',
        points: 55,
        difficulty: 'hard',
        hint: 'Element that is both first and last (only child)'
      }
    ]
  },
  {
    id: 92,
    name: "Quantum Selectors",
    theme: "quantum",
    description: "Mind-bending selector combinations",
    layout: "quantum",
    tasks: [
      {
        id: 'level92-task1',
        type: 'click',
        instruction: 'Click the element that has a sibling with a child that has a specific class',
        target: '.parent:has(+ .sibling .child.specific)',
        points: 65,
        difficulty: 'hard',
        hint: 'Use :has() with sibling and descendant selectors'
      },
      {
        id: 'level92-task2',
        type: 'click',
        instruction: 'Click the element that is not empty and not the first of its type',
        target: ':not(:empty):not(:first-of-type)',
        points: 60,
        difficulty: 'hard',
        hint: 'Combine multiple :not() pseudo-classes'
      }
    ]
  },
  {
    id: 93,
    name: "Temporal Selectors",
    theme: "temporal",
    description: "Time-based and state-dependent selectors",
    layout: "temporal",
    tasks: [
      {
        id: 'level93-task1',
        type: 'click',
        instruction: 'Click the element that was recently focused',
        target: ':focus-within',
        points: 55,
        difficulty: 'hard',
        hint: 'Use :focus-within pseudo-class'
      },
      {
        id: 'level93-task2',
        type: 'click',
        instruction: 'Click the element in its default state',
        target: ':default',
        points: 60,
        difficulty: 'hard',
        hint: 'Find element with :default pseudo-class'
      }
    ]
  },
  {
    id: 94,
    name: "Fractal Selectors",
    theme: "fractal",
    description: "Self-similar and recursive selector patterns",
    layout: "fractal",
    tasks: [
      {
        id: 'level94-task1',
        type: 'click',
        instruction: 'Click the element nested exactly 5 levels deep',
        target: '.level .level .level .level .level',
        points: 65,
        difficulty: 'hard',
        hint: 'Count the nesting levels carefully'
      },
      {
        id: 'level94-task2',
        type: 'click',
        instruction: 'Click the element that contains itself',
        target: '.recursive:has(.recursive)',
        points: 70,
        difficulty: 'hard',
        hint: 'Use :has() to find self-containing element'
      }
    ]
  },
  {
    id: 95,
    name: "Paradox Selectors",
    theme: "paradox",
    description: "Seemingly impossible selector challenges",
    layout: "paradox",
    tasks: [
      {
        id: 'level95-task1',
        type: 'click',
        instruction: 'Click the element that is visible but not displayed',
        target: '.visible:not(.displayed)',
        points: 65,
        difficulty: 'hard',
        hint: 'Find element with visibility but no display'
      },
      {
        id: 'level95-task2',
        type: 'click',
        instruction: 'Click the element that exists but doesn\'t exist',
        target: '.exists.not-exists',
        points: 70,
        difficulty: 'hard',
        hint: 'Look for contradictory class combination'
      }
    ]
  },
  {
    id: 96,
    name: "Metamorphic Selectors",
    theme: "metamorphic",
    description: "Selectors that change based on context",
    layout: "metamorphic",
    tasks: [
      {
        id: 'level96-task1',
        type: 'click',
        instruction: 'Click the element that changes based on viewport',
        target: '.responsive[data-viewport="current"]',
        points: 60,
        difficulty: 'hard',
        hint: 'Find element with current viewport data'
      },
      {
        id: 'level96-task2',
        type: 'click',
        instruction: 'Click the element that adapts to its container',
        target: '.adaptive[data-container-size="medium"]',
        points: 65,
        difficulty: 'hard',
        hint: 'Find element adapted to medium container'
      }
    ]
  },
  {
    id: 97,
    name: "Holographic Selectors",
    theme: "holographic",
    description: "Multi-dimensional interface projections",
    layout: "holographic",
    tasks: [
      {
        id: 'level97-task1',
        type: 'click',
        instruction: 'Click the element in the Z-axis layer 3',
        target: '.layer[data-z="3"]',
        points: 65,
        difficulty: 'hard',
        hint: 'Find element in specific Z-layer'
      },
      {
        id: 'level97-task2',
        type: 'click',
        instruction: 'Click the element visible from multiple angles',
        target: '.multi-angle.visible',
        points: 70,
        difficulty: 'hard',
        hint: 'Find element with multi-angle visibility'
      }
    ]
  },
  {
    id: 98,
    name: "Quantum Entanglement",
    theme: "entanglement",
    description: "Interconnected elements with shared states",
    layout: "entanglement",
    tasks: [
      {
        id: 'level98-task1',
        type: 'click',
        instruction: 'Click the element entangled with the active state',
        target: '.entangled[data-state="active"]',
        points: 70,
        difficulty: 'hard',
        hint: 'Find element sharing active state'
      },
      {
        id: 'level98-task2',
        type: 'click',
        instruction: 'Click the element that affects its quantum pair',
        target: '.quantum-pair.primary',
        points: 75,
        difficulty: 'hard',
        hint: 'Find primary element of quantum pair'
      }
    ]
  },
  {
    id: 99,
    name: "Singularity Selector",
    theme: "singularity",
    description: "The point where all selectors converge",
    layout: "singularity",
    tasks: [
      {
        id: 'level99-task1',
        type: 'click',
        instruction: 'Click the element at the center of all possibilities',
        target: '.center.all.possibilities',
        points: 75,
        difficulty: 'hard',
        hint: 'Find the convergence point of all states'
      },
      {
        id: 'level99-task2',
        type: 'click',
        instruction: 'Click the element that contains the universe',
        target: '.universe.container',
        points: 80,
        difficulty: 'hard',
        hint: 'Find the universal container element'
      }
    ]
  },
  {
    id: 100,
    name: "The Ultimate Challenge",
    theme: "ultimate",
    description: "The final test of CSS selector mastery",
    layout: "ultimate",
    tasks: [
      {
        id: 'level100-task1',
        type: 'click',
        instruction: 'Click the element that represents the essence of CSS',
        target: '.css.essence.ultimate',
        points: 100,
        difficulty: 'hard',
        hint: 'Find the element that embodies CSS mastery'
      },
      {
        id: 'level100-task2',
        type: 'click',
        instruction: 'Click the element that transcends selectors',
        target: '.transcendent:not(.selector):is(.beyond)',
        points: 100,
        difficulty: 'hard',
        hint: 'Use the most advanced selector combination'
      }
    ]
  }
];

export const getLevelById = (id: number): Level | undefined => {
  return levels.find(level => level.id === id);
};

export const getLevelsByTheme = (theme: string): Level[] => {
  return levels.filter(level => level.theme === theme);
};

export const getTotalLevels = (): number => {
  return levels.length;
};