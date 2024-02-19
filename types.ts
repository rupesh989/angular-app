import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

export interface options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;

}

export interface Products {
    items: Product[],
    total: number,
    page: number,
    parPage: number,
    totalPages: number,

}
export interface Product {
    price: string,
    name: string,
    image: string,
    rating: number
}
export interface Paginationparams {
    [key: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    parPage: number;

}