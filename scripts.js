document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.ai-btn');
  const status = document.getElementById('button-status');

  const botMessages = {
    CHATGPT: 'CHATGPT: Strategy, structure, and polished code output.',
    'CLAUDE AI': 'CLAUDE AI: Narrative tone, design direction, and refinement.',
    'Google Antigravity': 'Google Antigravity: Experiments, edge ideas, and futuristic flair.'
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      status.textContent = botMessages[button.textContent] || 'AI collaboration selected.';
    });
  });
});
