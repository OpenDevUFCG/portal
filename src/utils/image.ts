const resolveImagePath = (url: string) => {
  if (url.startsWith("img/")) {
    return "/" + url;
  }

  return url;
};

export { resolveImagePath };
