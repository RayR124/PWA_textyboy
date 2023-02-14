const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
});

// Implement a click event handler on the butInstall element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none';
    window.deferredPrompt.prompt();
    const choice = await window.deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
        window.deferredPrompt = null;
    }
});