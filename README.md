# validEmail

`validEmail` is a simple jQuery email validator.

## Usage

`$("input#email").validEmail()` returns `true` if valid, `false` if invalid.

You can also validate on any jQuery text input event.

	$("input.email").validEmail({on:_event_, success:_success_handler_, failure: _failure_handler_});

### Examples

This will bind the email validation check on the `blur` event. If it validates it will run the success handler. When it fails it will run the failure hanlder.

	$("input.email").validEmail({on:"blur", success:function(){
		$(this).removeClass("error").addClass("valid");
	}, failure:function(){
		$(this).removeClass("valid").addClass("error");
	}});

You can also pass in a `true` value to `testInitially` to test as the code gets executed aswell as when the event is triggered.

	$("textarea.email").validEmail({on:"keyup", success:function(){
			$(this).removeClass("error").addClass("valid");
		}, failure:function(){
			$(this).removeClass("valid").addClass("error");
		}, 
		testInitially: true
	});

## Licence

Copyright (c) 2012 Andrew Chalkley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.