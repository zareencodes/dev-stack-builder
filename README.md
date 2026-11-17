# 🚀 Dev Stack Builder

A responsive web application that helps developers explore popular technologies and build their own custom technology stack. Discover development tools, learn about their features, and select your preferred technologies in one place.

## ✨ Key Features

### 1. Technology Exploration
- Explore 15 different development technologies.
- View technology names, categories, descriptions, difficulty levels, and ratings.
- Browse technologies through a responsive card layout.

### 2. Custom Stack Builder
- Add your preferred technologies to your personal stack.
- Remove individual technologies whenever you want.
- Clear your entire stack with one action.
- Prevent duplicate technology selections.
- Get instant notifications for stack actions.

### 3. Responsive Design
- Clean and user-friendly interface.
- Responsive layouts for desktop, tablet, and mobile devices.
- Mobile-friendly navigation.

### 4. Loading Experience
- Display a loading indicator while technology data is being loaded.

## 🛠️ Technologies Used

- **React.js** – Building the user interface.
- **JavaScript** – Application functionality.
- **Tailwind CSS** – Styling and responsive design.
- **Vite** – Development server and build tool.
- **React-Toastify** – Notifications and alerts.
- **JSON** – Storing technology information.

## ⚙️ How to Run the Project Locally

Make sure you have Node.js and npm installed.

**1. Clone the repository**

```bash
git clone https://github.com/zareencodes/dev-stack-builder.git
```

**2. Open the project folder**

```bash
cd dev-stack-builder
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the localhost URL displayed in your terminal in your web browser.

## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes creating React user interfaces easier and more readable.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook allows functional components to manage data that can change. In this project, I used it to manage the selected technologies in Your Stack and the loading state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a component. I used it to load technology data from the JSON file when the TechnologySection component loads.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to update the list efficiently when items are added or removed.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different UI elements based on a condition. In this project, I used it to show an empty stack message when no technologies have been selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props. A child can communicate back to the parent by calling a function passed to it through props.

**Project Name:** Dev Stack Builder

**Built With:** React.js, JavaScript, and Tailwind CSS

**GitHub Repository:** https://github.com/zareencodes/dev-stack-builder