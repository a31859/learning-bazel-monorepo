import * as express from 'express';

import { People } from '@learning-bazel-monorepo/enums';
import { selectRandomArrayItem } from '@learning-bazel-monorepo/utils';

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
