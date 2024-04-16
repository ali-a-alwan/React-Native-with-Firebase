import React, { Component } from 'react';
import { Text, ListItem, Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';

export default class StudentList extends Component {

  static propTypes = {
      students: PropTypes.array.isRequired
  };

   onPress = (rnumber) => {
    this.props.onPress(rnumber);
  }

  onLongPress = (rnumber) => {
    this.props.onLongPress(rnumber);
  }

  render() {
    return(
      this.props.students.map((data, index) => {
        return(
          <ListItem key={index} onPress={() => this.onPress(data.rnumber)} onLongPress={() => this.onLongPress(data.rnumber)}>
          <Left>
          <Text>{data.name}</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
        )
      })
    )
  }
}
