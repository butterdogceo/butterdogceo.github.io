const cardsContainer = document.getElementById("cards");
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");

// Card creation function
// cardInfo attributes: Name, Desc?, Icon, Link, AltLink?, Secret?, Disabled?
function createCard(cardInfo) {
  const cardName = cardInfo.Name;
  const cardDesc = cardInfo.Desc;
  const cardIcon = cardInfo.Icon;
  const cardLink = cardInfo.Link || "#";
  const cardAltLink = cardInfo.AltLink;
  const cardIsSecret = cardInfo.Secret || false;
  const cardIsDisabled = cardInfo.Disabled || false;

  if (cardIsDisabled || !cardsContainer) {
    return;
  }

  const a = document.createElement("a");
  a.classList.add("card");
  a.classList.toggle("hidden", cardIsSecret);
  a.href = cardAltLink || cardLink || "#";
  if (a.href != "#") {
    a.title = "Click to open " + cardName;

    // We don't want to apply this if a link is a page of this repo
    // But we should still allow links that include butterdogco.com
    if (!(a.href.includes("://butterdogceo.github.io") && a.href.split("/").length <= 4)) {
      // Open in a new tab
      a.target = "_blank";
      a.title += " in a new tab";
      // Create the "external link" icon
      const span = document.createElement("span");
      span.classList.add("material-symbols-rounded", "open-icon");
      span.innerHTML = "open_in_new";
      a.appendChild(span);
    }
  }
  if (cardIcon) {
    const img = document.createElement("img");
    img.src = cardIcon;
    img.setAttribute("loading", "lazy");
    a.appendChild(img);
  }
  if (cardName) {
    const heading = document.createElement("h2");
    heading.innerText = cardName;
    a.appendChild(heading);
  }
  if (cardDesc) {
    const p = document.createElement("p");
    p.innerText = cardDesc;
    a.appendChild(p);
  }

  cardsContainer.appendChild(a);
}

try {
  const pageIdElement = document.querySelector('meta[name="page-id"]');
  if (!pageIdElement) {
    throw new Error("Page ID element not found");
  }

  const pageId = pageIdElement.getAttribute("content");
  if (!pageId) {
    throw new Error("Page ID element is missing content")
  }
  cards[pageId].forEach(function (cardInfo) {
    createCard(cardInfo);
  });
} catch (err) {
  console.error(err);
}

// Take a guess as to what this does
function toggleMenu() {
  if (nav) {
    nav.classList.toggle("active");
  }
}

// Plays the funny sound
function playFunnySound() {
  const audio = new Audio("https://raw.githubusercontent.com/butterdogco/butterdogco.github.io/refs/heads/main/docs/audio/this%20look%20like%20gaming%20area.mp3");
  audio.controls = true;
  document.head.appendChild(audio);
  audio.play();
}

let iconRotation = 0;
let musicStarted = false;

function iconClick() {
  playFunnySound();
  if (musicStarted === false) {
    musicStarted = true;
    const audio = new Audio("audio/dubstep.wav");
    document.head.appendChild(audio);
    audio.play();
  }
  iconRotation += 180;
  icon.style.rotate = `${rotateNum}deg`;
  document.body.classList.add("secret");
}