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
* (Mori: I think this is somewhoe like `create react app`)

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
9. then scan the QR-code which appeared on your computer after ``npm start`` - You have now the app on your mobile device (On iOS you should go to Camera App but on Android you can scan QR code directly from the Expo app)
___

## 1.8. Working on Our First App
Directories:
* .expo/ : some configs, you dont need to touch this.
* assets/ : hold media like images of your application

The Styling-Syntax of React-Native looks like CSS but it's not actually CSS!

* ``onPress`` : This is equivalent to ``onClick`` and Click event listener in JS.

TEST: Now on your mobile phone when you click on the "Change Text", the text changes! Magic!
___

## 1.9. React Native Apps Are Hard Work!
React Native is about : _"Learn once, write everywhere!"_  
and it's not Write Once!, because for different platforms you need to use if-statements sometimes in React-Native code, for example if it's an iOS ``do this`` but if it's an android phone ``do that``

In React-Native you are also responisble for the responsive design like in web applications and css!
___

## 1.10. React Native Alternatives
* React-Native changes VERY fast and the new versions of it come out like every month! So sometimes you need to adjust your react-native app.
___

## 1.11. Course Requirements
___

## 1.12. Course Requirement Refreshers
___

## 1.13. Running the App on an Android Emulator
We don't need to test the app on the real smartphone, we can use the simulartor.

### For iOS simulater you need: Xcode
https://docs.expo.dev/workflow/ios-simulator/

### For Android you need: __Android Studio__
https://docs.expo.dev/workflow/android-studio-emulator/

1. Download Android Studio
2. On MacOS make sure that you follow these steps:
   * If you are on macOS or Linux, add an environment variable pointing to the Android SDK location in ~/.bash_profile (or ~/.zshenv if you use Zsh) - eg. export ANDROID_SDK=/your/path/here. Copy and paste these two lines to do this automatically for Bash and Zsh:
   [ -d "$HOME/Library/Android/sdk" ] && ANDROID_SDK=$HOME/Library/Android/sdk || ANDROID_SDK=$HOME/Android/Sdk
   echo "export ANDROID_SDK=$ANDROID_SDK" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
   
    * On macOS, you will also need to add platform-tools to your ~/.bash_profile (or ~/.zshenv if you use Zsh) - eg. export PATH=/your/path/here:$PATH. Copy and paste this line to do this automatically for Bash and Zsh:
   echo "export PATH=$HOME/Library/Android/sdk/platform-tools:\$PATH" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
   
    * Make sure that you can run `adb` from your terminal.

2. Install it
3. Open the Android Studio
4. Click on "Configure" and choose "SDK Manager"
5. Install some of the older versions of the Android (for the course you need Android 9.0 (Pie) to be installed)
6. Go to "SDK Tools"
7. Install also "Android Emulator", "SDK-Platform-Tools" and "SDK Build-Tools" and also "Intel x86 Emulator Accelerator" and also "Google Play Services" in the list.
8. ~~Now go to start page again and then "Configure" > "AVD Manager"~~
   2022 => Click on "More Action" > "SDK Manager"
