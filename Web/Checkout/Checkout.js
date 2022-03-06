$(document).ready(function () {
  var formheight = $("#form-wrapper").height();
  var formleftheight = $("#form-left-wrapper").height();
  var currentformpage = "shipping";
  var paymentbody = $("#payment-body");
  var confirmationbody = $("#confirmation-body");
  var shippingbody = $("#shipping-body");
  var currentformpagediv;

  // Variable decleration to check whether information has been submitted on each page. //
  var shippingstatus = false;
  var paymentstatus = false;
  var confirmationstatus = false;

  function shippingPageInit() {
    paymentbody.hide();
    confirmationbody.hide();
    shippingbody.fadeIn(700);
  }
  function paymentPageInit() {
    confirmationbody.hide();
    shippingbody.hide();
    paymentbody.fadeIn(700);
  }
  function confirmationPageInit() {
    shippingbody.hide();
    paymentbody.hide();
    confirmationbody.fadeIn(700);
  }
  // Getting the prices and adding them together to get the total //
  var cartprice = $(".cart-price");
  var cartitemcount = cartprice.length - 1;
  var cartitempricelist = [];
  function getSum(total, num) {
    return total + num;
  }
  cartprice.each(function () {
    cartitempricelist.push($(this).html());
  });
  var converttofloat = cartitempricelist.join(" ").split(" ").map(Number);
  $(".cart-price-total").html(converttofloat.reduce(getSum));
  // Changing form screen when user clicks on the form tabs //
  $(".tab-menu-item").click(function () {
    $("#form-left-wrapper").css({ "min-height": "278px" });
    $(".tab-menu-item").removeClass("current");
    if ($(this).hasClass("current")) {
      return false;
    } else {
      $(this).toggleClass("current");
      var currenttab = $(this).html();
      if (currenttab == "Shipping") {
        currentformpage = "shipping";
        shippingPageInit();
        currentformpagediv = "#" + currentformpage + "-body";
      } else if (currenttab == "Payment") {
        currentformpage = "payment";
        paymentPageInit();
        currentformpagediv = "#" + currentformpage + "-body";
      } else if (currenttab == "Confirmation") {
        currentformpage = "confirmation";
        confirmationPageInit();
        currentformpagediv = "#" + currentformpage + "-body";
      }
    }
  });
  $(".form-input-checkbox, #shipping-checkbox").click(function () {
    var checkbox = document.getElementById("shipping-checkbox");
    if (checkbox.checked == true) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  });
  function nextPageForm() {
    $(".tab-menu-item").removeClass("current");
    if (currentformpage == "shipping") {
      $(".payment-tab").addClass("current");
      $("#shipping-body").hide();
      $("#confirmation-body").hide();
      $("#payment-body").fadeIn(700);
      currentformpage = "payment";
    } else if (currentformpage == "payment") {
      $(".confirmation-tab").addClass("current");
      $("#shipping-body").hide();
      $("#payment-body").hide();
      $("#confirmation-body").fadeIn(700);
      currentformpage = "confirmation";
    } else {
      $(".confirmation-tab").addClass("current");
    }
  }

  function checkValidation(i) {
    nextPageForm();
  }

  $("#form-wrapper").submit(function (event) {
    event.preventDefault();
    checkValidation(currentformpage);
  });
});
