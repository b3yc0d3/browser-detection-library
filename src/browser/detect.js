export function _detectBrowser() {
    const is_firefox = typeof InstallTrigger !== 'undefined';
    const is_safari = !!window.safari && !!window.ApplePayError;
    const is_chromium = !!window.chrome && !window.opr;
    const is_brave = !!navigator.brave && is_chromium;
    const is_opera = !!window.opr && !!window.chrome;
    const is_ddg = (!!window.EmailInterface && !!window.LoginDetection) && !is_chromium;
    /**
     * Currently using 'XRHand' to detect Edge-Chromium,
     * somehow MS Edge has 'XRHand' even tho it is not supported
     * officlay
     * 
     * See: https://developer.mozilla.org/en-US/docs/Web/API/XRHand#browser_compatibility
     * 
     * TODO: find an better way to check for Edge (Chromium)
     */
    const is_edgeChrome = !!window.XRHand && (!!window.XRJointPose || !!window.XRJointSpace) && is_chromium;
    const is_ie = !!window.document.documentMode;

    const loop_list = [
        { state: is_brave, id: '7d952f3f' },
        { state: is_opera, id: 'c5bb67fa' },
        { state: is_edgeChrome, id: '050d2b13' },
        { state: is_chromium, id: '1e115537' },
        { state: is_firefox, id: '6cc0cdd0' },
        { state: is_safari, id: 'cd2e422a' },
        { state: is_ie, id: 'cb14225b' },
        { state: is_ddg, id: 'eb2cb20f' }
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
