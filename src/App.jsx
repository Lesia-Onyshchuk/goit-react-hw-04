import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchPictures(topic, page) {
    try {
      setPictures([]);
      setError(false);
      setLoading(true);
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            page,
            per_page: 5,
            query: topic,
            client_id: "NCcq5dFv_hu6BanaDTQCip7pprCn2rAOKxu2idOWEFI",
          },
        }
      );
      if (page === 1) {
        setPictures(response.data.results);
      } else {
        setPictures((prevPictures) => [
          ...prevPictures,
          ...response.data.results,
        ]);
      }
      console.log(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (topic) {
      fetchPictures(topic, page);
    }
  }, [topic, page]);

  return (
    <div>
      <SearchBar
        onSubmit={(newTopic) => {
          setTopic(newTopic);
          setPage(1);
          setPictures([]);
        }}
      />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery pictures={pictures} />
      {pictures.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
    </div>
  );
}

export default App;
