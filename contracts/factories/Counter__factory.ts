/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCounter",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCounter",
        type: "uint256",
      },
    ],
    name: "CounterIncremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "_counter",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "steps",
        type: "uint256",
      },
    ],
    name: "incrementX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialCount",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061037b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806361bc221a146100675780638ada066e146100835780638da5cb5b1461008b578063d09de08a146100b6578063e373f971146100c0578063fe4b84df146100d3575b600080fd5b61007060015481565b6040519081526020015b60405180910390f35b600154610070565b60025461009e906001600160a01b031681565b6040516001600160a01b03909116815260200161007a565b6100be6100e6565b005b6100be6100ce366004610309565b61013d565b6100be6100e1366004610309565b6101ec565b60018054908060006100f88285610321565b90915550506001546040805183815260208101929092527ff6ef72180c46cadbda80997bfa03fc39b76911c9bc988da15e4a47d55d687a31910160405180910390a150565b600181116101925760405162461bcd60e51b815260206004820152601e60248201527f53746570732073686f756c642062652067726561746572207468616e2031000060448201526064015b60405180910390fd5b6001805490829060006101a58385610321565b90915550506001546040805183815260208101929092527ff6ef72180c46cadbda80997bfa03fc39b76911c9bc988da15e4a47d55d687a3191015b60405180910390a15050565b600054610100900460ff161580801561020c5750600054600160ff909116105b806102265750303b158015610226575060005460ff166001145b6102895760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610189565b6000805460ff1916600117905580156102ac576000805461ff0019166101001790555b6001829055600280546001600160a01b031916331790558015610305576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020016101e0565b5050565b60006020828403121561031a578081fd5b5035919050565b6000821982111561034057634e487b7160e01b81526011600452602481fd5b50019056fea2646970667358221220d38bbbc5505cd451661ceb6b8fdb5f733a67b2796b01b0332520a95aa649790964736f6c63430008020033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}
