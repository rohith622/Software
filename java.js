document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
  
    orderForm.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const product = document.getElementById('product').value.trim();
      const quantity = document.getElementById('quantity').value.trim();
  
      if (product === '' || quantity === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:5000/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ product, quantity })
        });
  
        const data = await response.json();
        if (response.ok) {
          alert(`✅ Order placed successfully!\n📩 SMS confirmation will be sent.`);
          orderForm.reset();
        } else {
          alert(`❌ Error: ${data.error}`);
        }
      } catch (error) {
        alert('❌ Failed to connect to server.');
      }
    });
  });
  

  