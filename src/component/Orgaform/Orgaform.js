import React,{Component} from "react";

class Orgaform extends Component{
    render(){
        return(
            <section className="contact" id="contact">
            <h1 className="heading"><span>create </span>an event</h1>
            <form action="">
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="text" id="evname" placeholder="event name" />
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="number" id="nbplace" placeholder="number of tickets" min="50" />
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="number" id="price" placeholder="price of ticket" min="0" />
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="date" id="date" placeholder="event date" />
              </div>
              <div className="inputBox" style={{ height: '2em', marginBottom: '6em', marginLeft: '25em' }}>
                <input type="file" name="evpicture" accept="image/*" />
              </div>
              <textarea name="description" placeholder="event description (location .... )" id="description" cols="30" rows="4"></textarea>
              <input type="submit" value="Send for review" className="btn" />
            </form>
          </section>

        );
    }
}
export default Orgaform;