function userCreator (name, score) {
  const newUser = Object.create(userFunctionStore)
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function(){this.score++},
  login: function(){console.log('You are logged in!')}
}

const user1 = userCreator("Matt", 4);
const user2 = userCreator('John'21);
user1.increment();