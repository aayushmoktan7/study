document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const roseContainer = document.getElementById('rose-container');
    const questionSection = document.getElementById('question-section');
    const questionText = document.getElementById('question-text');
    const options = document.getElementById('options');
    const nextBtn = document.getElementById('nextBtn');
    const resultSection = document.getElementById('result-section');
    const bgMusic = document.getElementById('bg-music');
  
    const questions = [
      { text: "What is your type?", options: ["Funny", "Serious", "Adventurous", "Romantic"] },
      { text: "What's your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
      { text: "Where would you go on a dream date?", options: ["Beach", "Mountain", "Restaurant", "Park"] }
    ];
  
    let currentQuestion = 0;
  
    // Yes Button Click
    yesBtn.addEventListener('click', () => {
      startRosesAnimation();
      setTimeout(() => {
        showQuestion();
      }, 5000);
    });
  
    // No Button Click
    noBtn.addEventListener('click', () => {
      alert("Fuck you! 😡");
    });
  
    // No Button Hover Animation
    noBtn.addEventListener('mouseenter', () => {
      let randomX = Math.random() * 50;
      let randomY = Math.random() * 50;
      noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  
    noBtn.addEventListener('mouseleave', () => {
      noBtn.style.transform = 'translate(0, 0)';
    });
  
    function startRosesAnimation() {
      roseContainer.innerHTML = '';
      roseContainer.classList.remove('hidden');
      for (let i = 0; i < 50; i++) {
        const rose = document.createElement('div');
        rose.textContent = '🌹';  // Rose emoji
        rose.className = 'rose';
        rose.style.left = `${Math.random() * 100}%`;
        rose.style.top = `${Math.random() * 100}%`;
        rose.style.animationDelay = `${Math.random() * 5}s`;
        roseContainer.appendChild(rose);
      }
    }
  
    function showQuestion() {
      roseContainer.classList.add('hidden');
      document.getElementById('start-buttons').classList.add('hidden');
      questionSection.classList.remove('hidden');
      loadQuestion();
    }
  
    function loadQuestion() {
      if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionText.textContent = question.text;
        options.innerHTML = '';
        question.options.forEach(option => {
          const btn = document.createElement('button');
          btn.textContent = option;
          btn.classList.add('option-btn');
          btn.addEventListener('click', () => {
            btn.classList.add('selected');
            nextBtn.classList.remove('hidden');
          });
          options.appendChild(btn);
        });
      } else {
        showResult();
      }
    }
  
    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      nextBtn.classList.add('hidden');
      loadQuestion();
    });
  
    function showResult() {
      questionSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
      bgMusic.play();  // Start playing the song at the result screen
    }
  });
  