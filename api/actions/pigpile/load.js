import request from 'superagent';
import {endpoints} from '../../../src/config';

export default function load(req, [id]) {
  return new Promise((resolve, reject) => {

    let url = endpoints.pigpiles;
    if (id) {
      url = `${url}/${id}`;
    }
    url = `${url}.json`;
    // if (req.session.pigpiles) resolve(req.session.pigpiles);
    console.log('id', id, url);

    request
      .get(url)
      .set('Accept', 'application/json')
      .end(function(err, res) {

        if (err) reject('Error getting campaigns.');

        // req.session.pigpiles = JSON.parse(res.text);

        // resolve(req.session.pigpiles);

        resolve(JSON.parse(res.text));

      });

  });
}

