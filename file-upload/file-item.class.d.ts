import { FileLikeObject } from './file-like-object.class';
import { FileUploader, ParsedResponseHeaders, FileUploaderOptions } from './file-uploader.class';
export declare class FileItem {
    file: FileLikeObject;
    _file: File;
    alias: string;
    url: string;
    method: string;
    headers: any;
    withCredentials: boolean;
    formData: any;
    isReady: boolean;
    isUploading: boolean;
    isUploaded: boolean;
    isSuccess: boolean;
    isCancel: boolean;
    isError: boolean;
    progress: number;
    index: number;
    _xhr: XMLHttpRequest;
    _form: any;
    options: FileUploaderOptions;
    protected uploader: FileUploader;
    protected some: File;
    constructor(uploader: FileUploader, some: File, options: FileUploaderOptions);
    upload(): void;
    cancel(): void;
    remove(): void;
    onBeforeUpload(): void;
    onBuildForm(form: any): any;
    onProgress(progress: number): any;
    onSuccess(response: string, status: number, headers: ParsedResponseHeaders): any;
    onError(response: string, status: number, headers: ParsedResponseHeaders): any;
    onCancel(response: string, status: number, headers: ParsedResponseHeaders): any;
    onComplete(response: string, status: number, headers: ParsedResponseHeaders): any;
    _onBeforeUpload(): void;
    _onBuildForm(form: any): void;
    _onProgress(progress: number): void;
    _onSuccess(response: string, status: number, headers: ParsedResponseHeaders): void;
    _onError(response: string, status: number, headers: ParsedResponseHeaders): void;
    _onCancel(response: string, status: number, headers: ParsedResponseHeaders): void;
    _onComplete(response: string, status: number, headers: ParsedResponseHeaders): void;
    _prepareToUploading(): void;
}
