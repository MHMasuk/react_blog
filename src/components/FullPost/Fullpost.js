import React, { Component } from 'react';

class FullPost extends Component {
    render () {
        let post = <p> Please select a post!</p>
        if (this.props.id) {
            post = (
                <div className="card p-3 mtb-3">
                    <h1>Title</h1>
                    <p>Content</p>
                    <button>Delect</button>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;