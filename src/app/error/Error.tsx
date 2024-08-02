export function Error() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl text-fuchsia-900 font-bold">404 - Page not found</h1>
      <p className="mt-6 text-xl">
        Sorry, the page you're trying to access isn't available, please click the link below to return home.
      </p>
      <a href="/" className="mt-12 text-3xl text-fuchsia-700 font-medium">Go home</a>
    </div>
  );
}
