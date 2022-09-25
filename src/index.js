import { browserId2Name } from './browser-names';
/**
 * Get id of currenty browser
 * 
 * Function will return 'undefined' if browser could not be detected.
 * 
 * @returns {Number} Browser Id
 */
export function browser() {
    var is_firefox = typeof InstallTrigger !== 'undefined';
    var is_safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var is_chromium = !!window.chrome && !window.opr;
    var is_brave = (!!navigator.brave || (!!window.ethereum && !!ethereum.isBraveWallet)) && is_chromium;
    var is_opera = (!!window.opr) && !!window.chrome;
    var is_ie = /*@cc_on*/true && !window.opr;

    var loop_list = [
        { state: is_brave, id: 0 },
        { state: is_opera, id: 5 },
        { state: is_chromium, id: 1 },
        { state: is_firefox, id: 3 },
        { state: is_safari, id: 4 },
        { state: is_ie, id: 8 },
    ];

    var ret = undefined;

    for (var i = 0; i < loop_list.length; i++) {
        const browser = loop_list[i];

        if (browser.state) {
            ret = browser.id;
            break;
        }
    }

    return ret;
}

/**
 * Convert browser id to Human format
 * 
 * @param {Number} browser_id Id of current Browser.
 * @returns {String} The Name of the Browser (if not posible `undefined`)
 */

export function getName(browserId) {
    if (browserId2Name.hasOwnProperty(browserId)) {
        return browserId2Name[browserId];
    }

    return undefined;
}