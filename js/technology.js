fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    const btn = document.querySelectorAll(".nav-btn");
    let active = 0;

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", () => {
        let x = data.technology[i];

        btn[active].classList.remove("nb-active");
        active = i;
        btn[active].classList.add("nb-active");
        update(x.name, x.description, x.images.portrait);
      });
    }
  });

function update(name, desc, img) {
  let nm = document.querySelector(".term ");
  let ds = document.querySelector(".desc");
  let im = document.querySelector(".img");
  nm.innerText = name;
  ds.innerText = desc;
  im.src = "." + img;
}
