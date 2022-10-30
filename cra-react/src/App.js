function App() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold capitalize">
            {process.env.NODE_ENV} mode
          </h1>
          <p className="py-6 mb-8 font-bold text-green-500">
            {process.env.NODE_ENV === 'production'
              ? process.env.REACT_APP_PROD_API_URL
              : process.env.REACT_APP_DEV_API_URL}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
