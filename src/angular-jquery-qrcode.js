
angular.module('aiqrcode', []).
  directive('aiqrcode', [function () {

    var $ = jQuery;


    var updateQrCode = function(element, attrs) {
      var options = {
              render: !attrs.render ? 'canvas' : attrs.render,
              ecLevel: !attrs.eclevel ? 'L' : attrs.eclevel,
              minVersion: parseInt(!attrs.minversion ? 1 : attrs.minversion, 10),

              fill: !attrs.color ? '#000000' : attrs.color,
              background: !attrs.background ? null : attrs.background,
              // fill: $('#img-buffer')[0],

              text: !attrs.data ? 'https://www.aiqrcode.com' : attrs.data,
              size: parseInt(!attrs.size ? '100' : attrs.size, 10),
              radius: parseInt(!attrs.radius ? 0 : attrs.radius, 10) * 0.01,
              quiet: parseInt(!attrs.quiet ? 1 : attrs.quiet, 10),

              // modes: 0: normal, 1: label strip, 2: label box, 3: image strip, 4: image box
              mode: parseInt(!attrs.mode ? 0 : attrs.mode, 10),

              mSize: parseInt(!attrs.msize ? 10 : attrs.msize, 10) * 0.01,
              mPosX: parseInt(!attrs.mposx ? 50 : attrs.mposx, 10) * 0.01,
              mPosY: parseInt(!attrs.mposy ? 50 : attrs.mposy, 10) * 0.01,

              label: !attrs.label ? 'aiQRCode' : attrs.label,
              fontname: !attrs.fontname ? 'sans' : attrs.fontname,
              fontcolor: !attrs.fontcolor ? '#000000' : attrs.fontcolor,

              isdot: attrs.isdot == "true" ? true : false,

              image: $('#ai-image')[0] //require user create another element
          };
      $('#ai-qrcode').empty().qrcode(options);
    }

    return {
      restrict: 'E',
      replace: true,
      template: '<div class="aiqrcode"><img id="ai-image" src="" ng-hide="true"><div id="ai-qrcode""></div></div>',
      link: function (scope, element, attrs) {
        attrs.$observe('render', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('eclevel', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('minversion', function(val){
          updateQrCode(element, attrs);
        });

        attrs.$observe('color', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('background', function(val){
          updateQrCode(element, attrs);
        });

        attrs.$observe('data', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('size', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('radius', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('quiet', function(val){
          updateQrCode(element, attrs);
        });

        attrs.$observe('mode', function(val){
          updateQrCode(element, attrs);
        });

        attrs.$observe('msize', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('mposx', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('mposy', function(val){
          updateQrCode(element, attrs);
        });

        attrs.$observe('label', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('fontname', function(val){
          updateQrCode(element, attrs);
        });
        attrs.$observe('fontcolor', function(val){
          updateQrCode(element, attrs);
        });

        attrs.$observe('image', function(val){
          $('#ai-image').attr('src', val);
          setTimeout(function() {
            updateQrCode(element, attrs);
          }, 250);
        });
      }
    }
  }]);
