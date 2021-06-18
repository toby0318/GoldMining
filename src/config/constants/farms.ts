import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Mumu-BUSD LP',
    lpAddresses: {
      97: '0x5D42c0C002E64FE23DC291A4589AEb7F1E3e9D59',
      56: '0x21CE11D6bfcB4088B0E28c265AD79A7Af2814B9f',
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x405fec416E850Ca37DFdfa103A0e307fc0BAe1ac',
      56: '0x9d7576D8549f6E481170D149d9Cd456Cfe817593',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Mumu-BNB LP',
    lpAddresses: {
      97: '0x9232D14201fDCb556E01625b31f3ba2B68a5aEfA',
      56: '0x8347397e40D565eE43c3348188f079623D1A5Cb8',
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x405fec416E850Ca37DFdfa103A0e307fc0BAe1ac',
      56: '0x9d7576D8549f6E481170D149d9Cd456Cfe817593',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  }, /*
  {
    pid: 4,
    risk: 4,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 4,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  }, */
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Mumu',
    lpAddresses: {
      97: '0x5D42c0C002E64FE23DC291A4589AEb7F1E3e9D59',
      56: '0x21CE11D6bfcB4088B0E28c265AD79A7Af2814B9f', // EGG-BUSD LP
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x405fec416E850Ca37DFdfa103A0e307fc0BAe1ac',
      56: '0x9d7576D8549f6E481170D149d9Cd456Cfe817593',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },/*
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },  
  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xf8593167D7ccc1Dc6e99Ab1C3792032F40093bBf', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  // {
  //   pid: 6,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf8593167D7ccc1Dc6e99Ab1C3792032F40093bBf', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAddresses: contracts.busd,
  // },  
  {
    pid: 8,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  */
]

export default farms