import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class Specialty extends Component {

    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'> Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>

                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp 12</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp 13</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp 14</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div>Cơ xương khớp 15</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image  section-specialty' />
                                <div>Cơ xương khớp 16</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
