const { app, BrowserWindow } = require('electron');

let window;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        transparent: true,
        title: 'Camera',
        // icon: __dirname + '/assets/app.icns',
    });

    // Keep the aspect ratio to the video
    window.setAspectRatio(1.333333333333333);

    window.loadURL('file://' + __dirname + '/index.html');
    window.on('closed', function() {
        window = null;
    });

    // "floating" + 1 is higher than all regular windows, but still behind things
    // like spotlight or the screen saver
    window.setAlwaysOnTop(true, 'floating', 1);

    // allows the window to show over a fullscreen window
    window.setVisibleOnAllWorkspaces(true);
});


// hides the dock icon for our app which allows our windows to join other
// apps' spaces. without this our windows open on the nearest "desktop" space
app.dock.hide();
