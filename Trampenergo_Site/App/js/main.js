
$(document).ready(function() {

//  Set caption from card text
    $('.card-deck a').fancybox({
        caption : function( instance, item ) {
            return $(this).parent().find('.card-text').html();
        }
    });

var owl = $('.owl-carousel');

owl.owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        nav:false, //Отключение навигации
        dots:false,
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

owl.owlCarousel();
    // Переключаем слайд вперед
    $('.left-arr').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    // Переключаем слайд вперед
    $('.right-arr').click(function() {
        owl.trigger('next.owl.carousel');
    })

});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.919982, 37.751188],
            zoom: 19,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.919982, 37.751188], {
        }, {
            // Опции.
            
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../images/map-point.svg',
            // Размеры метки.
            iconImageSize: [283, 84],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-283, -84],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);

    myMap.behaviors
    // Отключаем часть включенных по умолчанию поведений:
    //  - drag - перемещение карты при нажатой левой кнопки мыши;
    //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable('scrollZoom')
    // Включаем линейку.
        .enable('ruler');
});