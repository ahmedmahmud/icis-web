import React from "react";

export function SiteFooter() {
  return (
    <div style={{ backgroundColor: '#1abc9c' }}>
      <footer
        className="w-full fixed bottom-0 left-0 right-0 text-center p-4"
        style={{ backgroundColor: '#020817' }}
      >
        <p className="text-lg mb-2">Contact Us</p>
        <p className="mb-2">Email: info@icinvestmentsociety.com</p>
        <p className="mb-2">
          Address: Imperial College London, South Kensington, London, SW7 2AZ,
          UK
        </p>
        <p className="text-xs text-muted-foreground">
          Copyright © Investment Society Imperial College London
        </p>
      </footer>
    </div>
  );
}

