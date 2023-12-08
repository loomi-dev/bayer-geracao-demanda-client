import { Center, Text } from '@chakra-ui/react';

type ProgressBarProps = {
  size?: number;
  progress?: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: 'round' | 'inherit' | 'butt' | 'square';
  labelColor?: string;
};

export const ProgressBar = ({
  size = 150,
  progress = 0,
  trackWidth = 10,
  trackColor = '#e5e5e5',
  indicatorWidth = 10,
  indicatorColor = '#a10b30',
  indicatorCap = 'round',
  labelColor = '#a10b30',
}: ProgressBarProps) => {
  const center = size / 2;
  const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <Center position="relative" w={size} h={size}>
      <svg style={{ width: size, height: size, transform: 'rotate(-90deg)' }}>
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius + 3.5}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray + 20}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>

      <Center
        position="absolute"
        color={labelColor}
        bg="white"
        borderRadius="full"
        boxSize="55%"
        zIndex={1}
      >
        <Text fontSize="1.5rem" fontWeight="700">
          {`${progress}%`}
        </Text>
      </Center>
    </Center>
  );
};
