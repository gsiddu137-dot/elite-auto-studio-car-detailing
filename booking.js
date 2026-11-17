// Front-end demo only: this form validates input but does not save a real booking.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#booking-form");
  const message = document.querySelector("#booking-message");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const customer = data.get("name");
    message.textContent = `Thank you, ${customer}! Your demo appointment request has been received. No real booking was created.`;
    form.reset();
  });
});
