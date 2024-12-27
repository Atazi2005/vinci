// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get the button and popup elements
    const whatsappTrigger = document.getElementById('whatsappTrigger');
    const whatsappPopup = document.getElementById('whatsappPopup');
  
    // Check if the elements exist
    if (whatsappTrigger && whatsappPopup) {
      // Toggle the popup when the button is clicked
      whatsappTrigger.addEventListener('click', () => {
        whatsappPopup.classList.toggle('show');
      });
  
      // Close the popup if the user clicks outside of it
      document.addEventListener('click', (event) => {
        if (!whatsappPopup.contains(event.target) && event.target !== whatsappTrigger) {
          whatsappPopup.classList.remove('show');
        }
      });
    } else {
      console.error("Error: WhatsApp elements not found in the DOM.");
    }
  });
  