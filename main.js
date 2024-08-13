document.getElementById('coffeeOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const coffeeType = document.getElementById('coffeeType').value;

    
    const message = `New Coffee Order:\n\nName: ${firstName} ${lastName}\nPhone: ${phoneNumber}\nEmail: ${email}\nPreferred Coffee: ${coffeeType}`;

    
    const token = '7211034304:AAGsBbkivdWmaY2HRlriBfAOj-iGIGV-pJk';
    const chat_id = '980836947';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

   
    fetch(url)
        .then(response => {
            if (response.ok) {
            
                document.getElementById('coffeeOrderForm').reset();

                const thankYouMessage = document.getElementById('thankYouMessage');
                thankYouMessage.classList.remove('hidden');

                
                setTimeout(function() {
                    thankYouMessage.classList.add('hidden');
                }, 5000);
            } else {
                alert('There was an error sending your order. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your order. Please try again.');
        });
});
