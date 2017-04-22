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
        firstname:'',
        lastname:'',
        birthdate:'',
        num:0,
        salary:0,
        building:0,
        floor:0,
        office:0,
        client:''
      }
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.setValue = this.setValue.bind(this);
   }

setValue(e){
  switch(e.target.id)
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
}
   addItem(){
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
                  <label htmlFor="a">Developer </label>
                  <input type="radio" name="type" id="a" />
                  <label htmlFor="b">Project Manager </label>
                  <input type="radio" name="type" id="b"  />
                  <label htmlFor="c">Sales Person </label>
                  <input type="radio" name="type" id="c"  />
                <br />
                <br />
                  <label htmlFor="firstname">First Name: </label>
                  <input type="text" name="employee" id="firstname" value={this.state.firstname} onChange={this.setValue} />
                  <label htmlFor="lastname">Last Name: </label>
                  <input type="text" name="employee" id="lastname" value={this.state.lastname} onChange={this.setValue} />
                  <label htmlFor="birthdate">Birth Date: </label>
                  <input type="date" name="employee" id="birthdate" value={this.state.birthdate} onChange={this.setValue} />
                  <label htmlFor="num">Number of Employees: </label>
                  <input type="number" name="employee" id="num" value={this.state.num} onChange={this.setValue} />
                  <label htmlFor="salary">Salary: </label>
                  <input type="number" name="employee" id="salary" value={this.state.salary} onChange={this.setValue} />
                  <label htmlFor="building">Building: </label>
                  <input type="number" size = "4" name="employee" id="building" value={this.state.building} onChange={this.setValue} />
                  <label htmlFor="floor">Floor: </label>
                  <input type="number" name="employee" id="floor" value={this.state.floor} onChange={this.setValue} />
                  <label htmlFor="office">Office: </label>
                  <input type="number" name="employee" id="office" value={this.state.office} onChange={this.setValue} />
                  <label htmlFor="client">Client Name: </label>
                  <input type="text" name="employee" id="client" value={this.state.client} onChange={this.setValue} />
                  <input type="submit" onClick = {this.addItem} />
                <br />
                  <input type="text" name="rmindex" value={this.state.rmindex} onChange={this.setValue} />
                  <button type="submit" onClick = {this.removeItem}>DELETE</button>
            <table>
               <tbody>
               <tr>
                   <td>ID</td>
                   <td>First Name</td>
                   <td>Last Name</td>
                   <td>Birth Date</td>
                   <td>Num of Employees</td>
                   <td>Salary</td>
                   <td>Building</td>
                   <td>Floor</td>
                   <td>Office</td>
                   <td>Client Name</td>
               </tr>
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
            <td>{this.props.data.firstname}</td>
            <td>{this.props.data.lastname}</td>
            <td>{this.props.data.birthdate}</td>
            <td>{this.props.data.num}</td>
            <td>{this.props.data.salary}</td>
            <td>{this.props.data.building}</td>
            <td>{this.props.data.floor}</td>
            <td>{this.props.data.office}</td>
            <td>{this.props.data.client}</td>
         </tr>
      );
   }
}

export default App;
