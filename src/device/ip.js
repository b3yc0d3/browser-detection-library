const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/gm;

/**
 * Get local ip address of device
 * 
 * Does not work on all devices
 * @See https://github.com/b3yc0d3/browser-detection-library/tree/master/docs#browser-function-support
 */
export function _getDeviceAddress() {
    return new Promise((resolve, reject) => {
        // Chromium, FireFox
        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        let pc = new RTCPeerConnection({
            iceServers: [], iceTransportPolicy: "all"
        });
        let ips = []

        pc.createDataChannel("");
        pc.createOffer()
            .then((offer) => pc.setLocalDescription(offer))
            .catch((err) => reject(err));

        pc.onicecandidate = (event) => {
            if (!event || !event.candidate) {
                if (ips.length === 0) {
                    reject("WebRTC disabled or restricted by browser.");
                }

                resolve(ips);
                return;
            }


            if (event.candidate.candidate !== "") {
                let parts = event.candidate.candidate.split(' ');
                let [base, compId, prot, prio, ip, port, type, ...attr] = parts;

                if (!ips.some(e => e == ip)) {
                    // check if address pattern matches set retType
                    if (ip != undefined && ipv4Regex.test(ip)) {
                        ips.push(ip);
                    }
                }
            }
        }
    })
};