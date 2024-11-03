const token = '7581782942:AAELHabnc3pT5keI_PgKWxiy2vNOb7DEdlY';
const group_id = '-4585291807';

const form = document.getElementById('form-telegram');

const sendMessage = (text) => {
  console.log("Mengirim pesan:", text); // Debug untuk memeriksa pesan

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "chat_id": group_id,
      "text": text
    })
  }).then(res => {
    if(!res.ok) {
      throw new Error(res.statusText, res.status, res.url);
    }
    return res.json();
  }).then(res => {
    console.log("Respon Telegram:", res);
    alert('Pesan Berhasil Terkirim');
  }).catch(err => {
    console.log("Error:", err);
    alert('Error: Gagal Mengirim Pesan');
  });
}

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // Tambahkan judul Lamaran Kerja di awal pesan dengan format Markdown
  let text = '*Lamaran Kerja*\n\n';

  for (const [key, val] of formData.entries()) {
    text += `\n\n${key}:\n${val}`;
  }

  text = text.trim(); // Menghilangkan spasi berlebih di akhir pesan

  console.log("Teks yang akan dikirim dengan Markdown:", text); // Debugging untuk melihat pesan
  sendMessage(text);
}
