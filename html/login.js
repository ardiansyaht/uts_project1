document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;
    if (isUserValid(enteredEmail, enteredPassword)) {
       
        alert('Login Berhasil');
        window.location = 'index.html';
        
    } else {
       
        alert('Login Gagal. Pastikan email dan password benar.');
    }
  });
  
  function isUserValid(email, password) {
    
    const validUsers = [
        { email: 'admin@gmail.com', password: 'admin' },
        { email: 'user@gmail.com', password: 'user' },
       
    ]; 
    return validUsers.some(user => user.email === email && user.password === password);
  }
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const newEmail = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    
    if (newPassword === confirmPassword) {
       
        alert('Registrasi Berhasil!');
       
        showLogin();
    } else {
       
        alert('Password dan konfirmasi password tidak cocok.');
    }
  });
  function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
  }

  console.log('Script is running');
console.log('Entered Email:', enteredEmail, 'Entered Password:', enteredPassword);
