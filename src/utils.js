

// import.meta.url doesn't seem to be working

// export const getImageUrl = (path) =>{
//     return new URL(`/assets/${path}`, import.meta.url).href;
// }

// export const getImageUrl = (path) => {
//     console.log(`Received path: ${path}`);
//     const url = `/assets/${path}`;
//     console.log(`Resolved URL: ${url}`);
//     return url;
//   }

// export const getImageUrl = (path) => {
//   const url = `${import.meta.env.BASE_URL}assets/${path}`;
//   console.log(`Resolved URL: ${url}`);
//   return url;
// };

export const getImageUrl = (path) => {
  const url = `/assets/${path}`; // This will resolve correctly when served from the public directory
  console.log(`Requesting image from: ${window.location.origin}${url}`);
  return url;
};
