var styles = [];

// eslint-disable-next-line no-multi-assign
exports = module.exports = function (predicate = x=>true) {
  return styles.filter(predicate).join("\n");
};

exports.add = function (content) {
  styles.push(content);
};
