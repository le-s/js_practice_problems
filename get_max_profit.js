function getMaxProfit(stockPrices) {
  if (stockPrices.length < 0) return [];
  let minimum;
  let currentProfit;
  let maxProfit;
  let bestCase;

  for (let i = 0; i < stockPrices.length; i++) {
    
    if (!minimum || stockPrices[i] < minimum) {
      minimum = stockPrices[i];
    }
    
    if (minimum < stockPrices[i]) {
      currentProfit = stockPrices[i] - minimum;
    }

    if (!maxProfit || maxProfit < currentProfit) {
      maxProfit = currentProfit;
    }
  }

  for (let i = 0; i < stockPrices.length - 1; i++) {
    let currentCase = stockPrices[i + 1] - stockPrices[i];
    if (!bestCase || currentCase > bestCase) {
      bestCase = currentCase;
    }
  }
  
  if (maxProfit) {
    return maxProfit;
  } else {
    return bestCase;
  }
}

const stockPrices = [9, 7, 4, 1];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)