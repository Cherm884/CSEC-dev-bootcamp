# React + Vite
# Task Tracker Application

A responsive Task Tracker built with React that allows users to manage daily tasks, track statistics, and toggle between light and dark themes. The application utilizes Global State management and local storage for data persistence.

## 🚀 Features

### 1. Task Management
- **Add Tasks:** Users can add new tasks (empty inputs are prevented).
- **Task List:** Displays all tasks with a checkbox and delete button.
- **Mark as Complete:** Toggle tasks as completed or active.
- **Delete Task:** Instantly remove tasks from the list.

### 2. User Interface & Experience
- **Dark Mode:** A toggle in the header switches the theme. Preference is saved in the browser.
- **Responsive Design:** Optimized for both desktop and mobile screens.
- **Visual Feedback:** Completed tasks are visually distinguished.

### 3. Analytics
- **Stats Page:** A dedicated page (navigable via React Router) showing:
  - Total tasks
  - Completed tasks
  - Pending tasks

### 4. Technical Implementation
- **Global State:** Uses Context API to share task data between the Home and Stats pages.
- **Persistence:** Tasks and Dark Mode settings are saved in `localStorage` so data remains after a page refresh.

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx          // App title + dark mode toggle
│   ├── TaskInput.jsx       // Input field + add button
│   ├── TaskItem.jsx        // Single task item (checkbox, text, delete)
│   ├── TaskList.jsx        // Container for mapping tasks
│
├── pages/
│   ├── Home.jsx            // Main view for adding & managing tasks
│   ├── Stats.jsx           // View for task statistics
│
├── store/
│   ├── taskContext.jsx     // Global state management (Context API)
│
├── styles/
│   ├── global.css          // Global styles and variables
│
├── App.jsx                 // Route configuration
├── main.jsx                // Application entry point
🛠️ Technologies Used
React: UI Library
React Router DOM: Navigation and routing
Context API: Global state management
CSS / Tailwind: Styling and responsive design
Local Storage: Browser-based data persistence
💿 Installation & Run Instructions
Clone the repository:
code
Bash
git clone <repository-url>
cd task-tracker
Install dependencies:
code
Bash
npm install
Run the development server:
code
Bash
npm run dev
Open the app:
Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal).
🧩 Usage Guide
Adding a Task: Type in the input box on the Home page and click "Add Task".
Completing a Task: Click the checkbox next to a task item.
Deleting a Task: Click the "Delete" button on the specific task.
Switching Theme: Click the toggle button in the top right corner of the Header.
Viewing Stats: Click the "Stats" link/button to navigate to the statistics page to view your progress.
├── main.jsx                // Application entry point
