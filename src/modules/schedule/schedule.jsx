import { Button, Radio, Space, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { scheduleCinemaApi } from 'services/cinema'
import { fetchCinemaListApi } from 'services/cinema'
import { formatDate } from 'utils/common'
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
                                        style={{ height: 1000 }}
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

    return (
        <div className="container">
            <Tabs tabPosition="left">{renderTabs()}</Tabs>
        </div>
    )
}
