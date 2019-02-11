const title = document.querySelector('.title');

navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        document.querySelector('video').srcObject = stream;
    }).catch(() => {
        alert('Cannot connect to camera');
    });

document.addEventListener('mouseover', function() {
    title.classList.add('title--on');
});

document.addEventListener('mouseout', function() {
    title.classList.remove('title--on');
});
