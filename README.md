# Next.js Course Platform

This project is a comprehensive course platform built with Next.js, leveraging the power of React for building user interfaces and MongoDB for database management. It also uses gray-matter for parsing front-matter from markdown files, react-markdown for rendering markdown content, and react-syntax-highlighter for syntax highlighting in markdown.

## Features

- **Next.js**: Server-side rendering and static site generation.
- **React**: Building dynamic user interfaces.
- **MongoDB**: Efficient data storage and retrieval.
- **gray-matter**: Parsing front-matter from markdown files.
- **react-markdown**: Rendering markdown as React components.
- **react-syntax-highlighter**: Syntax highlighting for code blocks in markdown.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone <repository-url>
cd nextjs-course
npm install
```

## Available Scripts

In this project, you will need to setup your environment variables. Create a .env.local file in the root of your project and add the following environment variables:

```bash
MONGODB_URI=your_mongodb_uri
```

Then you can run:

```bash
npm run dev
```
Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

```bash
npm run build
```
Builds the app for production to the .next folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run start
```
Starts the application in production mode. The application should be compiled with npm run build first.

## Dependencies

- **gray-matter**: Parses front-matter from markdown files.
- **mongodb**: MongoDB driver for Node.js.
- **next**: The React Framework for production.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React.
- **react-markdown**: Renders markdown as React components.
- **react-syntax-highlighter**: Syntax highlighting component for React.

## GitHub and Live Links

- **GitHub Repository**: [https://github.com/iamsjunaid/next_blogs](https://github.com/iamsjunaid/next_blogs)
- **Live Demo**: [https://next-blogs-zeta-five.vercel.app/](https://nextjs-course-platform.example.com)

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is open source and available under the MIT License.
