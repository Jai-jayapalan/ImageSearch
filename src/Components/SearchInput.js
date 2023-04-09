import React from "react";

class Searchinput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            entry:''
        }
    }
    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }
    render(){
        return(
            <div className="ui container">
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui fluid icon input" style={{marginTop:"25px"}}>
                        <input type="text" placeholder="Search here...." onChange={(event)=>{
                            this.setState({entry:event.target.value})
                        }}/>
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchinput;