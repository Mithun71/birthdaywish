function playMusic() {
    const audio = new Audio('happy-birthday.mp3'); // Make sure to add a "happy-birthday.mp3" audio file in the project folder
    audio.play();
    createFireworks();
    alert('Happy Birthday, my love! 🎉');
  }
  
  function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = Math.random() * 100 + 'vw';
      firework.style.animationDelay = Math.random() * 2 + 's';
      fireworksContainer.appendChild(firework);
    }
  }
  