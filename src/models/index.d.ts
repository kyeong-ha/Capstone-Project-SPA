import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

type EagerInput = {
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly answer?: string | null;
  readonly createdAt: string;
  readonly id: string;
  readonly question?: string | null;
  readonly updatedAt: string;
}

type LazyInput = {
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly answer?: string | null;
  readonly createdAt: string;
  readonly id: string;
  readonly question?: string | null;
  readonly updatedAt: string;
}

export declare type Input = LazyLoading extends LazyLoadingDisabled ? EagerInput : LazyInput

export declare const Input: (new (init: ModelInit<Input>) => Input)

type EagerMBTI = {
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly createdAt: string;
  readonly id: string;
  readonly mbti: string;
  readonly mind?: string | null;
  readonly type?: string | null;
  readonly updatedAt: string;
}

type LazyMBTI = {
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly createdAt: string;
  readonly id: string;
  readonly mbti: string;
  readonly mind?: string | null;
  readonly type?: string | null;
  readonly updatedAt: string;
}

export declare type MBTI = LazyLoading extends LazyLoadingDisabled ? EagerMBTI : LazyMBTI

export declare const MBTI: (new (init: ModelInit<MBTI>) => MBTI)

type EagerModelInputConnection = {
  readonly items: (Input | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

type LazyModelInputConnection = {
  readonly items: (Input | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

export declare type ModelInputConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelInputConnection : LazyModelInputConnection

export declare const ModelInputConnection: (new (init: ModelInit<ModelInputConnection>) => ModelInputConnection)

type EagerModelMBTIConnection = {
  readonly items: (MBTI | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

type LazyModelMBTIConnection = {
  readonly items: (MBTI | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

export declare type ModelMBTIConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelMBTIConnection : LazyModelMBTIConnection

export declare const ModelMBTIConnection: (new (init: ModelInit<ModelMBTIConnection>) => ModelMBTIConnection)

type EagerresultBool = {
  readonly success: boolean;
}

type LazyresultBool = {
  readonly success: boolean;
}

export declare type resultBool = LazyLoading extends LazyLoadingDisabled ? EagerresultBool : LazyresultBool

export declare const resultBool: (new (init: ModelInit<resultBool>) => resultBool)

