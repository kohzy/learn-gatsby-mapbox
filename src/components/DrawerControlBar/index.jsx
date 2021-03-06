import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'components/Grid'
import styled from 'styled-components'

const Wrapper = styled(Flex)`
    padding: 0rem 2rem;
    background-color: ${p => p.theme.colors.navy['900']};
  `

const DrawerControlBar = ({ backStartFunc, prevFunc, nextFunc }) => (
    <Wrapper>
        <Box width={[1/2]}>
            <button 
            onClick={backStartFunc}>Back to Start</button>
        </Box>
        <Box width={[1/3]}>
            <button 
                onClick={prevFunc}>Prev</button>
        </Box>
        <Box>
            <span>
            <button 
                onClick={nextFunc}>Next</button>
            </span>
        </Box>
    </Wrapper>
)

DrawerControlBar.propTypes = {
    backStartFunc: PropTypes.func,
    prevFunc: PropTypes.func,
    nextFun: PropTypes.func,
}
export default DrawerControlBar
