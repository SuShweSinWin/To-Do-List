import { Box, Text } from "@chakra-ui/react"

const Header = ({title}) => {
  return (
    <Box mb={'20px'}>
        <Text fontSize={'larger'} textColor={'#ffff'} fontWeight={'bold'} textAlign={'center'}>{title}</Text>
    </Box>
  )
}

export default Header