9. "Create Virtual Device"
10. Click on for example "Pixel 2"
10. Make sure that you have one of the latest SDKs installed
11. Add `Android 9.0 (Pie)` and one other latests version of Android
11. Now in the "SDK Tools" Tab (2nd tab) make sure that `Android Emulator` , `Android SDK Platform-Tools` (Mori: maybe this one's name is changed to this `Android SDK Command-line Tools`Android Build Tools` `Android SDK Tools` and `Intel x86 Emulator...` are all installed
11. If you get error on `Intel x86 HAXM`, try to install it directly from Intel repo: https://github.com/intel/haxm/releases
11. On the welcome page of Android Studio go again to "More Actions" and then "Virtual Device Manager"
12. Choose "Pixel 2" (for course) - (the devices with PlayStore are recommended)
12. After the installation click on Next and the "Finish"
13. Now launch the device by clicking on the Green Play-Button.
14. Turn the device on.
15. now go back to the `rn-first-app` project > `npm start`
16. localhost:19002 > "Run on Android device/emulator"
17. Instead of the above step you can press `a` in terminal (where the Expo is running) and then it launches the `rn-first-app` on the android-studio device.
___

## 1.14. Running the App on an iOS Simulator
!ONLY POSSIBLE ON MACOS!

1. Install Xcode
2. Go to Xcode "Prefernces"
3. Go to "Locations" tab and mace sure you have the Command Line Tools installed.
4. Go to Menu > "Xcode" > "Open Dev Tool" > "Simulator" > it opens an iOS device
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
1. ``expo init rn-complete-guide``
2. "blank"
3. ``yarn start``
4. press "i" to run on iOS simulator and "a" to run on Android Vritual Device (or use expo devtool)
___

## 2.4. Planning the App
We are going to create a "Goal app" where you can store the goals in a list and then by clicking on each item to delete the goal.

This app is to help to learn the core features of React Native.
___

## 2.5. Working with Core Components
* ``<View>`` is like ``<div>``.
* A text can be ONLY between ``<Text>`` tags!!! and not directly between `<view></view>` . It's different than HTML.
* ``flex`` sets how much can a child element take space of the parent relative to the other child elements.

To check all the React Native components: https://reactnative.dev/docs/components-and-apis
___

## 2.6. Getting Started with Styles
We can not see the `TextInput` when the app renders. That's because it's in the top of device display so we should add stylings to fix it.

Every component has its own allowed Style-properties , for example for `<view></view>` : https://reactnative.dev/docs/view-style-props

Style values should be in `Number` type and they will be interpreted with pixel unit, for example: `padding: 10` means like in css: `padding: '10px'`

Now if you click above "ADD" button. On android you see the soft keyboard opens but for iOS you should: go to Xcode top menu > "Hardware" > "Keyboard" > "Toggle Software Keyboard" (Mori: for newer version of Xcode: Xcode-Menu > "I/O" > "Keyboard" > "Toggle Software Keyboard")  
___

## 2.7. Flexbox & Layouts (Intro)
We want to bring the button next to the TextInput instead of being blow of it.

By default, the `<View>` has something like `display: flex;` of CSS.
___

## 2.8. React Native Flexbox Deep Dive
Mori: I DID NOT WATCH THIS LECTURE COMPLETELY, BECAUSE IT SHOULD WORK ALMOST LIKE CSS FLEXBOX...

* A ``<View>`` different to the ``<div>`` is already a flexbox and applies it to its children by default in column direction!
* We can change direction with ``flexDirection: 'row'``

* By default the ``alighItems: 'stretch'``, so the child elements take the height of the parent by default, we can change for example by setting it to ``'center'``

* ReactNative Flexbox cheatsheet: https://reactnative.dev/docs/flexbox
___

## 2.9. Inline Styles & StyleSheet Objects
* Why not outsourcing style objects without using StyleSheet.create() ??? because ``StyleSheet.create()`` : can detect syntax errors in styling and also potential performance improvments.
___

## 2.10. Working with State & Events
* ``onChangeText`` : like `onChange` in ReactJS

* `console.log()` : You see the logs on the terminal, where the Expo is running.  
  Alternatively you can see the logs in the browser localhost:19002 > "Click on the device" > log is there.


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

* elements in the ARRAY should be objects which have a ``key`` prop (NEW: or `id`). (``key`` should be string)
* In `<FlatList>` you can use `keyExtractor` (which by default has this function as value: `(item, index) => item.key`) to customize the above prop.  

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

* ``TouchableHighlight`` ... (props: underlayColor, ...)

* ``TouchableNativeFeedback`` only works on Android devices.

* ``TouchableWithoutFeedback`` : as the name suggests, it has no visual effects when touching.

when you go to TouchableOpacity page, REACT NATIVE SUGGESTS:

_If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API._

https://reactnative.dev/docs/pressable
___

## 2.18. Deleting Items
___

## 2.19. Adding a Modal Overlay
https://reactnative.dev/docs/modal

We want to move GoalInput view to a Modal.

* ``<Modal>`` cmp - (__Our Goal:__ We want to show the GoalInput cmp in a modal!)

___

## 2.20. More Flexbox Styling
Now we should fix styling of modal (`GoalInput.js`)

* ``View`` cmp takes the height of its children, so without children it has height and width are 0.

* `flex` (in inputContainer) : `flex` allows you to control how much space your different items inside of a flexbox take.  
  
When you have only one item like our case now, you only need to set a value for `flex` (value can be 1,2,3,... if there is only one single item there it does not matter). It ensures that this single item inside of `View` takes the full space.

___

## 2.21. Closing the Modal & Clearing Input
___

## 2.22. Finishing the Modal Styling
IMPORTANT: to giving style to `<Button />`s you MUST wrap it in a `<View>` as you see in this lecture!
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
* __Error Messages / App Crashes__, like:
    * Syntax errors.
    * bugs (e.g. ``undefined``, usw)
    * "Unavoidable" errors: (network errors, request and resp errors)

* __Logical errors__
    * undesired or unexpetcted app behaviour
    * unexpected / unhandled user behaviour
    * sequence of steps leads to errors

* __Wrong styling and layout__
    * different devices
    * very small devices

How to debug?
* READ the error messages carefully!
* using ``console.log()``
* Chrome Debugger + Breakpoints
* Mori: Webstorm Debugger 
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

3. Chrome DevTool > "Source" tab

4. In left menu of "Source" tab , go to a file which beginns with `debuggerWorker... .js` > open `Users/morteza/Desktop/...`

5. Now here you can see the folder structure in `src` (in uncompiled/not-built version of your code!!!)

6. For example there set a breakpoint on Line 8 `GoalInput.js > addGoal() > if (enteredGoal.lenght === 0)`
    ![img.png](imgs/img.png)

7. Now in the app, add a new goal and press "ADD"

8. In DevTool now you see that the this line is highlighted and it pauses the app.

9. You can now bring the app to next step or backward, etc using control buttons in DevTool:
    ![img.png](imgs/img2.png)
   
__For more information on chrome's debugging tool__: https://developers.google.com/web/tools/chrome-devtools/
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

* __Inspector:__ In Menu of Expo App on Mobile Device (`Show Element Inspector`)
* You can check the components

There is a better tool: __React-Native Debugger__

1. Search for "React-Native Debugger"
2. Go to https://github.com/jhen0409/react-native-debugger
3. Go to Release Page of it : https://github.com/jhen0409/react-native-debugger/releases
4. Download the compatible one for your Desktop OS and install it.
4. Open the installed app
5. On the virtual mobile device choose `JS Remote Debugger`
6. Back to debugger app, use these keys: ``CMD+T`` (=> iOS or cmd+m for android)
7. Enable "Remote JS Debug" on the virtual mobile device.

You see all the components structure. This is MUCH NICER than other Debugger which we learned! It has also Redux debugging tool for the React-Native.

You can also change the Styling with this Debugger, just like on normal chrome dev tool!!!

You can use ``Profiler`` you can optimize RERENDERINGs in you app, for example to detect the UNNECESSARY RERENDERINGS in your App, just like in normal React Debugger

___

## 3.9. Wrap Up
___

## 3.10. Useful Resources & Links

* Expo Debugging Docs: https://docs.expo.io/versions/v34.0.0/woflow/debugging/

* Chrome Dev Tools Docs: https://developers.google.com/web/tools/chrome-devtools/

___

___
___
___

# 4. Components, Styling, Layouts - Building Real Apps [GUESS A NUMBER APP]

## 4.1. Module Introduction
___

## 4.2. Setup & App Planning

* You set the number which computer should guess.
* after computered guessed a number:
    * if it is not the correct number, you give computer a hint "greater" or "lower"
    * If you give computer a WRONG hint
    * if it's the correct number, computer has won!
        * the message would be: "The AI found your number in X guesses"
        * and under the msg , a btn with "RESET" to reset the game.

___

## 4.3. Adding a Custom Header Component

* Remember: ``View`` cmp is already a Flexbox by default for styling

___

## 4.4. Adding a Screen Component
___

## 4.5. Working on the Layout
___

## 4.6. Styling a View as a "Card" Container (with Drop Shadows & Rounded Corners)

* All the Shadow properties, like ``shadowColor``, ``shadowOffset``, ... ONLY WORK ON __iOS__.

* For that you can use ``elevation`` for the Android, which would NOT work on iOS.

___

## 4.7. React Native Styling vs CSS Styling

Styling in React Native is inspired by CSS - but it's not equivalent!

You must never forget that React Native in the end is all about translating React components (like <View> or <Text>) to native widgets (like UIView or widget.view - see section 1 of the course, I do dive into this there)!

These native widgets don't understand CSS. They have nothing to do with the web, HTML or anything like that!

What the React Native team does, is the following: They also provide "style translations" => CSS-inspired styling commands/ properties which also are translated to styling configurations those native widgets understand.

Hence backgroundColor: 'black' works - it simply targets the platform-specific configurations for the native widget that will result in a black background to be drawn. Even if these native instructions look nothing like CSS. React Native does the heavy lifting behind the scenes.

That's why many but absolutely not all CSS properties are supported in React Native. That's also why styling is done via JavaScript and not CSS. In addition, not all React Native components support all style properties.

<Text> doesn't support flexbox-related properties for example - but I'll dive into this later in the course.

___

## 4.8. Extracting a Card Component (Presentational Component)

___

## 4.9. Color Theming with Constants
___

## 4.10. Configuring & Styling a TextInput
In `AppInput.js` because we define the 

```
style={{
    ...styles.appInput,
    ...props.style
}}
```

after 

```
{ ...props }
```

so `style` will override the `props.style` otherwise the `styles.appInput` would have no effect!
___

* `keyboardType = 'number-pad'` : When mobile softkeyboard opens, it presents the NumPad. (ONLY for complete Numbers (integers) on iOS. For Android we need another approach to prevent user to enter a floating number)
___

## 4.11. Cleaning User Input & Controlling the Soft Keyboard (Input Validation)
- With adding this regex in AppInput.js now it's impossible to add a comma from Android numpad

- iOS Problem: The Keyboard does not want to close (When we tap outside of it or try to close it)! For this problem we use `<TouchableWithoutFeedback>` and `Keyboard` API from react-native (`StartGame.js`)
___

## 4.12. Resetting & Confirming User Input
___

## 4.13. Showing an Alert
___

## 4.14. Time to Finish the "Confirmation Box"
___

## 4.15. Adding Random Number Generation
___

## 4.16. Switching Between Multiple "Screens"
___

## 4.17. Adding Game Features: Hints & Validation
## 4.18. Checking the "Win" Condition with useEffect()
## 4.19. Finishing the Game Logic
## 4.20. Adding Custom Fonts
## 4.21. Installing expo-font
## 4.22. A Synthetic Style "Cascade": Custom Wrapper Components & Global Styles
## 4.23. Adding Local Images
## 4.24. Styling Images
## 4.25. Working with Network (Web) Images
## 4.26. A Closer Look at the "Text" Component (and what you can do with it)
## 4.27. <View> vs <Text> - A Summary
## 4.28. Building a Custom Button Component
## 4.29. Adding Icons
## 4.30. Exploring UI Libraries
## 4.31. Managing Past Guesses as a List
## 4.32. Styling List Items & Lists
## 4.33. ScrollView & Flexbox (Yes, that works!)
## 4.34. Using FlatList Instead of ScrollView
## 4.35. Wrap Up
## 4.36. Useful Resources & Links

___
___
___
