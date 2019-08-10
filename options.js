function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    config: {
      active: document.querySelectorAll("input[name='active']:checked")[0].value
    }
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    if (result.config.active == '1') {
      document.querySelector("#active").checked = true
    } else {
      document.querySelector("#desactive").checked = true
    }
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("config");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);