import React, { Component } from 'react';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    render () {
        return (
            <div className="card p-3">
                 <form>
                     <div className="form-group">
                        <label>Title</label>
                        <input 
                            type="text" className="form-control" value={this.state.title}
                            onChange={(event) => this.setState({title: event.target.value})}>
                        </input>
                     </div>

                     <div className="form-group">
                        <label>Content</label>
                        <input 
                            type="text" className="form-control" value={this.state.content}
                            onChange={(event) => this.setState({content: event.target.value})}>
                        </input>
                     </div>
                     <div className="form-group">
                        <label>Author</label>
                        <select 
                            type="text" className="form-control" value={this.state.author}
                            onChange={(event) => this.setState({author: event.target.value})}>
                                <option value="Max">Max</option>
                                <option value="Manu">Manu</option>
                        </select>
                     </div>
                     <button>Add post</button>
                 </form>
                 
            </div>
        );
    }
}

export default NewPost; 