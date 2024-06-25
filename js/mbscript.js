document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('menumb').classList.add('open');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('menumb').classList.remove('open');
});
