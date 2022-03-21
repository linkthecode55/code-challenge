class DataSource {
  constructor(url) {
    this.url = url;
  }
  async getPrices() {
    const response = await fetch(this.url);
    const jsonresponse = await response.json();
    const jsondata = jsonresponse.data.prices;
    let data = [];
    jsondata.forEach((p) => data.push(new PriceData(p.pair, p.buy, p.sell)));
    return data;
  }
}

class PriceData {
  constructor(pair, buy, sell) {
    this.pair = pair;
    this.buy = buy;
    this.sell = sell;
  }

  mid() {
    return (this.buy + this.sell) / 200;
  }

  quote() {
    return this.pair.slice(-3);
  }
}

async function main() {
  let ds = new DataSource("https://static.ngnrs.io/test/prices");
  const data = await ds.getPrices().then(prices => {
    prices.forEach(price => {
      console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
    });
  }).catch(error => {
    console.err(error);
  });
}

main();