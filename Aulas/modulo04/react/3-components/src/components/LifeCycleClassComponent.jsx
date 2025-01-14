import { Component } from "react";

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log("Component montado!")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Componente atualizado! Propriedade e estado anteriores:")
    }

    componentWillUnmount() {
        console.log("Componente será desmontado")
    }

    increment = () => {
        this.state({ count: this.state.count + 1})
    }

    render() {
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.increment}></button>
            </div>
        )
    }
}

export default LifeCycleClassComponent