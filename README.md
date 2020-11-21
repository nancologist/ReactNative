# 1. Getting Started

## 1.1. Welcome!
___

## 1.2. What is React Native?
* It's a collection of "special" React (normal React) components.
* React Native then compiles theses cmps to the native widgets of iOS and Android.
* gives you the interfaces to use the mobile device components like camera.
___

## 1.3. Join our Online Learning Community
___

## 1.4. How React Native Works
### UI Cmps
React ``<div>`` = Native Cmp (Android) ``android.view`` = Native Cmp (iOS) ``UIView`` = React Native ``<View>``  
React Native is going to compile ``<View>`` to the ``UIView`` for iOS and to the ``android.view`` for the android!

### Logics
But the Logic in a React-Native app WON'T BE COMPILED to the native language (Java or Swift), instead of that React-Native itself works like a native app on the mobile device and RUNS __JavaScript thread hosted by the react native__.  

It's like that: if you want to access the camera, your JS code will run a such a "JS Core VM" which through a __Bridge__ communicate with the Native Platform Modules and APIs.
___

## 1.5. Expo CLI vs React Native CLI
To __create__ and __manage__ our React-Native app we have two approaches: Expo CLI or React-Native CLI

### Expo CLI
* 3rd party service
* free to use
* "Managed App Development" : it takes lot of complexities away for you!
* lots of convenience and utlitiy features
* Downside: You're __limited__ to the Expo ecosystem
* It also gives a wrapper mobile app for your application to simulate and test during development.

### React-Native CLI
* offered by React Native Team
* bare-bon dev (only a basic setup)
* Downside: you are more on your own
* Advantate: full flexiblity: Integrity with any native code.

You can always switch (``eject``) from Expo to react native cli.  
We will use for the majority of the course Expo CLI! 
___

## 1.6. Node.js Download
___

## 1.7. Creating Our First React Native App
1. Go to ``expo.io``
2. Click on "Get Started"
3. Install Node.js
4. Install Expo: ``sudo npm install expo-cli --global``

### Create EXPO App:
1. ``cd to/folder/you/want``
2. ``expo init APP_NAME``
3. Choose "blank"
4. ``cd APP_NAME/``
5. ``npm start`` - Now you see Expo DevTool
6. Go to your Android/iOS device and in the app store search for "Expo"
7. Install it on your mobile device.
8. Open the application
9. then scan the QR-code which appeared on your computer after ``npm start`` - You have now the app on your mobile device
___

## 1.8. Working on Our First App
Directories:
* .expo/ : some configs, you dont need to touch this.
* assets/ : hold media like images of your application

The Styling-Syntax of React-Native looks like CSS but it's not actually CSS!

* ``onPress`` : This is equivalent to ``onClick`` and Click event listener in JS.

TEST: Now on your mobilephone when you click on the "Change Text", the text changes! Magic!
___

## 1.9. React Native Apps Are Hard Work!
React Native is about : _"Learn once, write everywhere!"_  
and it's not Write Once!, because for different platforms you need to use if-statements sometimes in React-Native code, for example if it's an iOS ``do this`` but if it's an android phone ``do that``

In React-Native you are also responisble for the responsive design like in web applications and css!
___

## 1.10. React Native Alternatives
* React-Native changes VERY fast and the new versions of it come out like every month!
___

## 1.11. Course Requirements
___

## 1.12. Course Requirement Refreshers
___

## 1.13. Running the App on an Android Emulator
We don't need to test the app on the real smartphone, we can use the simulartor.

* For iOS simulater you need: Xcode

* For Android you need: __Android Studio__
    1. Download Android Studio
    2. Install it
    3. Open the Android Studio
    4. Click on "Configure" and choose "SDK Manager"
    5. Install some of the older versions of the Android (for the course you need Android 9.0 (Pie) to be installed)
    6. Go to "SDK Tools"
    7. Install also "Android Emulator", "SDK-Platform-Tools" and "SDK Build-Tools" and also "Intel x86 Emulator Accelerator" and also "Google Play Services" in the list.
    8. Now go to start page again and then "Configure" > "AVD Manager"
    9. "Create Virtual Device"
    10. Click on for example "Pixel 2"
    11. Choose android vers (for example "Pie")
    12. After the installation click on Next and the "Finish"
    13. Now launch this Emulator by clicking on the Green Play-Button.
    14. After the boot of the virtual smart phone go back again to the Expo DevTool on your browser (localhost:19002) and then click on "Run on Android device/simulator".
    15. Now we see the app we created previously here again on the Virtual Smartphone!
