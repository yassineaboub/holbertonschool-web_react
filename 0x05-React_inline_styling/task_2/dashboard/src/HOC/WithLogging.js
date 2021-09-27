import React from 'react';

function highOrderComponent(Component) {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            NewComponent.displayName = `WithLogging(${Component.name})`;
        }

        componentDidMount() {
            console.log(`Component ${this.props.name} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${this.props.name} is going to unmount`)
        }

        displayName() {
            console.log(`WithLogging(${this.props.name})`);
        }

        render(){
            return(
                <Component />
            );
        }
    }

    return NewComponent;
}

export default highOrderComponent;
