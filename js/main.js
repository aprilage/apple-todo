document.addEventListener('DOMContentLoaded', () => {
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

const listData = [
  {
    itemTitle: 'bread',
  },
  {
    itemTitle: 'milk',
  },
  {
    itemTitle: 'eggs',
  }
];

const listElement = document.querySelector("[data-js='listItem']");

listData.forEach((listItem, i) => {
  const readableIterator = i+1;
  let listItemTemplate = `
  <li class="listItem${readableIterator}">
    ${listData.itemTitle}
  </li>
  `;

listElement.insertAdjacentHTML('afterbegin', listItemTemplate);
});

});
