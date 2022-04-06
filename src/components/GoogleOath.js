import React, { Component } from 'react'
import { signIn, signOut } from './actions';
import { connect } from 'react-redux';
export class GoogleOath extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '175354891693-ceqcifvh9clmiebsto60cg3ojrq22stg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get()) //on initial load
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }
    onAuthChange = (info) => {
        if (info)
            this.props.signIn(this.auth.currentUser.get().getId())
        else
            this.props.signOut()
    }
    renderUserStatus = () => {
        if (this.props.isLoggedIn == null)
            return null
        else if (this.props.isLoggedIn)
            return (
                <button onClick={() => this.auth.signOut()} className='ui red google button'>
                    <i className='google icon'></i> Sign out
                </button>
            )
        else
            return (
                <button onClick={() => this.auth.signIn()} className='ui red google button'>
                    <i className='google icon'></i> Sign in
                </button>
            )
    }
    render() {
        return (
            <div>{this.renderUserStatus()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return { isLoggedIn: state.auth.isSignIn };
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleOath)