import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';
import ResourceDetail from './ResourceDetail';


const resourceData = [
  {
    title: 'JavaScript - The Good Parts',
    author: 'Douglas Crockford',
    url: 'https://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
    image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/javascript-the-good-parts.jpg',
    thumbnail_image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/douglas-crockford.jpg'
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    url: 'http://eloquentjavascript.net/',
    image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/eloquent-javascript.jpg',
    thumbnail_image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/marijn-haverbeke.jpg'
  },
  {
    title: 'You Don\'t Know JS',
    author: 'Kyle Simpson',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/you-dont-know-js.jpg',
    thumbnail_image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/kyle-simpson.jpg'
  },
  {
    title: 'The Complete React Web App Developer Course',
    author: 'Andrew Mead',
    url: 'https://www.udemy.com/the-complete-react-web-app-developer-course/',
    image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/complete-react-course.jpg',
    thumbnail_image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/andrew-mead.jpg'
  },
  {
    title: 'Learning React Native',
    author: 'Bonnie Eisenman',
    url: 'http://shop.oreilly.com/product/0636920041511.do',
    image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/learning-react-native.jpg',
    thumbnail_image: 'https://raw.githubusercontent.com/PiotrBerebecki/javascript-resources-app/master/images/bonnie-eisenman.jpg'
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
