import React from 'react';

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project 1',
                    subTitle: 'Safty First',
                    imgSrc: 'data:image/jpeg;base64,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',
                    link: 'https://github.com/edonohue8/project-1.git',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'bindrr',
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuPTyid_LQjlwMahDHg5bo9HSG2b_xUW1Dw&usqp=CAU',
                    link: 'https://github.com/tniles320/bindrr.git',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'Now We\'re talking debate app',
                    imgSrc: 'data:image/png;base64,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',
                    link: 'https://github.com/NowWereTalking/app.git',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Burger App Project',
                    subTitle: 'A simple burger app',
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRGWhsGVPKQHZ7_J1F-WKMHmw4xv0FgsxVw&usqp=CAU',
                    link: 'https://github.com/CLEscherich/burger.git',
                    selected: false
                },
                
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;