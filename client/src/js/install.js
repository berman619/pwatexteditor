let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
});

butInstall.addEventListener('click', (e) => {
  console.log('Install button clicked');
  butInstall.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed!');
});