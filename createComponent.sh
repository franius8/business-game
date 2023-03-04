echo Enter the name of your component:
read name

mkdir src/"$name"
touch src/"$name"/"$name".tsx
touch src/"$name"/"$name".test.tsx
touch src/"$name"/"$name".scss

echo "import React from 'react'
import './$name.scss';

export default function $name () {
  return (
    <div className=\"$name\">
      <h1>$name</h1>
    </div>
  )
}
" > src/"$name"/"$name".tsx

echo "import React from 'react';
import { act } from 'react-dom/test-utils';
import {render} from 'react-dom';

import $name from './$name'

let container: Element | null = null;

beforeEach(() => {
  // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container!);
    container = null;
});
" > src/"$name"/"$name".test.tsx
