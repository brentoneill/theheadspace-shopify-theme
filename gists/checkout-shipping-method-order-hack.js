// START
setTimeout(function() {

  const $shippingMethodRadioInputList = document.querySelectorAll('.section--shipping-method fieldset .content-box__row .radio-wrapper');
  const localShippingMethodIdentifier = 'shopify-LOCAL';
  const shippingMethodBoxIdentifier = '.section--shipping-method fieldset.content-box';

  for (var i = 0; i < $shippingMethodRadioInputList.length; i++) {
    if ($shippingMethodRadioInputList[i].dataset.shippingMethod.substring(0, 13) === localShippingMethodIdentifier) {
      // Uncheck the local box and remove content box from the DOM
      $shippingMethodRadioInputList[i].children[0].children[0].checked = false;
      var $contentBoxRowToMove = $shippingMethodRadioInputList[i].parentNode;
      $shippingMethodRadioInputList[i].parentNode.remove();

      // Check the first choice again
      var $firstShippingMethodChoice = document.querySelectorAll('.section--shipping-method fieldset .content-box__row .radio-wrapper')[0];
      $firstShippingMethodChoice.children[0].children[0].setAttribute('checked', '')

      // Add the local box back to the DOM
      document.querySelectorAll(shippingMethodBoxIdentifier)[0].appendChild($contentBoxRowToMove);
    }
  }
}, 250);
// END
