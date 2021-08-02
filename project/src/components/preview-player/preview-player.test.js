import React from 'react';
import {render} from '@testing-library/react';
import PreviewPlayer from './preview-player';

describe('Component: PreviewPlayer', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it('should render correctly', () => {
    const movie = {};
    const mockPath = 'mock-path';
    const {container} = render(
      <PreviewPlayer
        autoPlay
        movie={movie}
        src={mockPath}
        muted
      />,
    );

    expect(container.querySelector('.small-film-card__image')).toBeInTheDocument();
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});
