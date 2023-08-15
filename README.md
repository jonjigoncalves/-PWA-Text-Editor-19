# -PWA-Text-Editor-19


A Progressive Web App (PWA) text editor project that allows users to create notes with or without an internet connection.

## User Story

As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

## Acceptance Criteria

- When the application is opened in the editor, the client-server folder structure should be visible.
- Running `npm run start` from the root directory should start up the backend and serve the client.
- Running the text editor application from the terminal should bundle JavaScript files using webpack.
- Webpack plugins should generate an HTML file, service worker, and a manifest file.
- The text editor should still function without errors when using next-gen JavaScript.
- Opening the text editor should immediately create a database storage in IndexedDB.
- Entering content and clicking off the DOM window should save the content in the text editor with IndexedDB.
- Reopening the text editor after closing it should retrieve the content from IndexedDB.
- Clicking on the "Install" button should download the web application as an icon on the desktop.
- Loading the web application should register a service worker using Workbox.
- Registered service worker should pre-cache static assets upon loading, including subsequent pages and static assets.
- Deploying to Heroku should include proper build scripts for a webpack application.

## Getting Started

Follow these steps to set up and run the PWA text editor:

1. Clone the repository:

   
   git clone git@github.com:jonjigoncalves/-PWA-Text-Editor-19.git
   cd into that cloned repo

2. Install dependencies: npm run install 


3. Run the development server: npm runs start

4. Open your web browser and navigate to http://localhost:3000 to see the text editor in action.

## Contributing

Any additions are welcome, please just follow the community guidelines 

## License

This project is licensed under the [MIT License](LICENSE).