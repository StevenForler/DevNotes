document.getElementById('add-to-list').onclick = function() {
    var list = document.getElementById('list');
    var newLI = document.createElement('li');
    newLI.innerHTML = 'A new item';
    list.classList.add("swing");
    list.appendChild(newLI);
    setTimeout(function() {
      newLI.className = newLI.className + " show";
    }, 10);
  }