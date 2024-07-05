import { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorFallback } from './ErrorFallback/ErrorFallback';

type PropsType = {
  children?: ReactNode;
};

type StateType = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: Readonly<PropsType>) {
    console.log('constructor');
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(): StateType {
    return { hasError: true, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    console.log('render');

    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
