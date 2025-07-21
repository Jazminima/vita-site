// Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const text = "An Experiment in Self-Sovereign AI";
    const typingTextElement = document.getElementById('typing-text');
    let i = 0;
    
    function typeWriter() {
        if (typingTextElement && i < text.length) {
            typingTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80); // Adjust speed here
        }
    }
    
    typeWriter();
    
    // Create stars background
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
        const starsCount = 200;
        
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            const size = Math.random() * 2;
            const delay = Math.random() * 5;
            
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.animationDelay = delay + 's';
            
            starsContainer.appendChild(star);
        }
    }
    
    // Create network visualization
    const networkContainer = document.getElementById('network');
    if (networkContainer) {
        const nodeCount = 15;
        const nodes = [];
        
        for (let i = 0; i < nodeCount; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            const size = Math.random() * 5 + 3;
            
            circle.style.width = size + 'px';
            circle.style.height = size + 'px';
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
            
            networkContainer.appendChild(circle);
            nodes.push({ element: circle, x, y, size });
        }
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (Math.random() > 0.7) continue;
                
                const connection = document.createElement('div');
                connection.classList.add('connection');
                
                const x1 = nodes[i].x;
                const y1 = nodes[i].y;
                const x2 = nodes[j].x;
                const y2 = nodes[j].y;
                
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
                
                connection.style.width = distance + 'px';
                connection.style.left = x1 + 'px';
                connection.style.top = y1 + 'px';
                connection.style.transform = `rotate(${angle}deg)`;
                
                networkContainer.appendChild(connection);
            }
        }
    }
    
    // Add read more/less functionality
    const readMoreBtn = document.getElementById('read-more-btn');
    const readLessBtn = document.getElementById('read-less-btn');
    const extendedContent = document.getElementById('extended-content');
    
    if (readMoreBtn && readLessBtn && extendedContent) {
        readMoreBtn.addEventListener('click', function() {
            extendedContent.classList.add('show');
            readMoreBtn.style.display = 'none';
            readLessBtn.style.display = 'block';
        });
        
        readLessBtn.addEventListener('click', function() {
            extendedContent.classList.remove('show');
            readMoreBtn.style.display = 'block';
            readLessBtn.style.display = 'none';
            
            // Smooth scroll back to the top of the mission section
            const missionContent = document.querySelector('.mission-content');
            missionContent.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Make the beams follow the mouse
    document.addEventListener('mousemove', function(e) {
        const hero = document.querySelector('.hero');
        const pulses = document.querySelectorAll('.pulse, .pulse2, .pulse3');
        if (!hero || pulses.length === 0) return;

        const rect = hero.getBoundingClientRect();
        // Only update if mouse is over the hero section
        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) return;

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        pulses.forEach(pulse => {
            pulse.style.left = `${x}%`;
            pulse.style.top = `${y}%`;
        });
    });
}); 