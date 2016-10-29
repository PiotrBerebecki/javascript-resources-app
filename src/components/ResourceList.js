import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';
import ResourceDetail from './ResourceDetail';


const resourceData = [
  {
    title: 'JavaScript - The Good Parts',
    artist: 'Douglas Crockford',
    url: 'https://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
  },
  {
    title: 'Eloquent JavaScript',
    artist: 'Marijn Haverbeke',
    url: 'http://eloquentjavascript.net/',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
  },
  {
    title: 'You Don\'t Know JS',
    artist: 'Kyle Simpson',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
  },
  {
    title: 'The Complete React Web App Developer Course',
    artist: 'Andrew Mead',
    url: 'https://www.udemy.com/the-complete-react-web-app-developer-course/',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
  },
  {
    title: 'Learning React Native',
    artist: 'Bonnie Eisenman',
    url: 'http://shop.oreilly.com/product/0636920041511.do',
    image: 'https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
  }
];


class ResourceList extends Component {
  state = {
    resources: []
  };
  
  componentDidMount() {
    this.setState({
      resources: resourceData
    });
    
    
    // axios.get('URL to fetch data from')
    //   .then(response => {
    //     this.setState({
    //       resources: response.data
    //     });
    //   });
  }
  
  renderResources() {
    return this.state.resources.map(resource => {
      return (
        <ResourceDetail key={resource.title} resource={resource} />
      );
    });
  }
  
  render() {
    return (
      <ScrollView>
        {this.renderResources()}
      </ScrollView>
    );
  }
}

export default ResourceList;
