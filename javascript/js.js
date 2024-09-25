const form = document.querySelector('#myForm');

form.addEventListener('submit', formSend);

async function formSend(event) {
 event.preventDefault();

 const value = this.querySelector('#value').value;
 

 const TOKEN = '6694635250:AAFvyXaQK1qLAbyE8ZNUpln3JEocZJGmJQ8';
 const chatID = '1033246135';
 const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

 let msg = `
            Жаңа хат!
            Камила сені жақсы көреді)
            Жауабы: Ия
            Введенное значение: ${value}
        `;
 const response = await fetch(URI_API, {
  method: 'POST',
  headers: {
   'Content-type': 'application/json',
  },
  body: JSON.stringify({
   chat_id: chatID,
   text: msg,
  }),
 });
 const result = await response.json();

 if (result.ok) {
  log('Форма отправлена');
 } else {
  alert('Ошибка');
 }
}

const showMessage = () => {
    document.getElementById("message").innerText = "Я тоже тебя люблю жаным";
}
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
});
const no = () => {
    alert("Жаль(")
}
