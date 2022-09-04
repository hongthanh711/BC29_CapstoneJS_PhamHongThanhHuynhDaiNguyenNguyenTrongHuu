import { Button, Radio, Space, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { scheduleCinemaApi } from 'services/cinema'
import { fetchCinemaListApi } from 'services/cinema'
import { formatDate } from 'utils/common'
import './index.scss'

const { TabPane } = Tabs

export default function Schedule() {
    const [cinemaList, setCinemaList] = useState([])
    const [cinemas, setCinemas] = useState([])

    useEffect(() => {
        fetchCinemaList()
        scheduleCinema()
    }, [])

    const fetchCinemaList = async () => {
        const result = await fetchCinemaListApi()

        setCinemaList(result.data.content)
    }

    const scheduleCinema = async () => {
        const result = await scheduleCinemaApi()
        setCinemas(result.data.content)
    }

    const renderTabs = () => {
        return cinemaList.map((ele, index) => {
            return (
                <TabPane
                    tab={
                        <div style={{ width: '100px', height: '100px' }}>
                            <img className="w-100" src={ele.logo} alt="" />
                        </div>
                    }
                    key={index}
                >
                    <Tabs tabPosition="left">{renderCinena(ele.maHeThongRap)}</Tabs>
                </TabPane>
            )
        })
    }

    const renderCinena = (maHeThongRap) => {
        const idx = cinemas.findIndex((cinema) => cinema.maHeThongRap === maHeThongRap)
        if (idx !== -1) {
            return cinemas[idx].lstCumRap.map((cinema) => {
                return (
                    <TabPane
                        tab={
                            <div style={{ width: '200px' }}>
                                <h3>{cinema.tenCumRap}</h3>
                                <p>{cinema.diaChi}</p>
                                <hr />
                            </div>
                        }
                        key={cinema.maCumRap}
                    >
                        <Tabs tabPosition="left" style={{ height: 1000 }}>
                            {cinema.danhSachPhim.map((movie) => {
                                return (
                                    <TabPane
                                        style={{ height: 1000, overflow: 'scroll' }}
                                        tab={
                                            <div style={{ width: '200px' }}>
                                                <h4>{movie.tenPhim}</h4>
                                                <img
                                                    className="img-fluid"
                                                    src={movie.hinhAnh}
                                                    alt=""
                                                />
                                            </div>
                                        }
                                        key={movie.maPhim}
                                    >
                                        {movie.lstLichChieuTheoPhim.map((time) => {
                                            return (
                                                <div
                                                    key={time.maLichChieu}
                                                    className="m-2 d-inline-block"
                                                >
                                                    <Button>
                                                        {formatDate(time.ngayChieuGioChieu)}
                                                    </Button>
                                                </div>
                                            )
                                        })}
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </TabPane>
                )
            })
        }
    }

    const render1 = () => {
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
                                                        )
                                                    })}
                                                </TabPane>
                                            )
                                        })}
                                    </Tabs>
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </TabPane>
            )
        })
    }

    const render2 = () => {}

    return (
        <div className="container tab">
            {/* <Tabs tabPosition="left">{renderTabs()}</Tabs> */}
            <Tabs className="tab-custom" tabPosition="left">
                {render1()}
            </Tabs>
        </div>
    )
}
