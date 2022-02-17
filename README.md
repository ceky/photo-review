### About

An image reviewer web application built with React, Typescript, Redux and Styled Components. It uses the API from unsplash to retrieve a random image that a user has the possibility to approve or reject.

If rejected that image is not gonna be displayed again to the user. If approved it will appear in a scrollable list. The application state persists between page reloads, by saving the approved and the rejected images in the localStorage.

### Installation guide

1. Install the dependencies
   `npm install`

2. Run the project locally
   `npm run dev`

And open the page on http://localhost:3000/

3. Build the project for production use
   `npm run build`

4. Run the unit tests
   `npm test`

### Delpoyment

The application has been deployed on the following url [https://image-reviewer.surge.sh/](https://image-reviewer.surge.sh/)

If routing doesn't work in production, in the /dist folder try `cp index.html 200.html`
