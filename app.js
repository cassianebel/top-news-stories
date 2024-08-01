const apiKey = "0bEwlYlGNxrZUyiX0F0GA0YQsoOeY0l2";
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
let windowWidth = window.innerWidth;

async function fetchTopStories() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    displayStories(data.results);
  } catch (error) {
    console.error("Error fetching the top stories:", error);
  }
}

function displayStories(stories) {
  const storiesContainer = document.getElementById("stories");
  storiesContainer.innerHTML = "";

  stories.forEach((story, index) => {
    const storyLink = document.createElement("a");
    storyLink.href = story.url;
    storyLink.target = "_blank";
    storyLink.className = "story";

    const storyImg = document.createElement("img");
    // if (windowWidth >= 768 && index === 0) {
    //   storyImg.src = story.multimedia[0].url;
    //   storyImg.alt = story.multimedia[0].caption;
    // } else {
    storyImg.src = story.multimedia[1].url;
    storyImg.alt = story.multimedia[1].caption;
    // }
    storyLink.appendChild(storyImg);

    const storyTitle = document.createElement("h2");
    storyTitle.textContent = story.title;

    const storyAbstract = document.createElement("p");
    storyAbstract.textContent = story.abstract;

    const storyText = document.createElement("div");
    storyText.className = "text";

    storyText.appendChild(storyTitle);
    storyText.appendChild(storyAbstract);
    storyLink.appendChild(storyText);
    storiesContainer.appendChild(storyLink);
  });
}

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

// Fetch top stories on page load
fetchTopStories();

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("dark-mode-toggle");
  const htmlElement = document.documentElement;

  toggleCheckbox.addEventListener("change", () => {
    const newTheme = toggleCheckbox.checked ? "dark" : "light";
    htmlElement.setAttribute("data-theme", newTheme);
  });
});
