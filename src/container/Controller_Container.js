import Controller from '../components/Controller'

import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps)=>{
    var listIdMess = state.listMess.map((item)=>{
        return item.idMess;
    })
    return {
        listIdMess: listIdMess
    }
}
export default connect(mapStateToProps, null)(Controller);