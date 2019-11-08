import * as express from 'express';

import { People } from '@lbm/enums';
import { selectRandomArrayItem } from '@lbm/utils';

export const start = () => {
  const app = express();

  app.get('/alive', (req, res) => res.send('alive'));

  app.get('**', (req, res) => {
    const people: string[] = [People.DeMarco, People.Sonmez, People.Hof];
    const randomPerson: string = selectRandomArrayItem(people);
    console.log(randomPerson);
    res.send(randomPerson);
  });

  app.listen(3000, () => console.log('gateway listening on port 3000'));
};
