import React from 'react.js';
import ReactDom from 'react-dom';
import { SocialCard } from './app';

class SocialCardContainer extends React.Component {
    render() {
        return <SocialCard />
    }
}

ReactDom.render(
    <SocialCardContainer />,
    document.getElementById('app')
)