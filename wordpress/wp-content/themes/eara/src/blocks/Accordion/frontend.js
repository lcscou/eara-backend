/**
 * Accordion frontend functionality
 * Handles accordion item interactions on the frontend
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all accordion containers
  const accordionContainers = document.querySelectorAll('.eara-accordion-container');
  
  accordionContainers.forEach(container => {
    const multiple = container.dataset.multiple === 'true';
    const accordionItems = container.querySelectorAll('.eara-accordion__item');
    
    // Set initial state based on default opened
    accordionItems.forEach(item => {
      const isDefaultOpened = item.dataset.defaultOpened === 'true';
      if (isDefaultOpened) {
        item.setAttribute('aria-expanded', 'true');
      } else {
        item.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Add click handlers to all controls
    accordionItems.forEach(item => {
      const control = item.querySelector('.eara-accordion__control');
      const isDisabled = item.dataset.disabled === 'true';
      
      if (!control || isDisabled) return;
      
      control.addEventListener('click', function() {
        const isExpanded = item.getAttribute('aria-expanded') === 'true';
        
        // If not multiple, close all other items
        if (!multiple) {
          accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.setAttribute('aria-expanded', 'false');
              const otherControl = otherItem.querySelector('.eara-accordion__control');
              if (otherControl) {
                otherControl.setAttribute('aria-expanded', 'false');
              }
            }
          });
        }
        
        // Toggle current item
        const newState = !isExpanded;
        item.setAttribute('aria-expanded', newState.toString());
        control.setAttribute('aria-expanded', newState.toString());
      });
      
      // Keyboard navigation
      control.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          control.click();
        }
      });
    });
  });
});
