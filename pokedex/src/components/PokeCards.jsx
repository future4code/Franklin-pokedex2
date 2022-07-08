import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
  
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  
  
 const PokeCards = (props) => {
  const [image, setImage] = useState([])
  
  useEffect(()=>{
          axios.get(props.url)
          .then((res)=>{
              setImage(res.data.sprites.front_default)
              
          })
          .catch((err) =>{
              console.log(err)
          })
      },[props.url])
  
    return (
        <div>
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image  }
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {props.name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
             <button onClick={props.onClick}>{props.nameButton}</button>
             <button>Ver Detalhes</button>
            </Stack>
          </Stack>
        </Box>
      </Center>
      </div>
    );
  }

  export default PokeCards