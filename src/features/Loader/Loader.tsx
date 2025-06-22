function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      ) : (
        <span className="text-gray-500">Loading...</span>
      )}
    </div>
  );
}

export default Loader;
