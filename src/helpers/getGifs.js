const apiKey = "EkolPnH1wXoGFnapSNy3sDsymGErLCYR";
const urlBase = "https://api.giphy.com/v1/gifs/search";

export const getGifs = async (category) => {
  const urlSearch = `${urlBase}?q=${encodeURI(category)}&api_key=${apiKey}`;

  const respuesta = await fetch(urlSearch);

  const { data } = await respuesta.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
