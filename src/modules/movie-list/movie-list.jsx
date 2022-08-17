import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingContext } from '../../contexts/loading.context';
import { useAsync } from '../../hooks/useAsync';
import { fetchMovieListApi } from '../../services/movie';

export default function MovieList() {
  const navigate = useNavigate();
  // const [movieList, setMovieList] = useState([]);
  // const [_, setLoadingState] = useContext(LoadingContext);

  const { state: movieList = [] } = useAsync({
    dependencies: [],
    service: () => fetchMovieListApi(),
  });

  // useEffect(() => {
  //   fetchMovieList();
  // }, []);

  // const fetchMovieList = async () => {
  //   setLoadingState({ isLoading: true });
  //   const result = await fetchMovieListApi();
  //   setLoadingState({ isLoading: false });

  //   setMovieList(result.data.content);
  // };

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div className="col-3" key={ele.maPhim}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: 'cover' }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.tenPhim}</h5>
              <Button
                loading={false}
                size="large"
                type="danger"
                onClick={() => navigate(`/movie/${ele.maPhim}`)}
              >
                XEM CHI TIẾT
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>;
}
