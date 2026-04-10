// Pricing calculation utilities for kitchen set estimation

/**
 * Calculate total price for selected options
 * @param {Object} selectedOptions - { componentId: optionId }
 * @param {number} quantity - Running meters (m')
 * @param {Array} components - Component data with options
 * @returns {Object} { total, pricePerMeter, breakdown }
 */
export function calculateTotalPrice(selectedOptions, quantity, components) {
  if (!components || components.length === 0) {
    return { total: 0, pricePerMeter: 0, breakdown: [] };
  }

  let pricePerMeter = 0;
  const breakdown = [];

  // Sum prices from each selected option
  components.forEach((component) => {
    const selectedOptionId = selectedOptions[component.id];
    if (selectedOptionId) {
      const selectedOption = component.options.find(
        (opt) => opt.id === selectedOptionId
      );
      if (selectedOption && selectedOption.pricePerMeter) {
        breakdown.push({
          component: component.name,
          option: selectedOption.name,
          price: selectedOption.pricePerMeter,
        });
        pricePerMeter += selectedOption.pricePerMeter;
      }
    }
  });

  const total = pricePerMeter * quantity;

  return { total, pricePerMeter, breakdown };
}

// Format Indonesian Rupiah
export function formatIDR(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format number with thousands separator
export function formatNumber(num) {
  return new Intl.NumberFormat("id-ID").format(Math.round(num));
}
