document.addEventListener('DOMContentLoaded', function() {
    // Get the spinner element
    const spinner = document.querySelector('.spinner');
  
    // Show the spinner
    spinner.style.display = 'block';
  
    // Hide the spinner (after some delay, for example, 3 seconds)
    setTimeout(function() {
      spinner.style.display = 'none';
    }, 3000);
  });