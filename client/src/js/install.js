const butInstall = document.getElementById('buttonInstall');
let savedBeforeInstallPromptEvent = null;

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    savedBeforeInstallPromptEvent = event;
  });  

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('Install button clicked');
    if (savedBeforeInstallPromptEvent !== null) {
      savedBeforeInstallPromptEvent.prompt();
      const userChoice = await savedBeforeInstallPromptEvent.userChoice;
      if(userChoice.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      savedBeforeInstallPromptEvent = null;
    }
  });  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    alert('App installed!');
});