# Browser Detection Library

- [Browser Detection Library](#browser-detection-library)
  - [`bdl`](#bdl)
    - [`bdl.browser`](#bdlbrowser)
    - [`bdl.browser.name`](#bdlbrowsername)
    - [`bdl.browser.vendor`](#bdlbrowservendor)
    - [`bdl.browser.id`](#bdlbrowserid)
  - [Browser Ids](#browser-ids)

## `bdl`

### `bdl.browser`
This object has the following functions.

### `bdl.browser.name`
Get name of browser.<br>
Returns: `String | undefined` - The Browser name, if posible, or `undefined`.

### `bdl.browser.vendor`
Get the browsers vendor(s).<br>
Returns: `String | Array | undefined` - The browsers vendor(s), if posible, or `undefined`.

### `bdl.browser.id`
Get the internal browser id.<br>
*See*: [Browser Ids](#bdlbrowserid)<br>
Returns: `Number | undefined` - The browsers internal id, if posible, or `undefined`.


## Browser Ids
This ids are **only** used internally to identify each browser. The ids <u>**may change**</u> in the future.<br>
*The ids are `crc32` Hashes*
| Id       | Browser         |
| -------- | --------------- |
| 7d952f3f | Brave           |
| 1e115537 | Chromium        |
| a257ca8d | Chrome          |
| 6cc0cdd0 | FireFox         |
| cd2e422a | Safari          |
| c5bb67fa | Opera           |
| b3ee66ee | Edge            |
| 050d2b13 | Edge (Chromium) |
| cb14225b | IE11            |
| 80ab4391 | IE8             |

<!--
WILL MAY BE USED

## Vendor Ids
*The ids are `crc32` Hashes*
| Id       | Vendor                                      |
| -------- | ------------------------------------------- |
| 18548a5c | Brave Software Inc.                         |
| 937cb344 | Chromium Project                            |
| 8e6b7a10 | Google LLC                                  |
| da2659c6 | Mozilla Corporation <br> Mozilla Foundation |
| 059d2289 | Apple Inc.                                  |
| 13775fee | Opera Software                              |
| 3fac4e54 | Microsoft                                   |-->
