
    document.addEventListener('DOMContentLoaded', function(){

      const cartIcon = document.querySelector('.cart-icon');
      const cartContent = document.querySelector('.cart-content');
      const cartItems = document.querySelector('.cart-items');
      const cartTotal = document.querySelector('.cart-total');
      const addToCartButtons = document.querySelectorAll('.add-to-cart');
      const checkoutButton = document.querySelector('.checkout');
      const products = [];
      // Xử lý sự kiện khi nhấp vào biểu tượng giỏ hàng
      cartIcon.addEventListener('click', function() {
        cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
      });
      // Xử lý sự kiện khi nhấp vào nút "Thêm vào giỏ hàng"
      addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          const name = button.getAttribute('data-name');
          const image = button.getAttribute('data-image');
          const price = parseInt(button.getAttribute('data-price'));

          addToCart(name, image, price);
        });
      });

      // Xử lý hàm thêm sản phẩm vào giỏ hàng
      function addToCart(name, image, price) {
        const existingItem = products.find(item => item.name === name);

        if (existingItem) {
          existingItem.quantity++;
        } else {
          products.push({
            name: name,
            image: image,
            price: price,
            quantity: 1
          });
        }

        displayCart();
      }
      // Xử lý hàm hiển thị giỏ hàng
      function displayCart() {
  cartItems.innerHTML = '';
  let totalPrice = 0;
  let itemCount = 0;

  products.forEach(function(product) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('cart-item');

    const itemImage = document.createElement('img');
    itemImage.src = product.image;
    itemImage.alt = product.name;
    itemImage.classList.add('cart-item-image');
    itemContainer.appendChild(itemImage);

    const itemName = document.createElement('div');
    itemName.textContent = product.name;
    itemName.classList.add('cart-item-name');
    itemContainer.appendChild(itemName);

    const itemPrice = document.createElement('div');
    itemPrice.textContent = formatCurrency(product.price) + ' ₫'; // Thêm giá sau tên sản phẩm
    itemPrice.classList.add('cart-item-price');
    itemContainer.appendChild(itemPrice);

          const quantityContainer = document.createElement('div');
          quantityContainer.classList.add('cart-item-quantity');

          const decreaseButton = document.createElement('button');
          decreaseButton.textContent = '-';
          decreaseButton.addEventListener('click', function() {
            if (product.quantity > 1) {
              product.quantity--;
              displayCart();
            }
          });
          quantityContainer.appendChild(decreaseButton);

          const quantity = document.createElement('span');
          quantity.textContent = product.quantity;
          quantityContainer.appendChild(quantity);

          const increaseButton = document.createElement('button');
          increaseButton.textContent = '+';
          increaseButton.addEventListener('click', function() {
            product.quantity++;
            displayCart();
          });
          quantityContainer.appendChild(increaseButton);

          itemContainer.appendChild(quantityContainer);

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Xóa';
          deleteButton.addEventListener('click', function() {
            const index = products.indexOf(product);
            products.splice(index, 1);
            displayCart();
          });
          itemContainer.appendChild(deleteButton);

          cartItems.appendChild(itemContainer);

          totalPrice += product.price * product.quantity;
          itemCount += product.quantity;
        });

        cartTotal.textContent = 'Tổng tiền: ' + formatCurrency(totalPrice) + ' ₫';
        document.querySelector('.cart-item-count').textContent = itemCount;
      }

      // Xử lý hàm định dạng số thành tiền tệ
      function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN');
      }

      // Xử lý sự kiện khi nhấp vào nút "Thanh toán"
      checkoutButton.addEventListener('click', function() {
        window.location.href = 'thanhtoan.html'
        // Tiến hành xóa giỏ hàng
        products.length = 0;
        displayCart();
      });
      const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
    cartContent.style.display = 'none';
  });
    });

    //Lưu Local Storage
    document.addEventListener('DOMContentLoaded', function(){

      const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
      addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          const name = button.getAttribute('data-name');
          const image = button.getAttribute('data-image');
          const price = parseInt(button.getAttribute('data-price'));
    
          addToCart(name, image, price);
        });
      });
      function addToCart(name, image, price) {
        const product = {
          name: name,
          image: image,
          price: price,
          quantity:1
        };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateTotalPrice();
      }
      function updateTotalPrice() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalPrice = 0;
        cart.forEach(function(product) {
          totalPrice += product.price;
        });
        localStorage.setItem("totalPrice", totalPrice);
      }
      localStorage.removeItem("cart");
    });
      // Xóa thông tin giỏ hàng sau khi đã hiển thị
