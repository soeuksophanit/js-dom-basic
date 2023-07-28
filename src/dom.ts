const randomNum = () => Math.floor(Math.random() * 10) + 1;

const getResult = () => {
  const secretNum = randomNum();
  console.log(secretNum);
  if (secretNum == inputNum) {
    console.log("Congrat!");
    paragraph.textContent = `Secret Number is : ${secretNum} and ${
      attemp + 1
    } ${attemp > 1 ? "attemps" : "attemp"}`;
    attemp = 0;
    live = 10;
  } else if (secretNum > inputNum) {
    attemp += 1;
    live--;
    paragraph.textContent = `Lower!`;
    li.textContent = `${attemp} ${attemp > 1 ? "attemps" : "attemp"} now!`;
    lives.textContent = `${live} ${live > 1 ? "lives" : "live"} left!`;
  } else if (secretNum < inputNum) {
    attemp += 1;
    live--;
    paragraph.textContent = `Higher!`;
    li.textContent = `${attemp} ${attemp > 1 ? "attemps" : "attemp"} now!`;
    lives.textContent = `${live} ${live > 1 ? "lives" : "live"} left!`;
  }
};

const resetValue = () => {
  paragraph.textContent = "Click Random!";
  attemp = 0;
  live = 10;
  lives.textContent = `10 lives now!`;
  li.textContent = `0 attemp now!`;
};

let inputNum = 10;
let attemp = 0;
let live = 10;
const btn = document.querySelector<HTMLButtonElement>(".box button")!;
const resetBtn = document.querySelector<HTMLButtonElement>(".box .reset")!;
const paragraph = document.querySelector<HTMLParagraphElement>(".box p")!;
const li = document.querySelector<HTMLLIElement>(".box .attemp")!;
const lives = document.querySelector<HTMLLIElement>(".box .live")!;

//calling the click btn event
btn.addEventListener("click", getResult);
resetBtn.addEventListener("click", resetValue);

// ----------- todo list ------------
const todolist = document.querySelector<HTMLUListElement>(".todo-list")!;
const btnSubmit = document.querySelector<HTMLButtonElement>(".btn-submit")!;
const inputText = document.querySelector<HTMLInputElement>(".input-text")!;
const countList = document.querySelector<HTMLSpanElement>("p span")!;

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  // create element
  const newList = document.createElement("li") as HTMLLIElement;
  newList.classList.add("item");
  newList.innerText = inputText.value;
  todolist.appendChild(newList);
  const list = todolist.children;
  countList.innerText = String(list.length);
  console.log(list);
  newList.addEventListener("click", deleteItem);
});

function deleteItem(e: Event) {
  console.log(e.target);
  e.target?.remove();
}
