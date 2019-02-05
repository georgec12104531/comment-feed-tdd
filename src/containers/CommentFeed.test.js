import React from 'react';
import { render } from 'react-testing-library';
import CommentFeed from  './CommentFeed';

describe('CommentFeed', () => {
  it ('redners the CommentFeed', () => {
    const { queryByText } = render(<CommentFeed />)
    const header = queryByText('Comment Feed')
    expect(header.innerHTML).toBe('Comment Feed')
  })
})
