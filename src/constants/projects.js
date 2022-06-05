import slumpWeb from "../image/project-media/slumpWeb-compressed.mp4";
import crypto from "../image/project-media/cryptographic-compressed.mp4";
import snake from "../image/project-media/snake-compressed.mp4";
import survey from "../image/project-media/survey-compressed.mp4";
import gan from "../image/project-media/gan-compressed.mp4";
import slumpVid from "../image/project-media/slumpGraphic-compressed.mp4";

export const projects = [
  {
    title: "Website, UX & Art Direction",
    client: "Slump Sounds",
    description:
      "Design and implementation of the wesbsite for Leeds based record Slump Sounds. The site was built in response to the label's brand identity and aesthetic and consists of an immersive 3D background in addition to a custom media player for audio streaming.",
    image: slumpWeb,
    tags: ["React", "Three.js", "Wordpress"],
    source: "https://www.slumpsounds.co.uk/",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "CryptoGraphic Web App",
    client: "Ben Ditto",
    description:
      "Developed a mini storefront for the launch of CryptoDraphic, an independent NFT exhibition produced by Amber Atherthon, Ben Ditto and Tiffany Zabludowicz. The site utilises the OpenSea API to deliver media assets from the Ethereum blockchain in addition to metadata from OpenSea regarding current bids, artist / author as well as current collection. ",
    image: crypto,
    tags: ["React", "TypeScript", "WebPack", "OpenSea API"],
    source: "https://www.instagram.com/ben_ditto_resurrections/",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "Snake AI (Self Solving)",
    client: "Slump Sounds",
    description:
      "Custom software that executes a game of Snake being played by an AI. Behaviour trees and limited perceptions were used as a method for the logic allowing the snake to switch between decision making options. The runs have been recorded and edited in post-production before being project as club visuals.",
    image: snake,
    tags: ["Unity", "C#"],
    source: "",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "WebRTC Video Survey",
    client: "Physalis",
    description:
      "A configurable and customisable video survey used a means of data collection for a market research platform. The web app has additional backend capacities such as HTTP triggers to generate temporary SASS tokens for secure media uploads.",
    image: survey,
    tags: ["JavaScript", "WebRTC", "Node", "Azure"],
    source: "https://physalis.io/",
    visit: "https://google.com",
    id: 2,
  },

  {
    title: "Experiments (DCGAN)",
    client: "N/A",
    description:
      "Visual experiments using an implementation of the DCGAN algorithm. All imagery on display was harvest during the earlier epochs of training as the picture data started emerging.",
    image: gan,
    tags: ["Python", "Tensorflow"],
    source: "https://www.youtube.com/watch?v=V08s8sKkgbw",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Identity Graphics",
    client: "Slump Sounds",
    description:
      "Promotional video created for the launch of Slump Sounds. This video was used for social media and marketing purposes in additon to being projected on their opening night and sits as bench mark for the brand's idenity and visual design.",
    image: slumpVid,
    tags: ["Graphic Design", "Motion"],
    source: "https://www.slumpsounds.co.uk/",
    visit: "https://google.com",
    id: 3,
  },
];
