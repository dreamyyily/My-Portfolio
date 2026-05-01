import SiMBAImage from "../Images/simba.jpeg";
import SISImage from "../Images/sis.jpeg";
import PKMImage from "../Images/pkm.jpeg";
import AuctionImage from "../Images/auction.jpeg";
import DelcomImage from "../Images/delcom.jpeg";
import WaterImage from "../Images/water.jpeg";

export const projects = [
  {
    title: "SiMBA",
    description:
      "Student Guidance and Academic Mentoring Management System with 3 main functions: Academic Mentoring, Violations, Counseling",
    tags: ["PHP", "Laravel", "JavaScript", "CSS"],
    image: SiMBAImage,
    github: null,
    demo: null,
    design: null,
  },
  {
    title: "Student Information System",
    description:
      "Web-based application designed to provide transparent and easy access for parents to monitor their child's academic and campus progress and other activities visually (dashboard).",
    tags: ["PHP"],
    image: SISImage,
    github: null,
    demo: null,
    design: null,
  },
  {
    title: "PKM",
    description:
      "SMA Negeri 1 Balige website to display information about the school.",
    tags: ["PHP", "CSS", "JavaScript"],
    image: PKMImage,
    github: null,
    demo: null,
    design: null,
  },
  {
    title: "Auctions",
    description:
      "A web-based auction platform designed to enable users to create item listings, place bids, and engage in real-time competitive bidding with other participants.",
    tags: ["PHP", "CSS", "JavaScript", "Postman"],
    image: AuctionImage,
    github: "https://github.com/delcom-itdel/pabwe-pkm-proyek-2024-k2",
    demo: null,
    design: null,
  },
  {
    title: "Delcom App",
    description:
      "Android application that has 4 views: login, register, home, update & change profile with data source from API",
    tags: ["Kotlin", "Android"],
    image: DelcomImage,
    github: "https://github.com/dreamyyily/Delcom-App-Mobile",
    demo: null,
    design: null,
  },
  {
    title: "Water Jug Game",
    description:
      "A puzzle game designed to reach a certain water volume target by applying the Depth First Search (DFS) algorithm to deeply explore possible solution paths",
    tags: ["Python"],
    image: WaterImage,
    github: "https://github.com/dreamyyily/Water-Jug",
    demo: null,
    design: null,
  },
];