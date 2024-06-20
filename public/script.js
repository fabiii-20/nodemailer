// public/script.js
document.getElementById('emailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;
  
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ to, subject, text })
    });
  
    const result = await response.text();
    document.getElementById('response').innerText = result;
  });
  