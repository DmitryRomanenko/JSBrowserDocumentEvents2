const block = document.querySelector('.block');
let tr = [];
let td = ['ПН', 'ВТ', 'CР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((item) => `<td>${item}</td>`);

function createCalendar(elem, year, month) {
  let allDays = new Date(year, month - 1, 0);
  let startDay = new Date(year, month - 1);
  let tdSkip = startDay.getDay() === 0 ? 6 : startDay.getDay() - 1;
  for (let i = 0; i < tdSkip; i++) {
    td.push(`<td></td>`);
  }
  for (let i = 0; i < allDays.getDate(); i++) {
    td.push(`<td>${i + 1}</td>`);
  }
  let tdChunk = chunkArray(td, 7);
  for (let i = 0; i < tdChunk.length; i++) {
    let str = tdChunk[i].join('');
    tr.push(`<tr>${str}</tr>`);
  }
  elem.innerHTML = `<table>${tr.join('')}</table>`;
}
createCalendar(block, 2012, 5);

function chunkArray(array, chunk) {
  const newArray = [];
  for (let i = 0; i < array.length; i += chunk) {
    newArray.push(array.slice(i, i + chunk));
  }
  return newArray;
}
