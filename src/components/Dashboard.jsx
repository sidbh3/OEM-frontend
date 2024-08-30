import  { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const mockCarouselData = [
  { id: 1, title: "New Feature", message: "Check out our latest update!", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Special Offer", message: "Limited time discount!", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Upcoming Event", message: "Join us next week", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Product Launch", message: "Exciting new product coming soon", image: "https://via.placeholder.com/150" },
];

const Dashboard = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchCarouselData = () => {
      setTimeout(() => {
        setCarouselItems(mockCarouselData);
      }, ); 
    };

    fetchCarouselData();
  }, []);

  return (
    <div className="w-full p-5 md:p-8 mt-10 ml-14 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 md:mb-6">Dashboard</h2>

      {/* Top Carousel */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {carouselItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 h-40 flex flex-col justify-between">
            <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.message}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="min-h-96 bg-gray-300 rounded-lg shadow-md"></div>
        <div className="h-96 bg-gray-300 rounded-lg shadow-md"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
