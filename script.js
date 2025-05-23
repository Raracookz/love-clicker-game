document.addEventListener('DOMContentLoaded', function() {
    const reasons = [
        "You always make me smile 😊",
        "You're my best friend 💕",
        "You're kind and thoughtful 🥰",
        "I love your laugh 😄",
        "You support me no matter what 🙌",
        "You're my sunshine on cloudy days ☀",
        "You hug me like home 🤗",
        "You're my favorite notification 💬",
        "You believe in me 💪",
        "You make coffee taste sweeter ☕",
        "You're my adventure partner 🌍",
        "You make bad days better 🌈",
        "You're my calm in the chaos 🧘",
        "You sing even when it's off-key 🎶",
        "You make me feel seen 👀",
        "You're the best cuddler 🧸",
        "You accept me exactly as I am 💌",
        "You laugh at my bad jokes 🤪",
        "You're my lucky charm 🍀",
        "You're always learning and growing 🌱",
        "You say 'I love you' often ❤",
        "You remember my favorite things 🎁",
        "You care about people deeply 🫶",
        "You make life less scary 🌎",
        "You comfort me when I'm sad 🫂",
        "You smell amazing 🧴",
        "You're great at hugs 🤗",
        "You celebrate my wins 🎉",
        "You're there when I fail 💔",
        "You're honest and loyal 🐾",
        "You're my dream come true ✨",
        "You make time for me 🕰",
        "You protect my heart 💞",
        "You’re sweet even when tired 🥱",
        "You look cute in anything 👗",
        "You giggle at the dumbest stuff 🤭",
        "You give the best compliments 🥹",
        "You're always thinking of me 🧠",
        "You inspire me daily 🦋",
        "You love me when I can't 🫠",
        "You try your best for us 💪",
        "You're passionate and bright 🔥",
        "You're my whole heart 🧡",
        "You glow when you smile ✨",
        "You make holidays feel special 🎄",
        "You walk beside me 🥾",
        "You say sorry when it matters 🙏",
        "You’re thoughtful in little ways 🎈",
        "You're goofy with me 🤡",
        "You're the one I trust most 💬",
        "You know what makes me tick ⏱",
        "You're strong but gentle 🐻🌸",
        "You never stop surprising me 🧠",
        "You bring joy into the ordinary 🌞",
        "You're the reason I love mornings ☀",
        "You love animals 🐶",
        "You dance in the kitchen 💃",
        "You call just to say hi 📞",
        "You're my favorite song 🎵",
        "You never give up 🏆",
        "You keep it real 💯",
        "You're patient with me 🕊",
        "You're curious about the world 🌌",
        "You notice the small things 🔍",
        "You always try to cheer me up 🧃",
        "You're down for fun 💃",
        "You love with your whole heart 💓",
        "You're thoughtful and sincere ✉",
        "You’re cozy to cuddle with 🛋",
        "You look good without trying 😍",
        "You text back fast 😄",
        "You light up any room 💡",
        "You're wild and wise 🦁",
        "You’re amazing with words 📝",
        "You keep my secrets 🔐",
        "You're beautiful when you sleep 😴",
        "You never stop dreaming 🌙",
        "You're magnetic ✨",
        "You're the reason I smile now 😁",
        "You’re the best thing that’s ever happened to me 💖",
        "You're mine, and I’m yours 💍",
        "You're a miracle in my life 🌠",
        "You see the good in me 👀",
        "You're full of love 🫀",
        "You make the dark days light 🌤",
        "You’re my safe place 🏠",
        "You helped me find myself 🧭",
        "You know me better than I know myself 📘",
        "You’re soft with my heart 🩷",
        "You’re exactly what I prayed for 🙌",
        "You love me even at my worst 😔",
        "You're more than enough 🫶",
        "You're heaven on Earth ☁",
        "You deserve the world 🌎",
        "You’re my answered prayer 🙏",
        "You're worth every second ⏳",
        "You're love in human form 🕊",
        "You're a blessing every day 🌅",
        "You're mine forever 💫",
        "You're my always and forever ♾",
        "Happy 1-Year Anniversary, My Love! ❤🎉"
      ];
      
      let index = 0;
      const text = document.getElementById('reasonText');
      const btn = document.getElementById('heartButton');
      const confettiCanvas = document.getElementById('confetti');
      
      btn.addEventListener('click', () => {
        text.classList.add("fade-out");
        setTimeout(() => {
          if (index < reasons.length) {
            text.textContent = reasons[index];
            index++;
          } else {
            text.innerHTML = "💌 You’ve unlocked 112 reasons I love you.<br><strong>Happy Anniversary!</strong>";
            btn.disabled = true;
            btn.style.opacity = 0.5;
            launchConfetti();
          }
          text.classList.remove("fade-out");
        }, 300);
      });
      
      function launchConfetti() {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
  });