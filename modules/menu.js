// Navigation menu
const menu = () => {
  const display = () => {
    document.getElementById('diplay-list').setAttribute('class', 'non-show');
    document.getElementById('input-data').setAttribute('class', 'show');
    document.getElementById('contact').setAttribute('class', 'non-show');
    document.getElementById('footer').setAttribute('class', 'show');
  };
  display();

  const displayList = () => {
    document.getElementById('diplay-list').setAttribute('class', 'show');
    document.getElementById('input-data').setAttribute('class', 'non-show');
    document.getElementById('contact').setAttribute('class', 'non-show');
  };

  const displayAdd = () => {
    document.getElementById('diplay-list').setAttribute('class', 'non-show');
    document.getElementById('input-data').setAttribute('class', 'show');
    document.getElementById('contact').setAttribute('class', 'non-show');
  };

  const displayContact = () => {
    document.getElementById('diplay-list').setAttribute('class', 'non-show');
    document.getElementById('input-data').setAttribute('class', 'non-show');
    document.getElementById('contact').setAttribute('class', 'show');
  };

  document.getElementById('list').addEventListener('click', () => {
    displayList();
  });
  document.getElementById('add').addEventListener('click', () => {
    displayAdd();
  });
  document.getElementById('cont').addEventListener('click', () => {
    displayContact();
  });
};

export default menu;
