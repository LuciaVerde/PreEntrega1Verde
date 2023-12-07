import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>

            <Flex bg='green.100'>
                <Box p='4'>
                    Yuliana Verde
                </Box>
                <Spacer />
                <Menu>
                <MenuButton bg='green.300'borderRadius='md' paddingX='6' >
                    Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Paisajes</MenuItem>
                        <MenuItem>Mar y playa</MenuItem>
                        <MenuItem>Floral</MenuItem>
                        <MenuItem>Abstracto</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>

        </div>
    )
}

export default NavBar
