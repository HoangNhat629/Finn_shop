function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  );
}
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "All") {
      // $(".card").show("1000");
      $(function () {
        var numberOfItems = $(".container .card").length;
        var limitPerPage = 8; //How many card items visible per a page
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 7; //How many page elements visible in the pagination
        var currentPage;

        function showPage(whichPage) {
          if (whichPage < 1 || whichPage > totalPages) return false;

          currentPage = whichPage;

          $(".container .card")
            .hide()
            .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
            .show();

          $(".pagination li").slice(1, -1).remove();

          getPageList(totalPages, currentPage, paginationSize).forEach(
            (item) => {
              $("<li>")
                .addClass("page-item")
                .addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage)
                .append(
                  $("<a>")
                    .addClass("page-link")
                    .attr({ href: "javascript:void(0)" })
                    .text(item || "...")
                )
                .insertBefore(".next-page");
            }
          );

          $(".previous-page").toggleClass("disable", currentPage === 1);
          $(".next-page").toggleClass("disable", currentPage === totalPages);
          return true;
        }

        $(".pagination").append(
          $("<li>")
            .addClass("page-item")
            .addClass("previous-page")
            .append(
              $("<a>")
                .addClass("page-link")
                .attr({ href: "javascript:void(0)" })
                .text("Prev")
            ),
          $("<li>")
            .addClass("page-item")
            .addClass("next-page")
            .append(
              $("<a>")
                .addClass("page-link")
                .attr({ href: "javascript:void(0)" })
                .text("Next")
            )
        );

        $(".container").show();
        showPage(1);

        $(document).on(
          "click",
          ".pagination li.current-page:not(.active)",
          function () {
            return showPage(+$(this).text());
          }
        );

        $(".next-page").on("click", function () {
          return showPage(currentPage + 1);
        });

        $(".previous-page").on("click", function () {
          return showPage(currentPage - 1);
        });
      });
    } else {
      $(".card")
        .not("." + value)
        .hide("1000");
      $(".card")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
$(function () {
  var numberOfItems = $(".container .card").length;
  var limitPerPage = 8; //How many card items visible per a page
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  var paginationSize = 7; //How many page elements visible in the pagination
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".container .card")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page-item")
        .addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);
    return true;
  }

  $(".pagination").append(
    $("<li>")
      .addClass("page-item")
      .addClass("previous-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Prev")
      ),
    $("<li>")
      .addClass("page-item")
      .addClass("next-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Next")
      )
  );

  $(".container").show();
  showPage(1);

  $(document).on(
    "click",
    ".pagination li.current-page:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );

  $(".next-page").on("click", function () {
    return showPage(currentPage + 1);
  });

  $(".previous-page").on("click", function () {
    return showPage(currentPage - 1);
  });
});

$(document).ready(function () {
  $(".fa-regular").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "1") {
      window.location.href = "../Detail/Product1/Detail.html";
    } else if (value == "2") {
      window.location.href = "../Detail/Product2/Detail2.html";
    } else if (value == "3") {
      window.location.href = "../Detail/Product3/Detail.html";
    } else if (value == "4") {
      window.location.href = "../Detail/Product4/Detail.html";
    } else if (value == "5") {
      window.location.href = "../Detail/Product5/Detail.html";
    } else if (value == "6") {
      window.location.href = "../Detail/Product6/Detail.html";
    } else if (value == "7") {
      window.location.href = "../Detail/Product7/Detail.html";
    } else if (value == "8") {
      window.location.href = "../Detail/Product8/Detail.html";
    } else if (value == "9") {
      window.location.href = "../Detail/Product9/Detail.html";
    } else if (value == "10") {
      window.location.href = "../Detail/Product10/Detail.html";
    } else if (value == "11") {
      window.location.href = "../Detail/Product11/Detail.html";
    } else if (value == "12") {
      window.location.href = "../Detail/Product12/Detail.html";
    } else if (value == "13") {
      window.location.href = "../Detail/Product13/Detail.html";
    } else if (value == "14") {
      window.location.href = "../Detail/Product14/Detail.html";
    } else if (value == "15") {
      window.location.href = "../Detail/Product15/Detail.html";
    } else if (value == "16") {
      window.location.href = "../Detail/Product16/Detail.html";
    }
  });
});

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
cartIcon.onclick = () => {
  cart.classList.add("active");
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  //buy button work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
//Buy button
function buyButtonClicked() {
  alert("Your Order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  window.location.href = "../Checkout/Checkout.html";
  updatetotal();
}
//remove items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//quantity change
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
//Add to cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  alert("You have already add this item to cart");
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
  // for (var i = 0; i < cartItemNames.length; i++) {
  //   if (cartItemNames[i].innerText == title) {
  //     alert("You have already add this item to cart");
  //     return;
  //   }
  // }

  var cartBoxContent = `<img src="${productImg}" class="cart-img" />
                      <div class="detail-box">
                        <div class="cart-product-title">
                            ${title}
                        </div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity" />
                      </div>
                      <i class="fa-solid fa-trash-can cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}
//update total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  //if price contain some cents value
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
