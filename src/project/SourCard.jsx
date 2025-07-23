import React from 'react';
import citrus from "../assets/citrus.jpg";
import berries from "../assets/berries.jpeg";
import stonefruit from "../assets/stonefruit.jpg";
import trophicalfruit from "../assets/trophicalfruit.jpg";
import melons from "../assets/melons.jpg";
import pomefruit from "../assets/pomefruit.jpeg";
import exoticfruit from "../assets/exoticfruit.jpeg";
import driedfruit from "../assets/driedfruit.jpg";
import seasonalfruit from "../assets/seasonalfruit.jpg";
import organicfruit from "../assets/organicfruit.jpg";
import rarefruit from "../assets/rarefruit.jpg";
import budgetfruit from "../assets/budgetfruit.jpg";
import luxuryfruit from "../assets/luxuryfruit.jpg";
import juicefruit from "../assets/juicefruit.jpeg";
import kidsfruit from "../assets/kidsfruit.jpg";
import bestfruit from "../assets/bestfruit.jpg";

function SourCard({ openId, setOpenId }) {
  const fruits = [
    {
      id: 1,
      title: "Citrus Fruits",
      image: citrus,
      description: "Citrus fruits are rich in vitamin C and antioxidants, helping to boost immunity and improve overall health. They have a tangy-sweet flavor and include varieties like oranges, lemons, and limes."
    },
    {
      id: 2,
      title: "Berries",
      image: berries,
      description: "Berries are small, juicy fruits that are rich in antioxidants, fiber, and vitamins, making them excellent for health. They come in various types like strawberries, blueberries, and raspberries, known for their sweet to tart flavors."
    },
    {
      id: 3,
      title: "Stone Fruits",
      image: stonefruit,
      description: "Stone fruits are fleshy fruits that contain a single hard seed or 'stone' at the center. Examples include peaches, plums, cherries, and apricots, known for their sweet and juicy flavor."
    },
    {
      id: 4,
      title: "Trophical Fruits",
      image: trophicalfruit,
      description: "Tropical fruits grow in warm, humid climates and are known for their vibrant flavors and high nutritional value. Popular examples include mangoes, pineapples, bananas, and papayas."
    },
    {
      id: 5,
      title: "Melons",
      image: melons,
      description: "Melons are large, juicy fruits with a high water content, making them perfect for hydration and refreshment. Common types include watermelon, cantaloupe, and honeydew, known for their sweet and cooling taste."
    },
    {
      id: 6,
      title: "Pome Fruits",
      image: pomefruit,
      description: "Pome fruits are fleshy fruits with a core containing several small seeds, surrounded by a tough membrane. Apples and pears are common examples, known for their crisp texture and sweet to tangy flavor."
    },
    {
      id: 7,
      title: "Exotic Fruits",
      image: exoticfruit,
      description: "Exotic fruits are unique and often rare fruits grown in specific regions, known for their unusual appearance, flavor, and nutritional benefits. Examples include dragon fruit, rambutan, passion fruit, and mangosteen."
    },
    {
      id: 8,
      title: "Dried Fruits",
      image: driedfruit,
      description: "Dried fruits are fruits that have had most of their water content removed through drying methods, making them energy-dense and rich in nutrients. Common types include raisins, almonds, cashews, and dates, often used as healthy snacks or in desserts."
    },
    {
      id: 9,
      title: "Seasonal Fruits",
      image: seasonalfruit,
      description: "Seasonal fruits are those that are naturally harvested during a specific time of the year, offering the best taste and nutrition when eaten fresh in season. They include mangoes in summer, oranges in winter, and strawberries in spring."
    },
    {
      id: 10,
      title: "Organic Fruits",
      image: organicfruit,
      description: "Organic fruits are grown without synthetic pesticides, fertilizers, or genetically modified organisms, making them a healthier and environmentally friendly choice. They are rich in natural nutrients and often fresher in taste compared to conventionally grown fruits."
    },
    {
      id: 11,
      title: "Rare and specialty Fruits",
      image: rarefruit,
      description: "Rare and specialty fruits are uncommon varieties that are often grown in specific regions or under unique conditions, making them highly valued. Examples include miracle fruit, Buddha’s hand, and jabuticaba, known for their distinct taste, appearance, and health benefits."
    },
    {
      id: 12,
      title: "Budget-Friendly Fruits",
      image: budgetfruit,
      description: "Budget-friendly fruits are affordable, easily available, and offer great nutritional value without costing much. Examples include bananas, apples, oranges, and guavas, which are perfect for everyday consumption."
    },
    {
      id: 13,
      title: "Luxury Fruits",
      image: luxuryfruit,
      description: "Luxury fruits are premium-quality fruits often rare, perfectly grown, and sometimes gift-wrapped, making them expensive and exclusive. Examples include Japanese Yubari melons, Ruby Roman grapes, and Taiyo no Tamago mangoes, prized for their exceptional taste and appearance."
    },
    {
      id: 14,
      title: "Juicing Fruits",
      image: juicefruit,
      description: "Juicing fruits are those rich in water content and natural sweetness, making them ideal for fresh, flavorful juices. Common examples include oranges, pomegranates, pineapples, and watermelons."
    },
    {
      id: 15,
      title: "Kid's Favourite Fruits",
      image: kidsfruit,
      description: "Kid's favourite fruits are usually sweet, colorful, and easy to eat, making them fun and appealing for children. Popular choices include bananas, strawberries, apples, and grapes."
    },
    {
      id: 16,
      title: "Best Sellers",
      image: bestfruit,
      description: "Best seller fruits are the most popular and commonly purchased due to their taste, availability, and health benefits. These include bananas, apples, oranges, and grapes, loved by people of all ages."
    }
  ];
  const selectedFruit = fruits.find(f => f.id === openId);

  if (!selectedFruit) return null;

  return (
    <div className="modal-overlay" style={{position: "fixed", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0,0,0,0.5)", display: "flex",justifyContent: "center", alignItems: "center"}}>
      <div className="modal-content" style={{background: "#fff", padding: "20px", borderRadius: "10px",width: "400px", maxHeight: "90vh", overflowY: "auto", position: "relative"}}>
        <button onClick={() => setOpenId(null)} style={{position: "absolute", top: 5, right: 5, fontSize: "20px",border: "none", background: "none", cursor: "pointer"}}>✖</button>
        <h2 style={{textAlign: "center"}}>{selectedFruit.title}</h2>
        <img src={selectedFruit.image} alt={selectedFruit.title} style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px"}} />
        <p style={{ marginTop: "10px", textAlign: "justify" }}><b>Description:</b> {selectedFruit.description}</p>
        <button onClick={() => setOpenId(null)} style={{marginTop: "20px", padding: "10px 20px",backgroundColor: "red", color: "white", border: "none",borderRadius: "5px", cursor: "pointer"}}>Close</button>
      </div>
    </div>
  );
}

export default SourCard
