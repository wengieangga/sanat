const toggleDropdown = document.getElementById("toggleDropdown");
const menuDropdown = document.getElementById("menuDropdown");

toggleDropdown.addEventListener("click", function () {
  menuDropdown.classList.toggle("block");
  menuDropdown.classList.toggle("hidden");
});

function openAdvanceFeature(evt, advanceName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");
  const catchId = document.getElementById(advanceName);
  console.log(catchId);
  if (
    evt.currentTarget.classList.contains("active") &&
    document.getElementById(advanceName).classList.contains("block")
  ) {
    evt.currentTarget.classList.toggle("active");
    evt.currentTarget.className = evt.currentTarget.className.replace(
      " font-bold",
      " font-semibold"
    );
    evt.currentTarget.className = evt.currentTarget.className.replace(
      " text-[#1c1d1e]",
      " text-[#747474]"
    );
    catchId.classList.toggle("block");
  } else {
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].className = tabcontent[i].className.replace(" block", "");
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tablinks[i].className = tablinks[i].className.replace(
        " font-semibold",
        ""
      );
      tablinks[i].className = tablinks[i].className.replace(
        " text-[#747474]",
        ""
      );
      if (tablinks[i].classList.contains("font-bold", "text-[#1c1d1e]")) {
        tablinks[i].className = tablinks[i].className.replace(" font-bold", "");
        tablinks[i].className = tablinks[i].className.replace(
          " text-[#1c1d1e]",
          ""
        );
      }
    }
    document.getElementById(advanceName).classList.add("block");
    evt.currentTarget.className += " active font-bold text-[#1c1d1e]";
  }

  // for (let i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = "none";
  // }

  // for (let i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   tablinks[i].className = tablinks[i].className.replace(" font-semibold", "");
  //   tablinks[i].className = tablinks[i].className.replace(" font-bold", "");
  //   tablinks[i].className = tablinks[i].className.replace(
  //     " text-[#1c1d1e]",
  //     ""
  //   );
  // }

  // document.getElementById(advanceName).style.display = "block";
  // evt.currentTarget.className += " active font-bold text-[#1c1d1e]";
}
