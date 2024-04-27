function selectRoom(element, id) {
  document.querySelector("#inputRoom").value = id;
  const mapEl = document.querySelector("#map");
  const typeShape =
    location.pathname === "/event/7"
      ? "polygon"
      : location.pathname === "/event/8"
      ? "rect"
      : null;
  mapEl
    .querySelectorAll(typeShape)
    .forEach((rect) => rect.classList.remove("activeRoom"));
  element.querySelector(typeShape).classList.add("activeRoom");
}
