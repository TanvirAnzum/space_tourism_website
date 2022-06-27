fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    const ul = document.querySelector(".page_nav");
    let lists = ul.children;
    let active = 0;
    for (let i = 0; i < lists.length; i++) {
      lists[i].addEventListener("click", () => {
        let d = data.destinations[i];
        lists[active].classList.remove("r-active");
        active = i;
        lists[active].classList.add("r-active");
        console.log(d);
        update(d.name, d.images.png, d.description, d.travel, d.distance);
      });
    }
  });

function update(nme, image, desc, tr, dis) {
  const img = document.querySelector(".img");
  const name = document.querySelector(".name");
  const travel = document.querySelector(".travel");
  const distance = document.querySelector(".distance-value");
  const description = document.querySelector(".description");

  img.src = "." + image;
  console.log(img.src);
  name.innerText = nme;
  description.innerText = desc;
  travel.innerText = tr;
  distance.innerText = dis;
}
