import React from 'react';

type GlobalErrorBoundaryProps = {
    children: React.ReactChild;
}

type GlobalErrorBoundaryState = {
    errored: boolean;
    error: any;
    errorInfo: any;
}

export default class GlobalErrorBoundary extends React.Component<GlobalErrorBoundaryProps, GlobalErrorBoundaryState> {
    constructor(props: GlobalErrorBoundaryProps) {
        super(props);
        this.state = {
            errored: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError() {
        return {
            errored: true
        };
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({
            error,
            errorInfo
        });
    }

    prettifyComponentStack(stack: string) {
        return stack.replace(/^(\s+)at (\w+)($|.+)/gm,
            (_, indent, component, rest) => `${indent}at <${component}>${rest}`
        );
    }

    render() {
        if (this.state.errored) {
            return (
                <div className="error-boundary">
                    <h1>Something went wrong.</h1>
                    <pre>
                        {this.state.error && this.state.error.message}
                        {this.state.errorInfo && this.prettifyComponentStack(this.state.errorInfo.componentStack)}

                        {'\n\n-------\n\n'}

                        {this.state.error && this.state.error.stack}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}
