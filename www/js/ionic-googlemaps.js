(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/ionic-googlemaps/bower_components/ng-knob/dist/ng-knob.min.js":[function(require,module,exports){
/*******************************************************
 * Name:          ng-knob
 * Description:   Angular.js Knob directive
 * Version:       0.1.3
 * Homepage:      https://radmie.github.io/ng-knob
 * Licence:       MIT
 *******************************************************/
"use strict";!function(){var ui={},Knob=function(element,value,options){this.element=element,this.value=value,this.options=options,this.inDrag=!1};Knob.prototype.valueToRadians=function(value,valueEnd,angleEnd,angleStart,valueStart){return valueEnd=valueEnd||100,valueStart=valueStart||0,angleEnd=angleEnd||360,angleStart=angleStart||0,Math.PI/180*((value-valueStart)*(angleEnd-angleStart)/(valueEnd-valueStart)+angleStart)},Knob.prototype.radiansToValue=function(radians,valueEnd,valueStart,angleEnd,angleStart){return valueEnd=valueEnd||100,valueStart=valueStart||0,angleEnd=angleEnd||360,angleStart=angleStart||0,(180/Math.PI*radians-angleStart)*(valueEnd-valueStart)/(angleEnd-angleStart)+valueStart},Knob.prototype.createArc=function(innerRadius,outerRadius,startAngle,endAngle,cornerRadius){var arc=d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(endAngle).cornerRadius(cornerRadius);return arc},Knob.prototype.drawArc=function(svg,arc,label,style,click,drag){var elem=svg.append("path").attr("id",label).attr("d",arc).style(style).attr("transform","translate("+this.options.size/2+", "+this.options.size/2+")");return this.options.readOnly===!1&&(click&&elem.on("click",click),drag&&elem.call(drag)),elem},Knob.prototype.createArcs=function(){var outerRadius=parseInt(this.options.size/2,10),startAngle=this.valueToRadians(this.options.startAngle,360),endAngle=this.valueToRadians(this.options.endAngle,360);this.options.scale.enabled&&(outerRadius-=this.options.scale.width+this.options.scale.spaceWidth);var diff,trackInnerRadius=outerRadius-this.options.trackWidth,changeInnerRadius=outerRadius-this.options.barWidth,valueInnerRadius=outerRadius-this.options.barWidth,interactInnerRadius=1,trackOuterRadius=outerRadius,changeOuterRadius=outerRadius,valueOuterRadius=outerRadius,interactOuterRadius=outerRadius;this.options.barWidth>this.options.trackWidth?(diff=(this.options.barWidth-this.options.trackWidth)/2,trackInnerRadius-=diff,trackOuterRadius-=diff):this.options.barWidth<this.options.trackWidth&&(diff=(this.options.trackWidth-this.options.barWidth)/2,changeOuterRadius-=diff,valueOuterRadius-=diff,changeInnerRadius-=diff,valueInnerRadius-=diff),this.options.bgColor&&(this.bgArc=this.createArc(0,outerRadius,startAngle,endAngle)),"tron"===this.options.skin.type&&(trackOuterRadius=trackOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,changeOuterRadius=changeOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,valueOuterRadius=valueOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,interactOuterRadius=interactOuterRadius-this.options.skin.width-this.options.skin.spaceWidth,this.hoopArc=this.createArc(outerRadius-this.options.skin.width,outerRadius,startAngle,endAngle)),this.trackArc=this.createArc(trackInnerRadius,trackOuterRadius,startAngle,endAngle),this.changeArc=this.createArc(changeInnerRadius,changeOuterRadius,startAngle,startAngle,this.options.barCap),this.valueArc=this.createArc(valueInnerRadius,valueOuterRadius,startAngle,startAngle,this.options.barCap),this.interactArc=this.createArc(interactInnerRadius,interactOuterRadius,startAngle,endAngle)},Knob.prototype.drawArcs=function(clickInteraction,dragBehavior){var svg=d3.select(this.element).append("svg").attr("width",this.options.size).attr("height",this.options.size);if(this.options.bgColor&&this.drawArc(svg,this.bgArc,"bgArc",{fill:this.options.bgColor}),this.options.displayInput){var fontSize=.2*this.options.size+"px";"auto"!==this.options.fontSize&&(fontSize=this.options.fontSize+"px"),this.options.step<1&&(this.value=this.value.toFixed(1));var v=this.value;"function"==typeof this.options.inputFormatter&&(v=this.options.inputFormatter(v)),svg.append("text").attr("id","text").attr("text-anchor","middle").attr("font-size",fontSize).style("fill",this.options.textColor).text(v+this.options.unit||"").attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.06*this.options.size)+")"),this.options.subText.enabled&&(fontSize=.07*this.options.size+"px","auto"!==this.options.subText.font&&(fontSize=this.options.subText.font+"px"),svg.append("text").attr("class","sub-text").attr("text-anchor","middle").attr("font-size",fontSize).style("fill",this.options.subText.color).text(this.options.subText.text).attr("transform","translate("+this.options.size/2+", "+(this.options.size/2+.15*this.options.size)+")"))}if(this.options.scale.enabled){var radius,quantity,data,count=0,angle=0,startRadians=this.valueToRadians(this.options.min,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),endRadians=this.valueToRadians(this.options.max,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min),diff=0;if(0===this.options.startAngle&&360===this.options.endAngle||(diff=1),"dots"===this.options.scale.type){var width=this.options.scale.width;radius=this.options.size/2-width,quantity=this.options.scale.quantity;var offset=radius+this.options.scale.width;data=d3.range(quantity).map(function(){return angle=count*(endRadians-startRadians)-Math.PI/2+startRadians,count+=1/(quantity-diff),{cx:offset+Math.cos(angle)*radius,cy:offset+Math.sin(angle)*radius,r:width}}),svg.selectAll("circle").data(data).enter().append("circle").attr({r:function(d){return d.r},cx:function(d){return d.cx},cy:function(d){return d.cy},fill:this.options.scale.color})}else if("lines"===this.options.scale.type){var height=this.options.scale.height;radius=this.options.size/2,quantity=this.options.scale.quantity,data=d3.range(quantity).map(function(){return angle=count*(endRadians-startRadians)-Math.PI/2+startRadians,count+=1/(quantity-diff),{x1:radius+Math.cos(angle)*radius,y1:radius+Math.sin(angle)*radius,x2:radius+Math.cos(angle)*(radius-height),y2:radius+Math.sin(angle)*(radius-height)}}),svg.selectAll("line").data(data).enter().append("line").attr({x1:function(d){return d.x1},y1:function(d){return d.y1},x2:function(d){return d.x2},y2:function(d){return d.y2},"stroke-width":this.options.scale.width,stroke:this.options.scale.color})}}"tron"===this.options.skin.type&&this.drawArc(svg,this.hoopArc,"hoopArc",{fill:this.options.skin.color}),this.drawArc(svg,this.trackArc,"trackArc",{fill:this.options.trackColor}),this.options.displayPrevious?this.changeElem=this.drawArc(svg,this.changeArc,"changeArc",{fill:this.options.prevBarColor}):this.changeElem=this.drawArc(svg,this.changeArc,"changeArc",{"fill-opacity":0}),this.valueElem=this.drawArc(svg,this.valueArc,"valueArc",{fill:this.options.barColor});var cursor="pointer";this.options.readOnly&&(cursor="default"),this.drawArc(svg,this.interactArc,"interactArc",{"fill-opacity":0,cursor:cursor},clickInteraction,dragBehavior)},Knob.prototype.draw=function(update){function dragInteraction(){that.inDrag=!0;var x=d3.event.x-that.options.size/2,y=d3.event.y-that.options.size/2;interaction(x,y,!1)}function clickInteraction(){that.inDrag=!1;var coords=d3.mouse(this.parentNode),x=coords[0]-that.options.size/2,y=coords[1]-that.options.size/2;interaction(x,y,!0)}function interaction(x,y,isFinal){var radians,delta,arc=Math.atan(y/x)/(Math.PI/180);if(x>=0&&0>=y||x>=0&&y>=0?delta=90:(delta=270,that.options.startAngle<0&&(delta=-90)),radians=(delta+arc)*(Math.PI/180),that.value=that.radiansToValue(radians,that.options.max,that.options.min,that.options.endAngle,that.options.startAngle),that.value>=that.options.min&&that.value<=that.options.max&&(that.value=Math.round(~~((that.value<0?-.5:.5)+that.value/that.options.step)*that.options.step*100)/100,that.options.step<1&&(that.value=that.value.toFixed(1)),update(that.value),that.valueArc.endAngle(that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min)),that.valueElem.attr("d",that.valueArc),isFinal&&(that.changeArc.endAngle(that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min)),that.changeElem.attr("d",that.changeArc)),that.options.displayInput)){var v=that.value;"function"==typeof that.options.inputFormatter&&(v=that.options.inputFormatter(v)),d3.select(that.element).select("#text").text(v+that.options.unit||"")}}d3.select(this.element).select("svg").remove();var that=this;that.createArcs();var dragBehavior=d3.behavior.drag().on("drag",dragInteraction).on("dragend",clickInteraction);that.drawArcs(clickInteraction,dragBehavior),that.options.animate.enabled?that.valueElem.transition().ease(that.options.animate.ease).duration(that.options.animate.duration).tween("",function(){var i=d3.interpolate(that.valueToRadians(that.options.startAngle,360),that.valueToRadians(that.value,that.options.max,that.options.endAngle,that.options.startAngle,that.options.min));return function(t){var val=i(t);that.valueElem.attr("d",that.valueArc.endAngle(val)),that.changeElem.attr("d",that.changeArc.endAngle(val))}}):(that.changeArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),that.changeElem.attr("d",that.changeArc),that.valueArc.endAngle(this.valueToRadians(this.value,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min)),that.valueElem.attr("d",that.valueArc))},Knob.prototype.setValue=function(newValue){if(!this.inDrag&&this.value>=this.options.min&&this.value<=this.options.max){var radians=this.valueToRadians(newValue,this.options.max,this.options.endAngle,this.options.startAngle,this.options.min);if(this.value=Math.round(~~((0>newValue?-.5:.5)+newValue/this.options.step)*this.options.step*100)/100,this.options.step<1&&(this.value=this.value.toFixed(1)),this.changeArc.endAngle(radians),d3.select(this.element).select("#changeArc").attr("d",this.changeArc),this.valueArc.endAngle(radians),d3.select(this.element).select("#valueArc").attr("d",this.valueArc),this.options.displayInput){var v=this.value;"function"==typeof this.options.inputFormatter&&(v=this.options.inputFormatter(v)),d3.select(this.element).select("#text").text(v+this.options.unit||"")}}},ui.Knob=Knob,ui.knobDirective=function(){return{restrict:"E",scope:{value:"=",options:"="},link:function(scope,element){scope.value=scope.value||0;var defaultOptions={skin:{type:"simple",width:10,color:"rgba(255,0,0,.5)",spaceWidth:5},animate:{enabled:!0,duration:1e3,ease:"bounce"},size:200,startAngle:0,endAngle:360,unit:"",displayInput:!0,inputFormatter:function(v){return v},readOnly:!1,trackWidth:50,barWidth:50,trackColor:"rgba(0,0,0,0)",barColor:"rgba(255,0,0,.5)",prevBarColor:"rgba(0,0,0,0)",textColor:"#222",barCap:0,fontSize:"auto",subText:{enabled:!1,text:"",color:"gray",font:"auto"},bgColor:"",scale:{enabled:!1,type:"lines",color:"gray",width:4,quantity:20,height:10,spaceWidth:15},step:1,displayPrevious:!1,min:0,max:100,dynamicOptions:!1};scope.options=angular.merge(defaultOptions,scope.options);var knob=new ui.Knob(element[0],scope.value,scope.options);if(scope.$watch("value",function(newValue,oldValue){null===newValue&&"undefined"==typeof newValue||"undefined"==typeof oldValue||newValue===oldValue||knob.setValue(newValue)}),scope.options.dynamicOptions){var isFirstWatchOnOptions=!0;scope.$watch("options",function(){if(isFirstWatchOnOptions)isFirstWatchOnOptions=!1;else{var newOptions=angular.merge(defaultOptions,scope.options);knob=new ui.Knob(element[0],scope.value,newOptions),drawKnob()}},!0)}var drawKnob=function(){knob.draw(function(value){scope.$apply(function(){scope.value=value})})};drawKnob()}}},angular.module("ui.knob",[]).directive("uiKnob",ui.knobDirective)}();

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
'use strict';

// angular modules
// require('angular-module-sanitize');
// require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./models/_index');
require('../../bower_components/ng-knob/dist/ng-knob.min');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    'app.controllers',
    'app.services',
    'app.models',
    'ui.router',
    'ui.knob'
    // 'templates',
    // 'ngSanitize',
    // 'app.services',
    // 'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants.development'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});

},{"../../bower_components/ng-knob/dist/ng-knob.min":"/Library/WebServer/Documents/ionic-googlemaps/bower_components/ng-knob/dist/ng-knob.min.js","./constants.development":"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js","./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./models/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js","./on_config":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js","./services/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/constants.development.js":[function(require,module,exports){
'use strict';

var AppSettings = {
  yocalAPI:{
    // base: 'http://yoendpoint4-wbbs.rhcloud.com/api/v1/yokal/data/'
    base: 'http://localhost:8100/api/v1/yokal/data/'
  },

  GMAP_DEFAULT:{
  	RADIUS: 800,
  	ZOOM:   14
  }
};

module.exports = AppSettings;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js":[function(require,module,exports){
'use strict';

AppCtrl.$inject = ["$log", "$rootScope", "$scope", "$ionicModal", "$timeout", "coordinates", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AppCtrl($log, $rootScope, $scope, $ionicModal, $timeout, coordinates, AppSettings) {

  $log = $log.getInstance('AppCtrl');

  var vm = this;
  // set curent position to rootScope to make globally available 
  $rootScope.currentPosition = coordinates;
  

  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };

  

};

controllersModule.controller('AppCtrl', AppCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js":[function(require,module,exports){
'use strict';

BrowseCtrl.$inject = ["$scope", "Yocal"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function BrowseCtrl($scope, Yocal) {
  
  $scope.rando = Math.random();
  $scope.getType = function(x){
    return typeof x;
  }
  $scope.locations =[];
  Yocal.get().then(function(data){
    console.log(data);
    $scope.locations = data;
  });
  var _locations = [
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e6e",
          "name": "Los Gallos",
          "adress": "951 Wolf St Philadelphia PA 19148 United States",
          "lat": "39.921178",
          "long": "-75.1632599"
        },
        "distancefromlocation:1918"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e6f",
          "name": "Hardena",
          "adress": "754 S Hicks St, Philadelphia, PA 19145",
          "lat": "39.941686",
          "long": "-75.1684184"
        },
        "distancefromlocation:423"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e71",
          "name": "Nam Son Bakery",
          "adress": "1601 Washington Ave Philadelphia PA 19146 United States",
          "lat": "39.9392094",
          "long": "-75.170264"
        },
        "distancefromlocation:185"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e72",
          "name": "Breezy's Cafe",
          "adress": "1200 Point Breeze Ave Philadelphia PA 19146 United States",
          "lat": "39.9372372",
          "long": "-75.1771073"
        },
        "distancefromlocation:702"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e73",
          "name": "Pizza Brain/Little Baby's",
          "adress": "2313 Frankford Ave Philadelphia PA 19125 United States",
          "lat": "39.9806746",
          "long": "-75.1280968"
        },
        "distancefromlocation:5894"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e74",
          "name": "Sketch Burger",
          "adress": "413 E Girard Ave Philadelphia PA 19125 United States",
          "lat": "39.9705792",
          "long": "-75.1301184"
        },
        "distancefromlocation:4917"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e76",
          "name": "Tortilleria San Roman",
          "adress": "951 S 9th St Philadelphia PA 19147 United States",
          "lat": "39.9376396",
          "long": "-75.157989"
        },
        "distancefromlocation:936"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e78",
          "name": "Hai Street Kitchen & Co.",
          "adress": "32 S 18th St Philadelphia PA 19103 United States",
          "lat": "39.9521638",
          "long": "-75.1704619"
        },
        "distancefromlocation:1590"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e80",
          "name": "Federal Donuts",
          "adress": "1219 S 2nd St Philadelphia PA 19147 United States",
          "lat": "39.9322098",
          "long": "-75.1474603"
        },
        "distancefromlocation:1941"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e81",
          "name": "Bing Bing Dim Sum",
          "adress": "1648 E Passyunk Ave Philadelphia PA 19148 United States",
          "lat": "39.928959",
          "long": "-75.1647092"
        },
        "distancefromlocation:1056"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e88",
          "name": "Black N Brew",
          "adress": "523 E Passyunk Ave, Philadelphia, PA 19147",
          "lat": "39.941761",
          "long": "-75.1503928"
        },
        "distancefromlocation:1642"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e8e",
          "name": "Philly Flavors",
          "adress": "2004 Fairmount Ave, Philadelphia, PA 19130",
          "lat": "39.967087",
          "long": "-75.1705126"
        },
        "distancefromlocation:3244"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e8f",
          "name": "Capogiro Gelato",
          "adress": "233 Chestnut Street, Philadelphia, PA",
          "lat": "39.948822",
          "long": "-75.145358"
        },
        "distancefromlocation:2352"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9e93",
          "name": "1st Oriental Supermarket",
          "adress": "1111 S 6th St Philadelphia, PA 19147",
          "lat": "39.9340158",
          "long": "-75.1536851"
        },
        "distancefromlocation:1373"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea0",
          "name": "K & A Sandwiches & Grocery",
          "adress": "1439 S 20th St, Philadelphia, PA 19146",
          "lat": "39.9330012",
          "long": "-75.1774748"
        },
        "distancefromlocation:910"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea1",
          "name": "South House",
          "adress": "2535 S 13th St, Philadelphia, PA 19148",
          "lat": "39.9180374",
          "long": "-75.1687131"
        },
        "distancefromlocation:2205"
      ]
    },
    {
      "location": [
        {
          "_id": "5709d94d85db6f029bff9ea7",
          "name": "Cinemug",
          "adress": "s 19148, 1607 S Broad St, Philadelphia, PA 19148",
          "lat": "39.9301839",
          "long": "-75.168006"
        },
        "distancefromlocation:860"
      ]
    }
  ];


};

