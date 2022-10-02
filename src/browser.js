import { _detectBrowser } from './browser.detect';
import { _browserName } from './browser.name';
import { _browserVendor } from './browser.vendor';

export const browser = {
    get name() {
        return _browserName(_detectBrowser());
    },

    get id() {
        return _detectBrowser();
    },

    get vendor() {
        return _browserVendor(_detectBrowser());
    }
}