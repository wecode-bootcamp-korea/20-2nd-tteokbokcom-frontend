const mappingCheckType = v => {
  const mapper = {
    [Array]: v => v.length,
    [Object]: v => Object.keys(v).length,
    [FormData]: v => [...v.keys()].length,
  };
  return mapper[v.constructor] ? mapper[v.constructor](v) : v;
};

const checkValid = (form, keyArr) => {
  return keyArr.every(key => mappingCheckType(form[key]));
};

export default checkValid;
