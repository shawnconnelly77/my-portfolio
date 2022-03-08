import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = {
        title: 'About Me'
    }

    render() {
        return (
            <ScrollView>
                <Card
                title='Summary'
                wrapperStyle={{margin: 20}}>
                    <Text>Executive program manager, risk manager, cross-functional leader, and U.S. Navy veteran with extensive experience in financial services, including several Fortune 500, multinational retail and investment banking firms. Offering an impressive record of achievement leveraging strategic thinking, risk management, project management, change management, and technology to steer the building and continuous improvement of programs and frameworks.</Text>
                </Card>

            </ScrollView>
        );
    }
}

export default About;