document.addEventListener('DOMContentLoaded', () => {
  const listData = [

    {
      listItem: 'bread',
      completed: true,
    },
    {
      listItem: 'milk',
      completed: true,
    },
    {
      listItem: 'eggs',
      completed: true,
    },
    {
      listItem: 'cocount oil',
      completed: true,
    },
  ];

const listElement = document.querySelector("[data-js='listItems']");

listData.forEach((listItem) => {
  let listTemplate = `
    <div class="list">
      <ul>
          <li class="listItem">
            <input type="checkbox" class="checkbox">
              ${listData.listItem}
          </li>
      </ul>
    </div>
  `;

    listElement.insertAdjacentHTML('beforeend', listTemplate);
  });

});
