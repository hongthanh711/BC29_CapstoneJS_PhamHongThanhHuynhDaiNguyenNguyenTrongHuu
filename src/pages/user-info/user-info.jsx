import BookingHistory from 'modules/booking-history/booking-history'
import RegisterForm from 'pages/register-form/register-form'
import React from 'react'
import './index.scss'

export default function UserInfo() {
    return (
        <div className="w-75 mx-auto">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#info">
                        Thông tin cá nhân
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#history">
                        Lịch sử đặt vé
                    </a>
                </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content py-5">
                <div className="tab-pane container active" id="info">
                    <RegisterForm />
                </div>
                <div className="tab-pane container fade text-center" id="history">
                    <BookingHistory />
                </div>
            </div>
        </div>
    )
}
