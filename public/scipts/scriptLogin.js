document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          window.location.href = 'registration.html';
          return;
        }
        return response.json().then(data => {
          throw new Error(data.error);
        });
      }
      window.location.href = 'fl.html'; 
    })
    .catch(error => {
      alert(error.message);
    });
  });
