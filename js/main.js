// Clone product items
var productItem = $(".wrap-products").find(".product-item");

$.fn.duplicate = function(count, appendTo) {
  for ( var i = 0; i < count; i++ ) {
      $(this).clone().appendTo(appendTo);
  }
};

productItem.duplicate(20, ".wrap-products");
