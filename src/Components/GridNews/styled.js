import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 0;
  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Metal Mania', sans-serif;
    margin: 2.4rem auto 1rem;
    color: var(--title-color);
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--primary-color);
    border-left: 0.3rem solid var(--highlight-color);
    padding: 0 1.875rem;
    margin: 3.125rem auto;

    p {
      font-size: 1.2rem;
    }
  }

  hr {
    border: 1px solid var(--border-color);
    margin: 3rem auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  a {
    -webkit-text-stroke-width: 1px;
    border-bottom: 2px solid var(--primary-color);
    color: var(--link-highlight);
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }

    svg {
      color: var(--primary-color);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`