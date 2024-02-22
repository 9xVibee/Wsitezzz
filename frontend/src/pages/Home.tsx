import WebsiteOfTheDay from "@/components/WebsiteOfTheDay";

const Home = () => {
  window.document.title = "W | Sitezz | Home";
  return (
    <div className="w-full h-fit py-10">
      <WebsiteOfTheDay />
    </div>
  );
};

export default Home;
