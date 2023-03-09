import React from 'react';
import { act } from 'react-dom/test-utils';
import {render} from 'react-dom';

import NewGameFormModal from './NewGameFormModal'

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

