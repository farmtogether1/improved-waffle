const btnSpin = document.querySelector(".btnSpin");
const imgRotate = document.querySelector(".rotate_01");
btnSpin.addEventListener("click", function () {
  imgRotate.classList.add("startRotate");
  setTimeout(() => {
    Swal.fire({
      title: "Hehe",
      text: "Hup",
      icon: "success",
      confirmButtonText: "OK",
    });
    imgRotate.classList.remove("startRotate");
  }, 3000);
});
