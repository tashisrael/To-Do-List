import './style.css';

const data = [
  {
    index: 1,
    description: 'I will learn HTML',
    completed: false,
  },
  {
    index: 2,
    description: 'I will learn CSS',
    completed: false,
  },
  {
    index: 3,
    description: 'I will learn JavaScript',
    completed: false,
  },
  {
    index: 4,
    description: 'I will learn WebPack',
    completed: false,
  },
];
const loadData = () => {
  const sortedData = data.sort((a, b) => a.index - b.index);
  const useData = sortedData.map((dat) => `
    <div class="lists_li">
      <div class="list_li_inputs" >
        <input type="checkbox" name="" id="${dat.index}" ${dat.completed ? 'checked' : ''} value="${dat.completed}">
        <label for="">${dat.description}</label>
      </div>
      <div class="make_dots">
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
      </div>
    </div>
  `);

  document.getElementById('list').innerHTML = useData.join('');
};

document.addEventListener('DOMContentLoaded', loadData());