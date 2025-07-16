Interactive Digital Showcase
Welcome to the Interactive Digital Showcase, a responsive web platform built to display products, projects, or artworks with real-time search, filters, and a modern user interface. This project showcases a variety of frontend development skills and serves as a portfolio piece.
Overview
This application features:

A responsive grid layout to display items.
Real-time search and filter functionality.
Dynamic product details pages.
Accessibility compliance (WCAG 2.1).
Automated testing and deployment.

Technologies Used

Frontend: Next.js, React, TypeScript, Tailwind CSS
State Management: Redux Toolkit
Testing: Vitest
CI/CD: GitHub Actions, Vercel
Version Control: Git
Architecture: Clean Architecture with a hybrid component-driven and feature-driven approach

Features

Homepage: Displays a grid of products/projects with search and filter options.
Product Details: View detailed information about individual items.
Accessibility: Supports screen readers and keyboard navigation.
Performance: Optimized with Server-Side Rendering (SSR) and Static Site Generation (SSG).

Getting Started
Prerequisites

Node.js (v16 or later)
npm or yarn

Installation

Clone the repository:
git clone https://github.com/AymanEldawy/digital-showcase.git
cd digital-showcase


Install dependencies:
npm install
# or
yarn install


Run the development server:
npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.


Environment Variables
Create a .env.local file with the following (optional for mock data):
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com/posts

Testing

Unit Tests (Jest):npm run test


E2E Tests (Cypress):npm run cypress:open



Deployment
The project is deployed on Vercel with a CI/CD pipeline using GitHub Actions. To deploy:

Push changes to the main branch.
The workflow automatically builds, tests, and deploys to https://digital-showcase.vercel.app.

Project Structure

src/components/: Reusable UI components (e.g., SearchBar, ProductGrid).
src/features/: Feature modules (e.g., product-listing, search).
src/store/: Redux state management.
src/services/: API and data services.
src/tests/: Unit and E2E tests.

Contributing
Feel free to fork this repository and submit pull requests. Use the following workflow:

Create a feature branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "feat: add your feature".
Push and create a PR: git push origin feature/your-feature.

License
This project is open-source under the MIT License.
Contact

Email: aymaneldawy04@gmail.com
Portfolio: https://aymaneldawy.vercel.app
GitHub: https://github.com/AymanEldawy/

Last updated: July 16, 2025