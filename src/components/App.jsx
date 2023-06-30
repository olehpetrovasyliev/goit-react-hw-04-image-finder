import { Searchbar } from './Searchbar/Searchbar';
import { imagesApi } from 'services/apiGet';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { useState, useEffect } from 'react';

export const App = () => {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [btn, setBtn] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await imagesApi({ q, page });
      setImages(prev => [...prev, ...data.data.hits]);
      // console.log(data.data.hits);
      page < Math.ceil(data.data.totalHits / 12) ? setBtn(true) : setBtn(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeQuery = newQ => {
    setImages([]);
    setQ(newQ);
  };
  useEffect(() => {
    if (!q) {
      return;
    }
    getData();
  }, [q, page]);
  const handleBtnClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleChangeQuery} />

      {loading && <Loader />}

      <ImageGallery arr={images} />

      {btn && <Button cb={handleBtnClick} />}
    </>
  );
};
