'use strict';

/**
 * @ngInject
 */
function OnRun($ionicPlatform, $log, $animate, $window) {
  $log = $log.getInstance('OnRun', true);
  

  $ionicPlatform.ready(function() {
    $animate.enabled(true);
    $log.log('$ionicPlatform:READY');

  
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    (function(d){
      // load the Facebook javascript SDK
      var js,
      id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id))  return;
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/sdk.js";    
      ref.parentNode.insertBefore(js, ref);
    }(document));


  });


  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({

      /*
       The app id of the web app;
       To register a new app visit Facebook App Dashboard
       ( https://developers.facebook.com/apps/ )
      */

      appId: '308838512796444', //Yocal-test
      version:'v2.7',
      /*
       Adding a Channel File improves the performance
       of the javascript SDK, by addressing issues
       with cross-domain communication in certain browsers.
      */

      channelUrl: 'app/channel.html',

      /*
       Set if you want to check the authentication status
       at the start up of the app
      */

      status: true,

      /*
       Enable cookies to allow the server to access
       the session
      */

      cookie: true,

      /* Parse XFBML */

      xfbml: true
    });

  };








}

module.exports = OnRun;