const partialFromBind=(fn,...args) => {
  return fn.bind(null, ...args);
}

const partial = (fn, ...args) => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs)
  }
}

// currying 
const add = x => y => x+y;

const request = defualts => options => {
  oprions = Object.assign(
    {}, defualts, options
  );

  return fetch(options.url, options)
    .then(resp => resp.json());
};