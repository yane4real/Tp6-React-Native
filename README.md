# TP 6 – React Native  
## Global State Management (Redux Toolkit & Zustand)

## Objective

The goal of this TP is to solve the problem of **sharing and modifying the todo list across multiple screens** without using props.

This TP introduces **global state management** using:
- **Redux Toolkit**
- **Zustand** (alternative solution)

---

## Problem Statement

In TP 5:
- Todos were stored locally using `useState`
- It was impossible to access or modify todos from another screen

Solution:
👉 Use a **global store** shared by the entire application.

---

## Technologies Used

- React Native (Expo)
- React Navigation
- Redux Toolkit
- React Redux
- Zustand
- JavaScript

---
TP6/
├── App.js
├── store/
│ ├── store.js
│ ├── todosSlice.js
│ └── useTodoStore.js
├── screens/
│ ├── TodoListScreen.js
│ └── TodoDetailsScreen.js
├── components/
│ └── AppBar.js
└── context/
└── AuthContext.js


---

## Installation

### Redux Toolkit & Zustand

```bash
npm install @reduxjs/toolkit react-redux
npm install zustand

Redux Implementation
Store Configuration

store/store.js

Central Redux store

Combines reducers

Todo Slice

store/todosSlice.js

Manages todos state

Actions:

addTodo

removeTodo

Providing the Store

The Redux store is provided globally using the Provider component in App.js.

<Provider store={store}>
  <AuthProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </AuthProvider>
</Provider>

Using Redux in Screens
TodoListScreen

Reads todos using useSelector

Adds initial todos using useDispatch

Displays shared todo list

TodoDetailsScreen

Deletes a todo using removeTodo

Navigates back after deletion

Updates list automatically

Zustand Implementation (Alternative)
Store Creation

store/useTodoStore.js

Global store using Zustand

State:

todos

Actions:

addTodo

removeTodo

Using Zustand in Screens
TodoListScreen

Accesses todos directly from the store

Adds todos inside useEffect

TodoDetailsScreen

Removes todo from Zustand store

Navigates back

List updates automatically

Expected Result

Todos are shared across screens

Deleting a todo updates the list instantly

No props are used for state sharing

Global state works correctly with Redux or Zustand

Concepts Learned

Global state management

Redux Toolkit basics

Zustand store usage

Shared data between screens

Clean separation of logic and UI

Author

Student Name: Haddouali Yassine
TP: React Native – Global State Management (Redux & Zustand)
## Project Structure

