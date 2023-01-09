# Browser Detection Library

- [Browser Detection Library](#browser-detection-library)
    - [`browser`](#bdlbrowser)
      - [`name`](#bdlbrowsername)
      - [`vendor`](#bdlbrowservendor)
      - [`id`](#bdlbrowserid)
    - [`Device`](#bdldevice)
      - [`ip`]()
  - [Browser Ids](#browser-ids)
  - [Browser Support](#browser-function-support)

## `bdl.browser`
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


## `bdl.device`
This object has the following functions.

### `bdl.device.ip()`
Get the local ip of a device.<br>
Returns: `Promise`.

## Browser Ids
<!-- http://www.sha1-online.com/ -->
This ids are **only** used internally to identify each browser. The ids <u>**may change**</u> in the future.<br>
*The ids are `crc32` Hashes*
| Id       | Browser         |
| -------- | --------------- |
| 7d952f3f | Brave           |
| 1e115537 | Chromium        |
| a257ca8d | Chrome          |
| eb2cb20f | DuckDuckGo App  |
| 6cc0cdd0 | FireFox         |
| cd2e422a | Safari          |
| c5bb67fa | Opera           |
| b3ee66ee | Edge            |
| 050d2b13 | Edge (Chromium) |
| cb14225b | IE11            |
| 80ab4391 | IE8             |

## Browser function support
<table style="font-family: Arial, Helvetica, sans-serif;border-collapse: collapse;border-spacing: 0;display: contents;">
  <thead>
    <tr id="devices">
      <td style="border: 1px solid #ddd;padding: 8px;"></td>
      <td colspan="5" style="text-align: center;border: 1px solid #ddd;padding: 8px;">Desktop/Laptop</td>
      <td colspan="2" style="text-align: center;border: 1px solid #ddd;padding: 8px;">Mobile</td>
    </tr>
    <tr id="names">
      <td style="border: 1px solid #ddd;padding: 8px;vertical-align: bottom;"></td>
      <td style="border: 1px solid #ddd;padding: 8px;vertical-align: bottom;">
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">FireFox</div>
      </td>
      <td style="border: 1px solid #ddd;padding: 8px;vertical-align: bottom;">
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">Brave</div>
      </td>
      <td style="border: 1px solid #ddd;padding: 8px;vertical-align: bottom;">
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">Chromium</div>
      </td>
      <td style="border: 1px solid #ddd;padding: 8px;vertical-align: bottom;">
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">Opera</div>
      </td>
      <td style="border: 1px solid #ddd;padding: 8px;vertical-align: bottom;">
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">Safari</div>
      </td>
      <td style="border: 1px solid #ddd;padding: 8px;"vertical-align: bottom;>
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">DuckDuckGo</div>
      </td>
      <td style="border: 1px solid #ddd;padding: 8px;"vertical-align: bottom;>
          <div style="left: calc(50% - .5rem);line-height: 1;position: relative;transform: rotate(180deg);white-space: nowrap;writing-mode: vertical-rl;text-align: left;">Chrome</div>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr style="text-align: center;">
      <td style="border: 1px solid #ddd;padding: 8px;"><code>browser.name</code></td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
    </tr>
    <tr style="text-align: center;">
      <td style="border: 1px solid #ddd;padding: 8px;"><code>browser.vendor</code></td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
    </tr>
    <tr style="text-align: center;">
      <td style="border: 1px solid #ddd;padding: 8px;"><code>browser.id</code></td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
    </tr>
    <tr style="text-align: center;">
      <td style="border: 1px solid #ddd;padding: 8px;"><code>device.ip</code></td>
      <td style="border: 1px solid #ddd;padding: 8px;">No</td>
      <td style="border: 1px solid #ddd;padding: 8px;">No</td>
      <td style="border: 1px solid #ddd;padding: 8px;">No</td>
      <td style="border: 1px solid #ddd;padding: 8px;">No</td>
      <td style="border: 1px solid #ddd;padding: 8px;">No</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
      <td style="border: 1px solid #ddd;padding: 8px;">Yes</td>
    </tr>
  </tbody>
</table>

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
| 13775fee | Opera Software                              |
| 3fac4e54 | Microsoft                                   |
| 31d367a9 | Duck Duck Go Inc.                           | -->
