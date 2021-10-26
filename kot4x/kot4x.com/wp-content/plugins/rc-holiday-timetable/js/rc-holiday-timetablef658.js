(function ($) {

	$(window).load(function() {
        let date_filter = 'select.rc-holiday-timetable-date-filter';
        let date = $(date_filter).val();       
      
        $('.rc-holiday-timetable-card-table tbody tr[data-day!="' + date + '"]').hide();

        $('.rc-holiday-timetable-card').each(function() {
            if ($(this).find('.rc-holiday-timetable-card-table tbody tr[data-day="' + date + '"]').length == 0) {
                $(this).find('.rc-holiday-timetable-card-table tbody tr[data-day="normalhours"]').show();
            }
        });        

        let timezone_filter = 'select.rc-holiday-timetable-timezone-filter';
        let timezone = $(timezone_filter).val();  
        $('.rc-holiday-timetable-card-table tbody tr td span').hide();
        $('.rc-holiday-timetable-card-table tbody tr td span.' + timezone).show();      

        $(date_filter).on('change', function() {
            date = this.value;
            $('.rc-holiday-timetable-card-date').text(date);
            $('.rc-holiday-timetable-card-table tbody tr[data-day="' + date + '"]').show();
            $('.rc-holiday-timetable-card-table tbody tr[data-day!="' + date + '"]').hide();
            $('.rc-holiday-timetable-card').each(function() {
                if ($(this).find('.rc-holiday-timetable-card-table tbody tr[data-day="' + date + '"]').length == 0) {
                    $(this).find('.rc-holiday-timetable-card-table tbody tr[data-day="normalhours"]').show();
                }
            });    
        });

        $(timezone_filter).on('change', function() {
            timezone = this.value;
            $('.rc-holiday-timetable-card-table tbody tr td span').hide();
            $('.rc-holiday-timetable-card-table tbody tr td span.' + timezone).show();     
        });
    });

})(jQuery);