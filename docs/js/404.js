(() => {
  const ALTERNATE_MESSAGES = [
    {
      Match: /^\/Wikabedia\//,
      Message: 'Wikabedia is no longer available via butterdogceo.github.io. It\'s now only at <a href="https://wikabedia.butterdogco.com/">wikabedia.butterdogco.com</a>'
    },
    {
      Match: /^\/youtube-kids\//,
      Message: 'YouTube Kids is no longer available via butterdogceo.github.io. It is now called ButterTube and available at <a href="https://butterdogco.com/ButterTube/">butterdogco.com/ButterTube/</a>'
    },
    {
      Match: /^\/about.html/,
      Message: 'ButterDog Chat is no longer available via butterdogceo.github.io. Please use <a href="https://chat.butterdogco.com/">chat.butterdogco.com</a> instead.'
    }
  ];
  const MESSAGE_CONTAINER_ID = 'message';

  // Adapted from https://stackoverflow.com/a/61511955
  function getElementById(elementId) {
    return new Promise(resolve => {
      if (document.querySelector(elementId)) {
        return resolve(document.querySelector(elementId));
      }

      const observer = new MutationObserver((_) => {
        const element = document.getElementById(elementId);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  function getAlternateMessage() {
    const path = new URL(location.href).pathname;
    let alternateMessage;

    for (const messageData of ALTERNATE_MESSAGES) {
      const match = messageData.Match.test(path);
      console.log(match);
      if (match) {
        alternateMessage = messageData.Message;
        break;
      }
    }

    return alternateMessage;
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const alternateMessage = getAlternateMessage();
    if (!alternateMessage) {
      return;
    }

    const messageContainer = await getElementById(MESSAGE_CONTAINER_ID);
    messageContainer.innerHTML = '';

    const messageP = document.createElement('p');
    messageP.innerHTML = alternateMessage;
    messageContainer.append(messageP);
  }, { once: true });
})();