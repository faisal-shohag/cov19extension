import React, {Component} from 'react'
import axios from 'axios'
import CountUp from 'react-countup';
var BASE_URL = 'https://coronavirus-19-api.herokuapp.com/countries/';
class App extends Component{
  constructor(){
    super();
    this.state = {
      country: "bangladesh",
      changeCountry: "",
      all: [],
      wd: [],
      a: 0,
      na: 0,
      d: 0,
      nd: 0,
      r: 0,
      bderr: false,
      gotbd: false,
      gotwd: false
    }
  }
 
 componentDidMount(){
   //getting all countries
   axios.get(BASE_URL)
   .then(res=>{
     var dataObj = Object.entries(res.data);
          this.setState({
                  all: res.data,
                  gotbd: true,
                  wd: dataObj[0][1],
                  gotwd: true
          })
   })
   .catch(err=>{this.setState({bderr: true})})
 }

 changeCountry = e => {
   this.setState({changeCountry: e.target.value, country: e.target.value});
   for(let i=0; i<this.state.all.length; ++i){
     if(this.state.all[i].country === e.target.value){
       var r = this.state.all[i].recovered;
       if(r===null) r=0;
       this.setState({
                a: this.state.all[i].cases,
                na: this.state.all[i].todayCases,
                d: this.state.all[i].deaths,
                nd: this.state.all[i].todayDeaths,
                r: r
       })
       break;
     }
   }
  }

  

  render(){
    // Catching Error
    if(this.state.bderr){
      return (
        <div> <span className="material-icons text-danger vl">warning</span> Something went wrong! Please check your internet connection then try again!</div>
      )
    }
   
    // Waiting for data
    if(!this.state.gotbd){
      return (
        <div style={{display: "flex", justifyContent: "center"}}><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      )
    }
    if(!this.state.gotwd){
      return (
        <div style={{display: "flex", justifyContent: "center"}}><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      )
    }
   
    //setting default BD data
    if(this.state.a === 0){
      for(let i=0; i<this.state.all.length; ++i){
        if(this.state.all[i].country === "Bangladesh"){
          this.setState({
                   a: this.state.all[i].cases,
                   na: this.state.all[i].todayCases,
                   d: this.state.all[i].deaths,
                   nd: this.state.all[i].todayDeaths,
                   r: this.state.all[i].recovered
          })
          break;
        }
      }
    }

   
     
   // Show data
    return(
      <div className="app">
        <form>
          <select className="select" value="Select" onChange={this.changeCountry}>
            <option value="Bangladesh">Choose Country</option>
            {
              this.state.all.map(item=> <option key={item.country} value={item.country}>{item.country}</option>)
            }
            </select> 
            
        </form>

          <h3>{this.state.country.toUpperCase()}</h3>
        <div className="cov-card-wrap"> 
        <div className="cov-card aft"><CountUp className="text-warning" start={0} end={this.state.a} duration={2.75}  delay={1} /><br />
        <small>+{this.state.na}</small><br />
        <span className="material-icons vl text-warning">airline_seat_individual_suite</span> <span className="title">Affected</span>
        </div>

        <div className="cov-card dth"><CountUp className="text-danger" start={0} end={this.state.d} duration={2.75}  delay={1} /><br />
        <small>+{this.state.nd}</small><br />
        <span className="material-icons vl text-danger">airline_seat_flat</span> <span className="title">Deaths</span>
        </div>

        <div className="cov-card rcr"><CountUp className="text-success" start={0} end={this.state.r} duration={2.75}  delay={1} /><br />
        <span className="material-icons vl text-success">accessibility_new</span> <span className="title">Recovered</span>
        </div>
    </div>
    <br />
    <h3> <span style={{fontSize: "35px"}} className="material-icons vl">public</span> WORLD</h3>
    <div className="cov-card-wrap"> 
        <div className="cov-card aft"><CountUp className="text-warning" start={0} end={this.state.wd.cases} duration={2.75}  delay={1} /><br />
        <small>+{this.state.wd.todayCases}</small><br />
        <span className="material-icons vl text-warning">airline_seat_individual_suite</span> <span className="title">Affected</span>
        </div>

        <div className="cov-card dth"><CountUp className="text-danger" start={0} end={this.state.wd.deaths} duration={2.75}  delay={1} /><br />
        <small>+{this.state.wd.todayDeaths}</small> <br />
        <span className="material-icons vl text-danger">airline_seat_flat</span> <span className="title">Deaths</span>
        </div>

        <div className="cov-card rcr"><CountUp className="text-success" start={0} end={this.state.wd.recovered} duration={2.75}  delay={1} /><br />
        <span className="material-icons vl text-success">accessibility_new</span> <span className="title">Recovered</span>
        </div>
    </div>
    
    </div>
    )
    
    
  }
}

export default App
