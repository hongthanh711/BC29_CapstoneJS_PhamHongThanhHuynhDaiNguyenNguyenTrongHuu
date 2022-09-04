import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchMovieShowTimesApi } from 'services/cinema'

import "./index.scss";
import { formatDate } from 'utils/common'


export default function ShowTimes() {
    const params = useParams();
    const [showTimes, setShowTimes] = useState({});

    useEffect(() => {
        fetchMovieShowTimes();
    }, []);

    const fetchMovieShowTimes = async () => {
        const result = await fetchMovieShowTimesApi(params.movieId);
        setShowTimes(result.data.content);
    };

    const renderTabs = () => {
        return showTimes?.heThongRapChieu?.map((ele, idx) => {
            return (
                <a
                    key={ele.maHeThongRap}
                    className={`nav-link cinema__nav ${idx === 0 && 'active'} `}
                    data-toggle="pill"
                    href={`#${ele.maHeThongRap}`}
                >
                    {ele.tenHeThongRap}
                </a>
            );
        });
    };

    const renderContent = () => {
        return showTimes?.heThongRapChieu?.map((ele, idx) => {
            return (
                <div
                    className={`container m-auto tab-pane ${idx === 0 && 'active'}`}
                    id={ele.maHeThongRap}
                    key={ele.maHeThongRap}
                >
                    {ele.cumRapChieu.map((ele) => {
                        return (
                            <div
                                key={ele.maCumRap}
                                className="row mb-5">
                                <div className="col-12 pl-0">
                                    <h5>{ele.tenCumRap}</h5>
                                    <span className="text-muted">{ele.diaChi}</span>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        {ele.lichChieuPhim.map((ele) => {
                                            return (
                                                <div
                                                    key={ele.maLichChieu}
                                                    className="col-3">
                                                    <Link to={`/booking/${ele.maLichChieu}`}>
                                                        {formatDate(ele.ngayChieuGioChieu)}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        });
    };

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-center">Shows Time</h1>
                <div className="row">
                    {/* Nav pills */}
                    <div className="col-lg-4">
                        <ul className="nav nav-pills cinema__pills flex-column " role="tablist">
                            <li className="nav-item">
                                {renderTabs()}
                            </li>

                        </ul>
                    </div>
                    {/* Tab panes */}
                    <div className="col-lg-8">
                        <div className="tab-content">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
