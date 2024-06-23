import React,{Component} from "react";
import Service from "../Services/Service";

class Orgaform extends Component{
  constructor(props){
    super(props),
      this.state={
        eventname:'',
        nbplace:'',
        price:'',
        date:'',
        description:''

      }
      this.Service=new Service();
    
    }
    handlelogout=()=>{
      localStorage.removeItem('sessionToken')
      window.location.href='/authentification'
    }
    handlechange=(event)=>{
      const{id,value}=event.target;
      this.setState({[id]:value});

    }
    handlesubmit=(event)=>{
      event.preventDefault();
      const{eventname,nbplace,price,date,description}=this.state;
      try {
        const response= this.Service.createEvent(eventname,nbplace,price,date,description);
        console.log("event sent successfuly ");
        
      } catch (error) {
        console.error("error",error);
      }

    }

    
  
    render(){
      const{eventname,nbplace,price,date,description}=this.state;
        return(
            <section className="contact" id="contact">
               <button onClick={this.handlelogout} style={{marginLeft:'78em',marginTop:'2em',marginBottom:'-3em'}}>logout</button>
            <h1 className="heading"><span style={{marginLeft:'10em'}}>create </span>an event</h1>
           
            <form onSubmit={this.handlesubmit}>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="text" id="eventname" placeholder="event name" value={eventname} onChange={this.handlechange}/>
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="number" id="nbplace" placeholder="number of tickets" value={nbplace} onChange={this.handlechange}  />
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="number" id="price" placeholder="price of ticket" min="0" value={price} onChange={this.handlechange}/>
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="date" id="date" placeholder="event date" value={date}  onChange={this.handlechange}/>
              </div>
              <textarea name="description" placeholder="event description (location .... )" value={description} onChange={this.handlechange}
              id="description" cols="30" rows="4"></textarea>
              <input type="submit" value="Send for review" className="btn" style={{marginLeft:'-0.5em'}}/>
            </form>
          </section>

        );
    }
}
export default Orgaform;