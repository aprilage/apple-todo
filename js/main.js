function renderTodoList(){
  var listData = [
  ];

  //inputs.push(document.getElementById("newItem").value);

  const listElement = document.querySelector("[data-js='listItems']");

  listData.forEach((item) => {
    let listTemplate = `
      <div class="list">
            <li class="listItem">
              <input type="checkbox" class="checkbox">
                ${item.listItem}
              <input id="newItem" type="text">
              <button>Add</button>
            </li>
        </ul>
      </div>
    `;

      listElement.insertAdjacentHTML('beforeend', listTemplate);
    });
  };

document.getElementById('addItemButton').addEventListener("click", function() {
    
})


document.addEventListener('DOMContentLoaded', function(){

})
