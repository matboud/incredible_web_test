export const URL_handler = (id?: number) => {
    const env = process.env.NODE_ENV;

    if (env == "development") {
      // simulating a valid URL address as the sharing APIs require
      return "www.google.com";
    } else {
      return `${window.location.href}/${id}`;
    }
  };
