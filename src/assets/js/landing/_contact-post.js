/********************************************/
/* CONTACT POST                             */
/********************************************/

const emailError = document.getElementById("emailError")
const emailSuccess = document.getElementById("emailSuccess")
function showSuccess(message) {
  hideError();
  emailSuccess.classList.add("form-alert--visible");
  emailSuccess.innerHTML = message
}
  
  function hideSuccess() {
    emailError.classList.remove("form-alert--visible");
  }
  
  function showError(message) {
    hideSuccess();
    emailError.classList.add("form-alert--visible");
    emailError.innerHTML = message;
  }
  
  function hideError() {
    emailError.classList.remove("form-alert--visible");
  }
  
  function clear(){
    document.getElementById("subscribeForm").reset()
  }

  document.getElementById("contactSubmit").addEventListener("click", function (e) {
    const fromEmail = document.getElementById("fromEmail");
    e.preventDefault()
    if (
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        fromEmail.value
      )
    ) {
      hideError();
  
      try {
        var body = {
          customer: {
            email: fromEmail.value,
            accepts_marketing: true,
            verified_email: true,
          },
        };
        fetch("https://start9.com/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then((response) => {
          clear()
          if (response.ok) {
            showSuccess("Thanks for subscribing!");
          } else {
            if (response.status = 422) {
              showError("Already subscribed!")
            } else {
              console.error(`Error code: ${response.status} - Details: ${response.statusText}`)
              showError(
                "Something's not working. If you keep getting this error, try us at <a href='https://twitter.com/start9labs' rel='noopener noreferrer' target='_blank'>Twitter</a> instead."
              );
            }
          }
        });
      } catch (error) {
        clear()
        console.error(error)
        showError(
          "Something's not working. If you keep getting this error, try us at <a href='https://twitter.com/start9labs' rel='noopener noreferrer' target='_blank'>Twitter</a> instead."
        );
      }
    } else {
      showError("Sorry, you must use a valid email address.");
    }
  });
  