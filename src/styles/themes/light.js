import { primary, white } from './neutral';

export default {
  title: 'light',

  colors: {
    primary,
    white,

    background: '#faf9f8',
    text: '#323130'
  },

  shade: {
    header: {
      primary: -0.75
    },
    navigator: {
      text: -0.55
    },
    paginator: {
      boxShadow: -0.35,
      background: 0.45
    },
    post: {
      title: -0.25,
      author: -0.45,
      dedicate: -0.6,
      textDate: -0.25
    },
    relatedPosts: -0.45
  }
};
