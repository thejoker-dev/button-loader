// Loading button
(function($) {
$.fn.button = function(action) {
  if (action === 'loading' && this.data('loading-text')) {
  this.data('original-text', this.html()).html(this.data('loading-text')).prop('disabled', true);
  }
  if (action === 'reset' && this.data('original-text')) {
  this.html(this.data('original-text')).prop('disabled', false);
  }
};
}(jQuery));
  
/*
  
#THE BUTTON
<button class="btn btn-primary btn-block button-loader" data-loading-text="<i class='fa fa-spinner fa-spin'></i> My button with loader" type="submit">
    <i class="fal fa-sign-in"></i> 
    My button
</button>
  
#START LOADING WITH CUSTOM MSG
$('.button-loader').button('loading');
  
#START LOADING WITH CUSTOM MSG
$('.button-loader').button('reset');
 
 */
