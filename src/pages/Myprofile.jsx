const Myprofile = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://via.placeholder.com/150" // Replace with actual profile image URL
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">John Doe</h1>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="space-y-4 ">
          {/* Contact Info */}
          <div className="border-b pb-4 ">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Contact Information
            </h2>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1 123 456 7890
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 Main St, Springfield, USA
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Basic Information
            </h2>
            <p className="text-gray-600">
              <strong>Date of Birth:</strong> January 1, 1990
            </p>
            <p className="text-gray-600">
              <strong>Gender:</strong> Male
            </p>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
