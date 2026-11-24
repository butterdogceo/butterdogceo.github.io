(async () => {
  const CARDS = [
    {
      Name: "butterOS",
      Desc: "da latest and greatest ting for ur computer (no spyware included)",
      Icon: "https://butterdogco.com/img/icons/ButterOS.png",
      Link: "https://butterdogco.com/ButterOS/"
    },
    {
      Name: "butterdog chat ultra deluxe",
      Desc: "yap yap",
      Icon: "https://cdn.jsdelivr.net/gh/butterdogco/ButterDog-Chat-Ultra-Deluxe@main/public/img/Logo-icon.png",
      Link: "https://chat.butterdogco.com/"
    }
  ];

  // Adapted from https://stackoverflow.com/a/61511955
  function waitForElement(elementId) {
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

  // Card creation function
  // cardInfo attributes: Name, Desc?, Icon, Link
  function createCardElement(cardInfo) {
    const { Name: name, Desc: desc, Icon: icon, Link: link } = cardInfo;

    const cardElement = document.createElement("a");
    cardElement.classList.add("card");
    cardElement.href = link;
    cardElement.title = "Click to go to " + link;

    const openIconSpan = document.createElement("span");
    openIconSpan.classList.add("material-symbols-rounded", "open-icon");
    openIconSpan.innerText = "open_in_new";
    cardElement.append(openIconSpan);

    const iconImg = document.createElement("img");
    iconImg.src = icon;
    iconImg.setAttribute("loading", "lazy");
    iconImg.setAttribute("alt", name + " icon");
    iconImg.addEventListener("error", () => {
      this.src = "./img/icons/backup.jpg";
    }, { once: true });
    cardElement.append(iconImg);

    const nameHeading = document.createElement("h2");
    nameHeading.innerText = name;
    cardElement.append(nameHeading);

    if (desc) {
      const descP = document.createElement("p");
      descP.innerText = desc;
      cardElement.append(descP);
    }

    return cardElement;
  }

  document.addEventListener('DOMContentLoaded', () => {
    let cardElements = [];
    CARDS.forEach((card) => cardElements.push(createCardElement(card)));
    waitForElement('#cards').then((element) => {
      element.append(...cardElements);
    });
  }, { once: true });
})();