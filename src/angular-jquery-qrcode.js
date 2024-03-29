
angular.module('aiqrcode', []).
  directive('aiqrcode', [function () {

    var $ = jQuery;

    function generateUUID(){
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
    };

    var updateQrCode = function(element, attrs, aiIDs) {
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

              image: $('#' + aiIDs.image)[0] //require user create another element
          };
      $('#' + aiIDs.qrcode).empty().qrcode(options);
    }

    return {
      restrict: 'E',
      replace: true,
      template: '<div class="aiqrcode"></div>',
      link: function (scope, element, attrs) {

        var aiIDs = {
          image: 'aiqrcode-image-' + generateUUID(),
          qrcode: 'aiqrcode-' + generateUUID()
        };

        var imagehtml = "<img id=\'" + aiIDs.image + "\' src='' ng-hide='true' class='ng-hide' />";
        var qrcodehtml = "<div id=\'"+ aiIDs.qrcode + "\'></div>";

        element.append(imagehtml);
        element.append(qrcodehtml);

        attrs.$observe('render', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('eclevel', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('minversion', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('color', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('background', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('data', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('size', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('radius', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('quiet', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('mode', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('msize', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('mposx', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('mposy', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('label', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('fontname', function(val){
          updateQrCode(element, attrs, aiIDs);
        });
        attrs.$observe('fontcolor', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('isdot', function(val){
          updateQrCode(element, attrs, aiIDs);
        });

        attrs.$observe('image', function(val){
          $('#' + aiIDs.image).attr('src', val);
          setTimeout(function() {
            updateQrCode(element, attrs, aiIDs);
          }, 250);
        });
      }
    }
  }]);
