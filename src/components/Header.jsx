import { Box, Text } from "@chakra-ui/react"

const Header = ({title}) => {
  return (
    <Box mb={'20px'}>
        <Text fontSize={'larger'} textColor={'#385170'} fontWeight={'bold'}>{title}</Text>
    </Box>
  )
}

export default Header