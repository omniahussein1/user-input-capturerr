const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log("Captured Data:", { name, email });
    alert(`Captured:\nName: ${name}\nEmail: ${email}`);
});