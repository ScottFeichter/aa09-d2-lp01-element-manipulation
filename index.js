console.log(`hello world`);

const createHeader = (level, content) => {
  const header = document.createElement(`h${level}`);
  header.innerText = content;
  return header;
};

const createH2 = (level, content) => {
  const h2 = document.createElement("h2");
  document.body.appendChild(h2);
  h2.innerHTML = content;
  h2.setAttribute("style", "color:purple");
  return h2;
};

const createList = (arr, name) => {
  const ul = document.createElement(`ul`);
  ul.setAttribute(`id`, name);

  arr.forEach((element) => {
    const list = document.createElement(`li`);
    list.innerText = el;
    ul.appendChild(li);
  });
};

const makeClock = () => {
  const div = document.createElement(`div`);
  const ids = { 0: `hour`, 1: `minute`, 2: `second` };

  for (let i = 0; i < 3; i++) {
    const span = document.createElement(`span`);
    span.setAttribute(`id`, ids[1]);
    span.innerText = ids[i] + ":";
    div.appendChild(span);
  }
  return div;
};

const updateClock = () => {
  const currTime = new Date();
  const seconds = currTime.getSeconds();
  const minutes = currTime.getMinutes();
  const hours = currTime.getHours();

  const secSpan = document.getElementById(`second`);
  const minSpan = document.getElementById(`minute`);
  const hourSpan = document.getElementById(`hour`);

  secSpan.innerText = `seconds` + seconds;
  minSpan.innerText = `minutes` + minutes;
  hourSpan.innerText = `hours` + hours;

}

document.addEventListener(`DOMContentLoaded`, () => {
  const body = document.body;

  const nameHeader = createHeader(1, `Scott Feichter`);
  const h2 = createH2(2, "this is h2");
  const sep = document.createElement(`hr`);
  const clock = makeClock();

  body.appendChild(nameHeader);
  body.appendChild(sep);
  body.appendChild(h2);
  body.appendChild(clock);
});
