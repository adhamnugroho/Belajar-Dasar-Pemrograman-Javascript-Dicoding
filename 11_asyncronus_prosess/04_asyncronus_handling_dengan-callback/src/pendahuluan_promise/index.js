const { getUsersPromise, getWeatherPromise } = require("./utils");

function getUserWeather(userId) {
  let user;

  return getUsersPromise(userId)
    .then((_user) => {
      user = _user;
      return getWeatherPromise(user.location);
    })
    .then((weather) => ({ ...user, ...weather }))
    .catch((error) => console.log(error.message));
}


getUserWeather(1).then(console.log).catch(console.log);
