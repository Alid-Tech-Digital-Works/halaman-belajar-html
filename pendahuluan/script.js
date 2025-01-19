// Cek apakah bab 1 sudah selesai dibaca
    window.onload = function() {
        if (localStorage.getItem('bab1Completed') === 'true') {
            document.getElementById('nextButton').style.display = 'inline-block'; // Tampilkan tombol "Lanjutkan ke Bab 2"
        }

        // Event listener untuk tombol "Selesai" ketika bab 1 sudah dibaca
        document.getElementById('finishButton').addEventListener('click', function() {
            localStorage.setItem('bab1Completed', 'true'); // Tandai bab 1 selesai dibaca
            document.getElementById('nextButton').style.display = 'inline-block'; // Tampilkan tombol selanjutnya
        });
    }