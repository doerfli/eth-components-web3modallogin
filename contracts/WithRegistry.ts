/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface WithRegistryInterface extends utils.Interface {
  functions: {
    "getContractFromRegistry(bytes32)": FunctionFragment;
    "registry()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getContractFromRegistry" | "registry"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getContractFromRegistry",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getContractFromRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;

  events: {};
}

export interface WithRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WithRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getContractFromRegistry(
      _contractName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { _addr: string }>;

    registry(overrides?: CallOverrides): Promise<[string]>;
  };

  getContractFromRegistry(
    _contractName: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getContractFromRegistry(
      _contractName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getContractFromRegistry(
      _contractName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getContractFromRegistry(
      _contractName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
