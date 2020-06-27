import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'components/Grid'
import { Text } from 'rebass'

import Sidebar from 'components/Sidebar'
import Header from './Header.jsx'
import DrawerTextChunk from 'components/DrawerTextChunk'
import DrawerTitleChunk from 'components/DrawerTextChunk/DrawerTitleChunk'
import DrawerPoemCNChunk from 'components/DrawerTextChunk/DrawerPoemCNChunk'
import DrawerPoemENChunk from 'components/DrawerTextChunk/DrawerPoemENChunk'

import styled, { themeGet } from 'style'
import styles from "./drawer.module.css"


const Drawer = ({ children,activeLocation,title }) => (
  <Sidebar>
    <Header siteTitle={title} />
    <Box>
      <Text>pg {activeLocation.properties["book-page"]}</Text>
    </Box>
    <Box>
        {children}
    </Box>
    <Box p="2rem">
      <DrawerTitleChunk 
        header={activeLocation.properties.year + " AD"}
        body={activeLocation.properties.title}
      />
    </Box>
    <Box>
      <img src={activeLocation.properties.thumbnail} />
    </Box>
    <Flex p="2rem">
    <Box width={1/2}>
      <DrawerTextChunk
        header="Historic Name of Location"
        body={activeLocation.properties["historic-name"]} 
      />
    </Box>
    <Box width={1/2}>
      <DrawerTextChunk
        header="Present Name"
        body={activeLocation.properties["modern-name"]} 
      />
    </Box>
    </Flex>
    
    {
      activeLocation.properties["poem-notable-zh-cn"] ? (<Flex p="2rem">
        <Box width={1/2}>
        <DrawerPoemCNChunk
          header="Notable Poem"
          body={activeLocation.properties["poem-notable-zh-cn"]}
          poemTitle={activeLocation.properties["poem-notable-title-zh-cn"]} 
        />
      </Box>
      <Box width={1/2}>
        <DrawerPoemENChunk
          header="Translated"
          body={activeLocation.properties["poem-trans-hajin-en"]}
          poemTitle={activeLocation.properties["poem-trans-title-hajin-en"]}
        />
    </Box>
    </Flex>) 
    : null
    }
    
    
    <Flex p="2rem">
      <Box width={1/2}>
        <DrawerTextChunk
          header="Companion(s)"
          body={activeLocation.properties.companion} 
        />
      </Box>
    </Flex>
  </Sidebar>
    
)

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  activeLocation: PropTypes.object,
  title: PropTypes.string.isRequired,
}

Drawer.defaultProps = {
  children: "this is placeholder text",
  activeLocation: {
    properties: {
      title: "Default title",
      "historic-name": "Default historic name",
      "modern-name": "Default modern name",
      year: 2020,
      "book-page": 999,    }
  },
  title: "Default Title"
}

export default Drawer
