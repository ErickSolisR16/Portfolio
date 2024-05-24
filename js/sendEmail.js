// * We get the submit button of the form
const btn = document.getElementById("btn-send");
// * We obtain the form
const form = document.getElementById("form");

// * Mail sending function
form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando correo...";

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var topic = document.getElementById("topic");
  var message = document.getElementById("message");

  if (
    !name.value ||
    !email.value ||
    !phone.value ||
    !topic.value ||
    !message.value
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, llena todos los campos",
    });
    btn.value = "Enviar";
  } else {
    const serviceID = "default_service";
    const templateID = "template_bpjwzak";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        // * Personalized alert
        Swal.fire(
          "Correo enviado con éxito",
          "Pronto estaré en contacto contigo.",
          "success"
        );
        form.reset();
        btn.value = "Enviar";
      },
      (err) => {
        btn.value = "Enviar";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error, vuelve a intentarlo.",
        });
        form.reset();
      }
    );
  }
});
