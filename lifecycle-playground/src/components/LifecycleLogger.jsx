import { Component } from "react"

class LifecycleLogger extends Component {

    
    constructor(props) {
        super(props)
        // this is how we define state in class components
        this.state = {
            count: 0
        }
    }

    // has to be an arrow function to bind 'this'
    // if using regular function, need to bind in constructor manually
    updateCount = () => {
        this.setState({count: this.state.count + 1})
    }

    // required method in class components
    render() {
        return (
            <div className="flex flex-col gap-4 items-center p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
                <h2 className="text-lg font-semibold">Lifecycle Logger</h2>
                <p >Count: {this.state.count}</p>
                <button className="secondary-btnmt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700 transition" 
                onClick={this.updateCount}>Update</button>
            </div>
        )
    }

    // Lifecycle Methods
    componentDidMount() {
        console.log("LifecycleLogger: Component Mounted")
    }

    componentDidUpdate() {
        console.log("LifecycleLogger: Component Updated")
        console.log("Current Count:", this.state.count)
    }

    componentWillUnmount() {
        console.log("LifecycleLogger: Component Unmounted")
    }
}

export default LifecycleLogger;