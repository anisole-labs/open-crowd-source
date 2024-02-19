import html2canvas from "html2canvas";

type ReactImageHandlerProps = {
  elementId: string;
  filename: string;
};

export const reactImageHandler = async (props: ReactImageHandlerProps) => {
  const element = document.getElementById(props.elementId);
  if (!element) {
    return;
  }

  const canvas = await html2canvas(element);
  const data = canvas.toDataURL("image/png");
  let link = document.createElement("a");

  link.href = data;
  link.download = `${props.filename}.png`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default reactImageHandler;
