import React, { Component } from 'react'
import Routes from './infrastructure/routes'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import './styles/site.css'
import { withRouter } from 'react-router-dom'
import * as geographyActions from './actions/geographyActions'
import * as settingActions from './actions/setting/settingActions'
import * as footerActions from './actions/footerActions'
import * as userActions from './actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserRoles as userRoles } from './constants/userConstants'

class App extends Component {
    constructor() {
        super()

        this.state = {
            loaded: false
        }
    }

    async componentWillMount() {
        const _this = this

        return Promise.all([
            this.props.geographyActions.getSourceMarkets(),
            this.props.settingActions.getJobFamilies(),
            this.props.settingActions.getAllJobTitle(),
            this.props.geographyActions.getSeasons(),
            this.props.footerActions.getVersion(),
            this.props.footerActions.getSupportEmail(),
            this.props.footerActions.getWikiUrl(),
            this.props.userActions.getUser()
        ]).then(function() {
            //EXEMPEL ROLECHECK
            //const HR = this.props.userRoles.includes(userRoles.DS_F2W_HR_Team)
            _this.setState({ loaded: true })
        })
    }

    matchRuleShort(str, rule) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(str)
    }

    render() {
        const HeaderWithRouter = withRouter(props => {
            //Hide navbar if staff edit
            if (!this.matchRuleShort(props.location.pathname, '/staff/*')) {
                return <Header staffTabs={this.props.staffTabs} route={props.location.pathname} />
            } else {
                return ''
            }
        })

        return (
            <BrowserRouter>
                <div className="App">
                    <Loader />

                    <ReduxToastr
                        timeOut={3000}
                        newestOnTop={false}
                        preventDuplicates={false}
                        position="bottom-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />
                    {this.state.loaded === true
                        ? [
                              <HeaderWithRouter key={0} />,

                              <Routes key={1} />,

                              <Footer key={2} version={this.props.version} supportEmail={this.props.supportEmail} wikiUrl={this.props.wikiUrl} />
                          ]
                        : ''}
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        version: state.footer.version,
        supportEmail: state.footer.supportEmail,
        wikiUrl: state.footer.wikiUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        geographyActions: bindActionCreators(geographyActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch),
        footerActions: bindActionCreators(footerActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
