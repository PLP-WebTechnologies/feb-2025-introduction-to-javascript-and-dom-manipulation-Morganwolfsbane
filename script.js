// Change text and CSS styles dynamically
document.getElementById('change-btn').onclick = function() {
  const text = document.getElementById('info-text');
  text.textContent = 'Text has been changed!';
  text.style.color = 'blue';
  text.style.fontSize = '20px';
  text.style.fontWeight = 'bold';
};

// Add or remove an element when a button is clicked
let elementAdded = false;
document.getElementById('add-remove-btn').onclick = function() {
  const container = document.getElementById('dynamic-container');

  if (!elementAdded) {
    const newElem = document.createElement('p');
    newElem.id = 'added-element';
    newElem.textContent = 'This element was added!';
    newElem.style.background = '#f0f0f0';
    container.appendChild(newElem);
    elementAdded = true;
  } else {
    const elem = document.getElementById('added-element');
    if (elem) container.removeChild(elem);
    elementAdded = false;
  }
};
