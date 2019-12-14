(function ($) {
    "use-strict"

    jQuery(document).ready(function () {
        
        //navigation active
        $(document).on('click', '.treeview a', function () {
            $(this).closest('.treeview').toggleClass('active').siblings('.treeview').removeClass('active');
        });


        // //active class
        // var current = location.pathname;

        // if (current) {
        //     current = current.split('/').pop();
        // }

        // $('.navigation ul li a').each(function(){
        //     var $this = $(this);
        //     // if the current path is like this link, make it active
        //     if($this.attr('href').indexOf(current) !== -1){
        //         $this.closest('.has-dropdown').addClass('active');
        //         $this.closest('li').addClass('active');
        //     }
        // })

    });


}(jQuery));