function loadFooter() {
  const footerHTML = `
    <hr style="border: none; height: 1px; background-color: #ddd; margin: 30px 0 20px 0;">
    <footer style="text-align: center; width: 100%;">
      <p id="footer-support-text" style="color: #555; font-size: 14px;">
        請支持我繼續創作和分享<br>
        <a href="https://buymeacoffee.com/outliersecon" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">
          Buy Me a Coffee 請我飲杯咖啡
        </a>
      </p>
      <p style="color: #555; font-size: 14px;">
        <a href="https://outliersecon.github.io/Outliers-Economics" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">
          Back to Home | 返回首頁
        </a>
      </p>
    </footer>
  `;
  
  // Try to find container first, fallback to body
  const container = document.querySelector('.container') || document.body;
  if (container) {
    container.insertAdjacentHTML('beforeend', footerHTML);
    
    // Function to update footer colors based on dark mode
    function updateFooterColors() {
      const isDarkMode = document.body.classList.contains('dark-mode');
      const supportText = document.getElementById('footer-support-text');
      const footerPs = document.querySelectorAll('footer p');
      
      if (supportText) {
        if (isDarkMode) {
          supportText.style.color = '#e0e0e0';
        } else {
          supportText.style.color = '#555';
        }
      }
      
      // Update other footer text colors
      footerPs.forEach(p => {
        if (p.id !== 'footer-support-text') {
          if (isDarkMode) {
            p.style.color = '#adb5bd';
          } else {
            p.style.color = '#555';
          }
        }
      });
    }
    
    // Initial color update
    updateFooterColors();
    
    // Watch for dark mode changes
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          updateFooterColors();
        }
      });
    });
    
    // Start observing
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
