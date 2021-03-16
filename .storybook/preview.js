import GlobalStyles from '../src/styles/global'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

}

export const decorators = [
    (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
    )
  ] 

