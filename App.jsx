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
      if(JSON.parse(localStorage.getItem( 'new' )) == null){
        var option = []
      }
      else {
        var option = JSON.parse(localStorage.getItem( 'new' ))
      }
      //option = JSON.parse(localStorage.getItem( 'option' ) || '[]');
      this.state = {
        viindex:'',
        vichoice:0,
        vitype:'text',
        virequired:true,
        viinput:'',
        rmindex:'',

        data:option,

        id:0,
        type:0,
        firstname:'',
        lastname:'',
        birthdate:'',
        num:'',
        salary:'',
        building:'',
        floor:'',
        office:'',
        client:''
      }
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.editItem = this.editItem.bind(this);

      this.setValue = this.setValue.bind(this);
      this.setOthers = this.setOthers.bind(this);
      this.setIndex = this.setIndex.bind(this);
      this.setChoice = this.setChoice.bind(this);
      this.setRequired = this.setRequired.bind(this);
    }

    setValue(e){
      if(this.state.type == 0){
        alert('Please select the type of employee');
        e.preventDefault();
      }
      else{
        switch(e.target.id)
        {
            case "firstname":
              var myArray = this.state.data;
              var size = myArray.length + 1;
              this.setState({id: size});
              this.setState({firstname: e.target.value});
              break;
            case "lastname":
              this.setState({lastname: e.target.value});
              break;
            case "birthdate":
              this.setState({birthdate: e.target.value});
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
        }
      }
    }

    setIndex(e){
      var myArray = this.state.data
      if(myArray.length == 0){alert('The table is empty.');}
      else{
        switch(e.target.id){
          case "viindex":
            if(e.target.value < 1 || e.target.value > myArray.length){
              if(e.target.value != ""){
              alert('Please enter in range 1 ~ '+myArray.length);
              }
              this.setState({viindex: ""})
            }
            else{
              var myArray = this.state.data;
              this.setState({viindex: e.target.value})
              var index = Number(e.target.value - 1)
              this.setState({type: myArray[index].type})
            }
            break;
          case "rmindex":
            if(e.target.value < 1 || e.target.value > myArray.length){
              if(e.target.value != ""){
              alert('Please enter in range 1 ~ '+myArray.length);
              }
              this.setState({rmindex: ""})
            }
            else{this.setState({rmindex: e.target.value});}
            break;
        }
      }
    }

    setOthers(e){
      if(this.state.viindex != ""){
        var myArray = this.state.data;
        var index = Number(this.state.viindex) - 1;
        var viinput = this.state.viinput;
        var output = myArray[index];
      }
      switch(e.target.id){
          case "developer":
            if(this.state.viindex != ""){output.type=1;}
            this.setState({type:1});
            break;
          case "manager":
            if(this.state.viindex != ""){output.type=2;}
            this.setState({type:2});
            break;
          case "sale":
            if(this.state.viindex != ""){output.type=3;}
            this.setState({type:3});
            break;
          case "viinput":
            this.setState({viinput:e.target.value});
            break;
          }
    }

    setChoice(e){
      this.setState({vichoice:e.target.selectedIndex});
      switch (e.target.selectedIndex) {
        case 1:
          this.setState({vitype:"text"})
          break;
        case 2:
          this.setState({vitype:"date"})
          break;
        case 3:
          this.setState({vitype:"number"})
          break;
        case 4:
          this.setState({vitype:"number"})
          break;
        case 5:
          this.setState({vitype:"text"})
          break;
        case 6:
          this.setState({vitype:"number"})
          break;
        case 7:
          this.setState({vitype:"number"})
          break;
        case 8:
          this.setState({vitype:"number"})
          break;
      }
    }

    setRequired(){
      if(this.state.type==2||this.state.type==3){
        if(this.state.vichoice==3)
        {this.setState({virequired:false})}
      }
    }

    addItem(){
        var myArray = this.state.data;
        var item = new Employee (this.state.id, this.state.type, this.state.firstname, this.state.lastname, this.state.birthdate, this.state.num, this.state.salary, this.state.building, this.state.floor, this.state.office, this.state.client)
        myArray.push(item)
        localStorage.setItem( 'new', JSON.stringify(myArray) );
        this.setState({data: myArray})
    }

    editItem(){
      if(this.state.viindex != "" && this.state.viinput != "")
      {
        var myArray = this.state.data;
        var index = Number(this.state.viindex) - 1;
        var viinput = this.state.viinput;
        var output = myArray[index];
        switch (this.state.vichoice) {
            case 0:
              output.firstname = viinput;
              break;
            case 1:
              output.lastname = viinput;
              break;
            case 2:
              output.birthdate = viinput;
              break;
            case 3:
              output.num = viinput;
              break;
            case 4:
              output.salary = viinput;
              break;
            case 5:
              output.client = viinput;
              break;
            case 6:
              output.building = viinput;
              break;
            case 7:
              output.floor = viinput;
              break;
            case 8:
              output.office = viinput;
              break;
          }
          if(output.type==1){output.num=""}
          if(output.type==3){output.building="";output.floor="";output.office="";}
        localStorage.setItem( 'new', JSON.stringify(myArray) );
        this.setState({data: myArray})
      }
    }

    removeItem() {
      if(this.state.rmindex != ""){
        var index = Number(this.state.rmindex) - 1;
        var myArray = this.state.data
        myArray.splice(index, 1);
        for(var i=0; i < myArray.length; i++){
          myArray[i].id = i + 1;
        }
        localStorage.setItem( 'new', JSON.stringify(myArray) );
        this.setState({data: myArray });
      }
    }

   render() {
      return (
        <div>
        <br />
        <br />
          <center><Header/></center>
          <br />
          <br />
          <center>
          <form onSubmit = {this.addItem}>
            <fieldset>
              <legend> Add New Employee </legend>
                <p>
                  <label className="radios" htmlFor="developer">Developer </label>
                  <input type="radio" name="type" id="developer" onChange={this.setOthers}/>
                  <label className="radios" htmlFor="manager">Project Manager </label>
                  <input type="radio" name="type" id="manager" onChange={this.setOthers}/>
                  <label className="radios" htmlFor="sale">Sales Person </label>
                  <input type="radio" name="type" id="sale" onChange={this.setOthers}/>
                </p>
                <p>
                  <label className="row1" htmlFor="firstname">Fisrt Name:</label>
                  <input type="text" name="col1" id="firstname"  value={this.state.firstname} onChange={this.setValue} required/>
                  <label className="row1" htmlFor="lastname">Last Name:</label>
                  <input type="text" name="col2" id="lastname" value={this.state.lastname} onChange={this.setValue} required/>
                  <label className="row1" htmlFor="birthdate">Birth Date:</label>
                  <input type="date" name="col3" id="birthdate" value={this.state.birthdate} onChange={this.setValue} required/>
                </p>
                <p>
                  <label className="row2" htmlFor="num"># of Employees:</label>
                  <input type="number" name="col1" id="num" value={this.state.num} onChange={this.setValue} disabled={this.state.type == 1 ? true:false}/>
                  <label className="row2" htmlFor="salary">Salary:</label>
                  <input type="number" name="col2" id="salary" value={this.state.salary} onChange={this.setValue} required/>
                  <label className="row2" htmlFor="client">Client Name:</label>
                  <input type="text" name="col3" id="client" value={this.state.client} onChange={this.setValue} required={this.state.type == 3 ? true : false} disabled={this.state.type == 1|| this.state.type ==2 ? true:false}/>
                </p>
                <p>
                  <label className="row3" htmlFor="building">Building:</label>
                  <input type="number" name="col1" value={this.state.building} id="building" onChange={this.setValue} required={this.state.type == 1|| this.state.type == 2 ? true : false} disabled={this.state.type == 3 ? true:false}/>
                  <label className="row3" htmlFor="floor">Floor:</label>
                  <input type="number" name="col2" id="floor" value={this.state.floor} min="1" max="99" onChange={this.setValue} required={this.state.type == 1|| this.state.type == 2 ? true : false} disabled={this.state.type == 3 ? true:false}/>
                  <label className="row3" htmlFor="office">Office:</label>
                  <input type="number" name="col3" id="office" value={this.state.office} onChange={this.setValue} required={this.state.type == 1|| this.state.type == 2 ? true : false} disabled={this.state.type == 3 ? true:false}/>
                </p>
                <input type="submit" value="ADD" name="employee"  />
              </fieldset>
            </form>
            </center>
            <br />
            <center>
            <form>
              <fieldset>
                <legend> Edit An Employee </legend>
                <p>
                  <label className="radios" htmlFor="developer">Developer </label>
                  <input type="radio" name="type" id="developer" onChange={this.setOthers} disabled={this.state.viindex==''?true:false} selected={this.state.type==1?true:false}/>
                  <label className="radios" htmlFor="manager">Project Manager </label>
                  <input type="radio" name="type" id="manager" onChange={this.setOthers} disabled={this.state.viindex==''?true:false} selected={this.state.type==2?true:false}/>
                  <label className="radios" htmlFor="sale">Sales Person </label>
                  <input type="radio" name="type" id="sale" onChange={this.setOthers} disabled={this.state.viindex==''?true:false} selected={this.state.type==3?true:false}/>
                </p>
                <p>
                  <label htmlFor="viindex">ID:</label>
                  <input type="text" name="col" id="viindex" value={this.state.viindex} onChange={this.setIndex} required/>
                  <select name="opts" onChange={this.setChoice}>
                    <option id="firstname" value="firstname" >First Name</option>
                    <option id="lastname" value="lastname">Last Name</option>
                    <option id="birthdate" value="birthdate">Birth Date</option>
                    <option id="num" value="num" disabled={this.state.type==1?true:false}># of Employees</option>
                    <option id="salary" value="salary">Salary</option>
                    <option id="client" value="client" disabled={this.state.type==1||this.state.type==2?true:false}>Client Name</option>
                    <option id="building" value="building" disabled={this.state.type==3?true:false}>Building</option>
                    <option id="floor" value="floor" disabled={this.state.type==3?true:false}>Floor</option>
                    <option id="office" value="office" disabled={this.state.type==3?true:false}>Office Number</option>
                  </select>
                  {this.setRequired}
                  <input id="viinput" name="col3" type={this.state.vitype} required={this.state.virequired} onChange={this.setOthers}/>
                </p>
              <input type="submit" value="EDIT" onClick = {this.editItem}/>
              </fieldset>
            </form>
            </center>
            <br />
            <center>
            <form>
              <fieldset>
                <legend> Delete An Employee </legend>
                <p>
                  <label className="input1" htmlFor="rmindex">ID:</label>
                  <input type="number" name="col" id="rmindex" value={this.state.rmindex} onChange={this.setIndex} required/>
                </p>
                <input type="submit" value="DELETE" onClick = {this.removeItem}/>
              </fieldset>
            </form>
            </center>
            <br />
            <h2>The Employees Table</h2>
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
            <br /><br /><br /><br /><br />
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Employees CRUD App</h1>
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
