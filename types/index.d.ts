import { FC } from "react";

export interface ViewHtmlProps {
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

declare const ViewHtml: FC<ViewHtmlProps>;
export default ViewHtml;

/**
 * Custom hook that creates an object URL from raw HTML content.
 * Returns a blob URL that can be used as `iframe.src`.
 *
 * @param htmlContent - A raw HTML string
 * @returns A blob URL or `null` if not ready
 */
export declare function useHtmlUrl(htmlContent: string): string | null;
