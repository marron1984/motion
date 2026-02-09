"use client";

import { Component } from "react";

interface Props {
  children: React.ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(
      `[ErrorBoundary${this.props.name ? ` - ${this.props.name}` : ""}]`,
      error,
      errorInfo.componentStack
    );
  }

  render() {
    if (this.state.hasError) {
      const err = this.state.error;
      return (
        <div
          style={{
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "#0a0a0a",
            color: "#f0f0f0",
          }}
        >
          <div style={{ maxWidth: "400px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              {this.props.name
                ? `Error in ${this.props.name}`
                : "Something went wrong"}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#888",
                marginBottom: "8px",
              }}
            >
              {err?.name}: {err?.message}
            </p>
            <pre
              style={{
                fontSize: "10px",
                color: "#666",
                textAlign: "left",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
                maxHeight: "200px",
                overflow: "auto",
                background: "#141414",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            >
              {err?.stack}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              style={{
                background: "#c8a2ff",
                color: "#000",
                border: "none",
                borderRadius: "999px",
                padding: "10px 24px",
                fontWeight: "bold",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
