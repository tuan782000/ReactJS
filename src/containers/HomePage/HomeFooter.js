import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



class Footer extends Component {

    render() {
        return (
            <div className='home-footer'>
               <p>&conpy; 2022 Nguyen Thai Tuan. More Information, Contact with work.
                   <a target='_blank' href='https://github.com/tuan782000'> &#8594; Click here &#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
