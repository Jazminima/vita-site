// Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const text = "An Experiment in Self-Sovereign AI";
    const typingTextElement = document.getElementById('typing-text');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    
    if (typingTextElement) {
        typeWriter();
    }
    
    // Create stars background
    const starsContainer = document.getElementById('stars');
    const starsCount = 200;
    
    if (starsContainer) {
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random position
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            
            // Random size
            const size = Math.random() * 2;
            
            // Random animation delay
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
    const nodeCount = 15;
    const nodes = [];
    
    if (networkContainer) {
        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            
            // Random position
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            
            // Random size
            const size = Math.random() * 5 + 3;
            
            circle.style.width = size + 'px';
            circle.style.height = size + 'px';
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
            
            networkContainer.appendChild(circle);
            nodes.push({ element: circle, x, y, size });
        }
        
        // Create connections between nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                // Only connect some nodes (not all)
                if (Math.random() > 0.7) continue;
                
                const connection = document.createElement('div');
                connection.classList.add('connection');
                
                const x1 = nodes[i].x;
                const y1 = nodes[i].y;
                const x2 = nodes[j].x;
                const y2 = nodes[j].y;
                
                // Calculate distance and angle
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
                
                // Position and rotate
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
}); 