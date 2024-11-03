const token = '7581782942:AAELHabnc3pT5keI_PgKWxiy2vNOb7DEdlY';
const group_id = '-4585291807';

const form = document.getElementById('form-telegram');

const sendMessage = (text) => {

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "chat_id": group_id,
      "text": text,
    })
  }).then(res => {
    if(!res.ok) {
      throw new Error(res.statusText, res.status, res.url);
    }
    return res.json();
  }).then(res => {
    console.log(res);
    alert('Pesan Berhasil Terkirim');
  }).catch(err => {
    console.log(err);
    alert('Error: Gagal Mengirim Pesan');
  });
}

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  let text = '@bold Lamaran Kerja\n\n';

  for(const [key, val] of formData) {
    text += `\n\n${key} :\n${val}`;
  }

  text = text.replace('\n\n', '');

  sendMessage(text);
}
