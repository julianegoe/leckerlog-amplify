import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type CUISINESMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FOODSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RESTAURANTSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RESTAURANTSFOODSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCUISINES = {
  readonly id: string;
  readonly name: string;
  readonly FOODS_CUISINES?: (FOODS | null)[] | null;
  readonly RESTAURANTS_FOODS?: (RESTAURANTS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCUISINES = {
  readonly id: string;
  readonly name: string;
  readonly FOODS_CUISINES: AsyncCollection<FOODS>;
  readonly RESTAURANTS_FOODS: AsyncCollection<RESTAURANTS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CUISINES = LazyLoading extends LazyLoadingDisabled ? EagerCUISINES : LazyCUISINES

export declare const CUISINES: (new (init: ModelInit<CUISINES, CUISINESMetaData>) => CUISINES) & {
  copyOf(source: CUISINES, mutator: (draft: MutableModel<CUISINES, CUISINESMetaData>) => MutableModel<CUISINES, CUISINESMetaData> | void): CUISINES;
}

type EagerFOODS = {
  readonly id: string;
  readonly name: string;
  readonly rating: number;
  readonly comment?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly image_path?: string | null;
  readonly cuisinesID: string;
  readonly restaurantss?: (RESTAURANTSFOODS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFOODS = {
  readonly id: string;
  readonly name: string;
  readonly rating: number;
  readonly comment?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly image_path?: string | null;
  readonly cuisinesID: string;
  readonly restaurantss: AsyncCollection<RESTAURANTSFOODS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FOODS = LazyLoading extends LazyLoadingDisabled ? EagerFOODS : LazyFOODS

export declare const FOODS: (new (init: ModelInit<FOODS, FOODSMetaData>) => FOODS) & {
  copyOf(source: FOODS, mutator: (draft: MutableModel<FOODS, FOODSMetaData>) => MutableModel<FOODS, FOODSMetaData> | void): FOODS;
}

type EagerRESTAURANTS = {
  readonly id: string;
  readonly name?: string | null;
  readonly date_created?: number | null;
  readonly date_updated?: number | null;
  readonly user_id?: string | null;
  readonly address?: string | null;
  readonly cuisinesID: string;
  readonly FOODS_RESTAURANTS?: (RESTAURANTSFOODS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRESTAURANTS = {
  readonly id: string;
  readonly name?: string | null;
  readonly date_created?: number | null;
  readonly date_updated?: number | null;
  readonly user_id?: string | null;
  readonly address?: string | null;
  readonly cuisinesID: string;
  readonly FOODS_RESTAURANTS: AsyncCollection<RESTAURANTSFOODS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RESTAURANTS = LazyLoading extends LazyLoadingDisabled ? EagerRESTAURANTS : LazyRESTAURANTS

export declare const RESTAURANTS: (new (init: ModelInit<RESTAURANTS, RESTAURANTSMetaData>) => RESTAURANTS) & {
  copyOf(source: RESTAURANTS, mutator: (draft: MutableModel<RESTAURANTS, RESTAURANTSMetaData>) => MutableModel<RESTAURANTS, RESTAURANTSMetaData> | void): RESTAURANTS;
}

type EagerRESTAURANTSFOODS = {
  readonly id: string;
  readonly foods: FOODS;
  readonly restaurants: RESTAURANTS;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRESTAURANTSFOODS = {
  readonly id: string;
  readonly foods: AsyncItem<FOODS>;
  readonly restaurants: AsyncItem<RESTAURANTS>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RESTAURANTSFOODS = LazyLoading extends LazyLoadingDisabled ? EagerRESTAURANTSFOODS : LazyRESTAURANTSFOODS

export declare const RESTAURANTSFOODS: (new (init: ModelInit<RESTAURANTSFOODS, RESTAURANTSFOODSMetaData>) => RESTAURANTSFOODS) & {
  copyOf(source: RESTAURANTSFOODS, mutator: (draft: MutableModel<RESTAURANTSFOODS, RESTAURANTSFOODSMetaData>) => MutableModel<RESTAURANTSFOODS, RESTAURANTSFOODSMetaData> | void): RESTAURANTSFOODS;
}