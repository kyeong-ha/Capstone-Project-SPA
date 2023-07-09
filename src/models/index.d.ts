import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerMbtiForm = {
  readonly mbti?: string | null;
  readonly type?: string | null;
  readonly mind?: string | null;
}

type LazyMbtiForm = {
  readonly mbti?: string | null;
  readonly type?: string | null;
  readonly mind?: string | null;
}

export declare type MbtiForm = LazyLoading extends LazyLoadingDisabled ? EagerMbtiForm : LazyMbtiForm

export declare const MbtiForm: (new (init: ModelInit<MbtiForm>) => MbtiForm)

type EagerInputForm = {
  readonly question?: string | null;
  readonly answer?: string | null;
}

type LazyInputForm = {
  readonly question?: string | null;
  readonly answer?: string | null;
}

export declare type InputForm = LazyLoading extends LazyLoadingDisabled ? EagerInputForm : LazyInputForm

export declare const InputForm: (new (init: ModelInit<InputForm>) => InputForm)

type EagerMBTI = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MBTI, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mbtis?: (MbtiForm | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMBTI = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MBTI, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mbtis?: (MbtiForm | null)[] | null;
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
  readonly inputs?: (InputForm | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInput = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Input, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly inputs?: (InputForm | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Input = LazyLoading extends LazyLoadingDisabled ? EagerInput : LazyInput

export declare const Input: (new (init: ModelInit<Input>) => Input) & {
  copyOf(source: Input, mutator: (draft: MutableModel<Input>) => MutableModel<Input> | void): Input;
}