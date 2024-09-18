// Helper functions
export function formatRatio(ratio: number) {
    // Handle cases where ratio might be null or undefined
    if (!ratio && ratio !== 0) return 'N/A';
    return `${(ratio * 100).toFixed(2)}%`;
  }
  
 export function formatLargeNonMonetaryNumber(value: number) {
    // Handle cases where value might be null or undefined
    if (!value && value !== 0) return 'N/A';
  
    if (value >= 1e9) {
      return `${(value / 1e9).toFixed(2)}B`; // Billions
    } else if (value >= 1e6) {
      return `${(value / 1e6).toFixed(2)}M`; // Millions
    } else if (value >= 1e3) {
      return `${(value / 1e3).toFixed(2)}K`; // Thousands
    } else {
      return value.toString();
    }
  }

  export function formatLargeMonetaryNumber(revenue: number) {
    // Handle cases where revenue might be null or undefined
    if (!revenue && revenue !== 0) return 'N/A';
  
    // Formatting the monetary value
    if (revenue >= 1e9) {
      return `$${(revenue / 1e9).toFixed(2)}B`; // Billions
    } else if (revenue >= 1e6) {
      return `$${(revenue / 1e6).toFixed(2)}M`; // Millions
    } else if (revenue >= 1e3) {
      return `$${(revenue / 1e3).toFixed(2)}K`; // Thousands
    } else {
      return `$${revenue.toFixed(2)}`; // Small amounts
    }
  }
  