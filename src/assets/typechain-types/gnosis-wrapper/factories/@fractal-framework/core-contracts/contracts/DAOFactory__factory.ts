/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DAOFactory,
  DAOFactoryInterface,
} from "../../../../@fractal-framework/core-contracts/contracts/DAOFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "daoAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "accessControl",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "DAOCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "daoImplementation",
            type: "address",
          },
          {
            internalType: "address",
            name: "accessControlImplementation",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "daoName",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "roles",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "rolesAdmins",
            type: "string[]",
          },
          {
            internalType: "address[][]",
            name: "members",
            type: "address[][]",
          },
          {
            internalType: "string[]",
            name: "daoFunctionDescs",
            type: "string[]",
          },
          {
            internalType: "string[][]",
            name: "daoActionRoles",
            type: "string[][]",
          },
        ],
        internalType: "struct IDAOFactory.CreateDAOParams",
        name: "createDAOParams",
        type: "tuple",
      },
    ],
    name: "createDAO",
    outputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "address",
        name: "accessControl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610021635e13cf2b60e01b610026565b6100a9565b6001600160e01b031980821690036100845760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015260640160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6116f6806100b86000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c806301ffc9a7146200003f5780635e13cf2b146200006b575b600080fd5b6200005662000050366004620005b8565b620000a3565b60405190151581526020015b60405180910390f35b620000826200007c36600462000601565b620000e4565b604080516001600160a01b0393841681529290911660208301520162000062565b60006301ffc9a760e01b6001600160e01b031983161480620000de57506001600160e01b0319821660009081526020819052604090205460ff165b92915050565b600080620000f384846200033c565b91506200010b84620001058562000987565b6200040a565b905060006200011e60e085018562000ad2565b90506001600160401b038111156200013a576200013a6200065b565b60405190808252806020026020018201604052801562000164578160200160208202803683370190505b50905060005b6200017960e086018662000ad2565b9050811015620001ba578382828151811062000199576200019962000b25565b6001600160a01b03909216602092830291909101909101526001016200016a565b506001600160a01b038316634571e3a68330620001db606089018962000b3b565b6040518563ffffffff1660e01b8152600401620001fc949392919062000bad565b600060405180830381600087803b1580156200021757600080fd5b505af11580156200022c573d6000803e3d6000fd5b5050506001600160a01b038316905063f9d68d8a8462000250608088018862000ad2565b6200025f60a08a018a62000ad2565b6200026e60c08c018c62000ad2565b896200027e60e08f018f62000ad2565b8f80610100019062000291919062000ad2565b6040518d63ffffffff1660e01b8152600401620002ba9c9b9a9998979695949392919062000dcf565b600060405180830381600087803b158015620002d557600080fd5b505af1158015620002ea573d6000803e3d6000fd5b50506040516001600160a01b03858116825280891693503392508616907f4db6ee38117e611315b34948f609eed3356f7c79be1c2e94a2a636a7e9599cf79060200160405180910390a4509250929050565b6000620004036000843346866040013560405160200162000361949392919062000ef7565b60405160208183030381529060405280519060200120604051806020016200038990620005aa565b601f1982820381018352601f90910116604052620003ab602087018762000f2a565b604080516001600160a01b03909216602083015281810152600060608201526080015b60408051601f1981840301815290829052620003ee929160200162000f86565b60405160208183030381529060405262000493565b9392505050565b600062000403600084334686604001516040516020016200042f949392919062000ef7565b60405160208183030381529060405280519060200120604051806020016200045790620005aa565b601f1982820381018352601f9091011660408181526020888101516001600160a01b0316908301528082015260006060820152608001620003ce565b60008084471015620004ec5760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064015b60405180910390fd5b82516000036200053f5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401620004e3565b8383516020850187f590506001600160a01b038116620005a25760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606401620004e3565b949350505050565b6107218062000fa083390190565b600060208284031215620005cb57600080fd5b81356001600160e01b0319811681146200040357600080fd5b80356001600160a01b0381168114620005fc57600080fd5b919050565b600080604083850312156200061557600080fd5b6200062083620005e4565b915060208301356001600160401b038111156200063c57600080fd5b830161012081860312156200065057600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b03811182821017156200069757620006976200065b565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620006c857620006c86200065b565b604052919050565b600082601f830112620006e257600080fd5b81356001600160401b03811115620006fe57620006fe6200065b565b62000713601f8201601f19166020016200069d565b8181528460208386010111156200072957600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b038211156200076257620007626200065b565b5060051b60200190565b600082601f8301126200077e57600080fd5b8135602062000797620007918362000746565b6200069d565b82815260059290921b84018101918181019086841115620007b757600080fd5b8286015b84811015620007fb5780356001600160401b03811115620007dc5760008081fd5b620007ec8986838b0101620006d0565b845250918301918301620007bb565b509695505050505050565b600082601f8301126200081857600080fd5b813560206200082b620007918362000746565b828152600592831b85018201928282019190878511156200084b57600080fd5b8387015b85811015620008f15780356001600160401b03811115620008705760008081fd5b8801603f81018a13620008835760008081fd5b85810135604062000898620007918362000746565b82815291851b8301810191888101908d841115620008b65760008081fd5b938201935b83851015620008df57620008cf85620005e4565b82529389019390890190620008bb565b8852505050938501935084016200084f565b5090979650505050505050565b600082601f8301126200091057600080fd5b8135602062000923620007918362000746565b82815260059290921b840181019181810190868411156200094357600080fd5b8286015b84811015620007fb5780356001600160401b03811115620009685760008081fd5b620009788986838b01016200076c565b84525091830191830162000947565b600061012082360312156200099b57600080fd5b620009a562000671565b620009b083620005e4565b8152620009c060208401620005e4565b60208201526040830135604082015260608301356001600160401b0380821115620009ea57600080fd5b620009f836838701620006d0565b6060840152608085013591508082111562000a1257600080fd5b62000a20368387016200076c565b608084015260a085013591508082111562000a3a57600080fd5b62000a48368387016200076c565b60a084015260c085013591508082111562000a6257600080fd5b62000a703683870162000806565b60c084015260e085013591508082111562000a8a57600080fd5b62000a98368387016200076c565b60e08401526101009150818501358181111562000ab457600080fd5b62000ac236828801620008fe565b8385015250505080915050919050565b6000808335601e1984360301811262000aea57600080fd5b8301803591506001600160401b0382111562000b0557600080fd5b6020019150600581901b360382131562000b1e57600080fd5b9250929050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811262000b5357600080fd5b8301803591506001600160401b0382111562000b6e57600080fd5b60200191503681900382131562000b1e57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0385811682528416602082015260606040820181905260009062000bdc908301848662000b84565b9695505050505050565b6000808335601e1984360301811262000bfe57600080fd5b83016020810192503590506001600160401b0381111562000c1e57600080fd5b80360383131562000b1e57600080fd5b81835260006020808501808196508560051b810191508460005b8781101562000c8457828403895262000c62828862000be6565b62000c6f86828462000b84565b9a87019a955050509084019060010162000c48565b5091979650505050505050565b6000808335601e1984360301811262000ca957600080fd5b83016020810192503590506001600160401b0381111562000cc957600080fd5b8060051b360383131562000b1e57600080fd5b600081518084526020808501945080840160005b8381101562000d175781516001600160a01b03168752958201959082019060010162000cf0565b509495945050505050565b81835260006020808501808196506005915085821b8101856000805b8981101562000dc0578484038b5262000d58838a62000c91565b80865288860181891b87018a0183865b8481101562000da857898303601f1901845262000d86828762000be6565b62000d9385828462000b84565b958f019594505050908c019060010162000d68565b50509d8a019d96505050928701925060010162000d3e565b50919998505050505050505050565b6001600160a01b038d16815260e06020820181905260009062000df69083018d8f62000c2e565b828103604084015262000e0b818c8e62000c2e565b8381036060850152898152905060208082019060058b901b8301018b60005b8c81101562000e9e57848303601f1901845262000e48828f62000c91565b8085526020850160005b8281101562000e84576001600160a01b0362000e6e85620005e4565b1682526020938401939091019060010162000e52565b506020968701969095509390930192505060010162000e2a565b5050848103608086015262000eb4818b62000cdc565b9250505082810360a084015262000ecd81878962000c2e565b905082810360c084015262000ee481858762000d22565b9f9e505050505050505050505050505050565b6bffffffffffffffffffffffff19606095861b811682529390941b90921660148401526028830152604882015260680190565b60006020828403121562000f3d57600080fd5b6200040382620005e4565b6000815160005b8181101562000f6b576020818501810151868301520162000f4f565b8181111562000f7b576000828601525b509290920192915050565b6000620005a262000f98838662000f48565b8462000f4856fe608060405260405161072138038061072183398101604081905261002291610314565b61002e82826000610035565b5050610431565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d083836040518060600160405280602781526020016106fa602791396101a9565b9392505050565b6100ea8161028760201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61029660201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6102115760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610148565b600080856001600160a01b03168560405161022c91906103e2565b600060405180830381855af49150503d8060008114610267576040519150601f19603f3d011682016040523d82523d6000602084013e61026c565b606091505b50909250905061027d828286610299565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a85750816100d0565b8251156102b85782518084602001fd5b8160405162461bcd60e51b815260040161014891906103fe565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103035781810151838201526020016102eb565b838111156100645750506000910152565b6000806040838503121561032757600080fd5b82516001600160a01b038116811461033e57600080fd5b60208401519092506001600160401b038082111561035b57600080fd5b818501915085601f83011261036f57600080fd5b815181811115610381576103816102d2565b604051601f8201601f19908116603f011681019083821181831017156103a9576103a96102d2565b816040528281528860208487010111156103c257600080fd5b6103d38360208301602088016102e8565b80955050505050509250929050565b600082516103f48184602087016102e8565b9190910192915050565b602081526000825180602084015261041d8160408501602087016102e8565b601f01601f19169190910160400192915050565b6102ba806104406000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025e602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b60606001600160a01b0384163b6101305760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161014b919061020e565b600060405180830381855af49150503d8060008114610186576040519150601f19603f3d011682016040523d82523d6000602084013e61018b565b606091505b509150915061019b8282866101a5565b9695505050505050565b606083156101b457508161004e565b8251156101c45782518084602001fd5b8160405162461bcd60e51b8152600401610127919061022a565b60005b838110156101f95781810151838201526020016101e1565b83811115610208576000848401525b50505050565b600082516102208184602087016101de565b9190910192915050565b60208152600082518060208401526102498160408501602087016101de565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220624d8c621d429fd8b7eed49ae71e0c11f4101ae7335c4c9d149cb44a1625749c64736f6c634300080d0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122008c6f8b343470e7701541d6aced7f5846257b5f040f76d52bd9c86a619627c4a64736f6c634300080d0033";

type DAOFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAOFactory__factory extends ContractFactory {
  constructor(...args: DAOFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DAOFactory> {
    return super.deploy(overrides || {}) as Promise<DAOFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DAOFactory {
    return super.attach(address) as DAOFactory;
  }
  override connect(signer: Signer): DAOFactory__factory {
    return super.connect(signer) as DAOFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOFactoryInterface {
    return new utils.Interface(_abi) as DAOFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DAOFactory {
    return new Contract(address, _abi, signerOrProvider) as DAOFactory;
  }
}