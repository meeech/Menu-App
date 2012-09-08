var tray = Ti.UI.addTray('tray.png'),
    menu = Ti.UI.createMenu(),

    //Add some menu items
    menuItems = [

        Titanium.UI.createMenuItem('Change Icon', function(e) {
            //Something's going on... let's change the icon.
            tray.setIcon('tray-active.png');
            setTimeout(function() {
                tray.setIcon('tray.png');
            }, 3000);
        }),
        
        Titanium.UI.createMenuItem('Cat', function(e) {
            alert('Meow Meow');
        }),
        
        Titanium.UI.createMenuItem('Quit', function(e) {
            confirm('You sure?', function() {
                Ti.App.exit();                
            });
        })

    ];

menuItems.forEach(function(item) {
    menu.appendItem(item);
});

tray.setMenu(menu);