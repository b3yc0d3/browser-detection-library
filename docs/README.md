# Browser Detection Library

## Static Methods
The `bdl` class has the following static methods:

### `bdl.browser()`
Get id of current browser.

Returns `BrowserId | undefined` The BrowserId, if posible, or `undefined`

### `bdl.getName(browserId)`
* `browserId` BrowserId

Convert browser id to Human format.

Returns `BrowserName | undefined` - The Name of the Browser, if posible, or `undefined`