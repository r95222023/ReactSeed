const paths = {
  USERS: 'users',
  USER: 'users/:id',
  PROVIDERS: 'providers',
  PROVIDER: 'provider/:type/:id',
};

function getPath(queryPath) {
  const pathQueryArr = queryPath.split('?');
  const path = pathQueryArr[0];
  const query = (pathQueryArr[1] || '').split('&');
  const params = {};
  let res = queryPath;
  if (query[0] !== '') {
    query.forEach((val) => {
      const hash = val.split('=');
      params[hash[0]] = hash[1];
    });
  }
  if (paths[path]) {
    res = paths[path];
    Object.keys(params).forEach((key) => {
      res = res.replace(`:${key}`, params[`${key}`]);
    });
  }
  return res;
}

export default getPath;
export { paths, getPath };
