$(document).ready(function() {
  const createProductMenu = function(product) {
    //returns jquery object
    let menuHtml = `
    <article class="p-2">
    <div class="card">
      <img class="card-img-top" src="${product.img}"/>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-8"><h5 class="card-title">${product.name}</h5></div>
          <div class="col-12 col-md-4"><h6 class="product-price">${product.price}</h6></div>
        </div>
        <p class="card-text">${product.description}</p>
        <form class="product-form" method="POST" action="/">
          <div class="decrease quantity-btn" onclick="decreaseValue()" value="Decrease Value">
            <span>-</span>
          </div>
          <input type="number" class="quantity-input" value="0" />
          <div class="increase quantity-btn" onclick="increaseValue()" value="Increase Value">
            <span>+</span>
          </div>
        </br>
      </br>
          <button href="#" class="add-to-cart-btn">Add to Cart</button>
        </form>
      </div>
    </div>
  </article>
  `;
    let $menuHtml = $(menuHtml);
    return $menuHtml;
  };

  $(() => {
    $.ajax({
      method: "GET",
      url: "/api/products"
    }).done(products => {
      for (product of products) {
        createProductMenu(product).appendTo("#product-container");
      }
    });
  });
  //closes JQuery function
});
