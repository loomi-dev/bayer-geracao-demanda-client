import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionFlex = motion<Omit<FlexProps, 'transition'>>(Flex);
export const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
export const MotionStack = motion<Omit<StackProps, 'transition'>>(Stack);
export const MotionText = motion<Omit<TextProps, 'transition'>>(Text);
export const MotionButton = motion<Omit<ButtonProps, 'transition'>>(Button);
