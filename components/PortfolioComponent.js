import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';


class Portfolio extends Component {


    static navigationOptions = {
        title: 'Portfolio'
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

export default Portfolio;