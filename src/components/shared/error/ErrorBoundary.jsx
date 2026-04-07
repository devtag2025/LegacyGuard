
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production: send to Sentry or similar
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary]", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-night flex items-center justify-center px-5">
          <div className="max-w-md text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-cadet/50 mb-4">
              Something went wrong
            </p>
            <h1 className="font-monument text-frosted text-xl mb-4">
              We hit an unexpected error.
            </h1>
            <p className="font-sans text-cadet/60 text-sm leading-relaxed mb-8">
              Your progress has been saved. Please refresh the page to continue,
              or contact us if the issue persists.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="font-sans text-sm text-cadet border border-cadet/30 px-6 py-3 rounded-sm hover:border-cadet transition-colors"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}