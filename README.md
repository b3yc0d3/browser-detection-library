<p align="center">
    <img src="assets/bdl_logo.svg" width="200" height="200">
</p>

[![Version](https://img.shields.io/github/package-json/v/b3yc0d3/browser-detection-library)](https://github.com/b3yc0d3/browser-detection-library/blob/master/CHANGELOG.md)
![Browsers](https://img.shields.io/badge/browser-brave%20%7C%20chromium%20%7C%20edge%20%7C%20firefox%20%7C%20ie11%20%7C%20opera%20%7C%20safari%20%7C%20duckduckgo-lightgrey)
[![MPL-2.0](https://img.shields.io/github/license/b3yc0d3/browser-detection-library)](https://github.com/b3yc0d3/browser-detection-library/blob/master/LICENSE)


# browser-detection-library
Fast and Lightweight way to detect browsers.


## Browser Support
| Browser        | Version                            | Architecture | Status  |
| :------------- | :--------------------------------- | :----------- | :------ |
| Brave          | 1.43.93 (Chromium: 105.0.5195.127) | x86_64       | Success |
| Chromium       | 105.0.5195.125                     | x86_64       | Success |
| Microsoft Edge | 105.0.1343.50                      | x86_64       | Success |
| FireFox        | 105.0                              | x86_64, ARM  | Success |
| IE 11          | 11.09600.17416                     | x86_64       | Success |
| Opera          | 90.0.4480.84                       | x86_64       | Success |
| Safari         | 13.1.3 (15609.4.1)                 | x86_64       | Success |
| DuckDuckGo     | 5 (107.0.5304.105)                 | ARM          | Success |

***Your needed browser isn't supported yet?***<br>
***Create a feature request!***


## Documentation
[Current documentation](/docs)


## Build it your self
```console
$ clone https://github.com/b3yc0d3/browser-detection-library.git
$ cd browser-detection-library
$ npm i
$ npm run build
```
The build files are be found in `build/`<br>
A working example demo can be found in: `demo/`<br>
*Bulding required before useable; [CLICK](#build-it-your-self)*


## Code Snippet
```js
// Get name of browser.
console.log(bdl.browser.name);

// Get name of browser vendor.
console.log(bdl.browser.vendor);

// Get name of browser id (internal used).
console.log(bdl.browser.id);
```


## Sources
### Browser Codenames
- https://en.wikipedia.org/wiki/List_of_Apple_codenames#Applications
- https://wiki.mozilla.org/Firefox/Codenames


## Credits
### Logo:
- https://www.svgrepo.com/svg/153954/browser
- https://www.svgrepo.com/svg/126178/question-mark