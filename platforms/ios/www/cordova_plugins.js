cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/com.aquto.cordova.AppleAdvertising/www/AppleAdvertising.js",
        "id": "com.aquto.cordova.AppleAdvertising.AppleAdvertising",
        "clobbers": [
            "window.plugins.AppleAdvertising"
        ]
    },
    {
        "file": "plugins/com.analytics.google/www/analytics.js",
        "id": "com.analytics.google.GAPlugin",
        "merges": [
            "analytics"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.4",
    "com.aquto.cordova.AppleAdvertising": "0.0.1",
    "com.analytics.google": "1.2.2"
}
// BOTTOM OF METADATA
});