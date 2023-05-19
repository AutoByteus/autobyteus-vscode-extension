// package: automatedcodingworkflow
// file: grpc_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grpc_service_pb from "./grpc_service_pb";

interface IAutomatedCodingWorkflowServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startWorkflow: IAutomatedCodingWorkflowServiceService_IStartWorkflow;
    getWorkflowConfig: IAutomatedCodingWorkflowServiceService_IGetWorkflowConfig;
    setWorkspacePath: IAutomatedCodingWorkflowServiceService_ISetWorkspacePath;
}

interface IAutomatedCodingWorkflowServiceService_IStartWorkflow extends grpc.MethodDefinition<grpc_service_pb.StartWorkflowRequest, grpc_service_pb.StartWorkflowResponse> {
    path: "/automatedcodingworkflow.AutomatedCodingWorkflowService/StartWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.StartWorkflowRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.StartWorkflowRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.StartWorkflowResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.StartWorkflowResponse>;
}
interface IAutomatedCodingWorkflowServiceService_IGetWorkflowConfig extends grpc.MethodDefinition<grpc_service_pb.GetWorkflowConfigRequest, grpc_service_pb.GetWorkflowConfigResponse> {
    path: "/automatedcodingworkflow.AutomatedCodingWorkflowService/GetWorkflowConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.GetWorkflowConfigRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.GetWorkflowConfigRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.GetWorkflowConfigResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.GetWorkflowConfigResponse>;
}
interface IAutomatedCodingWorkflowServiceService_ISetWorkspacePath extends grpc.MethodDefinition<grpc_service_pb.SetWorkspacePathRequest, grpc_service_pb.SetWorkspacePathResponse> {
    path: "/automatedcodingworkflow.AutomatedCodingWorkflowService/SetWorkspacePath";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.SetWorkspacePathRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.SetWorkspacePathRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.SetWorkspacePathResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.SetWorkspacePathResponse>;
}

export const AutomatedCodingWorkflowServiceService: IAutomatedCodingWorkflowServiceService;

export interface IAutomatedCodingWorkflowServiceServer {
    startWorkflow: grpc.handleUnaryCall<grpc_service_pb.StartWorkflowRequest, grpc_service_pb.StartWorkflowResponse>;
    getWorkflowConfig: grpc.handleUnaryCall<grpc_service_pb.GetWorkflowConfigRequest, grpc_service_pb.GetWorkflowConfigResponse>;
    setWorkspacePath: grpc.handleUnaryCall<grpc_service_pb.SetWorkspacePathRequest, grpc_service_pb.SetWorkspacePathResponse>;
}

export interface IAutomatedCodingWorkflowServiceClient {
    startWorkflow(request: grpc_service_pb.StartWorkflowRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    startWorkflow(request: grpc_service_pb.StartWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    startWorkflow(request: grpc_service_pb.StartWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    getWorkflowConfig(request: grpc_service_pb.GetWorkflowConfigRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.GetWorkflowConfigResponse) => void): grpc.ClientUnaryCall;
    getWorkflowConfig(request: grpc_service_pb.GetWorkflowConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.GetWorkflowConfigResponse) => void): grpc.ClientUnaryCall;
    getWorkflowConfig(request: grpc_service_pb.GetWorkflowConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.GetWorkflowConfigResponse) => void): grpc.ClientUnaryCall;
    setWorkspacePath(request: grpc_service_pb.SetWorkspacePathRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SetWorkspacePathResponse) => void): grpc.ClientUnaryCall;
    setWorkspacePath(request: grpc_service_pb.SetWorkspacePathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SetWorkspacePathResponse) => void): grpc.ClientUnaryCall;
    setWorkspacePath(request: grpc_service_pb.SetWorkspacePathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SetWorkspacePathResponse) => void): grpc.ClientUnaryCall;
}

export class AutomatedCodingWorkflowServiceClient extends grpc.Client implements IAutomatedCodingWorkflowServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public startWorkflow(request: grpc_service_pb.StartWorkflowRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public startWorkflow(request: grpc_service_pb.StartWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public startWorkflow(request: grpc_service_pb.StartWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.StartWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowConfig(request: grpc_service_pb.GetWorkflowConfigRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.GetWorkflowConfigResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowConfig(request: grpc_service_pb.GetWorkflowConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.GetWorkflowConfigResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowConfig(request: grpc_service_pb.GetWorkflowConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.GetWorkflowConfigResponse) => void): grpc.ClientUnaryCall;
    public setWorkspacePath(request: grpc_service_pb.SetWorkspacePathRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SetWorkspacePathResponse) => void): grpc.ClientUnaryCall;
    public setWorkspacePath(request: grpc_service_pb.SetWorkspacePathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SetWorkspacePathResponse) => void): grpc.ClientUnaryCall;
    public setWorkspacePath(request: grpc_service_pb.SetWorkspacePathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SetWorkspacePathResponse) => void): grpc.ClientUnaryCall;
}
