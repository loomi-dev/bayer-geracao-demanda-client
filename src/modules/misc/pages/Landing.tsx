import {
  Button,
  Heading,
  Text,
  Image,
  VisuallyHidden,
  Box,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useRef } from 'react';

import AiFillGithub from '@/../public/assets/github.svg';

export const Landing = () => {
  const sceneEl = useRef(null);

  return (
    <>
      <Box
        color="white"
        minH="100vh"
        px="8"
        display="grid"
        placeItems="center"
        bgImage="/assets/landing-bg.png"
        bgPosition="center"
        bgSize="cover"
      >
        <Box pos="relative" zIndex="banner" display="grid" placeItems="center">
          <Box mb={8}>
            <Text fontSize="10rem" fontStyle="italic" color="text.primary" fontWeight="bold">
              Next leap
            </Text>
          </Box>

          <VisuallyHidden>
            <Heading
              as="h1"
              mb={6}
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing={{ base: 'normal', md: 'tight' }}
            >
              Next Leap
            </Heading>
          </VisuallyHidden>

          <Box maxW="lg" textAlign={{ base: 'left', md: 'center' }}>
            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing={{ base: 'normal', md: 'tight' }}
            >
              The project that&apos;s one small step for developers, one giant{' '}
              <Text
                display="inline"
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, #C6009E, #530099)"
                fontWeight="extrabold"
                fontStyle="italic"
              >
                leap
              </Text>{' '}
              <chakra.span role="img" aria-labelledby="Rocket Emoji" display="inline">
                🚀
              </chakra.span>{' '}
              for Loomi.
            </Heading>
            <SimpleGrid mt={20} spacing={20}>
              <Button
                as="a"
                href="https://github.com/loomi/next-leap"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                rightIcon={<AiFillGithub fill="white" />}
                cursor="pointer"
                variant="primary"
              >
                See Github
              </Button>
            </SimpleGrid>
          </Box>
        </Box>

        <Box w="100%" h="100vh" position="absolute" ref={sceneEl} overflow="hidden">
          <Image
            data-depth="1"
            alt=""
            src="/assets/detail-ball-black.png"
            maxW="48"
            pos="absolute"
            css={css`
              left: 20% !important;
              top: 60% !important;
              right: auto !important;
            `}
          />
          <Image
            alt=""
            data-depth=".3"
            src="/assets/detail-ball-pink.png"
            maxW="lg"
            pos="absolute"
            css={css`
              top: -10% !important;
              left: 0% !important;
              bottom: auto !important;
              right: auto !important;
            `}
          />
          <Image
            alt=""
            data-depth="-0.8"
            src="/assets/detail-ball-pink.png"
            maxW="52"
            pos="absolute"
            css={css`
              top: 20% !important;
              right: 8% !important;
              bottom: auto !important;
              left: auto !important;
            `}
          />
          <Image
            data-depth=".1"
            src="/assets/detail-astronaut.png"
            alt=""
            maxW="xs"
            pos="absolute"
            css={css`
              bottom: 30px !important;
              right: 0 !important;
              top: auto !important;
              left: auto !important;
            `}
          />
        </Box>
      </Box>

      <Text
        color="white"
        fontWeight="medium"
        pos="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
      >
        Made with love{' '}
        <chakra.span role="img" aria-labelledby="Rocket Emoji" display="inline">
          💜
        </chakra.span>{' '}
        by Loomi developers.
      </Text>
    </>
  );
};
