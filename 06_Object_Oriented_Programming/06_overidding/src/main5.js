function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}
