class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI...`);
    },
  };
}

function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`);
    },
  };
}

function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app...`);
    },
  };
}
