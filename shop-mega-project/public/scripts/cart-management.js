const addToCartButtonElement = document.querySelector(
  "$product-details button"
);

async function addToCart() {
  const productId = addToCartButtonElement.dataset.productid;

  let response;
  try {
    response = await fetch("/cart/items", {
      method: "POST",
      body: JSON.stringify({
        productId: productId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert("Something wnet wrong. ");
  }

  if (!response.ok) {
    alert("Something went wrong!");
    return;
  }

  const responseData = await response.json();

  const newTotalQuantity = responseData.newTotalItems;
}

addToCartButtonElement.addEventListener("click", addToCart);
