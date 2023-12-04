function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    config: {
      enable: document.querySelectorAll("input[name='enable']:checked")[0].value,
      customPassword: document.querySelector("input[name='custom-password']").value ?? null,
      customPostcode: document.querySelector("input[name='custom-postcode']").value ?? null,
      customEmailDomain: document.querySelector("input[name='custom-email-domain']").value ?? null
    }
  });
  window.close();
}

function restoreOptions() {
  function restore(result) {
    if (result.config.enable == '1') {
      document.querySelector("#enable").checked = true
    } else {
      document.querySelector("#disable").checked = true
    }
    document.querySelector("input[name='custom-password']").value = result.config.customPassword;
    document.querySelector("input[name='custom-postcode']").value = result.config.customPostcode;
    document.querySelector("input[name='custom-email-domain']").value = result.config.customEmailDomain;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("config");
  getting.then(restore, onError);
}

function clear(e) {
  e.preventDefault();
  browser.storage.sync.clear();
  document.querySelector("input[name='custom-password']").value = null;
  document.querySelector("input[name='custom-postcode']").value = null;
  document.querySelector("input[name='custom-email-domain']").value = null;
  window.close();
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelector("button[name='clear']").addEventListener("click", clear);