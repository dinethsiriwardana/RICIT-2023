   function updateCountdown() {
        const countdownElement = document.querySelector('.big-countdown');
        const countdownDate = new Date(countdownElement.dataset.countdown).getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown elements with the calculated values
        document.querySelector('.number-days').textContent = days.toString().padStart(2, '0');
        document.querySelector('.number-hours').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.number-minutes').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.number-seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);