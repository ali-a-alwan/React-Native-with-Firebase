import { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { addStudent } from '../services/DataService';

export default class NewScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      rnumber: null,
      major: "",
      year: 0,
      status: ""
    };
  }

  setName = (value) =>{
    this.setState({ name: value });
  }

  setrnumber = (value) =>{
    this.setState({ rnumber: value });
  }

  selectMajor = (value) => {
    this.setState({ major: value });
  }

  selectYear = (value) => {
    this.setState({ year: value });
  }

  selectStatus = (value) => {
    this.setState({ status: value });
  }

  saveData = () =>{
    if(this.state.name && this.state.rnumber && this.state.major && this.state.year && this.state.status){
      if(isNaN(this.state.rnumber)){
        Alert.alert('Status','Invalid R number!');
      }
       else{
         addStudent(this.state.name, this.state.rnumber, this.state.major, this.state.year, this.state.status);
       }
    } else{
       Alert.alert('Status','Empty Field(s)!');
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Student Details</Text>
        <Form>
        <Item fixedLabel last>
              <Label>Name</Label>
              <Input onChangeText={this.setName} />
        </Item>
        <Item fixedLabel last>
              <Label>R Number</Label>
              <Input onChangeText={this.setrnumber} />
        </Item>
        <Item fixedLabel picker last>
          <Label>Major</Label>
          <Picker 
          mode="dropdown" 
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select Major"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.major}
          onValueChange={this.selectMajor}
          Title="Major"
          >
          <Picker.Item label="BIT" value="BIT" />
          <Picker.Item label="BCS" value="BCS" />
          </Picker>
        </Item>

        <Item fixedLabel picker last>
          <Label>Year</Label>
          <Picker 
          mode="dropdown" 
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select Year"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.year}
          onValueChange={this.selectYear}
          >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          </Picker>
        </Item>

        <Item fixedLabel picker last>
          <Label>Status</Label>
          <Picker 
          mode="dropdown" 
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select Status"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.status}
          onValueChange={this.selectStatus}
          >
          <Picker.Item label="Active" value="Active" />
          <Picker.Item label="Inactive" value="Inactive" />
          </Picker>
        </Item>
        </Form>

          <Button block last style={{marginTop: 50}} onPress={this.saveData}>
            <Text style={{fontWeight: "bold"}}>Save</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
          <Button vertical onPress={() => {Actions.ListScreen();}}>
              <Icon name="list-box" />
              <Text>Student List</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
