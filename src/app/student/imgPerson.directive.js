// (function() {
//     'use strict';
//
//     angular
//         .module('app.students')
//         .directive('imgPerson', imgPerson);
//
//     /* @ngInject */
//     function imgPerson(config) {
//         //Usage: <img-person thumbnail="{{person.imageSource}}"/>
//         var basePath = config.imageSettings.imageBasePath;
//         var unknownImage = config.imageSettings.unknownPersonImageSource;
//         var directive = {
//             restrict: 'E',
//             link: link,
//             scope: {
//                 student: '='
//             },
//            templateUrl: 'student/studentRowDirective.html'
//             //template: '<div>{{s}}</div>'
//         };
//         return directive;
//
//         function link(scope, element, attrs) {
//             scope.imgPath = basePath + (scope.student.imageSource || unknownImage);
//         }
//     }
// })();