var ReactDOM = require('react-dom')
var React = require('react')
require('./css/index.css')
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return ( 
        <div>
            <h1> Welcome to react home page </h1> 
             </div>
        );
    }
};



ReactDOM.render( < MyApp /> , document.getElementById("app"));