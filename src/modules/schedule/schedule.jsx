import { Button, Radio, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { scheduleCinemaApi } from 'services/cinema';
import { fetchCinemaListApi } from 'services/cinema';
import { formatDate } from 'utils/common';
import './index.scss';

const { TabPane } = Tabs;

export default function Schedule() {
    const [cinemaList, setCinemaList] = useState([]);
    const [cinemas, setCinemas] = useState([]);

    useEffect(() => {
        fetchCinemaList();
        scheduleCinema();
    }, []);

    const fetchCinemaList = async () => {
        const result = await fetchCinemaListApi();

        setCinemaList(result.data.content);
    };

    const scheduleCinema = async () => {
        const result = await scheduleCinemaApi();
        setCinemas(result.data.content);
    };

    const renderTabs = () => {
        return cinemas.map((cinema, idx) => {
            return (
                <TabPane tab={<img style={{ width: 50 }} src={cinema.logo} />} key={idx}>
                    <Tabs tabPosition="left">
                        {cinema.lstCumRap.map((cumRap, idx) => {
                            return (
                                <TabPane
                                    style={{ width: 200 }}
                                    tab={
                                        <div style={{ display: 'flex' }}>
                                            <img
                                                src={cumRap.hinhAnh}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    marginRight: 15,
                                                    objectFit: 'cover',
                                                }}
                                            />
                                            <div>
                                                <h5>{cumRap.tenCumRap}</h5>
                                                <p style={{ textAlign: 'left' }}>{cumRap.diaChi}</p>
                                            </div>
                                        </div>
                                    }
                                    key={idx}
                                >
                                    <Tabs tabPosition="left">
                                        {cumRap.danhSachPhim.map((movie, idx) => {
                                            return (
                                                <TabPane
                                                    className="as"
                                                    style={{ width: 200 }}
                                                    tab={
                                                        <img
                                                            src={movie.hinhAnh}
                                                            style={{
                                                                width: 200,
                                                                // width: '100%',
                                                                height: 250,
                                                                marginRight: 15,
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    }
                                                    key={idx}
                                                >
                                                    {movie.lstLichChieuTheoPhim.map((time) => {
                                                        return (
                                                            <Button key={time.maLichChieu}>
                                                                {formatDate(time.ngayChieuGioChieu)}
                                                            </Button>
                                                        );
                                                    })}
                                                </TabPane>
                                            );
                                        })}
                                    </Tabs>
                                </TabPane>
                            );
                        })}
                    </Tabs>
                </TabPane>
            );
        });
    };

    return (
        <div className='schedule__wrapper'>
            <div className="container tab">
                <Tabs className="tab-custom" tabPosition="left">
                    {renderTabs()}
                </Tabs>
            </div>
        </div>
    );
}
