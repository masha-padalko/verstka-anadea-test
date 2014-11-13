(function paginationProd(){

var pagination = $(".pagination"),
    paginationItem = pagination.find("li"),
    productsWrapper = $(".wrap-products"),
    productItem  = productsWrapper.find(".product-item"),
    visibleProd = 6;

    var page = paginationItem.on("click", function(){
        paginationItem.removeClass("active");
        $(this).addClass("active");
        productItem.hide();
        var countPage = parseInt($(this).data("page"));
        var indexStartShowProd = (countPage-1)*visibleProd;

        for(var j = indexStartShowProd; j < productItem.length; j++){
              var hideProd = productItem[j];
              $(hideProd).show();
        }
    });

})();
