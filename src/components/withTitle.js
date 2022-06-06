import { useEffect } from "react";
const WithTitle = ({ title, Component }) => {
  useEffect(() => {
    document.title = "Mess Book | " + title;
  }, [title]);
  return <Component />;
};

export default WithTitle;
