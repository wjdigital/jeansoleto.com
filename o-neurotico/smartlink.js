document.getElementById('smartlink').addEventListener('click', function(event) {
    event.preventDefault();
    
    var videoId = "dQw4w9WgXcQ"; // Substitua pelo ID do seu vídeo do YouTube

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.href = "vnd.youtube://" + videoId; // Link para Android
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "youtube://" + videoId; // Link para iOS
    } else {
        window.location.href = "https://www.youtube.com/watch?v=" + videoId; // Link para Desktop
    }
});
