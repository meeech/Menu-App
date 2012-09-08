Some example code on how to make a menu item style application using TideSDK for OSX.

To hide the window, open tiapp.xml and change the height & width of your project to 0. 

tip: While in development, you might want to keep the window so you can view the web inspector/console.

To make this a perfect OSX style menu app, and hide the app from the dock & app switcher you'll need to modify the Info.plist in the package of your built application.

```
<key>LSUIElement</key>
<string>1</string>
```

( via: http://hints.macworld.com/article.php?story=20010701191518268 )

Questions? You can usually find me in #tidesdk on freenode.