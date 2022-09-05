import { Button, Radio, Space, Tabs } from 'antd'
import { useAsync } from 'hooks/useAsync'
import React, { useEffect, useState } from 'react'
import { scheduleCinemaApi } from 'services/cinema'
import { fetchCinemaListApi } from 'services/cinema'
import { formatDate } from 'utils/common'

import _ from 'lodash'

import './index.scss'

const { TabPane } = Tabs

export default function Schedule() {
    const { state: cinemas = [] } = useAsync({
        service: () => scheduleCinemaApi(),
    })

    // const renderTime = (list) => {
    //     const res = _.groupBy(list, (ele) => {
    //         return ele.ngayChieuGioChieu.slice(0, 10)
    //     })
    //     console.log(res)
    //     let day = null
    //     let listDate = []
    //     for (const key in res) {
    //         day = key
    //         listDate = res[key]
    //         return (
    //             <div>
    //                 <p>{day}</p>
    //                 {listDate.map((ele) => (
    //                     <button className="btn btn-success">
    //                         {ele.ngayChieuGioChieu.slice(11, 19)}
    //                     </button>
    //                 ))}
    //             </div>
    //         )
    //     }
    // }

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
                                                        )
                                                    })}
                                                    {/* {renderTime(movie.lstLichChieuTheoPhim)} */}
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

    return (
        <div className="schedule__wrapper">
            <div className="container tab">
                <Tabs className="tab-custom" tabPosition="left">
                    {renderTabs()}
                </Tabs>
            </div>
        </div>
    )
}
