import React, { Component } from 'react'

export class GoogleOath extends Component {
    state = { isLoggedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '175354891693-ceqcifvh9clmiebsto60cg3ojrq22stg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isLoggedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }
    onAuthChange = (info) => {
        this.setState({
            isLoggedIn: this.auth.isSignedIn.get()
        })
    }
    renderUserStatus = () => {
        if (this.state.isLoggedIn == null)
            return null
        else if (this.state.isLoggedIn)
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

export default GoogleOath