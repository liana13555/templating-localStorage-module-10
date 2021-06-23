console.log(localStorage);
// В localStorage хранят объекты данных

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));
/*
localStorage.setItem() принимает 2 значения и подразумевает хранение только строк
  - ключ под к-рым сохраняем данные напр.'my-data'
  - строка, к-рую хотим сохранить
*/
const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

/*
localStorage.getItem() - который ожидает ключ 'my-data'
*/

// sessionStorage — исп-ся для добавления данных в хранилище сеансов. Как только мы закроем вкладку данные из sessionStorage удаляются
