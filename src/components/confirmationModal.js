import Button from "./button";

const ConfirmationModal = ({
  title,
  status,
  body,
  yesBtnClicked,
  noBtnClicked,
}) => {
  const titleHeaderStyle = (status) => {
    switch (status) {
      case "success":
        return `text-teal-500 font-bold`;
      case "warning":
        return `text-orange-500 font-bold`;
      case "danger":
        return `text-rose-500 font-bold`;
      default:
        break;
    }
  };
  const buttonStyle = (status) => {
    switch (status) {
      case "success":
        return `hover:bg-teal-500 hover:text-white px-4 text-sm active:bg-teal-600`;
      case "warning":
        return `hover:bg-orange-500 hover:text-white px-4 text-sm active:bg-orange-600`;
      case "danger":
        return "hover:bg-rose-500 hover:text-white px-4 text-sm active:bg-rose-600";
      default:
        break;
    }
  };
  return (
    <div className="w-96">
      <div className="my-2">
        <div className="flex justify-between items-center">
          <h1 className={titleHeaderStyle(status)}>{title}</h1>
        </div>
        <div className="my-2">
          <p className="text-gray-500 text-sm">{body}</p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          label="Yes"
          className={buttonStyle(status)}
          onClick={yesBtnClicked}
        />
        <Button
          label="No"
          className="hover:bg-gray-500 hover:text-white px-4 text-sm active:bg-gray-600"
          onClick={noBtnClicked}
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;
