import { Searchbar } from './Searchbar/Searchbar';
import { imagesApi } from 'services/apiGet';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  // state = {
  //   images: [],
  //   page: 1,
  //   q: '',
  //   loading: false,
  //   modalOpen: false,
  //   showBtn: false,
  // }; = state

  //   fetchData = async () => {
  //     const { page, q } = this.state;

  //     try {
  //       this.setState({ loading: true });
  //       const data = await imagesApi({
  //         q,
  //         page,
  //       });

  //       this.setState(prev => ({
  //         images: [...prev.images, ...data.data.hits],
  //         showBtn: page < Math.ceil(data.data.totalHits / 12),
  //       }));
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       this.setState({
  //         loading: false,
  //       });
  //     }
  //   };

  //   handleChangeQuery = q => {
  //     this.setState({ q, images: [], page: 1, loading: false, modalOpen: false });
  //   }; us?

  //   handleBtnClick = () => {
  //     this.setState(prewState => ({
  //       page: prewState.page + 1,
  //     }));
  //   };

  //   componentDidUpdate = (_, prevState) => {
  //     const { q, page } = this.state;
  //     if (q !== prevState.q || page !== prevState.page) {
  //       this.fetchData();
  //     }
  //   }; = useEffect

  return (
    <>
      <Searchbar onSubmit={handleChangeQuery} />

      <>
        {loading && <Loader />}

        <ImageGallery arr={images} />

        {showBtn && <Button cb={handleBtnClick} />}
      </>
    </>
  );
};
