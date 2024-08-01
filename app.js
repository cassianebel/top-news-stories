const apiKey = "0bEwlYlGNxrZUyiX0F0GA0YQsoOeY0l2"
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
let windowWidth = window.innerWidth;

async function fetchTopStories() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    displayStories(data.results);
  } catch (error) {
    console.error('Error fetching the top stories:', error);
  }
}

function displayStories(stories) {
  const storiesContainer = document.getElementById('stories');
  storiesContainer.innerHTML = '';

  stories.forEach((story, index) => {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'story';

    const storyImg = document.createElement('img');
    // if (windowWidth >= 768 && index === 0) {
    //   storyImg.src = story.multimedia[0].url;
    //   storyImg.alt = story.multimedia[0].caption;
    // } else {
      storyImg.src = story.multimedia[1].url;
      storyImg.alt = story.multimedia[1].caption;
    // }
    storyDiv.appendChild(storyImg);
    
    const storyTitle = document.createElement('h2');
    const storyLink = document.createElement('a');
    storyLink.href = story.url;
    storyLink.target = '_blank';
    storyLink.textContent = story.title;
    storyTitle.appendChild(storyLink);
    
    const storyAbstract = document.createElement('p');
    storyAbstract.textContent = story.abstract;

    const storyText = document.createElement('div');
    storyText.className = 'text';
    
    storyText.appendChild(storyTitle);
    storyText.appendChild(storyAbstract);
    storyDiv.appendChild(storyText);
    storiesContainer.appendChild(storyDiv);
  });
}

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
});

// Fetch top stories on page load
fetchTopStories();

