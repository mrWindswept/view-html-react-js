import { useEffect, useState } from "react";

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
