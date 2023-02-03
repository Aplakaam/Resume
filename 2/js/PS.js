var Pic_container = document.querySelector(".piccontainer");
const Pic_selector = document.querySelector("#picselector");
var uploaded_image = "";
var holder = document.querySelector("#picholder");
Pic_selector.addEventListener("change", function () {
  const Picreader = new FileReader();
  Picreader.addEventListener("load", () => {
    uploaded_image = Picreader.result;
    holder.style.background = `url(${uploaded_image})`;
    holder.style.backgroundPosition = "center";
    holder.style.backgroundSize = "contain";
    holder.style.backgroundRepeat = "no-repeat";
    Pic_container.style.background = "white";
  });
  Picreader.readAsDataURL(this.files[0]);
});
