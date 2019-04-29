(function ($) {
    Drupal.behaviors.palitraApril = {
        attach: function (context, settings) {
            // $('.form-item-line-item-fields-field-pal-isk-und.form-type-radio label[for="edit-line-item-fields-field-pal-isk-und-2"]').addClass('b-check');
            $('.form-item-line-item-fields-field-pal-isk-und.form-type-radio label').click(function(){
                $('.b-check').removeClass('b-check');
                $(this).addClass('b-check');
            });
            // $('.form-item-line-item-fields-field-pal-nat-und.form-type-radio label[for="edit-line-item-fields-field-pal-nat-und-4"]').addClass('b-check');
            $('.form-item-line-item-fields-field-pal-nat-und.form-type-radio label').click(function(){
                $('.b-check').removeClass('b-check');
                $(this).addClass('b-check');
            });


            var termPalitraInput = $('div.field-name-field-pal-isk.field-widget-options-buttons .form-radios label input, #edit-field-pal-nat-new-und input');
            var termNaturalInput = $('div.field-name-field-pal-nat.field-widget-options-buttons .form-radios label input, #edit-field-pal-isk-new-und input');
            var textValInput;
            var nowClassLabel;
            var valToStr;
            var nowBcUrl;

            bibyID = function(idterm, myLink) {
                var newLink;
                var urlOfImg;
                var textInt;
                $('.view-pal-id .term_id').each(function(){
                    textInt = parseInt($(this).text());
                    if (textInt == idterm) {
                        newLink = $(this).prev().find('a').attr('href');
                        urlOfImg = 'url("' + newLink + '")';
                        // console.log(urlOfImg);
                        $('.term-field-id-'+idterm).css('background-image', urlOfImg);
                    }
                });
            }
            

            termPalitraInput.each(function(){
                textValInput = $(this).val();
                nowClassLabel = 'term-field-id-' + textValInput;
                $(this).parent().addClass(nowClassLabel);
                valToStr = parseInt(textValInput);
                bibyID(valToStr);
                // $(this).parent().css('background-image', newBcImg);
                // $(this).parent().height(90);

                
            });


            

            termNaturalInput.each(function(){
                textValInput = $(this).val();
                nowClassLabel = 'term-field-id-' + textValInput;
                $(this).parent().addClass(nowClassLabel);
                valToStr = parseInt(textValInput);
                bibyID(valToStr);
            });

            // Бекграунды для палитры волос ИСКУССТВЕННАЯ ПАЛИТРА
            

            // behavior
            $('.enabled-label').each(function(){
                $(this).removeClass('enabled-label');
            });

            

            eachText = function(nowtext) {
                // var termPalitra = $('div#edit-line-item-fields-field-pal-isk-und label');
                var termPalitra = $('.field-name-field-pal-isk.field-widget-options-buttons .form-radios label');
                termPalitra.each(function(){
                    if ( $(this).text() == nowtext ) {
                        $(this).parent().addClass('enabled-label');
                        bibyID(nowtext);
                    } 
                });
                nowtext = '';
            }
            
            
            eachTerms = function(){
                var termName = $('.field-name-field-pal-isk-new .field-item');

                var termText;
                var termActive;
                termName.each(function(){
                    termText = $(this).text();
                    eachText(termText);
                });
            }

            eachTerms(); 

            eachTextNat = function(nowtext) {
                var termPalitra = $('div.field-name-field-pal-nat.field-widget-options-buttons .form-radios label');
                termPalitra.each(function(){
                    if ( $(this).text() == nowtext ) {
                        $(this).parent().addClass('enabled-label');
                        
                    } 
                });
                nowtext = '';
            }

            eachTermsNat = function() {
                var termName = $('.field-name-field-pal-nat-new .field-item');
                var termText;
                
                termName.each(function(){
                    termText = $(this).text();
                    eachTextNat(termText);
                });
            }
                            
                
            eachTermsNat();            

            $('form.commerce-add-to-cart .form-radios .form-item-product-id input').each(function(){
                if ($(this).is(':checked')) {
                    $(this).parent().addClass('active-product');
                }
            });
            
            // $('.enabled-label:first').children().attr('checked', true);
            
            // if ($('.form-item-line-item-fields-field-pal-isk-und.form-type-radio input').is(':checked')) {
            //     $(this).parent().addClass('b-check');
            // }
            // var dcprice = $('.commerce-product-field.commerce-product-field-commerce-price.field-commerce-price').text();
            // $('.form-item.form-item-quantity.form-type-textfield.form-group').prepend(dcprice);

            // убираем блок если нет доступных цветов
            if ($('.field-name-field-pal-isk.field-widget-options-buttons .form-item').hasClass('enabled-label')) {
                $('.field-name-field-pal-isk.field-widget-options-buttons .control-label:first').addClass('first-label');
            } else {
                $('.field-name-field-pal-isk.field-widget-options-buttons .control-label:first').hide();
            }

            if ($('.field-name-field-pal-nat.field-widget-options-buttons .form-item').hasClass('enabled-label')) {
                $('.field-name-field-pal-nat.field-widget-options-buttons .control-label:first').addClass('first-label');
            } else {
                $('.field-name-field-pal-nat.field-widget-options-buttons .control-label:first').hide();
            }


            // темизируем цены
            $('tr.component-type-base-price').next().hide();
            $('tr.component-type-commerce-price-formatted-amount').prev().prev().addClass('old-price old-price-small');

            //  Кнопки для ускорения выделения палитры
            addButtons = function(selector) {
                selector.after('<div class="colors-1 btn arbtn">Цвет 1-6</div><div class="colors-2 btn arbtn">7-12</div><div class="colors-3 btn arbtn">Яркие</div><div class="colors-4 btn arbtn">Омбре</div><div class="colors-5 btn arbtn">Все</div><div class="colors-6 btn arbtn">Сброс</div>');
            }   
            if ($('form').has('#commerce-product-ui-product-form')) {
                addButtons($('label[for="edit-field-pal-isk-new-und"]'));
                addButtons($('label[for="edit-field-pal-nat-new-und"]'));
            }

            var ifisrt = 0;
            nowValue = '';
            buttonValue = '';
            inArray_1 = new Array(50);
            inArray_2 = new Array(50);
            inArray_3 = new Array(50);
            inArray_4 = new Array(50);
            inArray_all = new Array(150);
            inArray_push = new Array(200);

            nnArray_1 = new Array(50);
            nnArray_2 = new Array(50);
            nnArray_3 = new Array(50);
            nnArray_4 = new Array(50);
            nnArray_all = new Array(100);
            nnArray_push = new Array(100);

                $('#edit-field-pal-isk-new-und input').each(function(){
                    inArray_all.push($(this).val());
                    if (ifisrt < 53) {
                        inArray_1.push($(this).val());
                    } else {
                        if (ifisrt <60) {
                            inArray_2.push($(this).val());
                        } else {
                            if (ifisrt < 99) {
                             inArray_3.push($(this).val());
                            }
                            else {
                                inArray_4.push($(this).val());
                            }
                        }
                    }
                    ifisrt++;
                });

                ifisrt = 0;
                $('#edit-field-pal-nat-new-und input').each(function(){
                    nnArray_all.push($(this).val());
                    if (ifisrt < 27) {
                        nnArray_1.push($(this).val());
                    } else {
                        if (ifisrt < 98) {
                            nnArray_2.push($(this).val());
                        } else {
                            if (ifisrt < 123) {
                                nnArray_3.push($(this).val());
                            }
                            else {
                                nnArray_4.push($(this).val());
                            }
                        }
                    }
                    ifisrt++;
                });
            $('.form-item-field-pal-isk-new-und .colors-1').click(function(){
                $.merge(inArray_push, inArray_1);
                $('#edit-field-pal-isk-new-und input').val(inArray_push);   
                $(this).addClass('disabled');                  
            });
            $('.form-item-field-pal-isk-new-und .colors-2').click(function(){
                $.merge(inArray_push, inArray_2);
                $('#edit-field-pal-isk-new-und input').val(inArray_push);
                $(this).addClass('disabled');                      
            });
            $('.form-item-field-pal-isk-new-und .colors-3').click(function(){
                $.merge(inArray_push, inArray_3);
                $('#edit-field-pal-isk-new-und input').val(inArray_push);  
                $(this).addClass('disabled');                      
            });
            $('.form-item-field-pal-isk-new-und .colors-4').click(function(){
                $.merge(inArray_push, inArray_4);
                $('#edit-field-pal-isk-new-und input').val(inArray_push);  
                $(this).addClass('disabled');                      
            });
            $('.form-item-field-pal-isk-new-und .colors-5').click(function(){
                $('#edit-field-pal-isk-new-und input').val(inArray_all);  
                $(this).addClass('disabled');                   
            });
            $('.colors-6').click(function(){
                while(inArray_push.length > 0) {
                    inArray_push.pop();
                }
                while(nnArray_push.length > 0) {
                    nnArray_push.pop();
                }
                $('.arbtn').each(function(){
                    $(this).removeClass('disabled');
                });
            });
            



            $('.form-item-field-pal-nat-new-und .colors-1').click(function(){
                $.merge(nnArray_push, nnArray_1);
                $('#edit-field-pal-nat-new-und input').val(nnArray_push);  
                $(this).addClass('disabled');                   
            });
            $('.form-item-field-pal-nat-new-und .colors-2').click(function(){
                $.merge(nnArray_push, nnArray_2);
                $('#edit-field-pal-nat-new-und input').val(nnArray_push); 
                $(this).addClass('disabled');                    
            });
            $('.form-item-field-pal-nat-new-und .colors-3').click(function(){
                $.merge(nnArray_push, nnArray_3);
                $('#edit-field-pal-nat-new-und input').val(nnArray_push);   
                $(this).addClass('disabled');                    
            });
            $('.form-item-field-pal-nat-new-und .colors-4').click(function(){
                $.merge(nnArray_push, nnArray_4);
                $('#edit-field-pal-nat-new-und input').val(nnArray_push);  
                $(this).addClass('disabled');                      
            });
            $('.form-item-field-pal-nat-new-und .colors-5').click(function(){
                $('#edit-field-pal-nat-new-und input').val(nnArray_all);    
                $(this).addClass('disabled');                 
            });
        }
    } 

})(jQuery);