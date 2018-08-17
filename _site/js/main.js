// Wait for the DocumentObjectModel (DOM) to load
 // The anonymous function () => {} is a "callback"
 document.addEventListener('DOMContentLoaded', () => {
   // All of my code to target/use elements from the page
   // should be in here.

   // Find the elements in the document
      // Returns an array of all elements matching this selector
   const listItemElements = document.querySelectorAll("[data-js='listItem']");
   const completedCountElement = document.querySelector("[data-js='completedCount']");
   // Loop over each of the menuItemElements
   listItemElements.forEach((listItemElement) => {
     // Listen for click/tap whatever
   listItemElement.addEventListener('click', (e) => {
          listItemElement.classList.toggle('listItem--clicked');
          const listItemsThatHaveBeenClicked = document.querySelectorAll('.listItem--clicked');
   completedCountElement.innerHTML = listItemsThatHaveBeenClicked.length;
            });
          });
        });


const listData = [
  {
    itemTitle: 'bread' /* find out how to keep this blank and "ask" the user to fill it in */,
    /* completedStatus: how to find out if item is clicked and put that info here ,*/
}
];

const listItemElement = document.querySelector("[data-js='listItem']");

listData.forEach((listItem)) => {
  let listItemTemplate = `
  <li class="listItem">
  `;
}
