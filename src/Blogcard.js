import React, {Component} from 'react';

//css module
import css from './Blogcard.module.css';


class Blogcard extends Component {
    constructor(){
        super();
        this.state = {
            likes:0
        }
    }


    like = () => {
        this.setState((ps,pp) => {
            return {likes : ps.likes+1}
        })
    }

    dislike = () => {
        this.setState((ps,pp) => {
            return {likes : ps.likes-1}
        })
    }

    render(){
        return (<div className={css.blog}>
            {this.props.item.t}
            <div>Likecount : {this.state.likes}</div>
            <button onClick={this.like}>Like</button>
            <button onClick={this.dislike}>Dislike</button>
        </div>)
    }
}

export default Blogcard;