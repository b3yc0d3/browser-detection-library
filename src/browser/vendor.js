const _vendors = {
    '7d952f3f': 'Brave Software Inc.',
    '1e115537': 'Chromium Project',
    'a257ca8d': 'Google LLC',
    '6cc0cdd0': ['Mozilla Corporation', 'Mozilla Foundation'],
    'cd2e422a': 'Apple Inc.',
    'c5bb67fa': 'Opera Software',
    'b3ee66ee': 'Microsoft',
    '050d2b13': 'Microsoft',
    'cb14225b': 'Microsoft',
    '80ab4391': 'Microsoft',
    'aa950033': 'Duck Duck Go Inc.'
}

export function _browserVendor(id) {
    if (_vendors.hasOwnProperty(id)) {
        return _vendors[id];
    }

    return undefined;
}