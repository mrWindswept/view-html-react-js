import React from "react";
import { useHtmlUrl } from "./hooks/useHtmlUrl";

interface ViewHtmlProps {
  htmlContent: string;
  options: {
    iframe: {
      width?: string;
      height?: string;
      title?: string;
      sandbox?: string;
      loading: "eager" | "lazy" | undefined;
    };
  };
}

const ViewHtml: React.FC<ViewHtmlProps> = ({ htmlContent, options }) => {
  const htmlUrl = useHtmlUrl(htmlContent);

  if (!htmlUrl) return;

  return (
    <div
      style={{
        width: options?.iframe?.width || "100%",
        height: options?.iframe?.height || "100%",
      }}
    >
      <iframe
        src={htmlUrl}
        title={options?.iframe?.title || "Preview"}
        style={{ width: "100%", height: "100%", border: "none" }}
        sandbox={options?.iframe?.sandbox || ""}
        loading={options?.iframe?.loading || "lazy"}
      />
    </div>
  );
};

export default ViewHtml;
