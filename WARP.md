# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React frontend project in early development stages. The repository is currently minimal with just initial setup files.

## Common Development Commands

### Project Initialization (if not done yet)
```bash
# Initialize a new React project with Create React App
npx create-react-app .

# Or with Vite for faster development
npm create vite@latest . -- --template react
```

### Development Workflow
```bash
# Install dependencies
npm install

# Start development server
npm start
# or with Vite
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm test -- --watchAll

# Run specific test file
npm test -- ComponentName.test.js

# Lint the codebase
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Package Management
```bash
# Install new dependency
npm install package-name

# Install dev dependency
npm install -D package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated
```

## Architecture Guidelines

### Project Structure (Standard React)
When the project is initialized, expect this structure:
- `src/` - Main source code directory
- `src/components/` - Reusable React components
- `src/pages/` or `src/views/` - Page-level components
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions
- `src/services/` - API calls and external service integrations
- `src/contexts/` - React Context providers
- `public/` - Static assets

### Component Organization
- Use functional components with hooks
- Keep components small and focused on single responsibility
- Extract reusable logic into custom hooks
- Use proper prop-types or TypeScript for type checking

### State Management
- Use React's built-in state management (useState, useReducer) for local state
- Use Context API for shared state across multiple components
- Consider external state management (Redux, Zustand) for complex applications

### Styling Approach
Common patterns to expect:
- CSS Modules for component-scoped styling
- Styled-components for CSS-in-JS approach
- Tailwind CSS for utility-first styling
- SCSS/Sass for enhanced CSS features

## Development Notes

### Current State
This repository is in initial setup phase. The main development workflow will depend on the chosen React framework and build tool (Create React App, Vite, or Next.js).

### File Watching
When working with React development servers, file changes trigger automatic rebuilds and hot reloading in the browser.

### Testing Strategy
- Use Jest as the testing framework (included with Create React App)
- React Testing Library for component testing
- Consider Cypress or Playwright for end-to-end testing

### Build Process
- Development builds include source maps and debugging tools
- Production builds are optimized, minified, and tree-shaken
- Static assets are processed and optimized during build

## Git Workflow
Since this is a new repository with no commits yet:
```bash
# Initial commit after project setup
git add .
git commit -m "Initial React project setup"

# Create and switch to feature branch
git checkout -b feature/component-name

# Regular commit workflow
git add .
git commit -m "descriptive commit message"
```