import React, { Component } from "react";

function WithLogging(WrappedComponent) {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      // Get component name, default to 'Component' if none exists
      const componentName = WrappedComponent.displayName || 
                          WrappedComponent.name || 
                          'Component';
      
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || 
                          WrappedComponent.name || 
                          'Component';
      
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      // Pass through all props to the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the display name for debugging purposes
  const wrappedComponentName = WrappedComponent.displayName || 
                              WrappedComponent.name || 
                              'Component';
  
  WithLoggingComponent.displayName = `WithLogging(${wrappedComponentName})`;

  return WithLoggingComponent;
}

export default WithLogging;
