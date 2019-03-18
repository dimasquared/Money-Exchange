// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) return {};
  else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    else {
      let exchange = {};
      let x;
      exchange.H = Math.trunc(currency/50);
      exchange.Q = Math.trunc((x=currency%50)/25);
      exchange.D = Math.trunc((x=x%25)/10);
      exchange.N = Math.trunc((x=x%10)/5);
      exchange.P = x%5;
      for (let key in exchange) {
        if (exchange[key] == 0) delete exchange[key];
        }
      return exchange;
      }
}