controllersModule.controller('BrowseCtrl', BrowseCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js":[function(require,module,exports){
'use strict';

MapCtrl.$inject = ["$rootScope", "$scope", "$log", "$timeout", "$ionicLoading", "AppSettings", "GMap"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MapCtrl($rootScope, $scope, $log, $timeout, $ionicLoading, AppSettings, GMap ) {

    $log = $log.getInstance("MapCtrl");

 	  // ViewModel
  	var vm = this;
    vm.gmap = new GMap({zoom:13});    
    vm.gmap.height = 625/2;
    var locationsRadius = vm.gmap.setRadiusCircle();
    vm.gmap.plotLocations();

    


    vm.knob ={
      value: vm.gmap.mapOptions.zoom,
      options:{
        size: 200,
        min:  1,
        max:  40,
        step: 1,
        
        barColor: '#5BC01E',
        trackColor: '#212121',
        trackWidth: 15,
        barWidth: 30,
        subText: {
          enabled: true,
          text: 'meter radius'
        },
      }
    };


  $scope.$watch("Map.knob.value", function(oldValue, newValue) {
      vm.gmap.map.panTo({lat:$rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude});
      locationsRadius.setRadius((newValue/2)*100);
      var hasBing = locationsRadius.containsLocation({lat:9.928959, lng:-75.1647092}, locationsRadius);
      console.log(hasBing);
      
      // vm.gmap.map.setZoom(newValue);
  
  });
    


  $rootScope.$on('marker:clicked', function(e, locale) {
    $scope.$apply(function() {
      
      vm.gmap.height = vm.gmap.height/2;
      vm.gmap.map.panTo({lat:parseFloat(locale.lat), 
                         lng:parseFloat(locale.long)});
    });
    
  });
};//// MapCtrl



controllersModule.controller('MapCtrl', MapCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js":[function(require,module,exports){
'use strict';

PlaylistCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistCtrl($scope) {
  


};

controllersModule.controller('PlaylistCtrl', PlaylistCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js":[function(require,module,exports){
'use strict';

PlaylistsCtrl.$inject = ["$scope"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PlaylistsCtrl($scope) {
  
 $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

};

controllersModule.controller('PlaylistsCtrl', PlaylistsCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js":[function(require,module,exports){
'use strict';

SearchCtrl.$inject = ["$scope", "$rootScope", "$q", "$log", "LocationsService", "$ionicLoading", "$ionicSlideBoxDelegate", "AppSettings"];
var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($scope, $rootScope, $q,  $log,  LocationsService,  $ionicLoading,  $ionicSlideBoxDelegate, AppSettings) {
    $log = $log.getInstance('SearchCtrl');

 	// ViewModel
  	var vm = this;
    vm.radius = AppSettings.GMAP_RADIUS;
    $scope.radius = AppSettings.GMAP_RADIUS;

    $scope.locations =[];
    $scope.CurrentCoords =  $rootScope.currentPosition;

    $ionicLoading.show({
    	template: "Finding Rad Spots ...",
    	backdrop: true
    });


    LocationsService.get({radius: vm.radius,  
                          lat:    $scope.CurrentCoords.latitude,  
                          lng:    $scope.CurrentCoords.longitude })

                    .then(function(data){
                        data[0].setTravelTime().then(function(locale) {
                            data[0] =locale;
                            $scope.locations = data;   
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();    
                        });
   	                });


    $scope.slideHasChanged = function(idx) {
        var currentSlide = $scope.locations[idx];
        $log.debug('slideHasChanged {name}', currentSlide);

        currentSlide.setTravelTime().then(function(locale) {
            return locale;
        });
    }

  
};


controllersModule.controller('SearchCtrl', SearchCtrl);

},{"./_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.controllers', []);

({"AppCtrl":require("./AppCtrl.js"),"BrowseCtrl":require("./BrowseCtrl.js"),"MapCtrl":require("./MapCtrl.js"),"PlaylistCtrl":require("./PlaylistCtrl.js"),"PlaylistsCtrl":require("./PlaylistsCtrl.js"),"SearchCtrl":require("./SearchCtrl.js")});

},{"./AppCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/AppCtrl.js","./BrowseCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/BrowseCtrl.js","./MapCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/MapCtrl.js","./PlaylistCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistCtrl.js","./PlaylistsCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/PlaylistsCtrl.js","./SearchCtrl.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/SearchCtrl.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/GMap.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
*/

modelsModule.factory('GMap', ["$log", "$rootScope", "LocationsService", "AppSettings", function($log, $rootScope, LocationsService, AppSettings){
  $log = $log.getInstance('GMap');

  var currentCenter = $rootScope.currentPosition;

  function GMap(mapSettings){
    
    this.mapOptions = {
      center:    {lat: currentCenter.latitude, 
                  lng: currentCenter.longitude},
      zoom:      AppSettings.GMAP_DEFAULT.ZOOM,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      radius:    AppSettings.GMAP_DEFAULT.RADIUS,
    };

    angular.extend(this.mapOptions, mapSettings);
    
    $log.debug('zoom {mapOptions.zoom}', this);
    
    this.map = new google.maps.Map(document.getElementById("Map"), this.mapOptions);
res  };//GMap constructor


  GMap.prototype ={

    dropMarker: function(markerData) {
      var _markerSettings = {};
      angular.extend(_markerSettings, this.mapOptions, markerData);
      $log.debug('dropMarker for "{title}"" at "{center.lat}, {center.lng}"', _markerSettings);
      
      var _marker = new google.maps.Marker({
            position:  _markerSettings.center,
            map:       this.map,
            title:     _markerSettings.title,
            opacity:   _markerSettings.opacity,
            animation: google.maps.Animation.DROP
      });

      return _marker;
    },


    buildInfoWindow: function(locationInfo, locationMarker) {
      var _map = this;

      $log.debug('buildInfoWindow for {name}', locationInfo);
      var infowindow = new google.maps.InfoWindow({
                    content: '<h3 id="firstHeading" class="firstHeading">'+locationInfo.name+'</h3>'+
                             '<p>'+locationInfo.travelTime+' walk</p>'
      });

      locationMarker.addListener('click', function() {
        $rootScope.$broadcast('marker:clicked', locationInfo );
        infowindow.open( _map.map ,locationMarker);
      });

      return infowindow;
    },


    plotLocations:function(plotData) {
      var _map = this;
      var _plotSettings ={}; 

      angular.extend(_plotSettings,this.mapOptions, plotData);
      $log.debug('plotLocations within a "{radius}" meter radius of "{center.lat}, {center.lng}"', _plotSettings);
      
      // drop marker on current location
      _map.dropMarker({title:"You Are Here", opacity:1});

      // get all locations around specified area
      LocationsService
        .get({radius: _plotSettings.radius, 
              lat:    _plotSettings.center.lat, 
              lng:    _plotSettings.center.lng })
        .then(function(locations) {

          // process locations 
          angular.forEach(locations, function(location) {
            $log.debug('plotLocation {name}',location);
            //get the travelTime forEach location
            location.setTravelTime().then(function() {

              var locationPin = _map.dropMarker({center: {
                                    lat: parseFloat(location.lat),
                                    lng: parseFloat(location.long)
                                  },
                                  opacity: 0.5,
                                  title: location.name
                                });

              _map.buildInfoWindow(location, locationPin);
              _map.plotRouteTo(location);

            });///location.setTravelTime


          });///end angular.forEach

        });//end LocationsService

    },

    plotRouteTo: function(location){
      $log.debug('plotRouteTo {name}',location);

      var _map = this;
      var _routeSettings = {
            draggable:           false,
            suppressInfoWindows: true,
            suppressMarkers:     true,
            origin:              _map.mapOptions.center
      };

      angular.extend(_routeSettings, this.mapOptions);

      var directionsDisplay = new google.maps.DirectionsRenderer({
            map:                 _map.map,
            draggable:           _routeSettings.draggable,
            suppressInfoWindows: _routeSettings.suppressInfoWindows,
            suppressMarkers:     _routeSettings.suppressMarkers
          }),
          request = {
            destination: {lat: parseFloat(location.lat), 
                          lng: parseFloat(location.long)},
            origin:      _routeSettings.origin,
            travelMode:  google.maps.TravelMode.WALKING,
          },
          directionsService = new google.maps.DirectionsService();// Pass the directions request to the directions service.


          directionsService.route(request, function(response, status) {
            
            if (status == google.maps.DirectionsStatus.OK) {
              // Display the route on the map.
              directionsDisplay.setDirections(response);
            }
          });///directiosService.route


    },

    setRadiusCircle: function(radiusCircleSettings) {
      var _map = this;
      var _circleSettings ={
              strokeColor:   '#0084b4',
              strokeOpacity: 0.8,
              strokeWeight:  1,
              fillColor:     '#0084b4',
              fillOpacity:   0.0625,
      };

      angular.extend(_circleSettings ,this.mapOptions, radiusCircleSettings);

      var locationsCircle = new google.maps.Circle({
                strokeColor:   _circleSettings.strokeColor,
                strokeOpacity: _circleSettings.strokeOpacity,
                strokeWeight:  _circleSettings.strokeWeight,
                fillColor:     _circleSettings.fillColor,
                fillOpacity:   _circleSettings.fillOpacity,
                map:           _map.map,
                center:        _circleSettings.center,
                radius:        _circleSettings.radius
          });

      return locationsCircle;
    }

  };
    


  return GMap;

  
}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js":[function(require,module,exports){
'use strict';

var modelsModule = require('./_index.js');

/**
 * @ngInject
 */
modelsModule.factory('Location', ["$rootScope", "$log", "$q", function($rootScope, $log, $q ) {
  $log = $log.getInstance('Location');

  function Location(LocationData){
    angular.extend(this, LocationData);
    // $log.debug('{name}', this);
    
  }


  Location.responseTransformer = function (responseData) {
    $log.debug('resoponseTransformer {length}', responseData.locations);

    return responseData.locations
    					.map(Location.build);
  }


  Location.prototype.setTravelTime = function() {
      $log.debug('setTravelTime {name}', this);
      
      var _location = this;
      var deferred = $q.defer();

      var service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
         origins:       [{lat: $rootScope.currentPosition.latitude, lng:$rootScope.currentPosition.longitude}],
         destinations:  [{lat: parseFloat(this.lat), lng: parseFloat(this.long)}],
         travelMode:    google.maps.TravelMode.WALKING,
         unitSystem:    google.maps.UnitSystem.IMPERIAL,
         avoidHighways: false,
         avoidTolls:    false
       }, function(response, status) {
         	_location.travelTime = response.rows[0].elements[0].duration.text;
         	deferred.resolve(_location);
         // $log.debug("{name} - {travelTime}", _location);
          
       });

       
       return deferred.promise;

  }


  Location.build = function(lData) {
    // $log.debug('build {name}', lData);
    // Location.setTravelTime(lData);
    return new Location(lData);
  }

   

  
 
  return Location;


}]);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.models', []);

({"GMap":require("./GMap.js"),"LocationModel":require("./LocationModel.js")});

},{"./GMap.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/GMap.js","./LocationModel.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/models/LocationModel.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_config.js":[function(require,module,exports){
'use strict';


/**
 * @ngInject
 */
OnConfig.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "$provide"];
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $provide) {
  
  //activate LogDecorator
  require('./utils/logging/LogDecorator.js')($provide);

$stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
    resolve:{
        coordinates:["CurrentCoords", function(CurrentCoords) {
          return CurrentCoords.get();
        }]
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.map', {
      
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl as Map'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
  
  


}//// OnConfig


module.exports = OnConfig;

},{"./utils/logging/LogDecorator.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
'use strict';

/**
 * @ngInject
 */
OnRun.$inject = ["$ionicPlatform", "$log"];
function OnRun($ionicPlatform, $log) {
  $log = $log.getInstance('OnRun');
  
  $ionicPlatform.ready(function() {
    
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
  });
}

module.exports = OnRun;

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js":[function(require,module,exports){
'use strict';

CurrentCoords.$inject = ["$q", "$http", "$log", "AppSettings"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function CurrentCoords($q, $http, $log,  AppSettings) {
  $log = $log.getInstance("CurrentCoordsService");
  
  var service = {};

  service.get = function() {

    var deferred = $q.defer();    

    navigator.geolocation.getCurrentPosition(function(pos) {
        
      $log.debug('lat: {coords.latitude}',pos);
      $log.debug('long: {coords.longitude}',pos);

      deferred.resolve(pos.coords);
        
   }, function(error) {
       $log.warn('Unable to get location: ' + error.message);
       deferred.reject(err, status);
   });


    
    return deferred.promise;
  };

  return service;

}

servicesModule.service('CurrentCoords', CurrentCoords);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js":[function(require,module,exports){
'use strict';

LocationsService.$inject = ["$log", "Yocal", "Location"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function LocationsService($log, Yocal, Location) {
  $log = $log.getInstance("LocationsServiceService");

  var service = {};

  service.get = function( getData ) {

    $log.debug('GET location in a {radius}  of {lat}, {lng}', getData);

    return Yocal.get(getData)
                .then(Location.responseTransformer);

  };

  return service;

}

servicesModule.service('LocationsService', LocationsService);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js":[function(require,module,exports){
'use strict';

Yocal.$inject = ["$q", "$http", "AppSettings", "$log"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function Yocal($q, $http, AppSettings, $log) {

  var service = {};
  $log = $log.getInstance("YocalService");

  service.get = function( getData ) {
    var deferred = $q.defer();

    // /listByDistanceCat/Food/8000/39.937893/-75.1689347
   $http.get(AppSettings.yocalAPI.base+'listByDistanceCat/Food/'+getData.radius+'/'+getData.lat+'/'+getData.lng).success(function(data) {
        $log.debug('found {length} spots within '+getData.radius+' meters of '+getData.lat+','+getData.lng, data.locations);
        data.radius = getData.radius;
        deferred.resolve(data);
    }).error(function(err, status) {
        $log.warn('Unable to get location: ' + err.message);
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('Yocal', Yocal);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js":[function(require,module,exports){
'use strict';



module.exports = angular.module('app.services', []);

({"CurrentCoordsService":require("./CurrentCoordsService.js"),"LocationsService":require("./LocationsService.js"),"Yocal":require("./Yocal.js"),"example":require("./example.js")});

},{"./CurrentCoordsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/CurrentCoordsService.js","./LocationsService.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/LocationsService.js","./Yocal.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/Yocal.js","./example.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/example.js":[function(require,module,exports){
'use strict';

ExampleService.$inject = ["$q", "$http"];
var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ExampleService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('ExampleService', ExampleService);

},{"./_index.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/services/_index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js":[function(require,module,exports){
/**
 * @author     Thomas Burleson
 * @author     StackOverflow - Harto, http://stackoverflow.com/questions/2315408/how-do-i-format-a-timestamp-in-javascript-to-display-it-in-graphs-utc-is-fine
 * @description
 *  
 * DateTime utility class that spits out UTC timestamp strings usually used in a reporting, print-capable process.
*/
 

 'use strict';


var buildTimeString = function (date, format)
        {
            format = format || "%h:%m:%s:%z";

            function pad(value, isMilliSeconds)
            {
                if(typeof (isMilliSeconds) === "undefined")
                {
                    isMilliSeconds = false;
                }
                if(isMilliSeconds)
                {
                    if(value < 10)
                    {
                        value = "00" + value;
                    }
                    else if(value < 100)
                    {
                        value = "0" + value;
                    }
                }
                return(value.toString().length < 2) ? "0" + value : value;
            }

            return format.replace(/%([a-zA-Z])/g, function (_, fmtCode)
            {
                switch(fmtCode)
                {
                case "Y":
                    return date.getFullYear();
                case "M":
                    return pad(date.getMonth() + 1);
                case "d":
                    return pad(date.getDate());
                case "h":
                    return pad(date.getHours());
                case "m":
                    return pad(date.getMinutes());
                case "s":
                    return pad(date.getSeconds());
                case "z":
                    return pad(date.getMilliseconds(), true);
                default:
                    throw new Error("Unsupported format code: " + fmtCode);
                }
            });
        };


 // Publish API for DateTime utils
        // return {
        //     formattedNow: function ()
        //     {
        //         return buildTimeString(new Date());
        //     }
        // };
        // 
 module.exports = {
    formattedNow: function () { return buildTimeString(new Date()); }
 };

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogDecorator.js":[function(require,module,exports){
'use strict';
/**
 * LogDecorator
 *  @source: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
 */

 var LogDecorator = function( $provide  ){


              // Register our $log decorator with AngularJS $provider
              $provide.decorator( '$log', [ "$delegate", function( $delegate )
              {
               // NOTE: the LogEnchancer module returns a FUNCTION that we named `enchanceLoggerFn`
               //       All the details of how the `enchancement` works is encapsulated in LogEnhancer!

                  require('./LogEnhancer.js')( $delegate );

                  return $delegate;
              }]);
};


module.exports =  LogDecorator;

},{"./LogEnhancer.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/logging/LogEnhancer.js":[function(require,module,exports){
'use strict';
/**
 * LogEnhancer
 * This adds timestamps and supplant functionality to Angular $log service
 * @source: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
 * @api: public
 * @returns: Object - extended $log service
 */

var enchanceLogger = function( $log ){
  var supplant = require('../supplant.js');
  var DateTime = require('../DateTime.js');


  /**
   * Capture the original $log functions; for use in enhancedLogFn()
   * @api  private 
   */
  
  var _$log = (function( $log ){
      return {
        log   : $log.log,
        info  : $log.info,
        warn  : $log.warn,
        debug : $log.debug,
        // error : $log.error
      };
  })( $log ); 



   /**
    * Partial application to pre-capture a logger function
    * @api:  private 
    * @returns: Function 
    */
    var prepareLogFn = function( logFn, className ){

      /**
       * Invoke the specified `logFn<` with the supplant functionality...
       * @api: private 
       * @example: 
       *   var user = { who:"Thomas Burleson"", email="ThomasBurleson@gmail.com"" };
       *   $log.warn( "A warning message for `{who}` will be sent to `{email}` !", user );   
       *
       * This should output: A warning message for `Thomas Burleson` will be sent to `ThomasBurleson@gmail.com` !
       */
      var enhancedLogFn = function( ){
        var args = Array.prototype.slice.call(arguments),
            now  = DateTime.formattedNow();
            className = className ? className : '';
            // prepend a timestamp to the original output message
            args[0] = supplant("{0} - {1}{2}", [ now, className, args[0] ]);

        logFn.call( null,  supplant.apply( null, args ) );
      };

      // Special... only needed to support angular-mocks expectations
      enhancedLogFn.logs = [ ];
 
      return enhancedLogFn;
      
    };




    /**
     * Support to generate class-specific logger instance with classname only
     *
     * @param: name
     * @returns: Object wrapper facade to $log
     */
    var getInstance = function( className ){
      className = ( className !== undefined ) ? className + "::" : "";

      return{
         log   : prepareLogFn( _$log.log,    className ),
         info  : prepareLogFn( _$log.info,   className ),
         warn  : prepareLogFn( _$log.warn,   className ),
         debug : prepareLogFn( _$log.debug,  className ),
         // error : prepareLogFn( _$log.error,  className )
      };

    };



    // wrap each log method 
    $log.log   = prepareLogFn( $log.log );
    $log.info  = prepareLogFn( $log.info );
    $log.warn  = prepareLogFn( $log.warn );
    $log.debug = prepareLogFn( $log.debug );
    // $log.error = prepareLogFn( $log.error );

    // Add special method to AngularJS $log
    $log.getInstance = getInstance;
 

    return $log;
};//enchanceLogger



module.exports =  enchanceLogger;

},{"../DateTime.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/DateTime.js","../supplant.js":"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/supplant.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/utils/supplant.js":[function(require,module,exports){
/**
 * @author      Thomas Burleson
 * @date        November, 2013
 * @source:     https://github.com/ThomasBurleson/angularjs-logDecorator/blob/master/src/mindspace/utils/supplant.js
  */
 

 'use strict';

var supplant =  function( template, values, pattern ) {
            pattern = pattern || /\{([^\{\}]*)\}/g;

            return template.replace(pattern, function(a, b) {
                var p = b.split('.'),
                    r = values;

                try {
                    for (var s in p) { r = r[p[s]];  }
                } catch(e){
                    r = a;
                }

                return (typeof r === 'string' || typeof r === 'number') ? r : a;
            });
        };


// supplant() method from Crockfords `Remedial Javascript`
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method("supplant", function( values, pattern ) {
    var self = this;
    return supplant(self, values, pattern);
});




module.exports =  String.supplant = supplant;

},{}]},{},["/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvYm93ZXJfY29tcG9uZW50cy9uZy1rbm9iL2Rpc3Qvbmcta25vYi5taW4uanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2FwcC1tYWluLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9jb25zdGFudHMuZGV2ZWxvcG1lbnQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0FwcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL0Jyb3dzZUN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL01hcEN0cmwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL2NvbnRyb2xsZXJzL1BsYXlsaXN0Q3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvUGxheWxpc3RzQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvU2VhcmNoQ3RybC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9tb2RlbHMvR01hcC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvbW9kZWxzL0xvY2F0aW9uTW9kZWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL21vZGVscy9faW5kZXguanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL29uX2NvbmZpZy5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvb25fcnVuLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy9zZXJ2aWNlcy9DdXJyZW50Q29vcmRzU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvTG9jYXRpb25zU2VydmljZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvWW9jYWwuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3NlcnZpY2VzL19pbmRleC5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvc2VydmljZXMvZXhhbXBsZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvaW9uaWMtZ29vZ2xlbWFwcy93d3cvanMvdXRpbHMvRGF0ZVRpbWUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2lvbmljLWdvb2dsZW1hcHMvd3d3L2pzL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9sb2dnaW5nL0xvZ0VuaGFuY2VyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9pb25pYy1nb29nbGVtYXBzL3d3dy9qcy91dGlscy9zdXBwbGFudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7O0FBT0EsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLFNBQVMsUUFBUSxNQUFNLFFBQVEsQ0FBQyxLQUFLLFFBQVEsUUFBUSxLQUFLLE1BQU0sTUFBTSxLQUFLLFFBQVEsUUFBUSxLQUFLLE9BQU8sQ0FBQyxHQUFHLEtBQUssVUFBVSxlQUFlLFNBQVMsTUFBTSxTQUFTLFNBQVMsV0FBVyxXQUFXLENBQUMsT0FBTyxTQUFTLFVBQVUsSUFBSSxXQUFXLFlBQVksRUFBRSxTQUFTLFVBQVUsSUFBSSxXQUFXLFlBQVksRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sYUFBYSxTQUFTLGFBQWEsU0FBUyxZQUFZLGFBQWEsS0FBSyxVQUFVLGVBQWUsU0FBUyxRQUFRLFNBQVMsV0FBVyxTQUFTLFdBQVcsQ0FBQyxPQUFPLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLFNBQVMsVUFBVSxJQUFJLFdBQVcsWUFBWSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxhQUFhLFNBQVMsYUFBYSxTQUFTLFlBQVksWUFBWSxLQUFLLFVBQVUsVUFBVSxTQUFTLFlBQVksWUFBWSxXQUFXLFNBQVMsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLFdBQVcsWUFBWSxTQUFTLFVBQVUsYUFBYSxjQUFjLE9BQU8sS0FBSyxLQUFLLFVBQVUsUUFBUSxTQUFTLElBQUksSUFBSSxNQUFNLE1BQU0sTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksT0FBTyxRQUFRLEtBQUssS0FBSyxPQUFPLEtB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SyxRQUFRLFdBQVcsS0FBSyxFQUFFLEtBQUssUUFBUSxNQUFNLElBQUksS0FBSyxZQUFZLGFBQWEsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLLEtBQUssUUFBUSxRQUFRLFVBQVUsU0FBUyxJQUFJLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxPQUFPLFNBQVMsS0FBSyxRQUFRLFFBQVEsS0FBSyxNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxZQUFZLEtBQUssY0FBYyxVQUFVLEtBQUssWUFBWSxVQUFVLE1BQU0sT0FBTyxLQUFLLFFBQVEsUUFBUSxPQUFPLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLFdBQVcsS0FBSyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssRUFBRSxHQUFHLElBQUksS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLFFBQVEsV0FBVyxLQUFLLEdBQUcsU0FBUyxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sU0FBUyxLQUFLLFFBQVEsTUFBTSxTQUFTLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLE1BQU0sT0FBTyxXQUFXLGNBQWMsS0FBSyxHQUFHLEVBQUUsYUFBYSxPQUFPLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sR0FBRyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sRUFBRSxTQUFTLElBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxRQUFRLE9BQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsTUFBTSxhQUFhLEdBQUcsVUFBVSxLQUFLLFFBQVEsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsS0FBSyxFQUFFLFNBQVMsS0FBSyxRQUFRLE1BQU0sU0FBUyxLQUFLLEdBQUcsTUFBTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sTUFBTSxPQUFPLFdBQVcsY0FBYyxLQUFLLEdBQUcsRUFBRSxhQUFhLE9BQU8sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLE9BQU8sT0FBTyxHQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsT0FBTyxRQUFRLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxPQUFPLFdBQVcsSUFBSSxVQUFVLFFBQVEsS0FBSyxNQUFNLFFBQVEsT0FBTyxRQUFRLEtBQUssQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGVBQWUsS0FBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLFNBQVMsU0FBUyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssU0FBUyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsYUFBYSxLQUFLLFFBQVEsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLFVBQVUsWUFBWSxDQUFDLEtBQUssS0FBSyxRQUFRLGVBQWUsS0FBSyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssVUFBVSxZQUFZLENBQUMsZUFBZSxJQUFJLEtBQUssVUFBVSxLQUFLLFFBQVEsSUFBSSxLQUFLLFNBQVMsV0FBVyxDQUFDLEtBQUssS0FBSyxRQUFRLFdBQVcsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLFdBQVcsT0FBTyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sUUFBUSxpQkFBaUIsZUFBZSxLQUFLLFVBQVUsS0FBSyxTQUFTLE9BQU8sQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLE9BQU8sR0FBRyxLQUFLLFFBQVEsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFlBQVksRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLFFBQVEsTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLE1BQU0sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLEtBQUssZUFBZSxRQUFRLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSyxLQUFLLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLE1BQU0sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxTQUFTLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLFlBQVksS0FBSyxRQUFRLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLGVBQWUsSUFBSSxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxRQUFRLE1BQU0sS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLE9BQU8sT0FBTyxTQUFTLElBQUksS0FBSyxLQUFLLEtBQUssYUFBYSxJQUFJLGFBQWEsR0FBRyxTQUFTLE9BQU8sR0FBRyxPQUFPLGlCQUFpQixHQUFHLFVBQVUsa0JBQWtCLEtBQUssU0FBUyxpQkFBaUIsY0FBYyxLQUFLLFFBQVEsUUFBUSxRQUFRLEtBQUssVUFBVSxhQUFhLEtBQUssS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLEtBQUssUUFBUSxRQUFRLFVBQVUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEtBQUssZUFBZSxLQUFLLFFBQVEsV0FBVyxLQUFLLEtBQUssZUFBZSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU0sT0FBTyxTQUFTLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxTQUFTLFNBQVMsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsS0FBSyxVQUFVLFNBQVMsS0FBSyxlQUFlLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsTUFBTSxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLLFNBQVMsU0FBUyxLQUFLLGVBQWUsS0FBSyxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNLEtBQUssVUFBVSxLQUFLLElBQUksS0FBSyxZQUFZLEtBQUssVUFBVSxTQUFTLFNBQVMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsS0FBSyxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxLQUFLLGVBQWUsU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLFFBQVEsV0FBVyxLQUFLLFFB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SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VBQ1IsVUFBVTtVQUNWLE9BQU87VUFDUCxRQUFROztRQUVWOzs7SUFHSjtNQUNFLFlBQVk7UUFDVjtVQUNFLE9BQU87VUFDUCxRQUFRO1VB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Ozs7Ozs7OztJQVN6QyxLQUFLLFFBQVEsY0FBYyxLQUFLO0lBQ2hDLEtBQUssUUFBUSxjQUFjLEtBQUs7SUFDaEMsS0FBSyxRQUFRLGNBQWMsS0FBSztJQUNoQyxLQUFLLFFBQVEsY0FBYyxLQUFLOzs7O0lBSWhDLEtBQUssY0FBYzs7O0lBR25CLE9BQU87Ozs7O0FBS1gsT0FBTyxXQUFXLGVBQWU7OztBQ3hHakM7Ozs7Ozs7Q0FPQzs7QUFFRCxJQUFJLFlBQVksVUFBVSxVQUFVLFFBQVEsVUFBVTtZQUMxQyxVQUFVLFdBQVc7O1lBRXJCLE9BQU8sU0FBUyxRQUFRLFNBQVMsU0FBUyxHQUFHLEdBQUc7Z0JBQzVDLElBQUksSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSTs7Z0JBRVIsSUFBSTtvQkFDQSxLQUFLLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7a0JBQzdCLE1BQU0sRUFBRTtvQkFDTixJQUFJOzs7Z0JBR1IsT0FBTyxDQUFDLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLElBQUk7Ozs7OztBQU05RSxTQUFTLFVBQVUsU0FBUyxVQUFVLE1BQU0sTUFBTTtJQUM5QyxLQUFLLFVBQVUsUUFBUTtJQUN2QixPQUFPOzs7QUFHWCxPQUFPLE9BQU8sWUFBWSxVQUFVLFFBQVEsVUFBVTtJQUNsRCxJQUFJLE9BQU87SUFDWCxPQUFPLFNBQVMsTUFBTSxRQUFROzs7Ozs7QUFNbEMsT0FBTyxXQUFXLE9BQU8sV0FBVyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBOYW1lOiAgICAgICAgICBuZy1rbm9iXG4gKiBEZXNjcmlwdGlvbjogICBBbmd1bGFyLmpzIEtub2IgZGlyZWN0aXZlXG4gKiBWZXJzaW9uOiAgICAgICAwLjEuM1xuICogSG9tZXBhZ2U6ICAgICAgaHR0cHM6Ly9yYWRtaWUuZ2l0aHViLmlvL25nLWtub2JcbiAqIExpY2VuY2U6ICAgICAgIE1JVFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cInVzZSBzdHJpY3RcIjshZnVuY3Rpb24oKXt2YXIgdWk9e30sS25vYj1mdW5jdGlvbihlbGVtZW50LHZhbHVlLG9wdGlvbnMpe3RoaXMuZWxlbWVudD1lbGVtZW50LHRoaXMudmFsdWU9dmFsdWUsdGhpcy5vcHRpb25zPW9wdGlvbnMsdGhpcy5pbkRyYWc9ITF9O0tub2IucHJvdG90eXBlLnZhbHVlVG9SYWRpYW5zPWZ1bmN0aW9uKHZhbHVlLHZhbHVlRW5kLGFuZ2xlRW5kLGFuZ2xlU3RhcnQsdmFsdWVTdGFydCl7cmV0dXJuIHZhbHVlRW5kPXZhbHVlRW5kfHwxMDAsdmFsdWVTdGFydD12YWx1ZVN0YXJ0fHwwLGFuZ2xlRW5kPWFuZ2xlRW5kfHwzNjAsYW5nbGVTdGFydD1hbmdsZVN0YXJ0fHwwLE1hdGguUEkvMTgwKigodmFsdWUtdmFsdWVTdGFydCkqKGFuZ2xlRW5kLWFuZ2xlU3RhcnQpLyh2YWx1ZUVuZC12YWx1ZVN0YXJ0KSthbmdsZVN0YXJ0KX0sS25vYi5wcm90b3R5cGUucmFkaWFuc1RvVmFsdWU9ZnVuY3Rpb24ocmFkaWFucyx2YWx1ZUVuZCx2YWx1ZVN0YXJ0LGFuZ2xlRW5kLGFuZ2xlU3RhcnQpe3JldHVybiB2YWx1ZUVuZD12YWx1ZUVuZHx8MTAwLHZhbHVlU3RhcnQ9dmFsdWVTdGFydHx8MCxhbmdsZUVuZD1hbmdsZUVuZHx8MzYwLGFuZ2xlU3RhcnQ9YW5nbGVTdGFydHx8MCwoMTgwL01hdGguUEkqcmFkaWFucy1hbmdsZVN0YXJ0KSoodmFsdWVFbmQtdmFsdWVTdGFydCkvKGFuZ2xlRW5kLWFuZ2xlU3RhcnQpK3ZhbHVlU3RhcnR9LEtub2IucHJvdG90eXBlLmNyZWF0ZUFyYz1mdW5jdGlvbihpbm5lclJhZGl1cyxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlLGNvcm5lclJhZGl1cyl7dmFyIGFyYz1kMy5zdmcuYXJjKCkuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMpLm91dGVyUmFkaXVzKG91dGVyUmFkaXVzKS5zdGFydEFuZ2xlKHN0YXJ0QW5nbGUpLmVuZEFuZ2xlKGVuZEFuZ2xlKS5jb3JuZXJSYWRpdXMoY29ybmVyUmFkaXVzKTtyZXR1cm4gYXJjfSxLbm9iLnByb3RvdHlwZS5kcmF3QXJjPWZ1bmN0aW9uKHN2ZyxhcmMsbGFiZWwsc3R5bGUsY2xpY2ssZHJhZyl7dmFyIGVsZW09c3ZnLmFwcGVuZChcInBhdGhcIikuYXR0cihcImlkXCIsbGFiZWwpLmF0dHIoXCJkXCIsYXJjKS5zdHlsZShzdHlsZSkuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIpXCIpO3JldHVybiB0aGlzLm9wdGlvbnMucmVhZE9ubHk9PT0hMSYmKGNsaWNrJiZlbGVtLm9uKFwiY2xpY2tcIixjbGljayksZHJhZyYmZWxlbS5jYWxsKGRyYWcpKSxlbGVtfSxLbm9iLnByb3RvdHlwZS5jcmVhdGVBcmNzPWZ1bmN0aW9uKCl7dmFyIG91dGVyUmFkaXVzPXBhcnNlSW50KHRoaXMub3B0aW9ucy5zaXplLzIsMTApLHN0YXJ0QW5nbGU9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSwzNjApLGVuZEFuZ2xlPXRoaXMudmFsdWVUb1JhZGlhbnModGhpcy5vcHRpb25zLmVuZEFuZ2xlLDM2MCk7dGhpcy5vcHRpb25zLnNjYWxlLmVuYWJsZWQmJihvdXRlclJhZGl1cy09dGhpcy5vcHRpb25zLnNjYWxlLndpZHRoK3RoaXMub3B0aW9ucy5zY2FsZS5zcGFjZVdpZHRoKTt2YXIgZGlmZix0cmFja0lubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy50cmFja1dpZHRoLGNoYW5nZUlubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5iYXJXaWR0aCx2YWx1ZUlubmVyUmFkaXVzPW91dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5iYXJXaWR0aCxpbnRlcmFjdElubmVyUmFkaXVzPTEsdHJhY2tPdXRlclJhZGl1cz1vdXRlclJhZGl1cyxjaGFuZ2VPdXRlclJhZGl1cz1vdXRlclJhZGl1cyx2YWx1ZU91dGVyUmFkaXVzPW91dGVyUmFkaXVzLGludGVyYWN0T3V0ZXJSYWRpdXM9b3V0ZXJSYWRpdXM7dGhpcy5vcHRpb25zLmJhcldpZHRoPnRoaXMub3B0aW9ucy50cmFja1dpZHRoPyhkaWZmPSh0aGlzLm9wdGlvbnMuYmFyV2lkdGgtdGhpcy5vcHRpb25zLnRyYWNrV2lkdGgpLzIsdHJhY2tJbm5lclJhZGl1cy09ZGlmZix0cmFja091dGVyUmFkaXVzLT1kaWZmKTp0aGlzLm9wdGlvbnMuYmFyV2lkdGg8dGhpcy5vcHRpb25zLnRyYWNrV2lkdGgmJihkaWZmPSh0aGlzLm9wdGlvbnMudHJhY2tXaWR0aC10aGlzLm9wdGlvbnMuYmFyV2lkdGgpLzIsY2hhbmdlT3V0ZXJSYWRpdXMtPWRpZmYsdmFsdWVPdXRlclJhZGl1cy09ZGlmZixjaGFuZ2VJbm5lclJhZGl1cy09ZGlmZix2YWx1ZUlubmVyUmFkaXVzLT1kaWZmKSx0aGlzLm9wdGlvbnMuYmdDb2xvciYmKHRoaXMuYmdBcmM9dGhpcy5jcmVhdGVBcmMoMCxvdXRlclJhZGl1cyxzdGFydEFuZ2xlLGVuZEFuZ2xlKSksXCJ0cm9uXCI9PT10aGlzLm9wdGlvbnMuc2tpbi50eXBlJiYodHJhY2tPdXRlclJhZGl1cz10cmFja091dGVyUmFkaXVzLXRoaXMub3B0aW9ucy5za2luLndpZHRoLXRoaXMub3B0aW9ucy5za2luLnNwYWNlV2lkdGgsY2hhbmdlT3V0ZXJSYWRpdXM9Y2hhbmdlT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCx2YWx1ZU91dGVyUmFkaXVzPXZhbHVlT3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCxpbnRlcmFjdE91dGVyUmFkaXVzPWludGVyYWN0T3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgtdGhpcy5vcHRpb25zLnNraW4uc3BhY2VXaWR0aCx0aGlzLmhvb3BBcmM9dGhpcy5jcmVhdGVBcmMob3V0ZXJSYWRpdXMtdGhpcy5vcHRpb25zLnNraW4ud2lkdGgsb3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSkpLHRoaXMudHJhY2tBcmM9dGhpcy5jcmVhdGVBcmModHJhY2tJbm5lclJhZGl1cyx0cmFja091dGVyUmFkaXVzLHN0YXJ0QW5nbGUsZW5kQW5nbGUpLHRoaXMuY2hhbmdlQXJjPXRoaXMuY3JlYXRlQXJjKGNoYW5nZUlubmVyUmFkaXVzLGNoYW5nZU91dGVyUmFkaXVzLHN0YXJ0QW5nbGUsc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMuYmFyQ2FwKSx0aGlzLnZhbHVlQXJjPXRoaXMuY3JlYXRlQXJjKHZhbHVlSW5uZXJSYWRpdXMsdmFsdWVPdXRlclJhZGl1cyxzdGFydEFuZ2xlLHN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLmJhckNhcCksdGhpcy5pbnRlcmFjdEFyYz10aGlzLmNyZWF0ZUFyYyhpbnRlcmFjdElubmVyUmFkaXVzLGludGVyYWN0T3V0ZXJSYWRpdXMsc3RhcnRBbmdsZSxlbmRBbmdsZSl9LEtub2IucHJvdG90eXBlLmRyYXdBcmNzPWZ1bmN0aW9uKGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKXt2YXIgc3ZnPWQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIix0aGlzLm9wdGlvbnMuc2l6ZSkuYXR0cihcImhlaWdodFwiLHRoaXMub3B0aW9ucy5zaXplKTtpZih0aGlzLm9wdGlvbnMuYmdDb2xvciYmdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmJnQXJjLFwiYmdBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuYmdDb2xvcn0pLHRoaXMub3B0aW9ucy5kaXNwbGF5SW5wdXQpe3ZhciBmb250U2l6ZT0uMip0aGlzLm9wdGlvbnMuc2l6ZStcInB4XCI7XCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuZm9udFNpemUmJihmb250U2l6ZT10aGlzLm9wdGlvbnMuZm9udFNpemUrXCJweFwiKSx0aGlzLm9wdGlvbnMuc3RlcDwxJiYodGhpcy52YWx1ZT10aGlzLnZhbHVlLnRvRml4ZWQoMSkpO3ZhciB2PXRoaXMudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJpZFwiLFwidGV4dFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKS5hdHRyKFwiZm9udC1zaXplXCIsZm9udFNpemUpLnN0eWxlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy50ZXh0Q29sb3IpLnRleHQodit0aGlzLm9wdGlvbnMudW5pdHx8XCJcIikuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiKyh0aGlzLm9wdGlvbnMuc2l6ZS8yKy4wNip0aGlzLm9wdGlvbnMuc2l6ZSkrXCIpXCIpLHRoaXMub3B0aW9ucy5zdWJUZXh0LmVuYWJsZWQmJihmb250U2l6ZT0uMDcqdGhpcy5vcHRpb25zLnNpemUrXCJweFwiLFwiYXV0b1wiIT09dGhpcy5vcHRpb25zLnN1YlRleHQuZm9udCYmKGZvbnRTaXplPXRoaXMub3B0aW9ucy5zdWJUZXh0LmZvbnQrXCJweFwiKSxzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIixcInN1Yi10ZXh0XCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLFwibWlkZGxlXCIpLmF0dHIoXCJmb250LXNpemVcIixmb250U2l6ZSkuc3R5bGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLnN1YlRleHQuY29sb3IpLnRleHQodGhpcy5vcHRpb25zLnN1YlRleHQudGV4dCkuYXR0cihcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoaXMub3B0aW9ucy5zaXplLzIrXCIsIFwiKyh0aGlzLm9wdGlvbnMuc2l6ZS8yKy4xNSp0aGlzLm9wdGlvbnMuc2l6ZSkrXCIpXCIpKX1pZih0aGlzLm9wdGlvbnMuc2NhbGUuZW5hYmxlZCl7dmFyIHJhZGl1cyxxdWFudGl0eSxkYXRhLGNvdW50PTAsYW5nbGU9MCxzdGFydFJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMubWluLHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pLGVuZFJhZGlhbnM9dGhpcy52YWx1ZVRvUmFkaWFucyh0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5tYXgsdGhpcy5vcHRpb25zLmVuZEFuZ2xlLHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLHRoaXMub3B0aW9ucy5taW4pLGRpZmY9MDtpZigwPT09dGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUmJjM2MD09PXRoaXMub3B0aW9ucy5lbmRBbmdsZXx8KGRpZmY9MSksXCJkb3RzXCI9PT10aGlzLm9wdGlvbnMuc2NhbGUudHlwZSl7dmFyIHdpZHRoPXRoaXMub3B0aW9ucy5zY2FsZS53aWR0aDtyYWRpdXM9dGhpcy5vcHRpb25zLnNpemUvMi13aWR0aCxxdWFudGl0eT10aGlzLm9wdGlvbnMuc2NhbGUucXVhbnRpdHk7dmFyIG9mZnNldD1yYWRpdXMrdGhpcy5vcHRpb25zLnNjYWxlLndpZHRoO2RhdGE9ZDMucmFuZ2UocXVhbnRpdHkpLm1hcChmdW5jdGlvbigpe3JldHVybiBhbmdsZT1jb3VudCooZW5kUmFkaWFucy1zdGFydFJhZGlhbnMpLU1hdGguUEkvMitzdGFydFJhZGlhbnMsY291bnQrPTEvKHF1YW50aXR5LWRpZmYpLHtjeDpvZmZzZXQrTWF0aC5jb3MoYW5nbGUpKnJhZGl1cyxjeTpvZmZzZXQrTWF0aC5zaW4oYW5nbGUpKnJhZGl1cyxyOndpZHRofX0pLHN2Zy5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKHtyOmZ1bmN0aW9uKGQpe3JldHVybiBkLnJ9LGN4OmZ1bmN0aW9uKGQpe3JldHVybiBkLmN4fSxjeTpmdW5jdGlvbihkKXtyZXR1cm4gZC5jeX0sZmlsbDp0aGlzLm9wdGlvbnMuc2NhbGUuY29sb3J9KX1lbHNlIGlmKFwibGluZXNcIj09PXRoaXMub3B0aW9ucy5zY2FsZS50eXBlKXt2YXIgaGVpZ2h0PXRoaXMub3B0aW9ucy5zY2FsZS5oZWlnaHQ7cmFkaXVzPXRoaXMub3B0aW9ucy5zaXplLzIscXVhbnRpdHk9dGhpcy5vcHRpb25zLnNjYWxlLnF1YW50aXR5LGRhdGE9ZDMucmFuZ2UocXVhbnRpdHkpLm1hcChmdW5jdGlvbigpe3JldHVybiBhbmdsZT1jb3VudCooZW5kUmFkaWFucy1zdGFydFJhZGlhbnMpLU1hdGguUEkvMitzdGFydFJhZGlhbnMsY291bnQrPTEvKHF1YW50aXR5LWRpZmYpLHt4MTpyYWRpdXMrTWF0aC5jb3MoYW5nbGUpKnJhZGl1cyx5MTpyYWRpdXMrTWF0aC5zaW4oYW5nbGUpKnJhZGl1cyx4MjpyYWRpdXMrTWF0aC5jb3MoYW5nbGUpKihyYWRpdXMtaGVpZ2h0KSx5MjpyYWRpdXMrTWF0aC5zaW4oYW5nbGUpKihyYWRpdXMtaGVpZ2h0KX19KSxzdmcuc2VsZWN0QWxsKFwibGluZVwiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwibGluZVwiKS5hdHRyKHt4MTpmdW5jdGlvbihkKXtyZXR1cm4gZC54MX0seTE6ZnVuY3Rpb24oZCl7cmV0dXJuIGQueTF9LHgyOmZ1bmN0aW9uKGQpe3JldHVybiBkLngyfSx5MjpmdW5jdGlvbihkKXtyZXR1cm4gZC55Mn0sXCJzdHJva2Utd2lkdGhcIjp0aGlzLm9wdGlvbnMuc2NhbGUud2lkdGgsc3Ryb2tlOnRoaXMub3B0aW9ucy5zY2FsZS5jb2xvcn0pfX1cInRyb25cIj09PXRoaXMub3B0aW9ucy5za2luLnR5cGUmJnRoaXMuZHJhd0FyYyhzdmcsdGhpcy5ob29wQXJjLFwiaG9vcEFyY1wiLHtmaWxsOnRoaXMub3B0aW9ucy5za2luLmNvbG9yfSksdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLnRyYWNrQXJjLFwidHJhY2tBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMudHJhY2tDb2xvcn0pLHRoaXMub3B0aW9ucy5kaXNwbGF5UHJldmlvdXM/dGhpcy5jaGFuZ2VFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy5jaGFuZ2VBcmMsXCJjaGFuZ2VBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMucHJldkJhckNvbG9yfSk6dGhpcy5jaGFuZ2VFbGVtPXRoaXMuZHJhd0FyYyhzdmcsdGhpcy5jaGFuZ2VBcmMsXCJjaGFuZ2VBcmNcIix7XCJmaWxsLW9wYWNpdHlcIjowfSksdGhpcy52YWx1ZUVsZW09dGhpcy5kcmF3QXJjKHN2Zyx0aGlzLnZhbHVlQXJjLFwidmFsdWVBcmNcIix7ZmlsbDp0aGlzLm9wdGlvbnMuYmFyQ29sb3J9KTt2YXIgY3Vyc29yPVwicG9pbnRlclwiO3RoaXMub3B0aW9ucy5yZWFkT25seSYmKGN1cnNvcj1cImRlZmF1bHRcIiksdGhpcy5kcmF3QXJjKHN2Zyx0aGlzLmludGVyYWN0QXJjLFwiaW50ZXJhY3RBcmNcIix7XCJmaWxsLW9wYWNpdHlcIjowLGN1cnNvcjpjdXJzb3J9LGNsaWNrSW50ZXJhY3Rpb24sZHJhZ0JlaGF2aW9yKX0sS25vYi5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbih1cGRhdGUpe2Z1bmN0aW9uIGRyYWdJbnRlcmFjdGlvbigpe3RoYXQuaW5EcmFnPSEwO3ZhciB4PWQzLmV2ZW50LngtdGhhdC5vcHRpb25zLnNpemUvMix5PWQzLmV2ZW50LnktdGhhdC5vcHRpb25zLnNpemUvMjtpbnRlcmFjdGlvbih4LHksITEpfWZ1bmN0aW9uIGNsaWNrSW50ZXJhY3Rpb24oKXt0aGF0LmluRHJhZz0hMTt2YXIgY29vcmRzPWQzLm1vdXNlKHRoaXMucGFyZW50Tm9kZSkseD1jb29yZHNbMF0tdGhhdC5vcHRpb25zLnNpemUvMix5PWNvb3Jkc1sxXS10aGF0Lm9wdGlvbnMuc2l6ZS8yO2ludGVyYWN0aW9uKHgseSwhMCl9ZnVuY3Rpb24gaW50ZXJhY3Rpb24oeCx5LGlzRmluYWwpe3ZhciByYWRpYW5zLGRlbHRhLGFyYz1NYXRoLmF0YW4oeS94KS8oTWF0aC5QSS8xODApO2lmKHg+PTAmJjA+PXl8fHg+PTAmJnk+PTA/ZGVsdGE9OTA6KGRlbHRhPTI3MCx0aGF0Lm9wdGlvbnMuc3RhcnRBbmdsZTwwJiYoZGVsdGE9LTkwKSkscmFkaWFucz0oZGVsdGErYXJjKSooTWF0aC5QSS8xODApLHRoYXQudmFsdWU9dGhhdC5yYWRpYW5zVG9WYWx1ZShyYWRpYW5zLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLm1pbix0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUpLHRoYXQudmFsdWU+PXRoYXQub3B0aW9ucy5taW4mJnRoYXQudmFsdWU8PXRoYXQub3B0aW9ucy5tYXgmJih0aGF0LnZhbHVlPU1hdGgucm91bmQofn4oKHRoYXQudmFsdWU8MD8tLjU6LjUpK3RoYXQudmFsdWUvdGhhdC5vcHRpb25zLnN0ZXApKnRoYXQub3B0aW9ucy5zdGVwKjEwMCkvMTAwLHRoYXQub3B0aW9ucy5zdGVwPDEmJih0aGF0LnZhbHVlPXRoYXQudmFsdWUudG9GaXhlZCgxKSksdXBkYXRlKHRoYXQudmFsdWUpLHRoYXQudmFsdWVBcmMuZW5kQW5nbGUodGhhdC52YWx1ZVRvUmFkaWFucyh0aGF0LnZhbHVlLHRoYXQub3B0aW9ucy5tYXgsdGhhdC5vcHRpb25zLmVuZEFuZ2xlLHRoYXQub3B0aW9ucy5zdGFydEFuZ2xlLHRoYXQub3B0aW9ucy5taW4pKSx0aGF0LnZhbHVlRWxlbS5hdHRyKFwiZFwiLHRoYXQudmFsdWVBcmMpLGlzRmluYWwmJih0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjKSksdGhhdC5vcHRpb25zLmRpc3BsYXlJbnB1dCkpe3ZhciB2PXRoYXQudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhhdC5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGF0Lm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLGQzLnNlbGVjdCh0aGF0LmVsZW1lbnQpLnNlbGVjdChcIiN0ZXh0XCIpLnRleHQodit0aGF0Lm9wdGlvbnMudW5pdHx8XCJcIil9fWQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTt2YXIgdGhhdD10aGlzO3RoYXQuY3JlYXRlQXJjcygpO3ZhciBkcmFnQmVoYXZpb3I9ZDMuYmVoYXZpb3IuZHJhZygpLm9uKFwiZHJhZ1wiLGRyYWdJbnRlcmFjdGlvbikub24oXCJkcmFnZW5kXCIsY2xpY2tJbnRlcmFjdGlvbik7dGhhdC5kcmF3QXJjcyhjbGlja0ludGVyYWN0aW9uLGRyYWdCZWhhdmlvciksdGhhdC5vcHRpb25zLmFuaW1hdGUuZW5hYmxlZD90aGF0LnZhbHVlRWxlbS50cmFuc2l0aW9uKCkuZWFzZSh0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5lYXNlKS5kdXJhdGlvbih0aGF0Lm9wdGlvbnMuYW5pbWF0ZS5kdXJhdGlvbikudHdlZW4oXCJcIixmdW5jdGlvbigpe3ZhciBpPWQzLmludGVycG9sYXRlKHRoYXQudmFsdWVUb1JhZGlhbnModGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsMzYwKSx0aGF0LnZhbHVlVG9SYWRpYW5zKHRoYXQudmFsdWUsdGhhdC5vcHRpb25zLm1heCx0aGF0Lm9wdGlvbnMuZW5kQW5nbGUsdGhhdC5vcHRpb25zLnN0YXJ0QW5nbGUsdGhhdC5vcHRpb25zLm1pbikpO3JldHVybiBmdW5jdGlvbih0KXt2YXIgdmFsPWkodCk7dGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHZhbCkpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjLmVuZEFuZ2xlKHZhbCkpfX0pOih0aGF0LmNoYW5nZUFyYy5lbmRBbmdsZSh0aGlzLnZhbHVlVG9SYWRpYW5zKHRoaXMudmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbikpLHRoYXQuY2hhbmdlRWxlbS5hdHRyKFwiZFwiLHRoYXQuY2hhbmdlQXJjKSx0aGF0LnZhbHVlQXJjLmVuZEFuZ2xlKHRoaXMudmFsdWVUb1JhZGlhbnModGhpcy52YWx1ZSx0aGlzLm9wdGlvbnMubWF4LHRoaXMub3B0aW9ucy5lbmRBbmdsZSx0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSx0aGlzLm9wdGlvbnMubWluKSksdGhhdC52YWx1ZUVsZW0uYXR0cihcImRcIix0aGF0LnZhbHVlQXJjKSl9LEtub2IucHJvdG90eXBlLnNldFZhbHVlPWZ1bmN0aW9uKG5ld1ZhbHVlKXtpZighdGhpcy5pbkRyYWcmJnRoaXMudmFsdWU+PXRoaXMub3B0aW9ucy5taW4mJnRoaXMudmFsdWU8PXRoaXMub3B0aW9ucy5tYXgpe3ZhciByYWRpYW5zPXRoaXMudmFsdWVUb1JhZGlhbnMobmV3VmFsdWUsdGhpcy5vcHRpb25zLm1heCx0aGlzLm9wdGlvbnMuZW5kQW5nbGUsdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsdGhpcy5vcHRpb25zLm1pbik7aWYodGhpcy52YWx1ZT1NYXRoLnJvdW5kKH5+KCgwPm5ld1ZhbHVlPy0uNTouNSkrbmV3VmFsdWUvdGhpcy5vcHRpb25zLnN0ZXApKnRoaXMub3B0aW9ucy5zdGVwKjEwMCkvMTAwLHRoaXMub3B0aW9ucy5zdGVwPDEmJih0aGlzLnZhbHVlPXRoaXMudmFsdWUudG9GaXhlZCgxKSksdGhpcy5jaGFuZ2VBcmMuZW5kQW5nbGUocmFkaWFucyksZDMuc2VsZWN0KHRoaXMuZWxlbWVudCkuc2VsZWN0KFwiI2NoYW5nZUFyY1wiKS5hdHRyKFwiZFwiLHRoaXMuY2hhbmdlQXJjKSx0aGlzLnZhbHVlQXJjLmVuZEFuZ2xlKHJhZGlhbnMpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiN2YWx1ZUFyY1wiKS5hdHRyKFwiZFwiLHRoaXMudmFsdWVBcmMpLHRoaXMub3B0aW9ucy5kaXNwbGF5SW5wdXQpe3ZhciB2PXRoaXMudmFsdWU7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmlucHV0Rm9ybWF0dGVyJiYodj10aGlzLm9wdGlvbnMuaW5wdXRGb3JtYXR0ZXIodikpLGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdChcIiN0ZXh0XCIpLnRleHQodit0aGlzLm9wdGlvbnMudW5pdHx8XCJcIil9fX0sdWkuS25vYj1Lbm9iLHVpLmtub2JEaXJlY3RpdmU9ZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsc2NvcGU6e3ZhbHVlOlwiPVwiLG9wdGlvbnM6XCI9XCJ9LGxpbms6ZnVuY3Rpb24oc2NvcGUsZWxlbWVudCl7c2NvcGUudmFsdWU9c2NvcGUudmFsdWV8fDA7dmFyIGRlZmF1bHRPcHRpb25zPXtza2luOnt0eXBlOlwic2ltcGxlXCIsd2lkdGg6MTAsY29sb3I6XCJyZ2JhKDI1NSwwLDAsLjUpXCIsc3BhY2VXaWR0aDo1fSxhbmltYXRlOntlbmFibGVkOiEwLGR1cmF0aW9uOjFlMyxlYXNlOlwiYm91bmNlXCJ9LHNpemU6MjAwLHN0YXJ0QW5nbGU6MCxlbmRBbmdsZTozNjAsdW5pdDpcIlwiLGRpc3BsYXlJbnB1dDohMCxpbnB1dEZvcm1hdHRlcjpmdW5jdGlvbih2KXtyZXR1cm4gdn0scmVhZE9ubHk6ITEsdHJhY2tXaWR0aDo1MCxiYXJXaWR0aDo1MCx0cmFja0NvbG9yOlwicmdiYSgwLDAsMCwwKVwiLGJhckNvbG9yOlwicmdiYSgyNTUsMCwwLC41KVwiLHByZXZCYXJDb2xvcjpcInJnYmEoMCwwLDAsMClcIix0ZXh0Q29sb3I6XCIjMjIyXCIsYmFyQ2FwOjAsZm9udFNpemU6XCJhdXRvXCIsc3ViVGV4dDp7ZW5hYmxlZDohMSx0ZXh0OlwiXCIsY29sb3I6XCJncmF5XCIsZm9udDpcImF1dG9cIn0sYmdDb2xvcjpcIlwiLHNjYWxlOntlbmFibGVkOiExLHR5cGU6XCJsaW5lc1wiLGNvbG9yOlwiZ3JheVwiLHdpZHRoOjQscXVhbnRpdHk6MjAsaGVpZ2h0OjEwLHNwYWNlV2lkdGg6MTV9LHN0ZXA6MSxkaXNwbGF5UHJldmlvdXM6ITEsbWluOjAsbWF4OjEwMCxkeW5hbWljT3B0aW9uczohMX07c2NvcGUub3B0aW9ucz1hbmd1bGFyLm1lcmdlKGRlZmF1bHRPcHRpb25zLHNjb3BlLm9wdGlvbnMpO3ZhciBrbm9iPW5ldyB1aS5Lbm9iKGVsZW1lbnRbMF0sc2NvcGUudmFsdWUsc2NvcGUub3B0aW9ucyk7aWYoc2NvcGUuJHdhdGNoKFwidmFsdWVcIixmdW5jdGlvbihuZXdWYWx1ZSxvbGRWYWx1ZSl7bnVsbD09PW5ld1ZhbHVlJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgbmV3VmFsdWV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvbGRWYWx1ZXx8bmV3VmFsdWU9PT1vbGRWYWx1ZXx8a25vYi5zZXRWYWx1ZShuZXdWYWx1ZSl9KSxzY29wZS5vcHRpb25zLmR5bmFtaWNPcHRpb25zKXt2YXIgaXNGaXJzdFdhdGNoT25PcHRpb25zPSEwO3Njb3BlLiR3YXRjaChcIm9wdGlvbnNcIixmdW5jdGlvbigpe2lmKGlzRmlyc3RXYXRjaE9uT3B0aW9ucylpc0ZpcnN0V2F0Y2hPbk9wdGlvbnM9ITE7ZWxzZXt2YXIgbmV3T3B0aW9ucz1hbmd1bGFyLm1lcmdlKGRlZmF1bHRPcHRpb25zLHNjb3BlLm9wdGlvbnMpO2tub2I9bmV3IHVpLktub2IoZWxlbWVudFswXSxzY29wZS52YWx1ZSxuZXdPcHRpb25zKSxkcmF3S25vYigpfX0sITApfXZhciBkcmF3S25vYj1mdW5jdGlvbigpe2tub2IuZHJhdyhmdW5jdGlvbih2YWx1ZSl7c2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7c2NvcGUudmFsdWU9dmFsdWV9KX0pfTtkcmF3S25vYigpfX19LGFuZ3VsYXIubW9kdWxlKFwidWkua25vYlwiLFtdKS5kaXJlY3RpdmUoXCJ1aUtub2JcIix1aS5rbm9iRGlyZWN0aXZlKX0oKTsiLCIndXNlIHN0cmljdCc7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xuLy8gcmVxdWlyZSgnYW5ndWxhci1tb2R1bGUtc2FuaXRpemUnKTtcbi8vIHJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL19pbmRleCcpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vbW9kZWxzL19pbmRleCcpO1xucmVxdWlyZSgnLi4vLi4vYm93ZXJfY29tcG9uZW50cy9uZy1rbm9iL2Rpc3Qvbmcta25vYi5taW4nKTtcbi8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9faW5kZXgnKTtcblxuLy8gY3JlYXRlIGFuZCBib290c3RyYXAgYXBwbGljYXRpb25cbmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHJlcXVpcmVzID0gW1xuICAgICdpb25pYycsXG4gICAgJ2FwcC5jb250cm9sbGVycycsXG4gICAgJ2FwcC5zZXJ2aWNlcycsXG4gICAgJ2FwcC5tb2RlbHMnLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5rbm9iJ1xuICAgIC8vICd0ZW1wbGF0ZXMnLFxuICAgIC8vICduZ1Nhbml0aXplJyxcbiAgICAvLyAnYXBwLnNlcnZpY2VzJyxcbiAgICAvLyAnYXBwLmNvbXBvbmVudHMnXG4gIF07XG5cbiAgLy8gbW91bnQgb24gd2luZG93IGZvciB0ZXN0aW5nXG4gIHdpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgcmVxdWlyZXMpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cy5kZXZlbG9wbWVudCcpKTtcblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykpO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5ydW4ocmVxdWlyZSgnLi9vbl9ydW4nKSk7XG5cbiAgYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwJ10pO1xuXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBcHBTZXR0aW5ncyA9IHtcbiAgeW9jYWxBUEk6e1xuICAgIC8vIGJhc2U6ICdodHRwOi8veW9lbmRwb2ludDQtd2Jicy5yaGNsb3VkLmNvbS9hcGkvdjEveW9rYWwvZGF0YS8nXG4gICAgYmFzZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODEwMC9hcGkvdjEveW9rYWwvZGF0YS8nXG4gIH0sXG5cbiAgR01BUF9ERUZBVUxUOntcbiAgXHRSQURJVVM6IDgwMCxcbiAgXHRaT09NOiAgIDE0XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwU2V0dGluZ3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBBcHBDdHJsKCRsb2csICRyb290U2NvcGUsICRzY29wZSwgJGlvbmljTW9kYWwsICR0aW1lb3V0LCBjb29yZGluYXRlcywgQXBwU2V0dGluZ3MpIHtcblxuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnQXBwQ3RybCcpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIC8vIHNldCBjdXJlbnQgcG9zaXRpb24gdG8gcm9vdFNjb3BlIHRvIG1ha2UgZ2xvYmFsbHkgYXZhaWxhYmxlIFxuICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbiA9IGNvb3JkaW5hdGVzO1xuICBcblxuICAvLyAvLyBGb3JtIGRhdGEgZm9yIHRoZSBsb2dpbiBtb2RhbFxuICAvLyAkc2NvcGUubG9naW5EYXRhID0ge307XG5cbiAgLy8gLy8gQ3JlYXRlIHRoZSBsb2dpbiBtb2RhbCB0aGF0IHdlIHdpbGwgdXNlIGxhdGVyXG4gIC8vICRpb25pY01vZGFsLmZyb21UZW1wbGF0ZVVybCgndGVtcGxhdGVzL2xvZ2luLmh0bWwnLCB7XG4gIC8vICAgc2NvcGU6ICRzY29wZVxuICAvLyB9KS50aGVuKGZ1bmN0aW9uKG1vZGFsKSB7XG4gIC8vICAgJHNjb3BlLm1vZGFsID0gbW9kYWw7XG4gIC8vIH0pO1xuXG4gIC8vIC8vIFRyaWdnZXJlZCBpbiB0aGUgbG9naW4gbW9kYWwgdG8gY2xvc2UgaXRcbiAgLy8gJHNjb3BlLmNsb3NlTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgLy8gICAkc2NvcGUubW9kYWwuaGlkZSgpO1xuICAvLyB9O1xuXG4gIC8vIC8vIE9wZW4gdGhlIGxvZ2luIG1vZGFsXG4gIC8vICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICRzY29wZS5tb2RhbC5zaG93KCk7XG4gIC8vIH07XG5cbiAgLy8gLy8gUGVyZm9ybSB0aGUgbG9naW4gYWN0aW9uIHdoZW4gdGhlIHVzZXIgc3VibWl0cyB0aGUgbG9naW4gZm9ybVxuICAvLyAkc2NvcGUuZG9Mb2dpbiA9IGZ1bmN0aW9uKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdEb2luZyBsb2dpbicsICRzY29wZS5sb2dpbkRhdGEpO1xuXG4gIC8vICAgLy8gU2ltdWxhdGUgYSBsb2dpbiBkZWxheS4gUmVtb3ZlIHRoaXMgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIGxvZ2luXG4gIC8vICAgLy8gY29kZSBpZiB1c2luZyBhIGxvZ2luIHN5c3RlbVxuICAvLyAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAvLyAgICAgJHNjb3BlLmNsb3NlTG9naW4oKTtcbiAgLy8gICB9LCAxMDAwKTtcbiAgLy8gfTtcblxuICBcblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQXBwQ3RybCcsIEFwcEN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQnJvd3NlQ3RybCgkc2NvcGUsIFlvY2FsKSB7XG4gIFxuICAkc2NvcGUucmFuZG8gPSBNYXRoLnJhbmRvbSgpO1xuICAkc2NvcGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0eXBlb2YgeDtcbiAgfVxuICAkc2NvcGUubG9jYXRpb25zID1bXTtcbiAgWW9jYWwuZ2V0KCkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAkc2NvcGUubG9jYXRpb25zID0gZGF0YTtcbiAgfSk7XG4gIHZhciBfbG9jYXRpb25zID0gW1xuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNmVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJMb3MgR2FsbG9zXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI5NTEgV29sZiBTdCBQaGlsYWRlbHBoaWEgUEEgMTkxNDggVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTIxMTc4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2MzI1OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE5MThcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU2ZlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhhcmRlbmFcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjc1NCBTIEhpY2tzIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ1XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NDE2ODZcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY4NDE4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NDIzXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllNzFcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJOYW0gU29uIEJha2VyeVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTYwMSBXYXNoaW5ndG9uIEF2ZSBQaGlsYWRlbHBoaWEgUEEgMTkxNDYgVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM5MjA5NFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNzAyNjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE4NVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTcyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQnJlZXp5J3MgQ2FmZVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTIwMCBQb2ludCBCcmVlemUgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0NiBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzcyMzcyXCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3NzEwNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjcwMlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTczXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGl6emEgQnJhaW4vTGl0dGxlIEJhYnknc1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjMxMyBGcmFua2ZvcmQgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTEyNSBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45ODA2NzQ2XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjEyODA5NjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjU4OTRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3NFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNrZXRjaCBCdXJnZXJcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjQxMyBFIEdpcmFyZCBBdmUgUGhpbGFkZWxwaGlhIFBBIDE5MTI1IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk3MDU3OTJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTMwMTE4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246NDkxN1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTc2XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVG9ydGlsbGVyaWEgU2FuIFJvbWFuXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI5NTEgUyA5dGggU3QgUGhpbGFkZWxwaGlhIFBBIDE5MTQ3IFVuaXRlZCBTdGF0ZXNcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzNzYzOTZcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTU3OTg5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjo5MzZcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU3OFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhhaSBTdHJlZXQgS2l0Y2hlbiAmIENvLlwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMzIgUyAxOHRoIFN0IFBoaWxhZGVscGhpYSBQQSAxOTEwMyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NTIxNjM4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE3MDQ2MTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE1OTBcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4MFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkZlZGVyYWwgRG9udXRzXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxMjE5IFMgMm5kIFN0IFBoaWxhZGVscGhpYSBQQSAxOTE0NyBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzIyMDk4XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE0NzQ2MDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImRpc3RhbmNlZnJvbWxvY2F0aW9uOjE5NDFcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJsb2NhdGlvblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIl9pZFwiOiBcIjU3MDlkOTRkODVkYjZmMDI5YmZmOWU4MVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJpbmcgQmluZyBEaW0gU3VtXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIxNjQ4IEUgUGFzc3l1bmsgQXZlIFBoaWxhZGVscGhpYSBQQSAxOTE0OCBVbml0ZWQgU3RhdGVzXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45Mjg5NTlcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY0NzA5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MTA1NlwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZTg4XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmxhY2sgTiBCcmV3XCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCI1MjMgRSBQYXNzeXVuayBBdmUsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDdcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5Ljk0MTc2MVwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNTAzOTI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxNjQyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJQaGlsbHkgRmxhdm9yc1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjAwNCBGYWlybW91bnQgQXZlLCBQaGlsYWRlbHBoaWEsIFBBIDE5MTMwXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NjcwODdcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTcwNTEyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MzI0NFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZThmXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ2Fwb2dpcm8gR2VsYXRvXCIsXG4gICAgICAgICAgXCJhZHJlc3NcIjogXCIyMzMgQ2hlc3RudXQgU3RyZWV0LCBQaGlsYWRlbHBoaWEsIFBBXCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45NDg4MjJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTQ1MzU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoyMzUyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllOTNcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCIxc3QgT3JpZW50YWwgU3VwZXJtYXJrZXRcIixcbiAgICAgICAgICBcImFkcmVzc1wiOiBcIjExMTEgUyA2dGggU3QgUGhpbGFkZWxwaGlhLCBQQSAxOTE0N1wiLFxuICAgICAgICAgIFwibGF0XCI6IFwiMzkuOTM0MDE1OFwiLFxuICAgICAgICAgIFwibG9uZ1wiOiBcIi03NS4xNTM2ODUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXN0YW5jZWZyb21sb2NhdGlvbjoxMzczXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTBcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJLICYgQSBTYW5kd2ljaGVzICYgR3JvY2VyeVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMTQzOSBTIDIwdGggU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDZcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkzMzAwMTJcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTc3NDc0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246OTEwXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwibG9jYXRpb25cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJfaWRcIjogXCI1NzA5ZDk0ZDg1ZGI2ZjAyOWJmZjllYTFcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTb3V0aCBIb3VzZVwiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwiMjUzNSBTIDEzdGggU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDhcIixcbiAgICAgICAgICBcImxhdFwiOiBcIjM5LjkxODAzNzRcIixcbiAgICAgICAgICBcImxvbmdcIjogXCItNzUuMTY4NzEzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246MjIwNVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImxvY2F0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiX2lkXCI6IFwiNTcwOWQ5NGQ4NWRiNmYwMjliZmY5ZWE3XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQ2luZW11Z1wiLFxuICAgICAgICAgIFwiYWRyZXNzXCI6IFwicyAxOTE0OCwgMTYwNyBTIEJyb2FkIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ4XCIsXG4gICAgICAgICAgXCJsYXRcIjogXCIzOS45MzAxODM5XCIsXG4gICAgICAgICAgXCJsb25nXCI6IFwiLTc1LjE2ODAwNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzdGFuY2Vmcm9tbG9jYXRpb246ODYwXCJcbiAgICAgIF1cbiAgICB9XG4gIF07XG5cblxufTtcblxuY29udHJvbGxlcnNNb2R1bGUuY29udHJvbGxlcignQnJvd3NlQ3RybCcsIEJyb3dzZUN0cmwpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnRyb2xsZXJzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTWFwQ3RybCgkcm9vdFNjb3BlLCAkc2NvcGUsICRsb2csICR0aW1lb3V0LCAkaW9uaWNMb2FkaW5nLCBBcHBTZXR0aW5ncywgR01hcCApIHtcblxuICAgICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiTWFwQ3RybFwiKTtcblxuIFx0ICAvLyBWaWV3TW9kZWxcbiAgXHR2YXIgdm0gPSB0aGlzO1xuICAgIHZtLmdtYXAgPSBuZXcgR01hcCh7em9vbToxM30pOyAgICBcbiAgICB2bS5nbWFwLmhlaWdodCA9IDYyNS8yO1xuICAgIHZhciBsb2NhdGlvbnNSYWRpdXMgPSB2bS5nbWFwLnNldFJhZGl1c0NpcmNsZSgpO1xuICAgIHZtLmdtYXAucGxvdExvY2F0aW9ucygpO1xuXG4gICAgXG5cblxuICAgIHZtLmtub2IgPXtcbiAgICAgIHZhbHVlOiB2bS5nbWFwLm1hcE9wdGlvbnMuem9vbSxcbiAgICAgIG9wdGlvbnM6e1xuICAgICAgICBzaXplOiAyMDAsXG4gICAgICAgIG1pbjogIDEsXG4gICAgICAgIG1heDogIDQwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBcbiAgICAgICAgYmFyQ29sb3I6ICcjNUJDMDFFJyxcbiAgICAgICAgdHJhY2tDb2xvcjogJyMyMTIxMjEnLFxuICAgICAgICB0cmFja1dpZHRoOiAxNSxcbiAgICAgICAgYmFyV2lkdGg6IDMwLFxuICAgICAgICBzdWJUZXh0OiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAnbWV0ZXIgcmFkaXVzJ1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIH07XG5cblxuICAkc2NvcGUuJHdhdGNoKFwiTWFwLmtub2IudmFsdWVcIiwgZnVuY3Rpb24ob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OiRyb290U2NvcGUuY3VycmVudFBvc2l0aW9uLmxhdGl0dWRlLCBsbmc6JHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubG9uZ2l0dWRlfSk7XG4gICAgICBsb2NhdGlvbnNSYWRpdXMuc2V0UmFkaXVzKChuZXdWYWx1ZS8yKSoxMDApO1xuICAgICAgdmFyIGhhc0JpbmcgPSBsb2NhdGlvbnNSYWRpdXMuY29udGFpbnNMb2NhdGlvbih7bGF0OjkuOTI4OTU5LCBsbmc6LTc1LjE2NDcwOTJ9LCBsb2NhdGlvbnNSYWRpdXMpO1xuICAgICAgY29uc29sZS5sb2coaGFzQmluZyk7XG4gICAgICBcbiAgICAgIC8vIHZtLmdtYXAubWFwLnNldFpvb20obmV3VmFsdWUpO1xuICBcbiAgfSk7XG4gICAgXG5cblxuICAkcm9vdFNjb3BlLiRvbignbWFya2VyOmNsaWNrZWQnLCBmdW5jdGlvbihlLCBsb2NhbGUpIHtcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB2bS5nbWFwLmhlaWdodCA9IHZtLmdtYXAuaGVpZ2h0LzI7XG4gICAgICB2bS5nbWFwLm1hcC5wYW5Ubyh7bGF0OnBhcnNlRmxvYXQobG9jYWxlLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzpwYXJzZUZsb2F0KGxvY2FsZS5sb25nKX0pO1xuICAgIH0pO1xuICAgIFxuICB9KTtcbn07Ly8vLyBNYXBDdHJsXG5cblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdNYXBDdHJsJywgTWFwQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdEN0cmwoJHNjb3BlKSB7XG4gIFxuXG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0Q3RybCcsIFBsYXlsaXN0Q3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29udHJvbGxlcnNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBQbGF5bGlzdHNDdHJsKCRzY29wZSkge1xuICBcbiAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgIHsgdGl0bGU6ICdSZWdnYWUnLCBpZDogMSB9LFxuICAgIHsgdGl0bGU6ICdDaGlsbCcsIGlkOiAyIH0sXG4gICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgIHsgdGl0bGU6ICdJbmRpZScsIGlkOiA0IH0sXG4gICAgeyB0aXRsZTogJ1JhcCcsIGlkOiA1IH0sXG4gICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gIF07XG5cbn07XG5cbmNvbnRyb2xsZXJzTW9kdWxlLmNvbnRyb2xsZXIoJ1BsYXlsaXN0c0N0cmwnLCBQbGF5bGlzdHNDdHJsKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb250cm9sbGVyc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFNlYXJjaEN0cmwoJHNjb3BlLCAkcm9vdFNjb3BlLCAkcSwgICRsb2csICBMb2NhdGlvbnNTZXJ2aWNlLCAgJGlvbmljTG9hZGluZywgICRpb25pY1NsaWRlQm94RGVsZWdhdGUsIEFwcFNldHRpbmdzKSB7XG4gICAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ1NlYXJjaEN0cmwnKTtcblxuIFx0Ly8gVmlld01vZGVsXG4gIFx0dmFyIHZtID0gdGhpcztcbiAgICB2bS5yYWRpdXMgPSBBcHBTZXR0aW5ncy5HTUFQX1JBRElVUztcbiAgICAkc2NvcGUucmFkaXVzID0gQXBwU2V0dGluZ3MuR01BUF9SQURJVVM7XG5cbiAgICAkc2NvcGUubG9jYXRpb25zID1bXTtcbiAgICAkc2NvcGUuQ3VycmVudENvb3JkcyA9ICAkcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbjtcblxuICAgICRpb25pY0xvYWRpbmcuc2hvdyh7XG4gICAgXHR0ZW1wbGF0ZTogXCJGaW5kaW5nIFJhZCBTcG90cyAuLi5cIixcbiAgICBcdGJhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cblxuICAgIExvY2F0aW9uc1NlcnZpY2UuZ2V0KHtyYWRpdXM6IHZtLnJhZGl1cywgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6ICAgICRzY29wZS5DdXJyZW50Q29vcmRzLmxhdGl0dWRlLCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogICAgJHNjb3BlLkN1cnJlbnRDb29yZHMubG9uZ2l0dWRlIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWzBdLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbMF0gPWxvY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9jYXRpb25zID0gZGF0YTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW9uaWNTbGlkZUJveERlbGVnYXRlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpb25pY0xvYWRpbmcuaGlkZSgpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgXHQgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICRzY29wZS5zbGlkZUhhc0NoYW5nZWQgPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9ICRzY29wZS5sb2NhdGlvbnNbaWR4XTtcbiAgICAgICAgJGxvZy5kZWJ1Zygnc2xpZGVIYXNDaGFuZ2VkIHtuYW1lfScsIGN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgY3VycmVudFNsaWRlLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIFxufTtcblxuXG5jb250cm9sbGVyc01vZHVsZS5jb250cm9sbGVyKCdTZWFyY2hDdHJsJywgU2VhcmNoQ3RybCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbW9kZWxzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiovXG5cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdHTWFwJywgZnVuY3Rpb24oJGxvZywgJHJvb3RTY29wZSwgTG9jYXRpb25zU2VydmljZSwgQXBwU2V0dGluZ3Mpe1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnR01hcCcpO1xuXG4gIHZhciBjdXJyZW50Q2VudGVyID0gJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb247XG5cbiAgZnVuY3Rpb24gR01hcChtYXBTZXR0aW5ncyl7XG4gICAgXG4gICAgdGhpcy5tYXBPcHRpb25zID0ge1xuICAgICAgY2VudGVyOiAgICB7bGF0OiBjdXJyZW50Q2VudGVyLmxhdGl0dWRlLCBcbiAgICAgICAgICAgICAgICAgIGxuZzogY3VycmVudENlbnRlci5sb25naXR1ZGV9LFxuICAgICAgem9vbTogICAgICBBcHBTZXR0aW5ncy5HTUFQX0RFRkFVTFQuWk9PTSxcbiAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICByYWRpdXM6ICAgIEFwcFNldHRpbmdzLkdNQVBfREVGQVVMVC5SQURJVVMsXG4gICAgfTtcblxuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMubWFwT3B0aW9ucywgbWFwU2V0dGluZ3MpO1xuICAgIFxuICAgICRsb2cuZGVidWcoJ3pvb20ge21hcE9wdGlvbnMuem9vbX0nLCB0aGlzKTtcbiAgICBcbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXBcIiksIHRoaXMubWFwT3B0aW9ucyk7XG5yZXMgIH07Ly9HTWFwIGNvbnN0cnVjdG9yXG5cblxuICBHTWFwLnByb3RvdHlwZSA9e1xuXG4gICAgZHJvcE1hcmtlcjogZnVuY3Rpb24obWFya2VyRGF0YSkge1xuICAgICAgdmFyIF9tYXJrZXJTZXR0aW5ncyA9IHt9O1xuICAgICAgYW5ndWxhci5leHRlbmQoX21hcmtlclNldHRpbmdzLCB0aGlzLm1hcE9wdGlvbnMsIG1hcmtlckRhdGEpO1xuICAgICAgJGxvZy5kZWJ1ZygnZHJvcE1hcmtlciBmb3IgXCJ7dGl0bGV9XCJcIiBhdCBcIntjZW50ZXIubGF0fSwge2NlbnRlci5sbmd9XCInLCBfbWFya2VyU2V0dGluZ3MpO1xuICAgICAgXG4gICAgICB2YXIgX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246ICBfbWFya2VyU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgbWFwOiAgICAgICB0aGlzLm1hcCxcbiAgICAgICAgICAgIHRpdGxlOiAgICAgX21hcmtlclNldHRpbmdzLnRpdGxlLFxuICAgICAgICAgICAgb3BhY2l0eTogICBfbWFya2VyU2V0dGluZ3Mub3BhY2l0eSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1BcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX21hcmtlcjtcbiAgICB9LFxuXG5cbiAgICBidWlsZEluZm9XaW5kb3c6IGZ1bmN0aW9uKGxvY2F0aW9uSW5mbywgbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgIHZhciBfbWFwID0gdGhpcztcblxuICAgICAgJGxvZy5kZWJ1ZygnYnVpbGRJbmZvV2luZG93IGZvciB7bmFtZX0nLCBsb2NhdGlvbkluZm8pO1xuICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8aDMgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZ1wiPicrbG9jYXRpb25JbmZvLm5hbWUrJzwvaDM+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxwPicrbG9jYXRpb25JbmZvLnRyYXZlbFRpbWUrJyB3YWxrPC9wPidcbiAgICAgIH0pO1xuXG4gICAgICBsb2NhdGlvbk1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtYXJrZXI6Y2xpY2tlZCcsIGxvY2F0aW9uSW5mbyApO1xuICAgICAgICBpbmZvd2luZG93Lm9wZW4oIF9tYXAubWFwICxsb2NhdGlvbk1hcmtlcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGluZm93aW5kb3c7XG4gICAgfSxcblxuXG4gICAgcGxvdExvY2F0aW9uczpmdW5jdGlvbihwbG90RGF0YSkge1xuICAgICAgdmFyIF9tYXAgPSB0aGlzO1xuICAgICAgdmFyIF9wbG90U2V0dGluZ3MgPXt9OyBcblxuICAgICAgYW5ndWxhci5leHRlbmQoX3Bsb3RTZXR0aW5ncyx0aGlzLm1hcE9wdGlvbnMsIHBsb3REYXRhKTtcbiAgICAgICRsb2cuZGVidWcoJ3Bsb3RMb2NhdGlvbnMgd2l0aGluIGEgXCJ7cmFkaXVzfVwiIG1ldGVyIHJhZGl1cyBvZiBcIntjZW50ZXIubGF0fSwge2NlbnRlci5sbmd9XCInLCBfcGxvdFNldHRpbmdzKTtcbiAgICAgIFxuICAgICAgLy8gZHJvcCBtYXJrZXIgb24gY3VycmVudCBsb2NhdGlvblxuICAgICAgX21hcC5kcm9wTWFya2VyKHt0aXRsZTpcIllvdSBBcmUgSGVyZVwiLCBvcGFjaXR5OjF9KTtcblxuICAgICAgLy8gZ2V0IGFsbCBsb2NhdGlvbnMgYXJvdW5kIHNwZWNpZmllZCBhcmVhXG4gICAgICBMb2NhdGlvbnNTZXJ2aWNlXG4gICAgICAgIC5nZXQoe3JhZGl1czogX3Bsb3RTZXR0aW5ncy5yYWRpdXMsIFxuICAgICAgICAgICAgICBsYXQ6ICAgIF9wbG90U2V0dGluZ3MuY2VudGVyLmxhdCwgXG4gICAgICAgICAgICAgIGxuZzogICAgX3Bsb3RTZXR0aW5ncy5jZW50ZXIubG5nIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGxvY2F0aW9ucykge1xuXG4gICAgICAgICAgLy8gcHJvY2VzcyBsb2NhdGlvbnMgXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGxvY2F0aW9ucywgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ3Bsb3RMb2NhdGlvbiB7bmFtZX0nLGxvY2F0aW9uKTtcbiAgICAgICAgICAgIC8vZ2V0IHRoZSB0cmF2ZWxUaW1lIGZvckVhY2ggbG9jYXRpb25cbiAgICAgICAgICAgIGxvY2F0aW9uLnNldFRyYXZlbFRpbWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgIHZhciBsb2NhdGlvblBpbiA9IF9tYXAuZHJvcE1hcmtlcih7Y2VudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQobG9jYXRpb24ubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChsb2NhdGlvbi5sb25nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBsb2NhdGlvbi5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF9tYXAuYnVpbGRJbmZvV2luZG93KGxvY2F0aW9uLCBsb2NhdGlvblBpbik7XG4gICAgICAgICAgICAgIF9tYXAucGxvdFJvdXRlVG8obG9jYXRpb24pO1xuXG4gICAgICAgICAgICB9KTsvLy9sb2NhdGlvbi5zZXRUcmF2ZWxUaW1lXG5cblxuICAgICAgICAgIH0pOy8vL2VuZCBhbmd1bGFyLmZvckVhY2hcblxuICAgICAgICB9KTsvL2VuZCBMb2NhdGlvbnNTZXJ2aWNlXG5cbiAgICB9LFxuXG4gICAgcGxvdFJvdXRlVG86IGZ1bmN0aW9uKGxvY2F0aW9uKXtcbiAgICAgICRsb2cuZGVidWcoJ3Bsb3RSb3V0ZVRvIHtuYW1lfScsbG9jYXRpb24pO1xuXG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX3JvdXRlU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IHRydWUsXG4gICAgICAgICAgICBzdXBwcmVzc01hcmtlcnM6ICAgICB0cnVlLFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgICAgICAgICAgX21hcC5tYXBPcHRpb25zLmNlbnRlclxuICAgICAgfTtcblxuICAgICAgYW5ndWxhci5leHRlbmQoX3JvdXRlU2V0dGluZ3MsIHRoaXMubWFwT3B0aW9ucyk7XG5cbiAgICAgIHZhciBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgICAgICAgbWFwOiAgICAgICAgICAgICAgICAgX21hcC5tYXAsXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICAgICAgICAgICBfcm91dGVTZXR0aW5ncy5kcmFnZ2FibGUsXG4gICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBfcm91dGVTZXR0aW5ncy5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiAgICAgX3JvdXRlU2V0dGluZ3Muc3VwcHJlc3NNYXJrZXJzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7bGF0OiBwYXJzZUZsb2F0KGxvY2F0aW9uLmxhdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQobG9jYXRpb24ubG9uZyl9LFxuICAgICAgICAgICAgb3JpZ2luOiAgICAgIF9yb3V0ZVNldHRpbmdzLm9yaWdpbixcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6ICBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpOy8vIFBhc3MgdGhlIGRpcmVjdGlvbnMgcmVxdWVzdCB0byB0aGUgZGlyZWN0aW9ucyBzZXJ2aWNlLlxuXG5cbiAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSByb3V0ZSBvbiB0aGUgbWFwLlxuICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTsvLy9kaXJlY3Rpb3NTZXJ2aWNlLnJvdXRlXG5cblxuICAgIH0sXG5cbiAgICBzZXRSYWRpdXNDaXJjbGU6IGZ1bmN0aW9uKHJhZGl1c0NpcmNsZVNldHRpbmdzKSB7XG4gICAgICB2YXIgX21hcCA9IHRoaXM7XG4gICAgICB2YXIgX2NpcmNsZVNldHRpbmdzID17XG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAgICcjMDA4NGI0JyxcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6ICAxLFxuICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICAnIzAwODRiNCcsXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIDAuMDYyNSxcbiAgICAgIH07XG5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKF9jaXJjbGVTZXR0aW5ncyAsdGhpcy5tYXBPcHRpb25zLCByYWRpdXNDaXJjbGVTZXR0aW5ncyk7XG5cbiAgICAgIHZhciBsb2NhdGlvbnNDaXJjbGUgPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogICBfY2lyY2xlU2V0dGluZ3Muc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogX2NpcmNsZVNldHRpbmdzLnN0cm9rZU9wYWNpdHksXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAgX2NpcmNsZVNldHRpbmdzLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICAgICBfY2lyY2xlU2V0dGluZ3MuZmlsbENvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAgIF9jaXJjbGVTZXR0aW5ncy5maWxsT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBtYXA6ICAgICAgICAgICBfbWFwLm1hcCxcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICAgICAgICBfY2lyY2xlU2V0dGluZ3MuY2VudGVyLFxuICAgICAgICAgICAgICAgIHJhZGl1czogICAgICAgIF9jaXJjbGVTZXR0aW5ncy5yYWRpdXNcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxvY2F0aW9uc0NpcmNsZTtcbiAgICB9XG5cbiAgfTtcbiAgICBcblxuXG4gIHJldHVybiBHTWFwO1xuXG4gIFxufSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZGVsc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbm1vZGVsc01vZHVsZS5mYWN0b3J5KCdMb2NhdGlvbicsIGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2csICRxICkge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnTG9jYXRpb24nKTtcblxuICBmdW5jdGlvbiBMb2NhdGlvbihMb2NhdGlvbkRhdGEpe1xuICAgIGFuZ3VsYXIuZXh0ZW5kKHRoaXMsIExvY2F0aW9uRGF0YSk7XG4gICAgLy8gJGxvZy5kZWJ1Zygne25hbWV9JywgdGhpcyk7XG4gICAgXG4gIH1cblxuXG4gIExvY2F0aW9uLnJlc3BvbnNlVHJhbnNmb3JtZXIgPSBmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG4gICAgJGxvZy5kZWJ1ZygncmVzb3BvbnNlVHJhbnNmb3JtZXIge2xlbmd0aH0nLCByZXNwb25zZURhdGEubG9jYXRpb25zKTtcblxuICAgIHJldHVybiByZXNwb25zZURhdGEubG9jYXRpb25zXG4gICAgXHRcdFx0XHRcdC5tYXAoTG9jYXRpb24uYnVpbGQpO1xuICB9XG5cblxuICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0VHJhdmVsVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGxvZy5kZWJ1Zygnc2V0VHJhdmVsVGltZSB7bmFtZX0nLCB0aGlzKTtcbiAgICAgIFxuICAgICAgdmFyIF9sb2NhdGlvbiA9IHRoaXM7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2U7XG4gICAgICAgc2VydmljZS5nZXREaXN0YW5jZU1hdHJpeCh7XG4gICAgICAgICBvcmlnaW5zOiAgICAgICBbe2xhdDogJHJvb3RTY29wZS5jdXJyZW50UG9zaXRpb24ubGF0aXR1ZGUsIGxuZzokcm9vdFNjb3BlLmN1cnJlbnRQb3NpdGlvbi5sb25naXR1ZGV9XSxcbiAgICAgICAgIGRlc3RpbmF0aW9uczogIFt7bGF0OiBwYXJzZUZsb2F0KHRoaXMubGF0KSwgbG5nOiBwYXJzZUZsb2F0KHRoaXMubG9uZyl9XSxcbiAgICAgICAgIHRyYXZlbE1vZGU6ICAgIGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORyxcbiAgICAgICAgIHVuaXRTeXN0ZW06ICAgIGdvb2dsZS5tYXBzLlVuaXRTeXN0ZW0uSU1QRVJJQUwsXG4gICAgICAgICBhdm9pZEhpZ2h3YXlzOiBmYWxzZSxcbiAgICAgICAgIGF2b2lkVG9sbHM6ICAgIGZhbHNlXG4gICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgXHRfbG9jYXRpb24udHJhdmVsVGltZSA9IHJlc3BvbnNlLnJvd3NbMF0uZWxlbWVudHNbMF0uZHVyYXRpb24udGV4dDtcbiAgICAgICAgIFx0ZGVmZXJyZWQucmVzb2x2ZShfbG9jYXRpb24pO1xuICAgICAgICAgLy8gJGxvZy5kZWJ1ZyhcIntuYW1lfSAtIHt0cmF2ZWxUaW1lfVwiLCBfbG9jYXRpb24pO1xuICAgICAgICAgIFxuICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cbiAgfVxuXG5cbiAgTG9jYXRpb24uYnVpbGQgPSBmdW5jdGlvbihsRGF0YSkge1xuICAgIC8vICRsb2cuZGVidWcoJ2J1aWxkIHtuYW1lfScsIGxEYXRhKTtcbiAgICAvLyBMb2NhdGlvbi5zZXRUcmF2ZWxUaW1lKGxEYXRhKTtcbiAgICByZXR1cm4gbmV3IExvY2F0aW9uKGxEYXRhKTtcbiAgfVxuXG4gICBcblxuICBcbiBcbiAgcmV0dXJuIExvY2F0aW9uO1xuXG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLm1vZGVscycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTsiLCIndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRwcm92aWRlKSB7XG4gIFxuICAvL2FjdGl2YXRlIExvZ0RlY29yYXRvclxuICByZXF1aXJlKCcuL3V0aWxzL2xvZ2dpbmcvTG9nRGVjb3JhdG9yLmpzJykoJHByb3ZpZGUpO1xuXG4kc3RhdGVQcm92aWRlclxuXG4gIC5zdGF0ZSgnYXBwJywge1xuICAgIHVybDogJy9hcHAnLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnLFxuICAgIHJlc29sdmU6e1xuICAgICAgICBjb29yZGluYXRlczpmdW5jdGlvbihDdXJyZW50Q29vcmRzKSB7XG4gICAgICAgICAgcmV0dXJuIEN1cnJlbnRDb29yZHMuZ2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLnN0YXRlKCdhcHAuc2VhcmNoJywge1xuICAgIHVybDogJy9zZWFyY2gnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NlYXJjaEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnYXBwLm1hcCcsIHtcbiAgICAgIFxuICAgICAgdXJsOiAnL21hcCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWFwLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYXBDdHJsIGFzIE1hcCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAucGxheWxpc3RzJywge1xuICAgICAgdXJsOiAnL3BsYXlsaXN0cycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGxheWxpc3RzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdHNDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAuc3RhdGUoJ2FwcC5zaW5nbGUnLCB7XG4gICAgdXJsOiAnL3BsYXlsaXN0cy86cGxheWxpc3RJZCcsXG4gICAgdmlld3M6IHtcbiAgICAgICdtZW51Q29udGVudCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGxheWxpc3QuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvbWFwJyk7XG4gIFxuICBcblxuXG59Ly8vLyBPbkNvbmZpZ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSwgJGxvZykge1xuICAkbG9nID0gJGxvZy5nZXRJbnN0YW5jZSgnT25SdW4nKTtcbiAgXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuZGlzYWJsZVNjcm9sbCh0cnVlKTtcblxuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDdXJyZW50Q29vcmRzKCRxLCAkaHR0cCwgJGxvZywgIEFwcFNldHRpbmdzKSB7XG4gICRsb2cgPSAkbG9nLmdldEluc3RhbmNlKFwiQ3VycmVudENvb3Jkc1NlcnZpY2VcIik7XG4gIFxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpOyAgICBcblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zKSB7XG4gICAgICAgIFxuICAgICAgJGxvZy5kZWJ1ZygnbGF0OiB7Y29vcmRzLmxhdGl0dWRlfScscG9zKTtcbiAgICAgICRsb2cuZGVidWcoJ2xvbmc6IHtjb29yZHMubG9uZ2l0dWRlfScscG9zKTtcblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShwb3MuY29vcmRzKTtcbiAgICAgICAgXG4gICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICRsb2cud2FybignVW5hYmxlIHRvIGdldCBsb2NhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICB9KTtcblxuXG4gICAgXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ3VycmVudENvb3JkcycsIEN1cnJlbnRDb29yZHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gTG9jYXRpb25zU2VydmljZSgkbG9nLCBZb2NhbCwgTG9jYXRpb24pIHtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJMb2NhdGlvbnNTZXJ2aWNlU2VydmljZVwiKTtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oIGdldERhdGEgKSB7XG5cbiAgICAkbG9nLmRlYnVnKCdHRVQgbG9jYXRpb24gaW4gYSB7cmFkaXVzfSAgb2Yge2xhdH0sIHtsbmd9JywgZ2V0RGF0YSk7XG5cbiAgICByZXR1cm4gWW9jYWwuZ2V0KGdldERhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oTG9jYXRpb24ucmVzcG9uc2VUcmFuc2Zvcm1lcik7XG5cbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdMb2NhdGlvbnNTZXJ2aWNlJywgTG9jYXRpb25zU2VydmljZSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBZb2NhbCgkcSwgJGh0dHAsIEFwcFNldHRpbmdzLCAkbG9nKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgJGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoXCJZb2NhbFNlcnZpY2VcIik7XG5cbiAgc2VydmljZS5nZXQgPSBmdW5jdGlvbiggZ2V0RGF0YSApIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgLy8gL2xpc3RCeURpc3RhbmNlQ2F0L0Zvb2QvODAwMC8zOS45Mzc4OTMvLTc1LjE2ODkzNDdcbiAgICRodHRwLmdldChBcHBTZXR0aW5ncy55b2NhbEFQSS5iYXNlKydsaXN0QnlEaXN0YW5jZUNhdC9Gb29kLycrZ2V0RGF0YS5yYWRpdXMrJy8nK2dldERhdGEubGF0KycvJytnZXREYXRhLmxuZykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ2ZvdW5kIHtsZW5ndGh9IHNwb3RzIHdpdGhpbiAnK2dldERhdGEucmFkaXVzKycgbWV0ZXJzIG9mICcrZ2V0RGF0YS5sYXQrJywnK2dldERhdGEubG5nLCBkYXRhLmxvY2F0aW9ucyk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gZ2V0RGF0YS5yYWRpdXM7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyLCBzdGF0dXMpIHtcbiAgICAgICAgJGxvZy53YXJuKCdVbmFibGUgdG8gZ2V0IGxvY2F0aW9uOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyLCBzdGF0dXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cbn1cblxuc2VydmljZXNNb2R1bGUuc2VydmljZSgnWW9jYWwnLCBZb2NhbCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBFeGFtcGxlU2VydmljZSgkcSwgJGh0dHApIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuXG4gIHNlcnZpY2UuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICRodHRwLmdldCgnYXBpUGF0aCcpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVyciwgc3RhdHVzKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIsIHN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gc2VydmljZTtcblxufVxuXG5zZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdFeGFtcGxlU2VydmljZScsIEV4YW1wbGVTZXJ2aWNlKTsiLCIvKipcbiAqIEBhdXRob3IgICAgIFRob21hcyBCdXJsZXNvblxuICogQGF1dGhvciAgICAgU3RhY2tPdmVyZmxvdyAtIEhhcnRvLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTU0MDgvaG93LWRvLWktZm9ybWF0LWEtdGltZXN0YW1wLWluLWphdmFzY3JpcHQtdG8tZGlzcGxheS1pdC1pbi1ncmFwaHMtdXRjLWlzLWZpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogIFxuICogRGF0ZVRpbWUgdXRpbGl0eSBjbGFzcyB0aGF0IHNwaXRzIG91dCBVVEMgdGltZXN0YW1wIHN0cmluZ3MgdXN1YWxseSB1c2VkIGluIGEgcmVwb3J0aW5nLCBwcmludC1jYXBhYmxlIHByb2Nlc3MuXG4qL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBidWlsZFRpbWVTdHJpbmcgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgXCIlaDolbTolczolelwiO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwYWQodmFsdWUsIGlzTWlsbGlTZWNvbmRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAoaXNNaWxsaVNlY29uZHMpID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNaWxsaVNlY29uZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNNaWxsaVNlY29uZHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiMDBcIiArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPCAxMDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCIwXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4odmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCAyKSA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lKFthLXpBLVpdKS9nLCBmdW5jdGlvbiAoXywgZm10Q29kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZm10Q29kZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGZvcm1hdCBjb2RlOiBcIiArIGZtdENvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAvLyBQdWJsaXNoIEFQSSBmb3IgRGF0ZVRpbWUgdXRpbHNcbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIGZvcm1hdHRlZE5vdzogZnVuY3Rpb24gKClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYnVpbGRUaW1lU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBcbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXR0ZWROb3c6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJ1aWxkVGltZVN0cmluZyhuZXcgRGF0ZSgpKTsgfVxuIH07XG5cblxuXG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0RlY29yYXRvclxuICogIEBzb3VyY2U6IGh0dHA6Ly9zb2x1dGlvbm9wdGltaXN0LmNvbS8yMDEzLzEwLzA3L2VuaGFuY2UtYW5ndWxhcmpzLWxvZ2dpbmctdXNpbmctZGVjb3JhdG9ycy9cbiAqL1xuXG4gdmFyIExvZ0RlY29yYXRvciA9IGZ1bmN0aW9uKCAkcHJvdmlkZSAgKXtcblxuXG4gICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIG91ciAkbG9nIGRlY29yYXRvciB3aXRoIEFuZ3VsYXJKUyAkcHJvdmlkZXJcbiAgICAgICAgICAgICAgJHByb3ZpZGUuZGVjb3JhdG9yKCAnJGxvZycsIFsgXCIkZGVsZWdhdGVcIiwgZnVuY3Rpb24oICRkZWxlZ2F0ZSApXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIC8vIE5PVEU6IHRoZSBMb2dFbmNoYW5jZXIgbW9kdWxlIHJldHVybnMgYSBGVU5DVElPTiB0aGF0IHdlIG5hbWVkIGBlbmNoYW5jZUxvZ2dlckZuYFxuICAgICAgICAgICAgICAgLy8gICAgICAgQWxsIHRoZSBkZXRhaWxzIG9mIGhvdyB0aGUgYGVuY2hhbmNlbWVudGAgd29ya3MgaXMgZW5jYXBzdWxhdGVkIGluIExvZ0VuaGFuY2VyIVxuXG4gICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL0xvZ0VuaGFuY2VyLmpzJykoICRkZWxlZ2F0ZSApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJGRlbGVnYXRlO1xuICAgICAgICAgICAgICB9XSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gIExvZ0RlY29yYXRvcjsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIExvZ0VuaGFuY2VyXG4gKiBUaGlzIGFkZHMgdGltZXN0YW1wcyBhbmQgc3VwcGxhbnQgZnVuY3Rpb25hbGl0eSB0byBBbmd1bGFyICRsb2cgc2VydmljZVxuICogQHNvdXJjZTogaHR0cDovL3NvbHV0aW9ub3B0aW1pc3QuY29tLzIwMTMvMTAvMDcvZW5oYW5jZS1hbmd1bGFyanMtbG9nZ2luZy11c2luZy1kZWNvcmF0b3JzL1xuICogQGFwaTogcHVibGljXG4gKiBAcmV0dXJuczogT2JqZWN0IC0gZXh0ZW5kZWQgJGxvZyBzZXJ2aWNlXG4gKi9cblxudmFyIGVuY2hhbmNlTG9nZ2VyID0gZnVuY3Rpb24oICRsb2cgKXtcbiAgdmFyIHN1cHBsYW50ID0gcmVxdWlyZSgnLi4vc3VwcGxhbnQuanMnKTtcbiAgdmFyIERhdGVUaW1lID0gcmVxdWlyZSgnLi4vRGF0ZVRpbWUuanMnKTtcblxuXG4gIC8qKlxuICAgKiBDYXB0dXJlIHRoZSBvcmlnaW5hbCAkbG9nIGZ1bmN0aW9uczsgZm9yIHVzZSBpbiBlbmhhbmNlZExvZ0ZuKClcbiAgICogQGFwaSAgcHJpdmF0ZSBcbiAgICovXG4gIFxuICB2YXIgXyRsb2cgPSAoZnVuY3Rpb24oICRsb2cgKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZyAgIDogJGxvZy5sb2csXG4gICAgICAgIGluZm8gIDogJGxvZy5pbmZvLFxuICAgICAgICB3YXJuICA6ICRsb2cud2FybixcbiAgICAgICAgZGVidWcgOiAkbG9nLmRlYnVnLFxuICAgICAgICAvLyBlcnJvciA6ICRsb2cuZXJyb3JcbiAgICAgIH07XG4gIH0pKCAkbG9nICk7IFxuXG5cblxuICAgLyoqXG4gICAgKiBQYXJ0aWFsIGFwcGxpY2F0aW9uIHRvIHByZS1jYXB0dXJlIGEgbG9nZ2VyIGZ1bmN0aW9uXG4gICAgKiBAYXBpOiAgcHJpdmF0ZSBcbiAgICAqIEByZXR1cm5zOiBGdW5jdGlvbiBcbiAgICAqL1xuICAgIHZhciBwcmVwYXJlTG9nRm4gPSBmdW5jdGlvbiggbG9nRm4sIGNsYXNzTmFtZSApe1xuXG4gICAgICAvKipcbiAgICAgICAqIEludm9rZSB0aGUgc3BlY2lmaWVkIGBsb2dGbjxgIHdpdGggdGhlIHN1cHBsYW50IGZ1bmN0aW9uYWxpdHkuLi5cbiAgICAgICAqIEBhcGk6IHByaXZhdGUgXG4gICAgICAgKiBAZXhhbXBsZTogXG4gICAgICAgKiAgIHZhciB1c2VyID0geyB3aG86XCJUaG9tYXMgQnVybGVzb25cIlwiLCBlbWFpbD1cIlRob21hc0J1cmxlc29uQGdtYWlsLmNvbVwiXCIgfTtcbiAgICAgICAqICAgJGxvZy53YXJuKCBcIkEgd2FybmluZyBtZXNzYWdlIGZvciBge3dob31gIHdpbGwgYmUgc2VudCB0byBge2VtYWlsfWAgIVwiLCB1c2VyICk7ICAgXG4gICAgICAgKlxuICAgICAgICogVGhpcyBzaG91bGQgb3V0cHV0OiBBIHdhcm5pbmcgbWVzc2FnZSBmb3IgYFRob21hcyBCdXJsZXNvbmAgd2lsbCBiZSBzZW50IHRvIGBUaG9tYXNCdXJsZXNvbkBnbWFpbC5jb21gICFcbiAgICAgICAqL1xuICAgICAgdmFyIGVuaGFuY2VkTG9nRm4gPSBmdW5jdGlvbiggKXtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbm93ICA9IERhdGVUaW1lLmZvcm1hdHRlZE5vdygpO1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyc7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGEgdGltZXN0YW1wIHRvIHRoZSBvcmlnaW5hbCBvdXRwdXQgbWVzc2FnZVxuICAgICAgICAgICAgYXJnc1swXSA9IHN1cHBsYW50KFwiezB9IC0gezF9ezJ9XCIsIFsgbm93LCBjbGFzc05hbWUsIGFyZ3NbMF0gXSk7XG5cbiAgICAgICAgbG9nRm4uY2FsbCggbnVsbCwgIHN1cHBsYW50LmFwcGx5KCBudWxsLCBhcmdzICkgKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNwZWNpYWwuLi4gb25seSBuZWVkZWQgdG8gc3VwcG9ydCBhbmd1bGFyLW1vY2tzIGV4cGVjdGF0aW9uc1xuICAgICAgZW5oYW5jZWRMb2dGbi5sb2dzID0gWyBdO1xuIFxuICAgICAgcmV0dXJuIGVuaGFuY2VkTG9nRm47XG4gICAgICBcbiAgICB9O1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCB0byBnZW5lcmF0ZSBjbGFzcy1zcGVjaWZpYyBsb2dnZXIgaW5zdGFuY2Ugd2l0aCBjbGFzc25hbWUgb25seVxuICAgICAqXG4gICAgICogQHBhcmFtOiBuYW1lXG4gICAgICogQHJldHVybnM6IE9iamVjdCB3cmFwcGVyIGZhY2FkZSB0byAkbG9nXG4gICAgICovXG4gICAgdmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24oIGNsYXNzTmFtZSApe1xuICAgICAgY2xhc3NOYW1lID0gKCBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCApID8gY2xhc3NOYW1lICsgXCI6OlwiIDogXCJcIjtcblxuICAgICAgcmV0dXJue1xuICAgICAgICAgbG9nICAgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmxvZywgICAgY2xhc3NOYW1lICksXG4gICAgICAgICBpbmZvICA6IHByZXBhcmVMb2dGbiggXyRsb2cuaW5mbywgICBjbGFzc05hbWUgKSxcbiAgICAgICAgIHdhcm4gIDogcHJlcGFyZUxvZ0ZuKCBfJGxvZy53YXJuLCAgIGNsYXNzTmFtZSApLFxuICAgICAgICAgZGVidWcgOiBwcmVwYXJlTG9nRm4oIF8kbG9nLmRlYnVnLCAgY2xhc3NOYW1lICksXG4gICAgICAgICAvLyBlcnJvciA6IHByZXBhcmVMb2dGbiggXyRsb2cuZXJyb3IsICBjbGFzc05hbWUgKVxuICAgICAgfTtcblxuICAgIH07XG5cblxuXG4gICAgLy8gd3JhcCBlYWNoIGxvZyBtZXRob2QgXG4gICAgJGxvZy5sb2cgICA9IHByZXBhcmVMb2dGbiggJGxvZy5sb2cgKTtcbiAgICAkbG9nLmluZm8gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmluZm8gKTtcbiAgICAkbG9nLndhcm4gID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLndhcm4gKTtcbiAgICAkbG9nLmRlYnVnID0gcHJlcGFyZUxvZ0ZuKCAkbG9nLmRlYnVnICk7XG4gICAgLy8gJGxvZy5lcnJvciA9IHByZXBhcmVMb2dGbiggJGxvZy5lcnJvciApO1xuXG4gICAgLy8gQWRkIHNwZWNpYWwgbWV0aG9kIHRvIEFuZ3VsYXJKUyAkbG9nXG4gICAgJGxvZy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xuIFxuXG4gICAgcmV0dXJuICRsb2c7XG59Oy8vZW5jaGFuY2VMb2dnZXJcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gIGVuY2hhbmNlTG9nZ2VyOyIsIi8qKlxuICogQGF1dGhvciAgICAgIFRob21hcyBCdXJsZXNvblxuICogQGRhdGUgICAgICAgIE5vdmVtYmVyLCAyMDEzXG4gKiBAc291cmNlOiAgICAgaHR0cHM6Ly9naXRodWIuY29tL1Rob21hc0J1cmxlc29uL2FuZ3VsYXJqcy1sb2dEZWNvcmF0b3IvYmxvYi9tYXN0ZXIvc3JjL21pbmRzcGFjZS91dGlscy9zdXBwbGFudC5qc1xuICAqL1xuIFxuXG4gJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcGxhbnQgPSAgZnVuY3Rpb24oIHRlbXBsYXRlLCB2YWx1ZXMsIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAvXFx7KFteXFx7XFx9XSopXFx9L2c7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgciA9IHZhbHVlcztcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gcCkgeyByID0gcltwW3NdXTsgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgICByID0gYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicpID8gciA6IGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4vLyBzdXBwbGFudCgpIG1ldGhvZCBmcm9tIENyb2NrZm9yZHMgYFJlbWVkaWFsIEphdmFzY3JpcHRgXG5GdW5jdGlvbi5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUsIGZ1bmMpIHtcbiAgICB0aGlzLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdHJpbmcubWV0aG9kKFwic3VwcGxhbnRcIiwgZnVuY3Rpb24oIHZhbHVlcywgcGF0dGVybiApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHN1cHBsYW50KHNlbGYsIHZhbHVlcywgcGF0dGVybik7XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSAgU3RyaW5nLnN1cHBsYW50ID0gc3VwcGxhbnQ7Il19
