// Participate page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add any participate page specific functionality here
    // For example, smooth scrolling to sections, form validation, etc.
    
    // Copy to clipboard function
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(function() {
            // Visual feedback - show notification
            showCopyNotification();
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            // Visual feedback for fallback
            showCopyNotification();
        });
    };
    
    // Show copy notification
    function showCopyNotification() {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = '✓ Copied to clipboard';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent);
            color: var(--bg-darker);
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 600;
            z-index: 10000;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(54, 234, 204, 0.3);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after 2 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Security warning toggle
    const toggleLink = document.getElementById('security-info-toggle');
    const detailsDiv = document.getElementById('security-info-details');

    if (toggleLink && detailsDiv) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
                detailsDiv.style.display = 'block';
                toggleLink.style.textDecoration = 'underline';
            } else {
                detailsDiv.style.display = 'none';
                toggleLink.style.textDecoration = 'none';
            }
        });
    }
}); 