___

## 1.14. Running the App on an iOS Simulator
!ONLY POSSIBLE ON MACOS!

1. Install Xcode
2. Go to Xcode "Prefernces"
3. Go to "Locations" tab and mace sure you have the Command Line Tools installed.
4. Go to Menu > "Xcode" > "Open Dev Too" > "Simulator" > it opens an iOS device
5. go to Expo dev tool and click on "run ios simulator"
6. Now you see the app we created on the iOS Virtual Device!
___

## 1.15. Course Outline
___

## 1.16. How to get the Most out of This Course
___

## 1.17. Useful Resources & Links
Official Expo Docs: https://docs.expo.io/versions/v34.0.0/introduction/installation/

Official React Native Docs: https://facebook.github.io/react-native/docs/getting-started
___
___
___

# 2. Diving Into the Basics (COURSE GOALS APP)

## 2.1. Module Introduction
___

## 2.2. How to work with React Native Components
___

## 2.3. Setting Up A New Project
1. ``expo init rn-app-2``
2. "blank"
3. Max goes with NPM and not Yarn, but i use Yarn!
4. ``yarn start``
5. press "i" to run on iOS simulator and "a" to run on Android Vritual Device (or use expo devtool)
___

## 2.4. Planning the App
___

## 2.5. Working with Core Components
* ``<View>`` is like ``<div>``.
* A text can be ONLY between ``<Text>`` tags!!!
* ``flex`` sets how much can a child element take space of the parent relative to the other child elements.
___

## 2.6. Getting Started with Styles
___

## 2.7. Flexbox & Layouts (Intro)
___

## 2.8. React Native Flexbox Deep Dive
* A ``<View>`` different to the ``<div>`` is already a flexbox and applies it to its children by default in column direction!
* We can change direction with ``flexDirection: 'row'``

* By default the ``alighItems: 'stretch'``, so the child elements take the height of the parent by default, we can change for example by setting it to ``'center'``
___

## 2.9. Inline Styles & StyleSheet Objects
* ``StyleSheet.create()`` : can detect syntax errors in styling and also potential performance improvments
___

## 2.10. Working with State & Events
* ``onChangeText``

__TEST1__ : In Terminal you should see the text you entered in the input field.

__Goal__ : Add the entered goal to the list of goals!

ATTENTION -> ``prevGoals => ...`` 
___

## 2.11. Outputting a List of Items
___

## 2.12. Styling List Items

* ``Text`` cmp support less styling features than ``View`` cmp, so we rap Text cmp with a View cmp.

* ``marginVertical`` : it's like ``margin-top`` & ``margin-bottom`` in CSS together.

___

## 2.13. Making it Scrollable with ScrollView!

If in this small app which we made, you produce a lot of items for the list, it will goes out of the screen, and the SCROLLING IS NOT AUTOMATICALLY ACTIVE!!! So we should enable it with ``ScrollView`` cmp!

``ScrollView`` has a lot of attributes, you can check them in the official docs.

___

## 2.14. A Better List: FlatList

``ScrollView`` is great for a long list, but it's NOT suitable for a list which you DON'T KNOW how LONG it will be or which might be very very long. For shorter lists which exceeds screen ``ScrollView`` would be ok.

The problem of ``ScrollView`` is that it LOADS ALL the contents IN ADVANCE, even the ones which are not on the screen!!! It SLOWS DOWN YOUR APP!

The solution is ``FlatList`` cmp it has two important attributes: 
* ``data`` (should point to an ARRAY)
* ``renderItem``
* elements in the ARRAY should be objects which have a ``key`` prop. (``key`` should be string)
* If you enter sth except "key" or "id" as key you should specify it using ``keyExtractor`` as attr of the ``FlatList`` cmp.

* FlatList cmp ONLY renders what's REQUIRED.

___

## 2.15. Splitting the App Into Components (Own Components)
___

## 2.16. Passing Data Between Components

Mori: I have done it in the __2.15__ myself.
* This is __HOW TO PASS DATA TO A FUNCTION AS PARAMETER AND SEND IT TO THE PARENT CMP__!!! ``GoalInput.js``

___

## 2.17. Working with Touchable Components

__Our Goal:__ Delete the items by tapping the item using Touchable Component Family!

* ``TouchableOpacity`` gives user feedback by making the UI element transpaernt when he touches it. We can configure the opacity's change with ``activeOpacity``

* ``TouchableHighlight`` ...

