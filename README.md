# Dev Stack React Assignment


 Features
- React + Vite
- Remove one item and Remove All
- Loading state

 Technology that i Use
React.js
DaisyUI
TypeScript / JavaScript (ES6+)
React-Toastify
JSON
Vite



1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and helps us create UI components.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState creates and updates data inside a component. I used it to store the technology list, selected stack items, loading status, and menu state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code when a component loads or when certain data changes. I used it to fetch and load the technology data from the JSON file when the website starts.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to update only the items that changed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send information back by calling a function passed to it through props.