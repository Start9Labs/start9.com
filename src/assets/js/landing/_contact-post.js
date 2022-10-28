/********************************************/
/* CONTACT POST                             */
/********************************************/


function showSuccess() {
    hideError();
    emailSuccess.classList.add("form-alert--visible");
  }
  
  function hideSuccess() {
    emailError.classList.remove("form-alert--visible");
  }
  
  function showError(message) {
    hideSuccess();
    emailError.classList.add("form-alert--visible");
    emailError.innerHTML(message);
  }
  
  function hideError() {
    emailError.classList.remove("form-alert--visible");
  }
  
  document.getElementById("contactSubmit").addEventListener("click", function (e) {
    const fromEmail = document.getElementById("fromEmail");
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");
  
    if (
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        fromEmail.value
      )
    ) {
      hideError();
  
      try {
        var body = {
          customer: {
            email: fromEmail,
            accepts_marketing: true,
            verified_email: true,
          },
        };
        fetch(siteUrl + "/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then((response) => {
          if (response.status === 200) {
            showSuccess();
          } else {
            showError(
              "Something's not working. If you keep getting this error, try us at <a href='https://twitter.com/start9labs' target='_blank'>Twitter</a> instead."
            );
          }
        });
      } catch (error) {
        showError(
          "Something's not working. If you keep getting this error, try us at <a href='https://twitter.com/start9labs' target='_blank'>Twitter</a> instead."
        );
      }
    } else {
      showError("Sorry, you must use a valid email address.");
    }
  });
  