// const user = {
//   username: "hitesh",
//   loginCount: 8,
//   signIn: true,

//   getUserdetails: function () {
//     // console.log("got user details from database");
//     // console.log(`Username: ${this.username}`)
//     console.log(this);
//   },
// };
// console.lo(user.username);
// // console.lo(user.getUserdetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chaiaurcode", 11, false);

console.log(userOne.constructor);
// console.log(userTwo);
