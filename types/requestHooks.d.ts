import { AxiosPromise, AxiosResponse } from "axios";
import { Ref } from "vue";
declare global {
  declare interface UseLoadingRequestParameters<T>
    extends UseIsNullRequestParameters<T> {
    loadings?: Ref<boolean> | Ref<boolean>[];
    scheduler?: (
      res: AxiosResponse<ResponseData<T>, any>,
      refSeta?: Ref<T>
    ) => any;
  }

  declare interface UseIsNullRequestParameters<T> {
    state?: Ref<T>;
    axios: AxiosPromise<ResponseData<T>>;
    key?: string;
  }

  declare interface UseMessageRequest<T>
    extends UseLoadingRequestParameters<T> {
    successMessage?: string;
    errorMessage?: string;
    successCode?: string | number;
    errorCode?: string | number;
  }

  declare interface UseOptionsRequestParameters<T> {
    axios?: AxiosPromise<ResponseData<T>>;
    scheduler?: (
      res: AxiosResponse<ResponseData<T>, any>,
      refSeta?: Ref<any>
    ) => void;
  }

  declare type Pagination<T> = T & { pageSize: number; pageNum: number };

  /**
   * @description usePaginationRequest函数的返回值
   */
  declare interface PaginationRequestReturn {
    // pagination?: ShallowReactive<{ pageSize: number; pageNum: number }>
    prev: () => number;
    next: () => number;
    to: (num: number) => number;
    pageSize: Ref<number>;
    pageNum: Ref<number>;
  }
  declare type PaginationRequestReturnRes = Promise<PaginationRequestReturn>;

  declare type PaginationTool = { [index: string]: PaginationRequestReturn };

  declare type PaginationAxios<Y, T = {}> = (
    data: Pagination<T>
  ) => AxiosPromise<ResponseData<Y>>;

  declare interface PaginationRequestParams<Y, T> {
    successMessage?: string;
    errorMessage?: string;
    successCode?: string;
    errorCode?: string;
    axios?: PaginationAxios<Y, T>;
    state?: Ref<Y>;
    data?: T;
    loadings?: Ref<boolean> | Ref<boolean>[];
    isNull?: boolean;
    isMessage?: boolean;
    pageSize?: number;
    allCount?: Ref<number>;
    scheduler?: (res: AxiosResponse<ResponseData<Y>>, refSeta?: Ref<Y>) => void;
    page?: Ref<number>;
  }

  declare type PaginationAxiosCache = (
    data: any
  ) => AxiosPromise<ResponseData<any>>;
  declare interface UseCacheRequestParameters {
    key: string;
  }
}
