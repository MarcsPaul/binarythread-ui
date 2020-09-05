import React from "react";

export default function LoadingState() {
  return (
    <div className="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
