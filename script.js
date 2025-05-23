const reasons = [
    "You always make me smile 😊",
    "You're my best friend 💕",
    "You're kind and thoughtful 🥰",
    "I love your laugh 😄",
    "You support me no matter what 🙌",
    "We make a great team 🤝",
    "You're beautiful inside and out 💖",
    "You make life an adventure 🌍",
    "I love how you love me ❤",
    "Every day with you is special ✨",
    "You're my favorite person ever 🫶",
    "Happy 1-year anniversary, my love! 🎉"
  ];
  
  let index = 0;
  
  document.getElementById('heartButton').addEventListener('click', () => {
    const reasonText = document.getElementById('reasonText');
  
    if (index < reasons.length) {
      reasonText.textContent = reasons[index];
      index++;
    } else {
      reasonText.innerHTML = "💌 You've unlocked all the reasons I love you.<br>Happy Anniversary! ❤";
      document.getElementById('heartButton').disabled = true;
      document.getElementById('heartButton').style.opacity = 0.5;
    }
  });