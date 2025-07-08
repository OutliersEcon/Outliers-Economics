function loadFooter() {
  const footerHTML = `
    <hr style="border: none; height: 1px; background-color: #ddd; margin: 30px 0 20px 0;">
    <footer style="text-align: center; margin-top: 20px; width: 100%;">
      <p style="color: #555; font-size: 14px;">
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
  
  // Find the container and append the footer
  const container = document.querySelector('.container');
  if (container) {
    container.insertAdjacentHTML('beforeend', footerHTML);
  }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
