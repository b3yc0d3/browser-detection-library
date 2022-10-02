const browserNames = {
    '7d952f3f': 'Brave',
    '1e115537': 'Chromium',
    'a257ca8d': 'Chrome',
    '6cc0cdd0': 'FireFox',
    'cd2e422a': 'Safari',
    'c5bb67fa': 'Opera',
    'b3ee66ee': 'Edge',
    '050d2b13': 'Edge (Chromium)',
    'cb14225b': 'IE11',
    '80ab4391': 'IE8'
}

export function _browserName(id) {
    if (browserNames.hasOwnProperty(id)) {
        return browserNames[id];
    }

    return undefined;
}