let navigator = null;

function setNavigator(nextNavigator) {
  navigator = nextNavigator;
}

function navigateTo(path, options = {}) {
  if (navigator) {
    navigator(path, options);
    return;
  }

  if (typeof window !== 'undefined') {
    window.location.assign(path);
  }
}

export { setNavigator, navigateTo };
