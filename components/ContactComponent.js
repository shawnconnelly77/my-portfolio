import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = {
        title: 'Contact Me'
    }

    render() {
        return (
            <ScrollView>
                <Card
                title='Contact Information'
                wrapperStyle={{margin: 20}}>
                    <Text>Shawn Connelly</Text>
                    <Text>Tampa, FL</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-727-744-4037</Text>
                    <Text>Email: shawn.connelly77@gmail.com</Text>
                </Card>

            </ScrollView>
        );
    }
}

export default Contact;