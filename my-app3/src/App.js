import React,{Component} from "react"


class App extends Component{
constructor() {
  super()
  this.state={
    justClicked: null,
    data:[],
    isLoading:false
  }
  //this.handleClick=this.handleClick.bind(this)
}
componentDidMount(){

  fetch("https://anapioficeandfire.com/api/characters/583")
      .then(response => 
      response.json())
      .then(json => {
        this.setState({
        isLoading: true,
        data: json
     })
    })
}

render(){

var{isLoading, data}=this.state
return(

  <div>
    
    <div className= "header">
      <h1 className="intro">Basic informations about character Jon Snow from Game of Thrones</h1>
    </div>

      <d1 className="content">
      
        <dt className="table_names">Name:</dt>
          {[data].map(data=>(<dd className="table_description">{data.name}</dd>))}

        <dt className="table_names">Gender:</dt>
          {[data].map(data=>(<dd className="table_description">{data.gender}</dd>))}   

        <dt className="table_names">Title:</dt>
          {[data].map(data=>(<dd className="table_description">{data.titles}</dd>))}

        <dt className="table_names">Born:</dt>
          {[data].map(data=>(<dd className="table_description">{data.born}</dd>))}

        <dt className="table_names">Died:</dt>
          {[data].map(data=>(<dd className="table_description">Unknown{data.died}</dd>))}

        <dt className="table_names">Father:</dt>
          {[data].map(data=>(<dd className="table_description">Unknown{data.father}</dd>))}

        <dt className="table_names">Mother:</dt>
          {[data].map(data=>(<dd className="table_description">Unkown{data.mother}</dd>))}

        <dt className="table_names">Spouce:</dt>
          {[data].map(data=>(<dd className="table_description">Unknown{data.spouce}</dd>))}

        <dt className="table_names">The character was played by:</dt>
          {[data].map(data=>(<dd className="table_description">{data.playedBy}</dd>))}
 
      </d1>

  </div>
    )
  }
}
export default App


