import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ResourceDetail = ({ resource }) => {
  const { 
    thumbnail_image, 
    title, 
    author, 
    image,
    url } = resource;
    
  const { 
    headerThumbnailContainer,
    headerThumbnail, 
    headerTextContainer,
    headerTextResource,
    resourceMainImage } = styles;
  
  console.log(title);
  return (
    <Card>
    
      <CardSection>
        <View style={headerThumbnailContainer}>
          <Image
            style={headerThumbnail} 
            source={{ uri: thumbnail_image }}
          />
        </View>
        
        <View style={headerTextContainer}>
          <Text style={headerTextResource}>{title}</Text>
          <Text>{author}</Text>
        </View>
      </CardSection>
        
        
      <CardSection>
        <Image
          style={resourceMainImage}
          source={{ uri: image }}
        />
      </CardSection>
      
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Check it out
        </Button>
      </CardSection>
      
    </Card>
  );
};

const styles = {
  headerThumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerThumbnail: {
    height: 50,
    width: 50
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextResource: {
    fontSize: 18
  },
  resourceMainImage: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default ResourceDetail;
