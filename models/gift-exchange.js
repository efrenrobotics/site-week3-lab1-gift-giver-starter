class GiftExchange {
  static pairs = (names) => {
    if (names.length % 2 === 1) {
      console.error("names array can't be odd");
    }

    const tuple = [];
    tuple.push(Math.random(names));
    tuple.push(Math.random(names));
    return tuple;
  };
}

module.exports = GiftExchange;
