import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Input, Item, Label, Container, Content, Button, Header, Title} from 'native-base';
import {shuffle} from 'shuffle-seed';

const animations = [
    'https://media.giphy.com/media/26gsqQxPQXHBiBEUU/giphy.gif',
    'https://media.giphy.com/media/l0EwYkyU1JCExVquc/giphy.gif',
    'https://media.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif',
    'https://media.giphy.com/media/l0ExvMqtnw7aTzPCE/giphy.gif',
    'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
];

class Welcome extends Component {
    state = {value: '1', currentImage: 0};

    changeImage = ()=>{
        const {currentImage} = this.state;

        if(currentImage<animations.length){
           return this.setState({currentImage: currentImage +1})
        }
        return this.setState({currentImage: 0})
    };

    componentDidMount() {
        this.shuffleTimer = setInterval(this.changeImage, 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.shuffleTimer);
    }


    handleChange = (value) => {
        this.setState({value})
    };

    handleRandom = () => {
        const value = (Math.floor((Math.random()) * 9) + 1).toString();
        this.setState({value})
    };

    blurInput= ()=>{
        this.setState({currentImage: 0})
    };

    render() {
        const {value, currentImage} = this.state;

        const shuffledImages = shuffle(animations,value);
        return (
            <Container>
                <Header>
                    <Title>Welcome</Title>
                </Header>
                <Content style={{margin: 20}}>
                    <Item inlineLabel>
                        <Label>Enter a number</Label>
                        <Input onChangeText={this.handleChange} value={value} onBlur={this.blurInput}/>
                    </Item>

                    <View style={{marginTop: 40, alignItems: 'center'}}>
                        <Image style={{width: 100, height: 100}} source={{uri: shuffledImages[currentImage]}} />
                    </View>
                </Content>


                <Button block success>
                    <Text>Save</Text>
                </Button>

                <Button block onPress={this.handleRandom} style={{marginTop: 10}}>
                    <Text>Randomise</Text>
                </Button>
            </Container>
    );
    }
    }

    export default Welcome;