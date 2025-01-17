const Estate = ({data}) => {

    const {estate_title, segment_name, description, price, status, area, location, facilities, image, id} = data;

    return (
        <div className="flex flex-col lg:flex-row border rounded-lg shadow-lg overflow-hidden my-16  bg-white max-w-5xl mx-auto my-5">
        {/* Image Section */}
        <div className="lg:w-1/3 relative">
          <img
            src={image}
            alt={estate_title}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded">
            {status}
          </div>
        </div>
  
        {/* Content Section */}
        <div className="lg:w-2/3 p-6 flex flex-col">
          {/* Title and Name */}
          <h2 className="text-2xl font-bold text-gray-800">{estate_title}</h2>
          <p className="text-sm text-gray-500 mt-1">by {segment_name}</p>
  
          {/* Description */}
          <p className="text-gray-600 mt-4 line-clamp-3">{description}</p>
  
          {/* Price, Area, Location */}
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>Price:</strong> ${price.toLocaleString()}
            </p>
            <p className="text-gray-700">
              <strong>Area:</strong> {area} sq. ft.
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {location}
            </p>
          </div>
  
          {/* Facilities */}
          <div className="mt-4">
            <strong className="text-gray-800">Facilities:</strong>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {facilities.map((facility, index) => (
                <li key={id}>{facility}</li>
              ))}
            </ul>
          </div>
  
          {/* View Button */}
          <div className="mt-auto flex justify-end">
            <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300"
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
};

export default Estate;