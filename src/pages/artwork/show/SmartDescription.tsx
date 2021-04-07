import React from 'react'
import styled from 'styled-components'

const SmartParagraph = ({ text }) => (
  <p>
    {text.split('\n').map((line, index, ary) =>
      index === ary.length - 1 ? (
        line
      ) : (
        <>
          {line}
          <br />
        </>
      )
    )}
  </p>
)

const SmartDescription = ({ paragraphs = [] }) => (
  <Root>
    {paragraphs.map(paragraphText => (
      <SmartParagraph text={paragraphText} />
    ))}
  </Root>
)

export default SmartDescription

const Root = styled.div`
  margin-top: 32px;
`
