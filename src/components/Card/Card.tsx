import CardDetailRow from "./CardDetailRow";
import CardImage from "./CardImage";

const Card = () => {
  return (
    <main className="card light-border card-content card-shadow flex flex-col lg:flex-row bg-[rgb(227,115,123,0.5)] backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden h-96 shadow-lg m-4 lg:m-6 ">
      <div className="flex-1 w-fit gap-2 p-4 lg:p-4">
        <CardImage />
        <div className="flex">
          <div className="mr-4">
            <div className="h-14 w-14 card-shadow light-border  bg-[rgb(235,131,123)] bg-opacity-100 rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <CardDetailRow />
            <CardDetailRow size="small" />
          </div>
        </div>
      </div>
    </main>
  );
};

Card.propTypes = {};

export default Card;
