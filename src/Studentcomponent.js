import React, { Component }  from "react";

class Studentcomponent extends Component{

    constructor(props){
        super(props)
        this.state={
            studentName:'',
            fatherName:'',
            dob:'',
            address:'',
            city:'',
            state:'',
            pincode:'',
            phone:'',
            email:'',
            class:'',
            marks:''
        }

        this.changeStudentNameHandler=this.changeStudentNameHandler.bind(this);
        this.changeFatherNameHandler=this.changeFatherNameHandler.bind(this);
        this.changedobHandler=this.changedobHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.changepincodeHandler=this.changepincodeHandler.bind(this);
        this.changePhoneHandler=this.changePhoneHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeClassHandler=this.changeClassHandler.bind(this);
        this.changeMarksHandler=this.changeMarksHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeStudentNameHandler=(event)=>{
        this.setState({studentName: event.target.value});
    }

    changeFatherNameHandler=(event)=>{
        this.setState({fatherName: event.target.value});
    }
    changedobHandler=(event)=>{
        this.setState({dob: event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }
    changeCityHandler=(event)=>{
        this.setState({city: event.target.value});
    }
    changeStateHandler=(event)=>{
        this.setState({state: event.target.value});
    }
    changepincodeHandler=(event)=>{
        this.setState({pincode: event.target.value});
    }
    changePhoneHandler=(event)=>{
        this.setState({phone: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    changeClassHandler=(event)=>{
        this.setState({class: event.target.value});
    }
    changeMarksHandler=(event)=>{
        this.setState({marks: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student ={studentName: this.state.studentName,fatherName: this.state.fatherName,dob: this.state.dob,
        address: this.state.address,city: this.state.city,state : this.state.state,pincode: this.state.pincode,phone: this.state.phone, 
           email: this.state.email, class: this.state.class,marks : this.state.marks};

           console.log('student=>'+JSON.stringify(student));
           this.setState({
            studentName:'',
        fatherName:'',
        dob:'',
        address:'',
        city:'',
        state:'',
        pincode:'',
        phone:'',
        email:'',
        class:'',
        marks:''
        })
    }

    //react lifecycle
    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.setState({
                
                studentName: this.userData.studentName,
                fatherName:this.userData.fatherName,
                dob:this.userData.dob,
                address:this.userData.address,
                city:this.userData.city,
                state:this.userData.state,
                
                
                
                pincode:this.userData.pincode,
                phone:this.userData.phone,
                email:this.userData.email,
                class:this.userData.class,
                marks:this.userData.marks

            })
        }else{
            this.setState({
                studentName:'',
            fatherName:'',
            dob:'',
            address:'',
            city:'',
            state:'',
            pincode:'',
            phone:'',
            email:'',
            class:'',
            marks:''
            })
        }
              

    }

    componentDidUpdate(nextProps,nextState){
        localStorage.setItem('user',JSON.stringify(nextState));

    }

    cancel(){
        this.props.history.push();
    }

    

render(){

    return(
        <div>

         <div className="container">
             <div className="row">
                 <br></br>
                 <h1 className="text-center">Student Enrolment Form</h1>
                 <br></br>
                 <div className="card col-md-6 offset-md-3 offset-md-3">
                     <div className="card-body">
                         <form>
                           <div className="form-group">
                               <label>Student Name:</label>
                               <input placeholder="Student Name" name="studentName" className="form-control"
                               value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                               <div class="error" id = "studentnameerr"></div>
                           </div>
                           <div className="form-group">
                               <label>Father Name:</label>
                               <input placeholder="Father Name" name="fatherName" className="form-control"
                               value={this.state.fatherName} onChange={this.changeFatherNameHandler}/>
                               <div class="error" id = "fathernameerr"></div>
                           </div>


                           <div className="form-group">
                               <label>DOB:</label>
                               <input placeholder="DOB" name="dob" className="form-control"
                               value={this.state.dob} onChange={this.changedobHandler}/>
                               <div class="error" id = "doberr"></div>
                           </div>
                           <div className="form-group">
                               <label>Address:</label>
                               <input placeholder="Address" name="address" className="form-control"
                               value={this.state.address} onChange={this.changeAddressHandler}/>
                               <div class="error" id = "addresserr"></div>
                           </div>
                           <div className="form-group">
                               <label>City:</label>
                               <input placeholder="City" name="city" className="form-control"
                               value={this.state.city} onChange={this.changeCityHandler}/>
                               <div class="error" id = "cityerr"></div>
                           </div>
                           <div className="form-group">
                               <label>State:</label>
                               <input placeholder="State" name="state" className="form-control"
                               value={this.state.state} onChange={this.changeStateHandler}/>
                               <div class="error" id = "stateerr"></div>

                           </div>
                           <div className="form-group">
                               <label>Pincode:</label>
                               <input placeholder="Pincode" name="pincode" className="form-control"
                               value={this.state.pincode} onChange={this.changepincodeHandler}/>
                               <div class="error" id = "pincodeerr"></div>
                           </div>
                           <div className="form-group">
                               <label>Phone:</label>
                               <input placeholder="Phone" name="phone" className="form-control"
                               value={this.state.phone} onChange={this.changePhoneHandler}/>
                               <div class="error" id = "phoneerr"></div>
                           </div>
                           <div className="form-group">
                               <label>Email:</label>
                               <input placeholder="Email" name="email" className="form-control"
                               value={this.state.email} onChange={this.changeEmailHandler}/>
                               <div class="error" id = "emailerr"></div>
                           </div>
                           <div className="form-group">
                               <label>Class:</label>
                               <select input placeholder="Class" name="class" className="form-control"
                               value={this.state.class} onChange={this.changeClassHandler} >
                                   <option>select class</option>
                                   <option>5th</option>
                                   <option>6th</option>
                                   <option>7th</option>
                                   <option>8th</option>
                                   <option>9th</option>
                                   <option>10th</option>
                                   
                               </select>
                               <div class="error" id = "class"></div>
                               
                               {/* <input placeholder="Class" name="class" className="form-control"
                               value={this.state.class} onChange={this.changeClassHandler}/> */}
                           </div>
                           <div className="form-group">
                               <label>Marks:</label>
                               <input placeholder="Marks" name="marks" className="form-control"
                               value={this.state.marks} onChange={this.changeMarksHandler}/>
                               <div class="error" id = "markserr"></div>
                           </div>
                           <br></br>
                           <br></br>
                           <button className= "btn btn-success" onClick={this.saveStudent}>Save</button>
                           <button classNmae= "btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>

                         </form>
                     </div>
                 </div>
             </div>
         </div>

        </div>
    )
}

}

export default Studentcomponent