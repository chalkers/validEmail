(function( $ ) {
  $.fn.validEmail = function(options) {
  	options = options || {};
  	var on = options.on;
  	var success = options.success || (function(){});
  	var failure = options.failure || (function(){});
  	var testInitially = options.testInitially || false;

  	var $input = $(this);

  	function check($input) {
  		if($input.is("input,textarea")) {
  			var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  			return emailRegExp.test($input.val());
  		} else {
  			return false;
	  	}

  	}

  	function applyCode($input) {
  		check($input) ? success.call($input.get(0)) : failure.call($input.get(0));
  	}
	
  	if (typeof on === "string")
  		$input.bind(on, function() { applyCode($(this)); });

  	if (testInitially) $input.each(function() { applyCode($(this)); });
  	return check($input);

  };
})( jQuery );