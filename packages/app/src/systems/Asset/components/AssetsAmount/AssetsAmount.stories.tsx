import { Box } from '@fuel-ui/react';

import { MOCK_ASSETS_AMOUNTS } from '../../__mocks__/assets';

import type { AssetsAmountProps } from './AssetsAmount';
import { AssetsAmount } from './AssetsAmount';

export default {
  component: AssetsAmount,
  title: 'Asset/Components/AssetsAmount',
};

export const Single = (args: AssetsAmountProps) => (
  <Box css={{ maxWidth: 300 }}>
    <AssetsAmount {...args} amounts={[MOCK_ASSETS_AMOUNTS[0]]} />
  </Box>
);

export const Multiple = (args: AssetsAmountProps) => (
  <Box css={{ maxWidth: 300 }}>
    <AssetsAmount
      {...args}
      title="Assets to send"
      amounts={MOCK_ASSETS_AMOUNTS}
    />
  </Box>
);

export const Loader = () => (
  <Box
    css={{ maxWidth: 300, display: 'flex', flexDirection: 'column', gap: '$4' }}
  >
    <AssetsAmount.Loader />
  </Box>
);
