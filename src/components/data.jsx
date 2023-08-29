import { v4 as uuidv4 } from "uuid";
import bag from "../assets/products/bag.png";
import chair from "../assets/products/chair.png";
import cup from "../assets/products/cup.png";
import equipment from "../assets/products/equipment.png";
import headphones from "../assets/products/headphones.png";
import speaker from "../assets/products/speaker.png";
import watch1 from "../assets/products/watch1.png";
import watch2 from "../assets/products/watch2.png";
const info = [
  {
    id: "d1bf0fc6-0587-44a1-84ec-5ebfff5f1e02",
    productName: "VenturePro Traveler's Backpack",
    productImage: bag,
    price: 89.99,
    totalPrice: 89.99,
    added: 1,
    description:
      "Experience the ultimate in versatile travel gear with the VenturePro Traveler's Backpack. Crafted for explorers who demand functionality and style, this backpack is your reliable companion on every journey. With multiple compartments, a dedicated laptop sleeve, and ergonomic straps, the VenturePro ensures your essentials are organized and accessible. From urban escapades to off-the-grid adventures, this backpack adapts to your lifestyle.",
  },
  {
    id: "11409f71-a4ca-4e0a-81ae-15e34b40189c",
    productName: "Harmony Wooden Stool",
    productImage: chair,
    price: 59.99,
    totalPrice: 59.99,
    added: 1,
    description:
      "Introducing the Harmony Wooden Stool, a fusion of elegance and practicality. Handcrafted from rich, sustainable hardwood, this stool adds a touch of natural beauty to any space. Its versatile design and compact size make it a perfect fit for cozy corners, kitchen islands, and bar counters. With its comfortable contoured seat and sturdy construction, the Harmony Wooden Stool effortlessly combines form and function.",
  },
  {
    id: "284a45b5-1781-4efc-8fab-f922750082e9",
    productName: "PeachGlow Crystal Goblet",
    productImage: cup,
    price: 24.99,
    totalPrice: 24.99,
    added: 1,
    description:
      "Indulge in a touch of luxury with the PeachGlow Crystal Goblet. This exquisite goblet is more than just a vessel for your favorite beverages—it's a statement of sophistication. Crafted from fine crystal glass, its delicate peachy hue catches the light and adds a warm, inviting glow to your table. Whether it's a special occasion or a moment of relaxation, the PeachGlow Crystal Goblet transforms every sip into a celebration.",
  },
  {
    id: "abaeb5d3-29e4-4307-b91e-706836c1518a",
    productName: "Elemental Essentials Equipment Pack",
    productImage: equipment,
    price: 499.99,
    totalPrice: 499.99,
    added: 1,
    description:
      "Versatile collection designed to empower your pursuits. This thoughtfully curated pack brings together a range of essential tools to enhance your endeavors, whether you're a creative, a professional, or an enthusiast. From precision to practicality, each item in the Elemental Essentials pack is chosen with your needs in mind. Elevate your skills and achieve your goals with this comprehensive and adaptable equipment pack.",
  },
  {
    id: "fca4f1bd-1eec-487f-ac10-4a2a457b5ccf",
    productName: "SonicScape Over-Ear Headphones",
    productImage: headphones,
    price: 149.99,
    totalPrice: 149.99,
    added: 1,
    description:
      "Immerse yourself in superior sound with the SonicScape Over-Ear Headphones, featuring a striking black and orange color scheme. Designed for both comfort and style, these headphones boast plush padding in vibrant orange that adds a pop of energy to your listening experience. With advanced noise cancellation and precision-tuned drivers, the SonicScape headphones transport you to a world of rich audio. Whether you're a music enthusiast or a podcast aficionado, these headphones are your gateway to immersive sonic exploration.",
  },
  {
    id: "0a2414a0-9022-4fb9-a6e2-d52d7f97539b",
    productName: "HarmonyVoice Smart Speaker",
    productImage: speaker,
    price: 129.99,
    totalPrice: 129.99,
    added: 1,
    description:
      "Meet the HarmonyVoice Smart Speaker, your intelligent companion for seamless connectivity and immersive audio experiences. Designed to rival the best, this speaker offers voice control, music streaming, and a range of smart features that simplify your life. From answering questions to controlling smart devices, the HarmonyVoice Smart Speaker integrates effortlessly into your smart home ecosystem. Immerse yourself in rich sound, stay informed, and enjoy the convenience of voice-activated technology.",
  },
  {
    id: "e7913083-af5d-40ef-8ebd-b58678223be6",
    productName: "ChronoSphere Circular Smartwatch",
    productImage: watch1,
    price: 249.99,
    totalPrice: 249.99,
    added: 1,
    description:
      "where timeless design meets cutting-edge technology. Embrace the classic elegance of a circular watch face while enjoying the versatility of a smart device. From tracking your fitness goals to receiving notifications, the ChronoSphere seamlessly integrates into your modern lifestyle. With customizable watch faces and a range of features at your fingertips, stay connected and stylish with this harmonious blend of form and function.",
  },
  {
    id: "d7fa59fc-09de-40c4-93f1-b5d1eb2e8328",
    productName: "TechSquare Smartwatch",
    productImage: watch2,
    price: 199.99,
    totalPrice: 199.99,
    added: 1,
    description:
      "Elevate your tech-savvy style with the TechSquare Rectangular Smartwatch. The sleek and modern design of the rectangular watch face makes a bold statement, while its smart features keep you connected and in control. Stay updated on notifications, monitor your health, and personalize your watch face to match your mood. With the TechSquare Smartwatch, embrace the power of innovation without compromising on your sense of fashion.",
  },
];
export default info;
