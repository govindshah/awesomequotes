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
    },
    {
        "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
        "id": "cordova-plugin-customurlscheme.LaunchMyApp",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.4",
    "com.aquto.cordova.AppleAdvertising": "0.0.1",
    "com.analytics.google": "1.2.2",
    "cordova-plugin-customurlscheme": "4.0.0",
    "cordova-plugin-x-socialsharing": "5.0.4",
    "org.apache.cordova.splashscreen": "1.0.0"
}
// BOTTOM OF METADATA
});