import { _detectBrowser } from './detect';
import { _browserName } from './name';
import { _browserVendor } from './vendor';

export const browser = {
    /**
     * Get name of browser
     * 
     * e.g. "FireFox" or "Chromium"
     */
    get name() {
        return _browserName(_detectBrowser());
    },

    /**
     * Get id of browser
     * 
     * This "id" is currently only used internaly by this library.
     */
    get id() {
        return _detectBrowser();
    },

    /**
     * Get vendor name of browser
     * 
     * e.g. for "FireFox" it would be "Mozilla"
     */
    get vendor() {
        return _browserVendor(_detectBrowser());
    }
}
