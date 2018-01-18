import fetch from 'node-fetch';

const fetchSubclass = id =>
  new Promise(async (resolve, reject) => {
    const url = `http://www.dnd5eapi.co/api/subclasses/${id}`;

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error('Response from server not successful');
      }

      const body = await res.json();

      resolve(Object.assign({}, body, {
        id: body.index,
        name: body.name,
        subclass_flavor: body.subclass_flavor,
        description: body.desc[0],
        features: body.features
      }));
    } catch (e) {
      reject('Unable to access dnd api');
    }
  });

export default fetchSubclass;