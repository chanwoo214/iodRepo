function addCard(card) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = card.name;
  template.querySelector(".card-text").innerText = card.age;
  document.querySelector("#card-list").appendChild(template);
}
if ("content" in document.createElement("template")) {
  const data = [
    { name: "bob", age: 23 },
    { name: "alice", age: 39 },
  ];

  data.forEach(person => {
    addCard(person);
  });
}
