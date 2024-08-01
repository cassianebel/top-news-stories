# Today's Top Stories

A responsive landing page designed to display the day's top news stories provided by the New York Times API.
View the published page here: https://cassianebel.github.io/top-news-stories/

## Features
- Fetches the news stories' data from the New York Times Top Stories API: https://developer.nytimes.com/docs/top-stories-product/1/overview
- Utilizes CSS media queires, flexbox and grid to display the news stories in optimal layouts based on window widths for a responsive design.
- Detects the user's preference for dark/light mode and updates the page accordingly, also allows the user to toggle between dark and light mode.

## Installation
1. Obtain an API key from the New York Times Developer site: https://developer.nytimes.com/) site
2. Clone the repository
   `git clone https://github.com/cassianebel/top-news-stories.git`
4. Change into the directory
   `cd top-news-stories`
5. Install dependencies
   `npm install`
6. Create a ".env" file in the root directory with the following text (replacing 'YOUR-API-KEY-HERE' with your actual API key)
   `API-KEY=YOUR-API-KEY-HERE`
7. Run `npx webpack --config webpack.config.js`
8. View the index.html file in a browser.
