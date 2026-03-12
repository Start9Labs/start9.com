/********************************************/
/* CONTACT POST                             */
/********************************************/

const emailError = document.getElementById("emailError");
const emailSuccess = document.getElementById("emailSuccess");
const errorMsg =
  "Something's not working. If you keep getting this error, try us on <a href='https://matrix.to/#/#general:start9.me' rel='noopener noreferrer' target='_blank'>Matrix</a> instead.";

function showSuccess(message) {
  hideError();
  emailSuccess.classList.add("form-alert--visible");
  emailSuccess.innerHTML = message;
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

function clear() {
  document.getElementById("subscribeForm").reset();
}

document
  .getElementById("contactSubmit")
  .addEventListener("click", function (e) {
    const fromEmail = document.getElementById("fromEmail");
    e.preventDefault();
    if (
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        fromEmail.value
      )
    ) {
      hideError();

      try {
        const query = `
          mutation customerCreate($input: CustomerInput!) {
            customerCreate(input: $input) {
              customer {
                id
                email
                emailMarketingConsent {
                  marketingState
                  consentUpdatedAt
                  marketingOptInLevel
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `;
        const variables = {
          input: {
            email: fromEmail.value,
            emailMarketingConsent: {
              marketingState: "SUBSCRIBED",
              consentUpdatedAt: new Date().toISOString(),
              marketingOptInLevel: "SINGLE_OPT_IN",
            },
          },
        };
        fetch("https://start9.com/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query, variables }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.data.customerCreate.userErrors.length) {
              console.error(
                "Error creating customer:",
                data.data.customerCreate.userErrors
              );
              if (
                data.data.customerCreate.userErrors[0].message ===
                "Email has already been taken"
              ) {
                showError("Email already subscribed");
              } else {
                showError("Error subscribing. Please contact support.");
              }
            } else {
              showSuccess("Thanks for subscribing!");
            }
          });
      } catch (error) {
        clear();
        console.error(error);
        showError(errMsg);
      }
    } else {
      showError("Sorry, you must use a valid email address.");
    }
  });
