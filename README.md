# Dev Stack

Curated tools, technologies, and resources for developers building modern software. Compare options, explore frameworks, and build your ideal development stack.

## Technologies Used
- React (TypeScript)
- Tailwind CSS
- React Toastify
- Vite

## Features
- **Interactive Stack Builder**: Seamlessly add or remove frontend, backend, database, and tooling options to your custom stack.
- **Side-by-Side Comparison**: Explore detailed breakdowns and ratings for modern development frameworks and tools.
- **Instant Notifications**: Real-time feedback alerts using toast notifications when managing your stack items.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for **JavaScript XML**. It allows developers to write HTML-like markup directly inside JavaScript files. It is used because it keeps UI structure and rendering logic together in one place, making components intuitive to write and read.

### 2. What is the difference between props and state?
- **Props**: External data passed down from a parent component to a child. They are read-only and cannot be modified by the receiving component.
- **State**: Internal data managed directly within a component. It can change over time based on user interaction, triggering a component re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook adds reactive state variables to functional components. In this project, it was used to:
- Track the list of selected technologies in the user's stack (`stack`).
- Track image loading fallbacks (`imgError`) inside individual technology cards.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook manages side effects such as data fetching, timers, or manual DOM updates. It was used to fetch the static technology catalog from `public/data.json` once when the component initially mounts, preventing unnecessary re-fetching during regular state updates.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the unique `key` prop to identify which items in a list have changed, been added, or been removed. This enables efficient Virtual DOM reconciliation, prevents unnecessary re-renders, and preserves correct component state.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means rendering different UI elements. For example, showing a fallback loading message when data is being fetched:
```tsx
{loading ? <h2>Loading...</h2> : <TechCardList/>}