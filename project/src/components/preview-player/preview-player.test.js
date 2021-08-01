import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should play video when mouse over', () => {
    const movie = {};
    const mockPath = 'mock-path';
    const handleMouseOver = jest.fn();

    const {container} = render(
      <PreviewPlayer
        movie={movie}
        autoPlay
        src={mockPath}
        onMouseOver={handleMouseOver}
        muted
      />,
    );

    fireEvent(container.querySelector('video'),
      new Event('loadeddata'));

    const div = screen.getByTestId('video-wrapper');

    userEvent.hover(div);
    expect(handleMouseOver).toBeCalled();
  });
});
