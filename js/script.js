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
      "parse_mode": "Markdown"
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

  // Tambahkan judul Lamaran Kerja di awal pesan
  let text = '*Lamaran Kerja*\n\n';

  formData.forEach((val, key) => {
    text += `*${key}:* ${val}\n\n`;
  });

  text = text.trim(); // Menghilangkan spasi berlebih di akhir pesan

  sendMessage(text);
}