* ``TouchableNativeFeedback`` only works on Android devices.

* ``TouchableWithoutFeedback`` : as the name suggests, it has no visual effects when touching.

___

## 2.18. Deleting Items
___

## 2.19. Adding a Modal Overlay

* ``<Modal>`` cmp - (__Our Goal:__ We want to show the GoalInput cmp in a modal!)

___

## 2.20. More Flexbox Styling

* ``View`` cmp takes the height of its children, so without children it has height and width are 0.

___

## 2.21. Closing the Modal & Clearing Input
___

## 2.22. Finishing the Modal Styling
___

## 2.23. Wrap Up
___

## 2.24. Useful Resources & Links

These links might also be helpful:

* Official Docs: https://facebook.github.io/react-native/docs/getting-started

* Overview of available Components & APIs: https://facebook.github.io/react-native/docs/components-and-apis

Expo Docs: https://docs.expo.io/versions/latest/

___

___
___
___

# 3. Debugging React-Native Apps

## 3.1. Module Introduction
___

## 3.2. What To Debug & How To Debug?

What to debug?
* __Cashing App__, like:
    * Syntax errors.
    * bugs (``undefined``, usw)
    * "Unavoidable" errors: (network errors, request and resp errors)
* __Logical errors__
    * ...
* __Wrong styling and layout__
    * different devices
    * very small devices

How to debug?
* READ the error messages carefully!
* using ``console.log()``
* Chrome Debugger + Breakpoints

___

## 3.3. Running the App on a Real Device & Debugging

Don't forget, with Expo, you can easily run your app on real devices, too!

Simply download the Expo app from the App Stores and scan the barcode the Expo DevTools (that browser tab which opened when you ran ``npm start``) show.

On iOS devices, you don't scan the barcode with the Expo app but instead with your normal device camera (simply point it at the barcode and you should be prompted whether you want to open that app in the Expo app).

On Android devices, you find an integrated barcode scanner in the Expo app.

---

With the app running on a real device, you can debug it from there, too. Shake the device a little to bring up the developer menu.

There, you can enable the remote debugger and the other features covered in this module.

___

## 3.4. Handling Error Messages

_Mori: I did not code with! - Check the video._

___ 

## 3.5. Understanding Code Flow with console.log()

_Mori: I did not code with! - Check the video._

___

## 3.6. Using the Remote Debugger & Breakpoints

1. Debugging with Expo:
    * on iOS device + Mac: ``CMD+D``
    * on Android device + Mac/Windows: ``CMD/CTRL+M``

2. In the menu choose "Debug Remote JS" (The Connection in Expo DevTool should be set to "LAN" or "Local") 

3. Chrome DevTool > Source tab

4. use debugging tool and breakpoints

___

## 3.7. Working with the Device DevTools Overlay

Debugging with Expo:
* on iOS device + Mac: ``CMD+D``
* on Android device + Mac/Windows: ``CMD/CTRL+M``

* Other Features:
    * Reloading App, you can also do that using:
        * Android, also with hotkey ``RR``
        * iOS:, also with hotkey ``CMD+R / CTRL+R``
    
    * Enable Hot Reloading

    * Show Performance Monitor
        * Shows how your app uses the smartphone resources
        * ATTENTION: As we are in develop mode, the performance is worse than in production mode.

___

## 3.8. Debugging the UI & Using React Native Debugger

* __Inspector:__ In Menu of Expo App on Mobile Device
* You can check the components

There is a better tool: __React-Native Debugger__

1. Search for "React-Native Debugger"
2. Go to https://github.com/jhen0409/react-native-debugger
3. Go to Release Page of it : https://github.com/jhen0409/react-native-debugger/releases
4. Download the compatible one for your Desktop OS.
5. Install it.
6. Back to debugger app, use these keys: ``CMD+T``
7. Enable "Remote JS Debug" on the virtual mobile device.

You see all the components structure. This is MUCH NICER than other Debugger which we learned! It has also Redux debugging tool for the React-Native.

You can also change the Styling with this Debugger, just like on normal chrome dev tool!!!

You can use ``Profiler`` you can optimize RERENDERINGs in you app, for example to detect the UNNECESSARY RERENDERINGS in your App, just like in normal React Debugger

___

## 3.9. Wrap Up
___

## 3.10. Useful Resources & Links

* Expo Debugging Docs: https://docs.expo.io/versions/v34.0.0/workflow/debugging/

* Chrome Dev Tools Docs: https://developers.google.com/web/tools/chrome-devtools/

___

___
___
___
