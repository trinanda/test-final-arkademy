import React, { Component } from 'react';
import { Container, Header, Content, CardItem, Thumbnail, Button, 
    Text, Icon, Left, Body, Right, Card } from 'native-base';
import { Image } from 'react-native';

export default class testFlex extends Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#F4F4F4'}}>
                    <Left style={{ paddingLeft: 10}}>
                        <Icon
                            name='arrow-back'
                            style={{color: '#717171'}}
                        />
                    </Left>
                    <Body>
                        <Text style={{fontFamily: 'Titillium Web Bold'}}>Sepeda</Text>
                    </Body>
                    <Right style={{paddingRight: 10}}>
                        <Icon
                            name='apps'
                            style={{color: '#00C44C'}}
                        />
                    </Right>
                </Header>
                <Container style={{flex: 15}}>
                    <Container style={{backgroundColor: 'red', flex: 3, flexDirection: 'row', paddingBottom: 15}}>
                        <Container style={{backgroundColor: 'white', padding: 5}}>
                            <Card style={{borderColor: 'white'}}>
                                <CardItem style={{borderColor: 'white'}}> 
                                    <Left>
                                        <Thumbnail 
                                            source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-fat-outlines-part-1-black/96/web-36-512.png'}} 
                                            style={{width: 15, height: 15}}
                                        />
                                        <Body>
                                        </Body>
                                    </Left>
                                <Body></Body>
                                <Right>
                                    <Icon
                                        name="heart"
                                    />
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{borderColor: 'white'}}>
                                    <Image 
                                        source={{uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/17/20092798/20092798_7923cd83-636d-4eca-8c98-b2624a70da2f_800_600.jpg'}} 
                                        style={{height: 160, width: null, flex: 1, marginTop: -8}}
                                    />
                                </CardItem>
                                <CardItem style={{borderColor: 'white'}}>
                                    <Container>
                                        <Text style={{marginTop: -15, paddingBottom: 5}}>Element Sepeda Roadbike 700c FRC 38</Text>
                                        <Text style={{marginTop: -20}}></Text>
                                        <Text style={{color: '#FF4000'}}>Rp. 2.500.000</Text>
                                    </Container>
                                </CardItem>
                            </Card>
                        </Container>
                        <Container style={{backgroundColor: 'white', padding: 5}}>
                            <Card style={{borderColor: 'white'}}>
                                <CardItem style={{borderColor: 'white'}}> 
                                    <Left>
                                        <Thumbnail 
                                            source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-fat-outlines-part-1-black/96/web-36-512.png'}} 
                                            style={{width: 15, height: 15}}
                                        />
                                        <Body>
                                        </Body>
                                    </Left>
                                <Body></Body>
                                <Right>
                                    <Icon
                                        name="heart"
                                        style={{color: '#F70019'}}
                                    />
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{borderColor: 'white'}}>
                                    <Image 
                                        source={{uri: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2018/10/19/153993577181892/153993577181892_dcdfd0a2-8952-4aa2-929e-7051429207c1.png'}} 
                                        style={{height: 160, width: null, flex: 1, marginTop: -8}}
                                    />
                                </CardItem>
                                <CardItem style={{borderColor: 'white'}}>
                                    <Container>
                                        <Text style={{marginTop: -15, paddingBottom: 5}}>KHUSUS GOSEND - Sepeda Lipat Anak 16 inch LKF-161</Text>
                                        <Text style={{marginTop: -20}}></Text>
                                        <Text style={{color: '#FF4000'}}>Rp 730.000</Text>
                                    </Container>
                                </CardItem>
                            </Card>
                        </Container>
                    </Container>
                    <Container style={{backgroundColor: 'red', flex: 3, flexDirection: 'row', paddingBottom: 15}}>
                        <Container style={{backgroundColor: 'white', padding: 5}}>
                            <Card style={{borderColor: 'white'}}>
                                <CardItem style={{borderColor: 'white'}}> 
                                    <Left>
                                        <Thumbnail 
                                            source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-fat-outlines-part-1-black/96/web-36-512.png'}} 
                                            style={{width: 15, height: 15}}
                                        />
                                        <Body>
                                        </Body>
                                    </Left>
                                <Body></Body>
                                <Right>
                                    <Icon
                                        name="heart"
                                        style={{color: '#F70019'}}
                                    />
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{borderColor: 'white'}}>
                                    <Image 
                                        source={{uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/6/9/0/0_04d7ab57-966e-4651-8a2b-eedb532c6ff4_992_744.jpg'}} 
                                        style={{height: 160, width: null, flex: 1, marginTop: -8}}
                                    />
                                </CardItem>
                                <CardItem style={{borderColor: 'white'}}>
                                    <Container>
                                        <Text style={{marginTop: -15, marginBottom: 5}}>sepeda listrik e-bike super rider earth gold</Text>
                                        <Text style={{marginTop: -20, marginBottom: 5}}></Text>
                                        <Text style={{color: '#FF4000'}}>Rp 6.000.000</Text>
                                    </Container>
                                </CardItem>
                            </Card>
                        </Container>
                        <Container style={{backgroundColor: 'white', padding: 5}}>
                            <Card style={{borderColor: 'white'}}>
                                <CardItem style={{borderColor: 'white'}}> 
                                    <Left>
                                        <Thumbnail 
                                            source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-fat-outlines-part-1-black/96/web-36-512.png'}} 
                                            style={{width: 15, height: 15}}
                                        />
                                        <Body>
                                        </Body>
                                    </Left>
                                <Body></Body>
                                <Right>
                                    <Icon
                                        name="heart"
                                    />
                                </Right>
                                </CardItem>
                                <CardItem cardBody style={{borderColor: 'white'}}>
                                    <Image 
                                        source={{uri: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2018/10/1/15383854204932/15383854204932_1be86767-b97d-400f-80ec-f769425cacb3.png'}} 
                                        style={{height: 160, width: null, flex: 1, marginTop: -8}}
                                    />
                                </CardItem>
                                <CardItem style={{borderColor: 'white'}}>
                                    <Container>
                                        <Text style={{marginTop: -15, marginBottom: 5}}>Sepeda Gunung Odessy ATSX-500</Text>
                                        <Text style={{marginTop: -20, marginBottom: 5}}></Text>
                                        <Text style={{color: '#FF4000'}}>Rp 1.600.000</Text>
                                    </Container>
                                </CardItem>
                            </Card>
                        </Container>
                    </Container>
                </Container>
                
            </Container>
        )
    }
}