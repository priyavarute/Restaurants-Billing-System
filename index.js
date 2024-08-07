let subtotal = 0;
      function addProduct() {
        const productName = document.getElementById("Products").value;
        const productPrice = parseFloat(
          document.getElementById("product-price").value
        );
        const productQuantity = parseInt(
          document.getElementById("product-quantity").value
        );

        if (
          isNaN(productPrice) ||
          isNaN(productQuantity) ||
          productPrice <= 0 ||
          productQuantity <= 0
        ) {
          alert("Please enter valid price and quantity");
          return;
        }

        const productTotal = productPrice * productQuantity;
        subtotal += productTotal;

        const tbody = document
          .getElementById("order-table")
          .querySelector("tbody");
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productPrice.toFixed(2)}</td>
        <td>${productQuantity}</td>
        <td>${productTotal.toFixed(2)}</td>
      `;

        updateBill();
      }

      function updateBill() {
        const tax = subtotal * 0.07;
        const serviceCharge = subtotal * 0.05;
        const total = subtotal + tax + serviceCharge;

        document.getElementById("subtotal").innerText = subtotal.toFixed(2);
        document.getElementById("tax").innerText = tax.toFixed(2);
        document.getElementById("service-charge").innerText =
          serviceCharge.toFixed(2);
        document.getElementById("total").innerText = total.toFixed(2);
      }


