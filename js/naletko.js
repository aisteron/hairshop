 jQuery(document).ready(function($) {
 	$.noConflict();
   $(window).resize(function(){
   	var heightBlock = $('.right-podbor').height();
   	heightBlock = heightBlock + 100;
   	$('.podbor').height(heightBlock);
   	var newheight = $('.col-price .thumbnail').width();
   	$('.col-price .thumbnail').css('min-height', newheight+'px');


   });
   $(window).resize();

   var tHeight = 0;

   $('.col-price .thumbnail').each(function(){
	if (tHeight < $(this).height()) {
		tHeight = $(this).height();
	}
   });
   tHeight = tHeight + 50;
   $('.col-price .thumbnail').height(tHeight);

   $('.fioh h2').each(function(){
		var newText = $(this).text().split(' ').join('</span> <span>');
		newText = '<span>' + newText + '</span>';

		$(this).html(newText);
	});

   $('.articles h4').each(function(){
		var newText = $(this).text().split(' ').join('</span> <span>');
		newText = '<span>' + newText + '</span>';

		$(this).html(newText);
	});

   

   $('tr.component-type-commerce-price-formatted-amount td.component-title').html('Общая сумма');
   $('button#edit-cancel').html('<span class="icon glyphicon glyphicon-remove" aria-hidden="true"></span>Назад');

   $('#hid-catalog').click(function(){
   	$('#body-catalog').toggle(100);
   	return false;
   });
   $('#hid-catalog-2').click(function(){
   	$('#body-catalog').hide(100);
   	return false;
   });
   $('#hide-catalog').click(function(){
      $('#body-cata').toggle(100);
      $('#close-catalog').show(10);
      return false;
   });
   $('#close-catalog').click(function(){
      $('#body-cata').hide(100);
      $(this).hide(10);
      return false;
   });

   
   if ($(window).width() < 768) {

      if ($('div').is('#body-cata')) {
         
         $('#catalog').click(function(){
            $('#body-cata').toggle(100);
            $('#close-catalog').show(10);
            return false;
         });
      }
   }



   $('#obr').click(function(){
   	$('#cb-body').show(100);
   	return false;
   });
   $('#podbor').click(function(){
      $('#cb-body').show(100);
      return false;
   });
   $('#obr-act').click(function(){
      $('#cb-body').show(100);
      return false;
   });
   $('.obr-hair').click(function(){
      $('#cb-body').show(100);
      return false;
   });
   $('#obr-act-2').click(function(){
      $('#cb-body').show(100);
      return false;
   });
   $('#obr-act-3').click(function(){
      $('#cb-body').show(100);
      return false;
   });
   $('#obr-act-4').click(function(){
      $('#cb-body').show(100);
      return false;
   });
   $(document).mouseup(function(e) {
		var container = $('.form-call');
		if (container.has(e.target).length === 0) {
			$('#cb-body').hide(100);
		}
	});

   $('.sale-block').parent().addClass('actually');

   $(".label-tab").each(function(i, o) { $(o).addClass("label" + (i + 1)); });
   //плавный переход
   $("body").on('click', '[href*="#"]', function(e){
     var fixed_offset = 50;
     $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
     e.preventDefault();
   });

   // тело описания в услугах
   tHeight = 0;
   $('.col-saloon .usl-body').each(function(){
      if (tHeight < $(this).height()) {
         tHeight = $(this).height();
      }
   });
   tHeight = tHeight + 20;
   $('.col-saloon .usl-body').css('min-height', tHeight + 'px');

   //заголовки в услугах
   tHeight = 0;
   $('.col-saloon .usl-h').each(function(){
      if (tHeight < $(this).height()) {
         tHeight = $(this).height();
      }
   });
   tHeight = tHeight;
   $('.col-saloon .usl-h').css('min-height', tHeight + 'px');

   // загаловки в анонсах товаров
   tHeight = 0;
   $('.pro-teaser .field-name-title').each(function(){
      if (tHeight < $(this).height()) {
         tHeight = $(this).height();
      }
   });
   tHeight = tHeight + 10;
   $('.pro-teaser .field-name-title').css('min-height', tHeight + 'px');

   // Сделаем fullhd через jQuery
   tHeight = $(window).height();
   $('.fullhd').css('min-height', tHeight + 'px');
   
   // фиксируем меню вверху при прокрутке
   if ($(window).width() < 768) {

      // закрепляем меню      
      var tsHeight = $('.top-shap').height();
      var sTop = 0;
      $(window).scroll(function(){
         sTop = $(this).scrollTop();
         if (sTop <= tsHeight) {
            $('#navbar').removeClass('class-fixed');
            $('#navbar').addClass('class-no-fixed');
            $('.top-shap').css('margin-bottom', '0px');



         }
         else {
            $('#navbar').removeClass('class-no-fixed');
            $('#navbar').addClass('class-fixed');
            $('.top-shap').css('margin-bottom', '50px');

         }
      });
   }
   else {
      $('input#edit-customer-profile-billing-field-phone-und-0-value').mask("+375(99) 999 99 99");   
   }
   
   
   
   // СВАЙПЫ СО СЛАЦДЕРАМИ
   $("#views-bootstrap-carousel-1").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#views-bootstrap-carousel-1").swipeleft(function() {
      $(this).carousel('next');
   });
   $("#views-bootstrap-carousel-2").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#views-bootstrap-carousel-2").swipeleft(function() {
      $(this).carousel('next');
   });
   $("#views-bootstrap-carousel-3").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#views-bootstrap-carousel-3").swipeleft(function() {
      $(this).carousel('next');
   });

   // setInterval (function() {
   //       var cartText = $('.cart-contents').text();
   //       if (cartText != '') {
   //          $('.nav a#cart').html('<div><span>' + cartText + '</span></div>' + 'Корзина');
   //       }
   // }, 3000);
   var cartText;
   resCart =  function() {
      cartText = $('.cart-contents').text();
      if (cartText != '') {
             $('.nav a#cart').html('<div><span>' + cartText + '</span></div>' + 'Корзина');
          }
   }

   resCart();

      // if ($('*').is('label[for="edit-commerce-payment-payment-method-begatewaycommerce-payment-begateway-erip"]')) {
      //    var replaced = $('label[for="edit-commerce-payment-payment-method-begatewaycommerce-payment-begateway-erip"]').html().replace('Оплата картой онлайн или картой Халва', 'Оплата через ЕРИП');
      //    $('label[for="edit-commerce-payment-payment-method-begatewaycommerce-payment-begateway-erip"]').html(replaced);
      // }
      // var currentText = '';
      // var re = '/\-/';
      // $('.breadcrumb a').each(function(){
      //       currentText = $(this).text();
      //       currentText=currentText.replace(/[-_—]+/g, '');
      //       $(this).text(currentText);
      // });
      // $('label[for="edit-commerce-payment-payment-method-begatewaycommerce-payment-begateway-erip"]').click(function(){
      // 	$('div#payment-details').text('Оплатите заказ по номеру через ЕРИП')
      // });
      $('button#edit-checkout').text('Следующий шаг');
      $('button#edit-continue').text('Последний шаг');
      $('#commerce-checkout-form-review button#edit-continue').text('Оформить заказ');
   	
   	

      heightBlock = $('.col-news .thumbnail').width();
      $('.col-news .thumbnail').css('min-height', heightBlock + 'px');

      heightBlock = $('.sl-left').width() / 10 * 15;
      $('.sl-left').css('height', heightBlock + 'px');

   noscrollmap = function() {
    $('.map').click(function(e) {
        $(this).find('iframe').css('pointer-events', 'all');
    }).mouseleave(function(e) {
        $(this).find('iframe').css('pointer-events', 'none');
    });
   }

   noscrollmap();

   var payText = $('p#paym').text();
   if (payText == 'Оплата ЕРИП') {
      $('fieldset#edit-extra-pane-node-437').show()
   }
   else {
      $('fieldset#edit-extra-pane-node-437').hide()
   }

   // убираем - в крошках
   var noSymbal;
   var newval;
   $('.breadcrumb .inline a').each(function(){
      noSymbal = $(this).text().slice(0, 1);
      if (noSymbal = '-') {
         newval = $(this).text().replace('-', '');
         $(this).text( newval );
      }
   });


   // фасовка передвигаем
   // var fasovka = $('.field-name-field-fasovka.field-type-text.field-label-inline');
   // $('.commerce-add-to-cart .form-wrapper.form-group').before(fasovka);

         
});


jQuery(document).ajaxSuccess(function() {
  resCart();
//   eachTerms();
});
