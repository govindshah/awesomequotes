cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.analytics.google/www/analytics.js",
        "id": "com.analytics.google.GAPlugin",
        "merges": [
            "analytics"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
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
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.analytics.google": "1.2.2",
    "com.aquto.cordova.AppleAdvertising": "0.0.1",
    "com.ionic.keyboard": "1.0.4",
    "cordova-plugin-customurlscheme": "4.0.0",
    "cordova-plugin-x-socialsharing": "5.0.4",
    "org.apache.cordova.splashscreen": "1.0.0",
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-inappbrowser": "1.0.1",
    "com.google.play.services": "25.0.0"
}
// BOTTOM OF METADATA
});