

// import.meta.url doesn't seem to be working

// export const getImageUrl = (path) =>{
//     return new URL(`/assets/${path}`, import.meta.url).href;
// }

export const getImageUrl = (path) => {
    console.log(`Received path: ${path}`);
    const url = `/assets/${path}`;
    console.log(`Resolved URL: ${url}`);
    return url;
  };