import React from 'react';

class Employee {
  constructor(id, type, firstname, lastname, birthdate, num, salary, building, floor, office, client) {
    this.id = id;
    this.type = type;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.num = num;
    this.salary = salary;
    this.building = building;
    this.floor = floor;
    this.office = office;
    this.client = client;
  }
}



class App extends React.Component {
   constructor() {
      super();

      this.state = {
        id:1,
        viindex:0,
        rmindex:0,
        data:[],

        type:0,
        firstname:'a',
        lastname:'b',
        birthdate:'',
        num: 0,
        salary:0,
        building:0,
        floor:0,
        office:0,
        client:'c'
      }
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.setValue = this.setValue.bind(this);
   }

setValue(e){
  switch(e.target.name)
  {
    case "firstname":
      this.setState({firstname: e.target.value});
      break;
    case "lastname":
      this.setState({lastname: e.target.value});
      break;
    case "birthdate":
      this.setState({birthdate: e.target.value});
      console.log(this.state.birthdate);
      break;
    case "num":
      this.setState({num: e.target.value});
      break;
    case "salary":
      this.setState({salary: e.target.value});
      break;
    case "building":
      this.setState({building: e.target.value});
      break;
    case "floor":
      this.setState({floor: e.target.value});
      break;
    case "office":
      this.setState({office: e.target.value});
      break;
    case "client":
      this.setState({client: e.target.value});
      break;
    case "viindex":
      this.setState({viindex: e.target.value});
      break;
    case "rmindex":
      this.setState({rmindex: e.target.value});
      break;
  }
  console.log(this.state)
}
   addItem(){
   console.log(this.state)
    var count = this.state.id + 1
    this.setState({id: count});
    this.setState({type: 2});
    var item = new Employee (this.state.id, this.state.type, this.state.firstname, this.state.lastname, this.state.birthdate, this.state.num, this.state.salary, this.state.building, this.state.floor, this.state.office, this.state.client)
    var myArray = this.state.data;
    myArray.push(item)
    this.setState({data: myArray})
   }
   removeItem() {
     var index = this.state.rmindex - 1
     var array = this.state.data
     array.splice(index, 1);
     this.setState({data: array });
   }

   render() {
      return (
         <div>
            <Header/>
            <form>
                <label>
                  Developer
                  <input type="checkbox"  />
                  Project Manager
                  <input type="checkbox"  />
                  Sales Person
                  <input type="checkbox"  />
                </label>
                <br />
                <label>
                  <input type="text" name="firstname" value={this.state.firstname} onChange={this.setValue} />
                  <input type="text" name="lastname" value={this.state.lastname} onChange={this.setValue} />
                  <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.setValue} />
                  <input type="number" name="num" value={this.state.num} onChange={this.setValue} />
                  <input type="number" name="salary" value={this.state.salary} onChange={this.setValue} />
                  <input type="number" name="building" value={this.state.building} onChange={this.setValue} />
                  <input type="number" name="floor" value={this.state.floor} onChange={this.setValue} />
                  <input type="number" name="office" value={this.state.office} onChange={this.setValue} />
                  <input type="text" name="client" value={this.state.client} onChange={this.setValue} />
                  <button onClick = {this.addItem}>ADD</button>
                </label>
                <br />
                <label>
                  <input type="text" name="rmindex" value={this.state.rmindex} onChange={this.setValue} />
                  <button onClick = {this.removeItem}>DELETE</button>
                </label>
            </form>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
