const pTokenABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'defaultOperators',
        'outputs': [
            {
                'name': '',
                'type': 'address[]'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'spender',
                'type': 'address'
            },
            {
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'approve',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'account',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'data',
                'type': 'bytes'
            },
            {
                'name': 'operatorData',
                'type': 'bytes'
            },
            {
                'name': 'underlyingAssetRecipient',
                'type': 'string'
            }
        ],
        'name': 'operatorRedeem',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'holder',
                'type': 'address'
            },
            {
                'name': 'recipient',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            }
        ],
        'name': 'transferFrom',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'underlyingAssetRecipient',
                'type': 'string'
            }
        ],
        'name': 'redeem',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'decimals',
        'outputs': [
            {
                'name': '',
                'type': 'uint8'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'recipient',
                'type': 'address'
            },
            {
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'mint',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'granularity',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'sender',
                'type': 'address'
            },
            {
                'name': 'recipient',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'data',
                'type': 'bytes'
            },
            {
                'name': 'operatorData',
                'type': 'bytes'
            }
        ],
        'name': 'operatorSend',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'tokenHolder',
                'type': 'address'
            }
        ],
        'name': 'balanceOf',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'operator',
                'type': 'address'
            }
        ],
        'name': 'authorizeOperator',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [
            {
                'name': '',
                'type': 'string'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'recipient',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'data',
                'type': 'bytes'
            }
        ],
        'name': 'send',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'recipient',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'pNetwork',
        'outputs': [
            {
                'name': '',
                'type': 'address'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'data',
                'type': 'bytes'
            },
            {
                'name': 'underlyingAssetRecipient',
                'type': 'string'
            }
        ],
        'name': 'redeem',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'operator',
                'type': 'address'
            },
            {
                'name': 'tokenHolder',
                'type': 'address'
            }
        ],
        'name': 'isOperatorFor',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'recipient',
                'type': 'address'
            },
            {
                'name': 'value',
                'type': 'uint256'
            },
            {
                'name': 'userData',
                'type': 'bytes'
            },
            {
                'name': 'operatorData',
                'type': 'bytes'
            }
        ],
        'name': 'mint',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'holder',
                'type': 'address'
            },
            {
                'name': 'spender',
                'type': 'address'
            }
        ],
        'name': 'allowance',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'operator',
                'type': 'address'
            }
        ],
        'name': 'revokeOperator',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'account',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'data',
                'type': 'bytes'
            },
            {
                'name': 'operatorData',
                'type': 'bytes'
            }
        ],
        'name': 'operatorBurn',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newPNetwork',
                'type': 'address'
            }
        ],
        'name': 'changePNetwork',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'name': 'data',
                'type': 'bytes'
            }
        ],
        'name': 'burn',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'name': 'tokenName',
                'type': 'string'
            },
            {
                'name': 'tokenSymbol',
                'type': 'string'
            },
            {
                'name': 'defaultOperators',
                'type': 'address[]'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'redeemer',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'underlyingAssetRecipient',
                'type': 'string'
            }
        ],
        'name': 'Redeem',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'from',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'to',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'Transfer',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'spender',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'Approval',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'operator',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'from',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'to',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'data',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'name': 'operatorData',
                'type': 'bytes'
            }
        ],
        'name': 'Sent',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'operator',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'to',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'data',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'name': 'operatorData',
                'type': 'bytes'
            }
        ],
        'name': 'Minted',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'operator',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'from',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'data',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'name': 'operatorData',
                'type': 'bytes'
            }
        ],
        'name': 'Burned',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'operator',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'tokenHolder',
                'type': 'address'
            }
        ],
        'name': 'AuthorizedOperator',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'operator',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'tokenHolder',
                'type': 'address'
            }
        ],
        'name': 'RevokedOperator',
        'type': 'event'
    }
];

export { pTokenABI };

