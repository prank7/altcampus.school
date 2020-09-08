const Card = (props) => {
  return (
    <div className="w-full flex items-center justify-between p-6 space-x-6">
      <img
        className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 self-start"
        src={props.imageURL}
        alt={props.title}
      />
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <h2 className="text-gray-900 text-xl leading-5 font-medium truncate">
            {props.title}
          </h2>
        </div>
        <p className="mt-1 text-gray-500 text-sm leading-5">
          {props.subTitle}
        </p>
        <div className="text-left">
          <div class="text-indigo-500 hover:text-indigo-700 font-bold pt-4 rounded inline-flex items-center text-right">
            <span>{props.cta} &rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;