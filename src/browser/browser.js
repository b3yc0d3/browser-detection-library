import { _detectBrowser } from './detect';
import { _browserName } from './name';
import { _browserVendor } from './vendor';

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
