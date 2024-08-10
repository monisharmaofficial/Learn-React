import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2 font-semibold text-lg object-cover">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-base font-semibold">
              {item.card.info.ratings.aggregatedRating.rating}⭐
            </p>
          </div>

          <div>
            <img src={CDN_URL + item.card.info.imageId} className="w-32 h-24 rounded-md" />

            <button className="absolute bg-orange-100 text-orange-700 px-2 rounded-md mt-6 font-semibold">
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
