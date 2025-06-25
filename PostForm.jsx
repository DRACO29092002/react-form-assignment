import { usePostForm } from '../hooks/usePostForm';

export const PostForm = () => {
  const {
    formData,
    response,
    isLoading,
    error,
    handleSubmit,
    handleInputChange,
  } = usePostForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4">
      <div className="w-full max-w-md mx-auto"> {/* Added mx-auto for centering */}
        <div className="bg-white/0 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 transition-all duration-300">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Send Us a Comment
          </h2>

          {error && (
            <div className="alert alert-error mb-4 w-full">
              <div className="flex-1">
                <label>{error}</label>
              </div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 h-32"
                  placeholder="Your comment..."
                  value={formData.comment}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 rounded-lg shadow text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Comment'
                )}
              </button>
            </div>
          </form>

          {response && (
            <div className="mt-6 p-4 bg-gradient-to-br from-pink-100 to-blue-100 border border-pink-200/60 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Thank you, {response.name}!</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> {response.email}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Comment:</span> {response.comment}</p>
              <div className="text-xs text-gray-400">(Mock API ID: {response.id})</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostForm;