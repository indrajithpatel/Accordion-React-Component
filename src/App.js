import Accordion from "./components/Accordion";
import "./styles.css";

export default function App() {
  const data = [
    {
      title: "This is my Accordion",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit"
    },
    {
      title: "This is my Accordion",
      content:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful"
    }
  ];
  return (
    <div className="App">
      {data.map((item, index) => (
        <Accordion
          name={{ title: item.title, content: item.content }}
          key={index}
        ></Accordion>
      ))}
    </div>
  );
}
