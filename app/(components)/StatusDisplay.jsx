const StatusDisplay = ({ status }) => {
  const getColour = (status) => {
    let colour = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        colour = "bg-green-200";
        break;
      case "started":
        colour = "bg-yellow-200";
        break;
      case "not started":
        colour = "bg-red-200";
        break;
      default:
        colour = "bg-slate-70";
        break;
    }
    return colour;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColour(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
