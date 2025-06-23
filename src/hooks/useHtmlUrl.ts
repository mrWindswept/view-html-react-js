import { useEffect, useState } from "react";

/**
 * Generates a temporary Blob URL from HTML content.
 * Can be used to:
 * - Open the HTML in a new tab using `window.open(blobUrl)` or in an `href` attritbute.
 * - Embed it in an <iframe> or any custom render logic
 * - Avoid external hosting or CORS issues
 *
 * @param {string} htmlContent - The full HTML content as a string
 * @returns {string} - A temporary Blob URL
 */

export const useHtmlUrl = (htmlContent: string): string | null => {
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    setIframeSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [htmlContent]);

  return iframeSrc;
};
