function addToCart(item) {
    alert(item + " added to cart!");
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  