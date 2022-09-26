# Browser Detection Library

## Values

### BrowserIds
| ID | Name |
|---:|:-----|
| 0 | Brave |
| 1 | Chromium |
| 2 | Chrome |
| 3 | FireFox |
| 4 | Safari |
| 5 | Opera |
| 6 | Edge |
| 7 | Edge-Chromium |
| 8 | IE 11 |
| 9 | IE 8 |

## Static Methods
The `bdl` class has the following static methods:

### `bdl.browser()`
Get id of current browser.

Returns `BrowserId | undefined` The BrowserId, if posible, or `undefined`

### `bdl.getName(browserId)`
* `browserId` BrowserId

Convert browser id to Human format.

Returns `BrowserName | undefined` - The Name of the Browser, if posible, or `undefined`