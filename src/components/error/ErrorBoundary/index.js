import React from "react";
import img from "../../../assets/warning.png";
import "./error.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-container">
          <details>
            <summary className="error__summary">
              <img src={img} alt="warning" className="error__img" />
              <h3 className="error__main-text">Something went wrong.</h3>
            </summary>
            <p className="error__text">error.message</p>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
