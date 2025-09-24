import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render error UI
      return (
        <div style={{
          padding: '20px',
          margin: '40px auto',
          maxWidth: '800px',
          backgroundColor: '#fff',
          border: '1px solid #f56565',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{color: '#e53e3e'}}>Something went wrong</h2>
          <details style={{whiteSpace: 'pre-wrap', marginTop: '10px'}}>
            <summary>Error details</summary>
            <p style={{color: '#e53e3e', fontWeight: 'bold'}}>
              {this.state.error && this.state.error.toString()}
            </p>
            <p style={{marginTop: '10px'}}>
              Component Stack:
            </p>
            <pre style={{
              backgroundColor: '#f7fafc',
              padding: '10px',
              borderRadius: '4px',
              overflow: 'auto'
            }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    // If no error occurred, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;