const _ = require('lodash');

const data = [];
var totalTweets = 0;
function add (name, content) {
  totalTweets++;
  data.push({ name: name, content: content, id: totalTweets });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) { // {'prop':'val'}
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// const getFakeName = function() {
//   const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
//   //const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
//   return randArrayEl(fakeFirsts);
// };

// const getFakeTweet = function() {
//   const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
//   return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
// };

// for (let i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

module.exports.add('Nimit', 'Good luck!');
module.exports.add('David', 'Hello!');
module.exports.add('Nimit', 'Second tweet!');
module.exports.add('David', 'Creative tweet!');
