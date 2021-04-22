import React from 'react'
import './index.css'
import close_icon from '../../Images/close_icon_big.png'
import { useCostumHooks } from '../../context'

const Modal = () => {
    const { bookModal, closeBookModal, modalDetail } = useCostumHooks()
    console.log(modalDetail)
    console.log(modalDetail.title)

    if (!bookModal) return ""

    return (
        <div className="book_modal">
            <div onClick={closeBookModal} className="close_icon_div">
                <img src={close_icon} alt="close icon" className="close_icon" />
            </div>
            <div className="book_container">
                {/* <div className="book_cover"> */}
                <img src={modalDetail.image} alt="modal" className="book_img_container" />
                {/* </div> */}
                <p className="book_title_modal">{modalDetail.title}</p>
                <p className="book_author_modal">{modalDetail.writer}</p>
                <p className="book_discription_modal">{modalDetail.discription}</p>
                <div className="modal_action">
                    <div onClick={closeBookModal} className="secondary_div">
                        <p className="secondary_btn">Close</p>
                    </div>
                    <div onClick={closeBookModal} className="primary_div">
                        <p className="primary_btn">Continue Reading</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal
