import {Injectable} from '@angular/core';
import {LoggerService} from "../util/logger/logger.service";
import {Location} from "@angular/common";

@Injectable()
export class CommonService {

    constructor(private $location: Location,
        // private $q, private $rootScope,
                // private $timeout,
                private loggerService: LoggerService) {
    }

    // $timeout(fn, delay) {
    //     var result = $q.defer();
    //     setTimeout(function () {
    //         $q.when(fn()).then(function (v) {
    //             result.resolve(v);
    //         });
    //     }, delay);
    //     return result.promise;
    // }


    // new Promise((resolve, reject) => {
    //     if(xxx) {
    //         resolve('ok');
    //     } else {
    //     reject('error');
    // }
    // }).then(x => doSomething())

//     setTimeout(() => {
//     this.http.post(this.global.api_url + '/cancel_order', {id: product._id})
// .map(res => res.json())
//     .subscribe((data) => {
//         if (data.result.id != null && data.result.rev != null && data.result.ok == true && data.status == 201) {
//             this.global.toast("Order canceled", "toast-error");
//             let del_data = [{_id: product._id, _rev: product._rev}];
//             this.orders.delCart(del_data);
//             loader_send_1.dismiss();
//             this.ngOnInit();
//         } else {
//             this.global.toast("Failed to cancel order", "toast-error");
//             loader_send_1.dismiss();
//         }
//     }, 1000);

    // throttles = {};

    getLogger(){
        return this.loggerService;
    }

    getTimeout() {
        return "";//this.$timeout;
    }
    //
    // $broadcast() {
    //     return this.$rootScope.$broadcast.apply(this.$rootScope, arguments);
    // }


    // createSearchThrottle(viewmodel, list, filteredList, filter, delay) {
    //     // After a delay, search a viewmodel's list using a filter function, and return a filteredList. custom delay or use default
    //     delay = +delay || 300;
    //     if (!filteredList) {
    //         // assuming list is named topics, filteredList is filteredTopics
    //         filteredList = 'filtered' + list[0].toUpperCase() + list.substr(1).toLowerCase();
    //         // filter function is named topicFilter
    //         filter = list + 'Filter'; // function in string form
    //     }
    //
    //     // create the filtering function we will call from here
    //     filterFn = function () {
    //         viewmodel[filteredList] = viewmodel[list].filter(function (item) {
    //             return viewmodel[filter](item);
    //         });
    //     };
    //
    //     return (function () {
    //         // Wrapped in outer IIFE so we can use closure over filterInputTimeout which references the timeout
    //         var filterInputTimeout;
    //
    //         // return what becomes the 'applyFilter' function in the controller
    //         return function (searchNow) {
    //             if (filterInputTimeout) {
    //                 this.$timeout.cancel(filterInputTimeout);
    //                 filterInputTimeout = null;
    //             }
    //             if (searchNow || !delay) {
    //                 filterFn();
    //             } else {
    //                 filterInputTimeout = this.$timeout(filterFn, delay);
    //             }
    //         };
    //     })();
    //}
    // Perform some action (callback) after a delay.
    // Track the callback by key, so if the same callback is issued again, restart the delay.
    // debouncedThrottle(key, callback, delay, immediate) {
    //     var defaultDelay = 1000;
    //     delay = delay || defaultDelay;
    //     // if (this.throttles[key]) {
    //     //     this.$timeout.cancel(this.throttles[key]);
    //     //     this.throttles[key] = undefined;
    //     // }
    //     if (immediate) {
    //         callback();
    //     } else {
    //         // this.throttles[key] = this.$timeout(callback, delay);
    //     }
    // }

    isNumber(val) { // negative or positive
        return (/^[-]?\d+$/).test(val);
    }

    replaceLocationUrlGuidWithId(id) {
        // If the current Url is a Guid, then we replace
        // it with the passed in id. Otherwise, we exit.
        var currentPath = this.$location.path();
        var slashPos = currentPath.lastIndexOf('/', currentPath.length - 2);
        var currentParameter = currentPath.substring(slashPos - 1);

        if (this.isNumber(currentParameter)) {
            return;
        }

        var newPath = currentPath.substring(0, slashPos + 1) + id;
        // this.$location.path(newPath);
    }

    textContains(text, searchText) {
        return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
    }

}