import React, { Component } from 'react';
import { ActivityIndicator, ListView, Image } from 'react-native'
import { List, ListItem, Text, Container, Header, Left, Right, H1, Body, Content, Footer} from 'native-base';

export default class Products extends Component {

  constructor(props){
    super(props);
    this.state = { 
        isLoading: true,
        cloneProducts: []
    }
  }

  componentDidMount(){
    // fetch('http://10.0.2.2:3000/api/Products')
    fetch('http://192.168.0.7:3333/products')
      .then((response) => response.json())
      .then((responseJson) => {
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            isLoading: false,
            cloneProducts: standardDataSource.cloneWithRows(responseJson)
        });
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <Container>
          {/* <ActivityIndicator/> */}
        </Container>
      );
    }

    return(
      <Container style={{flex: 1, paddingTop:0}}>
        <Header>
            <Body style={{alignItems: 'center'}}>
                <H1 style={{color: '#FFFFFF'}}></H1>
            </Body>
        </Header>
        <Content>
            <List>
                <ListView
                    dataSource={this.state.cloneProducts}
                    renderRow={
                        (rowData) => <ListItem>
                            <Left>
                                <Text>ID:{rowData.id}</Text>
                                <Text>Name: {rowData.name}</Text>
                            </Left>
                            <Body>
                                {/* <Text>{rowData.image_url}</Text> */}
                                <Image
                                    source={{uri: rowData.image_url}}
                                    style={{width: 50, height: 50}}                                
                                />
                                <Text>created_at: {rowData.created_at}</Text>
                                <Text>updated_at: {rowData.updated_at}</Text>
                            </Body>
                            <Right>
                                <Text>{rowData.price}</Text>
                            </Right>
                        </ListItem>
                    }
                ></ListView>
            </List>
        </Content>
        <Footer/>
      </Container>
    );
  }
}