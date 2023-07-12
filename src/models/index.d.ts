import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMBTI = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MBTI, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mbti: string;
  readonly mind?: string | null;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMBTI = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MBTI, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mbti: string;
  readonly mind?: string | null;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MBTI = LazyLoading extends LazyLoadingDisabled ? EagerMBTI : LazyMBTI

export declare const MBTI: (new (init: ModelInit<MBTI>) => MBTI) & {
  copyOf(source: MBTI, mutator: (draft: MutableModel<MBTI>) => MutableModel<MBTI> | void): MBTI;
}

type EagerInput = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Input, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly answer?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInput = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Input, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly answer?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Input = LazyLoading extends LazyLoadingDisabled ? EagerInput : LazyInput

export declare const Input: (new (init: ModelInit<Input>) => Input) & {
  copyOf(source: Input, mutator: (draft: MutableModel<Input>) => MutableModel<Input> | void): Input;
}