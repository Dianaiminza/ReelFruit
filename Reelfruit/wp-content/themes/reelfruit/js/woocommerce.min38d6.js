function initSelect2(){$j(".woocommerce-ordering .orderby, #calc_shipping_country, #dropdown_product_cat").select2({minimumResultsForSearch:-1}),$j(".woocommerce-account .country_select").select2()}function initAddToCartPlusMinus(){$j(document).on("click",".quantity .plus, .quantity .minus",function(){var e=$j(this).closest(".quantity").find(".qty"),t=parseFloat(e.val()),o=parseFloat(e.attr("max")),i=parseFloat(e.attr("min")),a=e.attr("step");t&&""!==t&&"NaN"!==t||(t=0),""!==o&&"NaN"!==o||(o=""),""!==i&&"NaN"!==i||(i=0),"any"!==a&&""!==a&&void 0!==a&&"NaN"!==parseFloat(a)||(a=1),$j(this).is(".plus")?o&&(o==t||t>o)?e.val(o):e.val(t+parseFloat(a)):i&&(i==t||t<i)?e.val(i):t>0&&e.val(t-parseFloat(a)),e.trigger("change")})}function qodeInitSingleProductLightbox(){"use strict";var e=$j(".woocommerce.single-product .product .images .woocommerce-product-gallery__image");e.length&&e.each(function(){$j(this).children("a").attr("data-rel","prettyPhoto[woo_single_pretty_photo]"),$j("a[data-rel]").each(function(){$j(this).attr("rel",$j(this).data("rel"))}),$j("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:"normal",slideshow:!1,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,horizontal_padding:0,default_width:650,default_height:400,counter_separator_label:"/",theme:"pp_default",hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,overlay_gallery:!1,keyboard_shortcuts:!0,deeplinking:!1,social_tools:!1})})}function qodeInitProductListMasonryPinterestShortcode(){var e=$j(".qode_product_list_masonry_holder_inner, .qode_product_list_pinterest_holder_inner");e.length&&e.waitForImages({finished:function(){setTimeout(function(){e.isotope({itemSelector:".qode_product_list_item",resizable:!1,masonry:{columnWidth:".qode_product_list_sizer",gutter:".qode_product_list_gutter"}}),e.css("opacity",1),initParallax()},200)},waitForAll:!0})}function qodeProductPinterestAddedToCartButton(){$j("body").on("added_to_cart",function(e){$j(".qode_product_list_pinterest_holder a.added_to_cart:not(.qbutton)").addClass("qbutton")})}function qodeProductElegantAddedToCartButton(){$j("body").on("added_to_cart",function(e){$j(".qode_product_list_holder .product_button a.added_to_cart:not(.qbutton)").addClass("qbutton")})}function qodeWishlistRefresh(){var e=function(){$j.ajax({url:QodeAdminAjax.ajaxurl,type:"POST",data:{action:"bridge_qode_product_ajax_wishlist"},success:function(e){$j(".qode-wishlist-widget-holder .qode-wishlist-items-number span").html(e.wishlist_count_products)}})};return{init:function(){qode_body.on("added_to_wishlist",function(){e()}),$j("#yith-wcwl-form").on("click",".product-remove a, .product-add-to-cart a",function(){setTimeout(function(){e()},2e3)})}}}function qodeQuickViewGallery(){var e=function(){var e=$j(".qode-quick-view-gallery.qode-owl-slider");e.length&&e.each(function(){var e=$j(this);e.owlCarousel({items:1,loop:!0,autoplay:!1,smartSpeed:600,margin:0,center:!1,autoWidth:!1,animateIn:!1,animateOut:!1,dots:!1,nav:!0,navText:['<span class="qode-prev-icon"><span class="fa fa-angle-left"></span></span>','<span class="qode-next-icon"><span class="fa fa-angle-right"></span></span>'],onInitialize:function(){e.css("visibility","visible")}})})};return{init:function(){$j(document).on("qv_loader_stop",function(){e(),$j(".yith-wcqv-wrapper").css("top",$scroll+20)})}}}function qodeQuickViewSelect2(){$j(document).on("qv_loader_stop",function(){$j("#yith-quick-view-modal select").select2()})}function qodeProductImageSizes(e){var t=e.find(".qode-pl-sizer").width(),o=e.find(".qode-woo-image-normal-width"),i=e.find(".qode-woo-image-large-width"),a=e.find(".qode-woo-image-large-height"),d=e.find(".qode-woo-image-large-width-height");e.find(".qode-landscape-size").length&&(t*=.8),o.css("height",t),$window_width>600?(d.css("height",Math.round(2*t)),a.css("height",Math.round(2*t)),i.css("height",t)):(d.css("height",t),a.css("height",t))}function qodeInitProductListMasonryShortcode(){var e=$j(".qode-pl-holder.qode-masonry-layout .qode-pl-outer");e.length&&e.each(function(){var e=$j(this);qodeProductImageSizes(e),e.waitForImages(function(){e.isotope({itemSelector:".qode-pli",resizable:!1,layoutMode:"packery",masonry:{columnWidth:".qode-pl-sizer",gutter:".qode-pl-gutter"}}),e.isotope("layout"),e.css("opacity",1)})})}function qodeInitProductListFilter(){var e=$j(".qode-pl-holder"),t={},o=function(e){e.find(".qode-pl-categories a, .qode-pl-ordering a").on("click",function(t){t.preventDefault(),t.stopPropagation();var o=$j(this);o.hasClass("active")||n(e,o)})},i=function(e,t,o){e.html(o),t.fadeOut()},a=function(e,t,o){e.find(".qode-pli").remove(),e.append(o).isotope("reloadItems").isotope({sortBy:"original-order"}),qodeProductImageSizes(e),setTimeout(function(){e.isotope("layout"),t.fadeOut()},400)},d=function(e,t){for(var o in t)e[o]=t[o];switch(e.ordering){case"menu_order":e.metaKey="",e.order="asc",e.orderby="menu_order title";break;case"popularity":e.metaKey="total_sales",e.order="desc",e.orderby="meta_value_num";break;case"rating":e.metaKey="_wc_average_rating",e.order="desc",e.orderby="meta_value_num";break;case"newness":e.metaKey="",e.order="desc",e.orderby="date";break;case"price":e.metaKey="_price",e.order="asc",e.orderby="meta_value_num";break;case"price-desc":e.metaKey="_price",e.order="desc",e.orderby="meta_value_num"}return e},n=function(e,o){var n=e.find(".qode-pl-outer"),r=qode.modules.common.getLoadMoreData(e),s=e.find(".qode-prl-loading");d(t,o.data()),r.category=void 0!==t.category?t.category:"",r.metaKey=void 0!==t.metaKey?t.metaKey:"",r.order=void 0!==t.order?t.order:"",r.orderby=void 0!==t.orderby?t.orderby:"",r.minPrice=void 0!==t.minprice?t.minprice:"",r.maxPrice=void 0!==t.maxprice?t.maxprice:"",r.categoryNonce=void 0!==o.parents(".qode-pl-categories-nonce-holder").data("nonce")?o.parents("ul").data("nonce"):"",s.fadeIn();var c=qode.modules.common.setLoadMoreAjaxData(r,"bridge_qode_product_ajax_load_category");$j.ajax({type:"POST",data:c,url:QodeAdminAjax.ajaxurl,success:function(t){var d=$j.parseJSON(t),r=d.html;e.waitForImages(function(){o.parent().siblings().find("a").removeClass("active"),o.addClass("active"),e.hasClass("qode-masonry-layout")?a(n,s,r):i(n,s,r),qodeAddingToCart(),qodeAddingToWishlist()})}})},r=function(e,t){e.on("click",function(){qode.windowWidth<=768&&(e.hasClass("opened")?(e.removeClass("opened"),t.slideUp()):(e.addClass("opened"),t.slideDown()))})};return{init:function(){e.length&&e.each(function(){var e=$j(this);o(e),r(e.find(".qode-pl-ordering-outer h6"),e.find(".qode-pl-ordering")),r(e.find(".qode-pl-categories-label"),e.find(".qode-pl-categories-label").next("ul"))})}}}function qodeAddingToCart(){var e=$j(".qode-pli-add-to-cart .add_to_cart_button");e.length&&e.on("click",function(){$j(this).text(qodeGlobalVars.vars.qodeAddingToCartLabel)})}function qodeAddingToWishlist(){var e=$j(".add_to_wishlist");e.length&&e.on("click",function(){var e,t,o,i,a=$j(this);a.closest(".qode-pli").length?e=a.closest(".qode-pli"):a.closest(".qode-plc-item").length?e=a.closest(".qode-plc-item"):a.closest(".product").length&&(e=a.closest(".product")),t=e.find("img").offset(),o=e.find("img").height()/2,i=e.find("img").width()/2,$j("#yith-wcwl-popup-message").css({top:t.top+o,left:t.left+i}),a.addClass("qode-adding-to-wishlist"),$j(document).on("added_to_wishlist",function(){a.removeClass("qode-adding-to-wishlist"),setTimeout(function(){var e=$j("#yith-wcwl-popup-message");e.stop().addClass("qode-wishlist-vanish-out"),e.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){e.removeClass("qode-wishlist-vanish-out")})},1e3)})})}$j(document).ready(function(){"use strict";$j(".price_slider_wrapper").parents(".widget").addClass("widget_price_filter"),initSelect2(),initAddToCartPlusMinus(),qodeInitProductListMasonryPinterestShortcode(),qodeProductPinterestAddedToCartButton(),qodeProductElegantAddedToCartButton(),qodeInitSingleProductLightbox(),qodeWishlistRefresh().init(),qodeQuickViewGallery().init(),qodeQuickViewSelect2(),qodeInitProductListMasonryShortcode(),qodeInitProductListFilter().init(),qodeAddingToCart(),qodeAddingToWishlist(),$j(document).on("qodeAjaxPageLoad",function(){qodeInitProductListMasonryPinterestShortcode()})});