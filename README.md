#**BUTTON LOADER***
While converting a Bootstrap 3 template design for use with Bootstrap 4, I noticed they removed stateful buttons (eg: “loading” and “reset” button states) from BS4! Granted it was mentioned in [BS3](https://getbootstrap.com/docs/3.3/javascript/#buttons-stateful), but I never noticed the deprecated warning 🙁

The deprecated code for showing a button’s loading state was $('#selector').button('loading') and to return the button to its original state you would use  $('#selector').button('reset') .

##**THE BUTTON**
```
<button class="btn btn-primary btn-block button-loader" data-loading-text="<i class='fa fa-spinner fa-spin'></i> My button with loader" type="submit">
    <i class="fal fa-sign-in"></i> 
    My button
</button>
```
  
##**START LOADING WITH CUSTOM MSG**
```
$('.button-loader').button('loading');
```
  
##**START LOADING WITH CUSTOM MSG**
```
$('.button-loader').button('reset');
```

##**START LOADING WITH CUSTOM MSG USING AJAX**
```
$.ajax({
  ...
  beforeSend: function() {
    $('.button-loader').button('loading');
  },
  complete: function() {
    $('.button-loader').button('reset');
  },
  ...
});
```

Note: Uses html() instead of text() so you can include things like FontAwesome markup in data-loading-text.

Having not checked the original Bootstrap/jQuery methods where this functionality was originally included, I have no idea if this is being done the same way as before. It was just a no-brainer way of achieving the same functionality.
