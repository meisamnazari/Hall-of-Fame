import React, {Component} from 'react';
import {Image, Text, ScrollView} from 'react-native';
import {getFameList} from "../actions/fameList";
import {connect} from "react-redux";
import {Card, CardItem, Body, Spinner, Content, Container, Header, Title, Button} from 'native-base'
import {imageUrl} from "../services";

const sheldonImage = {
    name: 'Sheldon Cooper',
    uri: 'https://i.pinimg.com/originals/2e/29/c4/2e29c41787d04c4b3de4aa3832566357.jpg'
};

class FameList extends Component {
    componentDidMount() {
        this.props.getFameList();
    }

    renderLoading = () => <Container>
        <Header>
            <Title>Fame List</Title>
        </Header><Card>
        <Spinner/>
    </Card>
    </Container>;

    renderError = () => <Container>
        <Header>
            <Title>Fame List</Title>
        </Header><Card>
        <Text>Error...</Text>
        <Button block primary onPress={this.props.getFameList}><Text>Get Data</Text>
        </Button>
    </Card>
    </Container>;

    render() {
        const {loading, data, error} = this.props;

        if (loading) {
            return this.renderLoading()
        }

        if (error) {
            return this.renderError();
        }
        const imagesWithoutSheldon = data.results.map(item => ({...item, uri: imageUrl + item.profile_path}))
        const imagesWithSheldon = [...imagesWithoutSheldon.slice(0, 2), sheldonImage, ...imagesWithoutSheldon.slice(2)]
        return (
            <Container>
                <Header>
                    <Title>Fame List</Title>
                </Header>
                <ScrollView>
                    <Content style={{margin: 20}}>

                        {imagesWithSheldon.map(item =>
                            <Card key={item.name}>
                                <CardItem header>
                                    <Text>{item.name}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Image
                                        style={{height: 300, width: 200}}
                                        source={{uri: item.uri}}/>
                                    </Body>
                                </CardItem>
                            </Card>)}
                    </Content>
                </ScrollView>
            </Container>
        )
            ;
    }
}

const
    mapState = (state) => {
        return ({
            data: state.fameList.data,
            loading: state.fameList.loading,
            error: state.fameList.error,
        });
    };

const
    mapDispatch = {
        getFameList
    };

export default connect(mapState, mapDispatch)

(
    FameList
)
;