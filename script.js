// Basic JavaScript example for your website

// Show a welcome alert when the page loads
window.addEventListener('load', () => {
  console.log("Welcome to Fuel Your Performance!");
});

// Example: Highlight all recipe headings on click
const recipeHeadings = document.querySelectorAll('.container h2');

recipeHeadings.forEach(heading => {
  heading.addEventListener('click', () => {
    heading.style.backgroundColor = '#ffe3ea';
    heading.style.padding = '0.5rem';
    heading.style.borderRadius = '5px';
  });
});
