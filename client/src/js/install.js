const butInstall = document.getElementById('buttonInstall');
let savedBeforeInstallPromptEvent = null;

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    if (confirm('Do you want to install this application?')) {
        savedBeforeInstallPromptEvent = event;
    }
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (savedBeforeInstallPromptEvent !== null) {
        savedBeforeInstallPromptEvent.prompt();
        savedBeforeInstallPromptEvent = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    alert('App installed!');
});