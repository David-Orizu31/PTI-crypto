
( function( $ ) {
	const { year, month, day, hour, enable_countdown, year_2, month_2, day_2, hour_2, enable_countdown_2, cd_big_title_2, cd_normal_title_2, cd_cta } = local_vars;

	var currentDate;

	$(document).ready(function() {
		currentDate = new Date();
		if (enable_countdown === '1') {
			if (currentDate > new Date(`${month}/${day}/${year} ${hour}:00:00`)) {
				if (enable_countdown_2 === '1' && currentDate <= new Date(`${month_2}/${day_2}/${year_2} ${hour_2}:00:00`)) {
					initSecondCountDown();
				} else {
					showCTA();
				}
			} else {
				initCountDown();
			}
		}
	});

	function initCountDown() {
		$('.countdown-target').countdown({
			until: new Date(`${month}/${day}/${year} ${hour}:00:00`),
			padZeroes: true,
			onExpiry: updateCountdown
		});

	}

	function updateCountdown() {
		currentDate = new Date();
		if (enable_countdown_2 === '1' && currentDate <= new Date(`${month_2}/${day_2}/${year_2} ${hour_2}:00:00`)) {
			initSecondCountDown();
		} else {
			showCTA();
		}
	}

	function initSecondCountDown(){
		$('.countdown-target').countdown('destroy');
		$('.competition-countdown .big-title').html(cd_big_title_2);
		$('.competition-countdown .normal-title').html(cd_normal_title_2);
		$('.countdown-target').countdown({
			until: new Date(`${month_2}/${day_2}/${year_2} ${hour_2}:00:00`),
			padZeroes: true,
			onExpiry: showCTA
		});
	}

	function showCTA() {
		if (cd_cta != '') {
			$('.competition-countdown').html(cd_cta);
		} else {
			$('.competition-countdown').remove();
		}
	}
} )( jQuery );
