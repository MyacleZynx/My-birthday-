<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Ulang Tahun!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: url('https://static.vecteezy.com/system/resources/thumbnails/002/789/232/small/fireworks-night-sky-background-vector.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff; /* Ubah warna teks jadi putih biar kontras dengan latar gelap */
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: relative;
        }
        h1 {
            font-size: 3em;
            margin-top: 20%;
            animation: bounce 2s infinite;
            z-index: 10;
            position: relative;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Tambah bayangan teks untuk visibilitas */
        }
        p {
            font-size: 1.5em;
            z-index: 10;
            position: relative;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: red;
            animation: confetti-fall 5s linear infinite;
            z-index: 1;
        }
        @keyframes confetti-fall {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
        }
    </style>
</head>
<body>
    <h1>Selamat Ulang Tahun, Secret! 🎉🥳</h1>
    <p>Semoga hari ini penuh kebahagiaan dan tahun depan lebih baik lagi!</p>
    <audio id="birthdayMusic" loop>
        <source src="https://raw.githubusercontent.com/Myglce/This-is-the-storage/main/Sancho/Ravyn%20Lenae%20-%20Love%20Me%20Not%20(feat.%20Rex%20Orange%20County).mp3" type="audio/mpeg">
        Browser Anda tidak mendukung elemen audio.
    </audio>

    <script>
        // Personalisasi nama dari pengguna (bisa diganti dinamis jika diperlukan)
        const name = "Secret"; // Ganti dengan nama asli jika diketahui
        document.querySelector('h1').textContent = `Selamat Ulang Tahun, ${name}! 🎉🥳`;

        // Membuat confetti dengan variasi
        const confettiColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
            confetti.style.width = (Math.random() * 5 + 5) + 'px';
            confetti.style.height = (Math.random() * 5 + 5) + 'px';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
        setInterval(createConfetti, 100); // Lebih sering untuk efek confetti yang lebih padat dan meriah

        // Putar musik secara otomatis (catatan: autoplay mungkin diblokir di beberapa browser)
        const music = document.getElementById('birthdayMusic');
        music.play().catch(error => console.log('Autoplay diblokir:', error));
    </script>
</body>
</html>
