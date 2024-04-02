const CardDetailRow = ({ size }: { size?: string }) => {
  return (
    <div
      className={`flex card-shadow ${
        size === "small" ? "h-3 w-40" : "h-6 w-80"
      } mb-4 light-border  bg-[rgb(235,131,123)] bg-opacity-80 rounded-lg `}
    ></div>
  );
};
export default CardDetailRow;
