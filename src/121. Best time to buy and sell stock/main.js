// 121. Best Time to Buy and Sell Stock
// Вы поднимаетесь по лестнице. Чтобы достичь вершины, нужны шаги.

// Вам дан массив, pricesгде prices[i]— цена определенной акции на день.ith

// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одних акций и другой день в будущем для продажи этих акций.

// Верните максимальную прибыль, которую вы можете получить от этой транзакции . Если вы не можете получить никакой прибыли, верните 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];

    profit = Math.max(profit, price - min);
    min = Math.min(min, price);
  }

  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);
