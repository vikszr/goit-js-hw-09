const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedFeedbackForm = localStorage.getItem('feedback-form-state');
if (savedFeedbackForm) {
  const parsedFeedbackForm = JSON.parse(savedFeedbackForm);

  formData.email = parsedFeedbackForm.email || '';
  formData.message = parsedFeedbackForm.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', event => {
  event.preventDefault();
  formData.email = event.currentTarget.email.value;
  formData.message = event.currentTarget.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
