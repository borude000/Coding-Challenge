import { useEffect, useState } from "react";
import { getStores } from "../services/api";
import StoreCard from "../components/StoreCard";

const Home = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStores().then((res) => setStores(res.data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Stores</h1>
      <div className="grid grid-cols-3 gap-4">
        {stores.map((store) => <StoreCard key={store.id} store={store} />)}
      </div>
    </div>
  );
};

export default Home;
