// package: automatedcodingworkflow
// file: grpc_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StartWorkflowRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartWorkflowRequest): StartWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartWorkflowRequest;
    static deserializeBinaryFromReader(message: StartWorkflowRequest, reader: jspb.BinaryReader): StartWorkflowRequest;
}

export namespace StartWorkflowRequest {
    export type AsObject = {
    }
}

export class StartWorkflowResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): StartWorkflowResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartWorkflowResponse): StartWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartWorkflowResponse;
    static deserializeBinaryFromReader(message: StartWorkflowResponse, reader: jspb.BinaryReader): StartWorkflowResponse;
}

export namespace StartWorkflowResponse {
    export type AsObject = {
        result: string,
    }
}

export class GetWorkflowConfigRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowConfigRequest): GetWorkflowConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowConfigRequest;
    static deserializeBinaryFromReader(message: GetWorkflowConfigRequest, reader: jspb.BinaryReader): GetWorkflowConfigRequest;
}

export namespace GetWorkflowConfigRequest {
    export type AsObject = {
    }
}

export class GetWorkflowConfigResponse extends jspb.Message { 
    clearStagesList(): void;
    getStagesList(): Array<Stage>;
    setStagesList(value: Array<Stage>): GetWorkflowConfigResponse;
    addStages(value?: Stage, index?: number): Stage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowConfigResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowConfigResponse): GetWorkflowConfigResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowConfigResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowConfigResponse;
    static deserializeBinaryFromReader(message: GetWorkflowConfigResponse, reader: jspb.BinaryReader): GetWorkflowConfigResponse;
}

export namespace GetWorkflowConfigResponse {
    export type AsObject = {
        stagesList: Array<Stage.AsObject>,
    }
}

export class Stage extends jspb.Message { 
    getStageName(): string;
    setStageName(value: string): Stage;
    getStageClass(): string;
    setStageClass(value: string): Stage;
    clearStagesList(): void;
    getStagesList(): Array<Stage>;
    setStagesList(value: Array<Stage>): Stage;
    addStages(value?: Stage, index?: number): Stage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stage.AsObject;
    static toObject(includeInstance: boolean, msg: Stage): Stage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stage;
    static deserializeBinaryFromReader(message: Stage, reader: jspb.BinaryReader): Stage;
}

export namespace Stage {
    export type AsObject = {
        stageName: string,
        stageClass: string,
        stagesList: Array<Stage.AsObject>,
    }
}

export class SetWorkspacePathRequest extends jspb.Message { 
    getWorkspacePath(): string;
    setWorkspacePath(value: string): SetWorkspacePathRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetWorkspacePathRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetWorkspacePathRequest): SetWorkspacePathRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetWorkspacePathRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetWorkspacePathRequest;
    static deserializeBinaryFromReader(message: SetWorkspacePathRequest, reader: jspb.BinaryReader): SetWorkspacePathRequest;
}

export namespace SetWorkspacePathRequest {
    export type AsObject = {
        workspacePath: string,
    }
}

export class SetWorkspacePathResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): SetWorkspacePathResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): SetWorkspacePathResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetWorkspacePathResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetWorkspacePathResponse): SetWorkspacePathResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetWorkspacePathResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetWorkspacePathResponse;
    static deserializeBinaryFromReader(message: SetWorkspacePathResponse, reader: jspb.BinaryReader): SetWorkspacePathResponse;
}

export namespace SetWorkspacePathResponse {
    export type AsObject = {
        success: boolean,
        errorMessage: string,
    }
}
