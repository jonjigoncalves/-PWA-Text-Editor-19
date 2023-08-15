const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await  deferredPrompt.userChoice;
        if (result.outcome === 'accepted'){
            console.log('User Approved');
        }else {
            console.log('User Denied');
        }
        // hide the button after the user makes a choice 
        deferredPrompt = null;
        butInstall.style.display = 'none';
       }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App Installed!');
});
