# Image Editor App

## Overview

This Image Editor App is a web application built with Next.js that allows users to browse, edit, and download images from the Lorem Picsum API. Users can adjust image dimensions, apply grayscale effects, and add blur to the images before downloading them.

## Features

- Browse a paginated gallery of images from Lorem Picsum
- View image details including author information
- Edit images:
  - Adjust width and height
  - Apply grayscale effect
  - Add blur effect (0-10 intensity)
- Download edited images
- Responsive design for various screen sizes
- Server-side rendering and static generation for improved performance

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/image-editor-app.git
   cd image-editor-app
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install

   # or

   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev

   # or

   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
image-editor-app/
├── app/
│ ├── actions/
│ │ ├── getImages.ts
│ │ └── getImageDetails.ts
│ ├── edit/
│ │ └── [id]/
│ │ ├── page.tsx
│ │ └── edit-image-client.tsx
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ └── not-found.tsx
├── components/
│ ├── ImageGallery.tsx
│ ├── LoadingSpinner.tsx
│ └── SkeletonLoader.tsx
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lorem Picsum API](https://picsum.photos/) - Image placeholder service

## Additional Information

### Caching and Data Fetching

This app uses Next.js 13's new App Router and server components. The \`getImages\` and \`getImageDetails\` functions in the \`actions\` folder use the \`cache\` function from React to optimize data fetching and minimize unnecessary API calls.

### Error Handling

The app includes error handling for failed image fetches and provides a custom 404 page for images that can't be found.

### Local Storage

The app uses local storage to remember user's edit settings for each image, providing a seamless experience when returning to previously edited images.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
