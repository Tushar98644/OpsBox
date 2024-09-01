export const classNames = (
    ...classes: (string | undefined | null | false)[]
  ) => {
    return classes.filter(Boolean).join(" ");
  };


  export const getLanguageThroughExtension = (extension: string) => {
    switch (extension) {
      case "py":
        return "python";
      case "js":
        return "javascript";
      case "java":
        return "java";
      case "cpp":
        return "cpp";
      case "css":
        return "css";
      case "jsx":
        return "javascript;react";
      default:
        return "text";
    }
  };