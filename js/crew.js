fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    let dot = document.querySelectorAll(".left-dot");
    let active = 0;
    console.log(data);
    for (let i = 0; i < dot.length; i++) {
      dot[i].addEventListener("click", () => {
        let x = data.crew[i];
        dot[active].classList.remove("left-dot-active");
        active = i;
        dot[active].classList.add("left-dot-active");
        update(x.name, x.role, x.bio, x.images.png);
      });
    }
  });

function update(n, dg, d, i) {
  let des = document.querySelector(".designation");
  let desc = document.querySelector(".description");
  let name = document.querySelector(".name");
  let img = document.querySelector(".img");
  name.innerText = n;
  des.innerText = dg;
  desc.innerText = d;
  img.src = "." + i;
}
