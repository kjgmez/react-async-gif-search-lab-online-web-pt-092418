import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifList: []
    };

    getGifs = (query) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
        fetch(url)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({ gifList: data.map( image => ({ url: image.images.original.url })
                    )
            })
        })
    };

    render() {
        return (
            <div>
                <GifList list={this.state.gifList}/>
                <GifSearch getGifs={this.getGifs} />
            </div>

        )
    }
}

export default GifListContainer;