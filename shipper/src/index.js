import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.onload = function() {
  var container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  var shipper = document.createElement('img');
  shipper.src = '/Users/duckzyyy/Documents/test/shipper/assets/shipper.png';
  shipper.className = 'shipper';
  shipper.alt = 'Shipper';
  container.appendChild(shipper);

  var text = document.createElement('h2');
  text.id = 'text';
  text.innerText = 'Shopee cái gì cũng có...';
  container.appendChild(text);

  var items = document.createElement('div');
  items.className = 'items';
  container.appendChild(items);

  var noodle = document.createElement('img');
  noodle.src = '/Users/duckzyyy/Documents/test/shipper/assets/noodle.jpg';
  noodle.className = 'item item1';
  noodle.alt = 'Noodle';
  items.appendChild(noodle);

  var coke = document.createElement('img');
  coke.src = '/Users/duckzyyy/Documents/test/shipper/assets/coke.jpg';
  coke.className = 'item item2';
  coke.alt = 'Coke';
  items.appendChild(coke);

  var snack = document.createElement('img');
  snack.src = '/Users/duckzyyy/Documents/test/shipper/assets/snack.webp';
  snack.className = 'item item3';
  snack.alt = 'Snack';
  items.appendChild(snack);

  setInterval(function() {
    items.querySelectorAll('.item').forEach(function(item) {
      item.classList.toggle('item-animation');
    });
  }, 2000);
};

reportWebVitals();
