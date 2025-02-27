// Quantum Lab Notes - Visual Effects
document.addEventListener('DOMContentLoaded', function() {
  // Add particle background if on home page
  if (document.querySelector('.home')) {
    createParticleBackground();
  }
  
  // Add hover effects to post items
  const postItems = document.querySelectorAll('.post-list li');
  postItems.forEach(item => {
    item.addEventListener('mouseenter', addQuantumGlow);
    item.addEventListener('mouseleave', removeQuantumGlow);
  });
});

// Function to create a particle background effect
function createParticleBackground() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-background';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  `;
  document.body.appendChild(particleContainer);
  
  // Create particles
  for (let i = 0; i < 50; i++) {
    createParticle(particleContainer);
  }
}

// Create individual particles
function createParticle(container) {
  const particle = document.createElement('div');
  
  // Random properties
  const size = Math.random() * 4 + 1;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const opacity = Math.random() * 0.5 + 0.1;
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;
  
  // Colors - quantum/blockchain theme
  const colors = ['#00ccff', '#7b42f6', '#2a6cff', '#4ef2e7'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // Set particle styles
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${posX}%;
    top: ${posY}%;
    background-color: ${color};
    border-radius: 50%;
    opacity: ${opacity};
    box-shadow: 0 0 ${size * 2}px ${color};
    animation: float ${duration}s linear infinite;
    animation-delay: -${delay}s;
    pointer-events: none;
  `;
  
  container.appendChild(particle);
}

// Add quantum glow effect on hover
function addQuantumGlow(event) {
  const item = event.currentTarget;
  item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 204, 255, 0.5)';
  
  // Create a small quantum effect
  const effect = document.createElement('div');
  effect.className = 'quantum-effect';
  effect.style.cssText = `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, rgba(0, 204, 255, 0.05), rgba(123, 66, 246, 0.05));
    border-radius: 8px;
    z-index: -1;
  `;
  
  if (!item.querySelector('.quantum-effect')) {
    item.style.position = 'relative';
    item.appendChild(effect);
  }
}

// Remove glow effect
function removeQuantumGlow(event) {
  const item = event.currentTarget;
  item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
  
  const effect = item.querySelector('.quantum-effect');
  if (effect) {
    effect.remove();
  }
}

// Add keyframe animation for floating particles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: var(--opacity);
    }
    90% {
      opacity: var(--opacity);
    }
    100% {
      transform: translateY(-100px) translateX(20px) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);
