function updateClock() {
    const timeDisplay = document.getElementById('time');
    const dateDisplay = document.getElementById('date');
  
    // Get Istanbul time
    const istanbulTime = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Istanbul',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  
    const istanbulFullDate = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Istanbul',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    timeDisplay.textContent = istanbulTime;
    dateDisplay.textContent = istanbulFullDate;
  }
  
  // Update clock immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);